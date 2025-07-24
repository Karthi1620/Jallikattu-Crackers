import React, { useEffect, useRef, useState } from 'react';
import { Star, ShoppingCart, Eye, Heart } from 'lucide-react';

const FeaturedProducts = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('all');

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

  const filters = [
    { id: 'all', name: 'All Products' },
    { id: 'bestseller', name: 'Best Sellers' },
    { id: 'new', name: 'New Arrivals' },
    { id: 'premium', name: 'Premium' }
  ];

  const products = [
    {
      id: 1,
      name: 'Golden Shower Fountain',
      price: '₹450',
      originalPrice: '₹500',
      image: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 124,
      category: 'bestseller',
      badge: 'Best Seller',
      badgeColor: 'bg-red-500'
    },
    {
      id: 2,
      name: 'Royal Thunder Set',
      price: '₹2,500',
      originalPrice: '₹3,000',
      image: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 89,
      category: 'premium',
      badge: 'Premium',
      badgeColor: 'bg-purple-500'
    },
    {
      id: 3,
      name: 'Electric Sparklers (10 Pack)',
      price: '₹180',
      originalPrice: '₹200',
      image: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 256,
      category: 'bestseller',
      badge: 'Popular',
      badgeColor: 'bg-green-500'
    },
    {
      id: 4,
      name: 'Sky Shot Rockets',
      price: '₹800',
      originalPrice: '₹900',
      image: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 78,
      category: 'new',
      badge: 'New',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 5,
      name: 'Celebration Multi-Shot',
      price: '₹1,200',
      originalPrice: '₹1,400',
      image: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 143,
      category: 'premium',
      badge: 'Premium',
      badgeColor: 'bg-purple-500'
    },
    {
      id: 6,
      name: 'Butterfly Crackers',
      price: '₹350',
      originalPrice: '₹400',
      image: 'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 4.5,
      reviews: 92,
      category: 'new',
      badge: 'New',
      badgeColor: 'bg-blue-500'
    }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="gradient-text">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Handpicked selection of our most popular and highest quality fireworks, 
            perfect for making your celebrations truly spectacular.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-reveal">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="scroll-reveal hover-lift group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {product.badge}
                </div>
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-200">
                    <Heart className="w-5 h-5 text-gray-700 hover:text-red-500" />
                  </button>
                  <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-200">
                    <Eye className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                  <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                  <span className="bg-green-100 text-green-800 text-sm font-semibold px-2 py-1 rounded">
                    Save {Math.round(((parseInt(product.originalPrice.slice(1).replace(',', '')) - parseInt(product.price.slice(1).replace(',', ''))) / parseInt(product.originalPrice.slice(1).replace(',', ''))) * 100)}%
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group">
                  <ShoppingCart className="w-5 h-5 group-hover:animate-pulse" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 scroll-reveal">
          <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;