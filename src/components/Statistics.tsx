import React, { useEffect, useRef, useState } from 'react';
import { Trophy, Users, Package, Star } from 'lucide-react';

const Statistics = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = [
    {
      icon: <Package className="w-8 h-8" />,
      number: 500,
      suffix: '+',
      label: 'Products Available',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: 10000,
      suffix: '+',
      label: 'Happy Customers',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      number: 25,
      suffix: '+',
      label: 'Years Experience',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: 4.8,
      suffix: '/5',
      label: 'Customer Rating',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate counters
            stats.forEach((stat, index) => {
              const increment = stat.number / 100;
              let current = 0;
              const timer = setInterval(() => {
                current += increment;
                if (current >= stat.number) {
                  current = stat.number;
                  clearInterval(timer);
                }
                setCounters(prev => {
                  const newCounters = [...prev];
                  newCounters[index] = current;
                  return newCounters;
                });
              }, 20);
            });

            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-red-900 to-gray-900 relative overflow-hidden" ref={sectionRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Numbers that speak for our commitment to quality and customer satisfaction over the years.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="scroll-reveal text-center group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6">
                <div className={`bg-gradient-to-r ${stat.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </div>
              
              <div className="counter text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.number === 4.8 
                  ? counters[index].toFixed(1) 
                  : Math.floor(counters[index]).toLocaleString()
                }
                <span className="gradient-text">{stat.suffix}</span>
              </div>
              
              <div className="text-gray-300 font-medium text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;