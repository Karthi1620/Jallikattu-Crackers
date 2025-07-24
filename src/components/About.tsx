import React, { useEffect, useRef } from 'react';
import { Award, Shield, Clock, Users, Sparkles, Heart } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Premium Quality',
      description: 'Every product undergoes rigorous quality testing to ensure the highest standards of performance and safety.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety First',
      description: 'All our fireworks are manufactured following strict safety protocols and international quality standards.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '25+ Years Experience',
      description: 'Over two decades of expertise in creating magical moments with premium fireworks from Sivakasi.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer Satisfaction',
      description: 'Serving thousands of happy customers across India with reliable service and quality products.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Innovative Designs',
      description: 'Constantly innovating with new designs and effects to keep your celebrations fresh and exciting.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Made with Love',
      description: 'Each firework is crafted with passion and dedication by our skilled artisans in Sivakasi.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-red-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="scroll-reveal">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                About <span className="gradient-text">Jallikattu Crackers</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                For over 25 years, Jallikattu Crackers has been the trusted name in premium fireworks from Sivakasi. 
                We combine traditional craftsmanship with modern safety standards to create unforgettable celebrations.
              </p>
            </div>

            <div className="scroll-reveal space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-red-600 to-orange-600 p-3 rounded-full">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To bring joy and wonder to every celebration while maintaining the highest standards 
                    of quality, safety, and customer satisfaction.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-red-600 to-orange-600 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the leading fireworks brand that creates magical moments for families 
                    and communities across India and beyond.
                  </p>
                </div>
              </div>
            </div>

            <div className="scroll-reveal">
              <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Right Column - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="scroll-reveal hover-lift bg-white p-6 rounded-2xl shadow-lg border border-gray-100 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-r from-red-600 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;