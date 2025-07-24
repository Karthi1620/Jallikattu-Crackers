import React, { useEffect, useRef } from 'react';
import { Sparkles, Zap, Star, Flame, Rocket, Crown } from 'lucide-react';

const ProductCategories = () => {
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

  const categories = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Sparklers',
      description: 'Beautiful hand-held sparklers for all occasions',
      image: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      color: 'from-yellow-500 to-orange-500',
      count: '50+'
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: 'Fountains',
      description: 'Spectacular ground-based fountain displays',
      image: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      color: 'from-red-500 to-pink-500',
      count: '75+'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Rockets',
      description: 'High-flying rockets with stunning effects',
      image: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      color: 'from-blue-500 to-purple-500',
      count: '40+'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Multi-Shot',
      description: 'Professional grade multi-shot aerial effects',
      image: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      color: 'from-green-500 to-teal-500',
      count: '60+'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Crackers',
      description: 'Traditional sound crackers and celebration items',
      image: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      color: 'from-orange-500 to-red-500',
      count: '100+'
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: 'Premium Sets',
      description: 'Curated luxury fireworks packages',
      image: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      color: 'from-purple-500 to-indigo-500',
      count: '25+'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Product Range</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our extensive collection of premium fireworks, carefully crafted in Sivakasi 
            with the finest materials and traditional expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="scroll-reveal hover-lift group bg-white rounded-2xl overflow-hidden shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80`}></div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white font-semibold text-sm">
                  {category.count} Products
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  {category.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <button className="text-red-600 font-semibold hover:text-red-700 transition-colors duration-300 flex items-center space-x-2 group">
                  <span>View Products</span>
                  <Zap className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;