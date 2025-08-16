import React, { useState, useEffect } from 'react';
import { SearchFilters, Product } from '../types';
import { searchEngine } from '../utils/search';
import { ProductGrid } from '../components/Products/ProductGrid';
import { ProductFilters } from '../components/Products/ProductFilters';
import { CategoryNav } from '../components/Layout/CategoryNav';
import { Sparkles, TrendingUp, Shield, Truck } from 'lucide-react';

interface HomePageProps {
  searchQuery?: string;
  onClearSearch?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  searchQuery,
  onClearSearch
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<SearchFilters>({});
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const searchFilters: SearchFilters = { ...filters };
      
      if (searchQuery) {
        searchFilters.query = searchQuery;
      }
      
      if (selectedCategory !== 'All') {
        if (['Traditional', 'Western'].includes(selectedCategory)) {
          searchFilters.style = selectedCategory as 'Traditional' | 'Western';
        } else {
          searchFilters.category = selectedCategory;
        }
      }
      
      const results = searchEngine.search(searchFilters);
      setProducts(results);
      setLoading(false);
    };

    fetchProducts();
  }, [filters, searchQuery, selectedCategory]);

  const handleFiltersChange = (newFilters: SearchFilters) => {
    setFilters(newFilters);
  };

  const clearFilters = () => {
    setFilters({});
    setSelectedCategory('All');
    onClearSearch?.();
  };

  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Search',
      description: 'Find exactly what you want using natural language'
    },
    {
      icon: TrendingUp,
      title: 'Latest Trends',
      description: 'Stay updated with the newest fashion collections'
    },
    {
      icon: Shield,
      title: 'Secure Shopping',
      description: 'Your data and payments are always protected'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping to your doorstep'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      {!searchQuery && selectedCategory === 'All' && Object.keys(filters).length === 0 && (
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Find Your Perfect Style
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                AI-powered fashion shopping made simple and personal
              </p>
              <p className="text-lg text-blue-200 mb-12">
                Try asking: "I want a yellow kurti under 500" or "Show me blue shirts for men"
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-blue-100">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Category Navigation */}
      <CategoryNav 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Results Header */}
        {(searchQuery || selectedCategory !== 'All' || Object.keys(filters).length > 0) && (
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {searchQuery ? `Search Results for "${searchQuery}"` : 
                   selectedCategory !== 'All' ? `${selectedCategory} Collection` : 
                   'Filtered Products'}
                </h2>
                <p className="text-gray-600 mt-1">
                  {loading ? 'Searching...' : `${products.length} products found`}
                </p>
              </div>
              <button
                onClick={clearFilters}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <ProductFilters
              filters={filters}
              onFiltersChange={handleFiltersChange}
              onClearFilters={clearFilters}
            />
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <ProductGrid
              products={products}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};