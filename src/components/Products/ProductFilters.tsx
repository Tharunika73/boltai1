import React from 'react';
import { SearchFilters } from '../../types';
import { searchEngine } from '../../utils/search';
import { Button } from '../UI/Button';

interface ProductFiltersProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  onClearFilters: () => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onFiltersChange,
  onClearFilters
}) => {
  const categories = ['All', 'Men', 'Women', 'Kids'];
  const styles = ['All', 'Traditional', 'Western'];
  const colors = ['All', ...searchEngine.getUniqueColors()];

  const hasActiveFilters = Object.values(filters).some(value => 
    value !== undefined && value !== 'All' && value !== ''
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">Filters</h3>
        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={onClearFilters}
          >
            Clear All
          </Button>
        )}
      </div>

      {/* Category Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category
        </label>
        <select
          value={filters.category || 'All'}
          onChange={(e) => onFiltersChange({
            ...filters,
            category: e.target.value === 'All' ? undefined : e.target.value
          })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Style Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Style
        </label>
        <select
          value={filters.style || 'All'}
          onChange={(e) => onFiltersChange({
            ...filters,
            style: e.target.value === 'All' ? undefined : e.target.value
          })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {styles.map((style) => (
            <option key={style} value={style}>
              {style}
            </option>
          ))}
        </select>
      </div>

      {/* Color Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Color
        </label>
        <select
          value={filters.color || 'All'}
          onChange={(e) => onFiltersChange({
            ...filters,
            color: e.target.value === 'All' ? undefined : e.target.value
          })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {colors.map((color) => (
            <option key={color} value={color}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price Range
        </label>
        <div className="space-y-2">
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Min"
              value={filters.minPrice || ''}
              onChange={(e) => onFiltersChange({
                ...filters,
                minPrice: e.target.value ? parseInt(e.target.value) : undefined
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Max"
              value={filters.maxPrice || ''}
              onChange={(e) => onFiltersChange({
                ...filters,
                maxPrice: e.target.value ? parseInt(e.target.value) : undefined
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>₹0</span>
            <span>₹3000+</span>
          </div>
        </div>
      </div>

      {/* Quick Price Filters */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Quick Filters
        </label>
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onFiltersChange({
              ...filters,
              minPrice: undefined,
              maxPrice: 500
            })}
          >
            Under ₹500
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onFiltersChange({
              ...filters,
              minPrice: 500,
              maxPrice: 1000
            })}
          >
            ₹500-1000
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onFiltersChange({
              ...filters,
              minPrice: 1000,
              maxPrice: 2000
            })}
          >
            ₹1000-2000
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onFiltersChange({
              ...filters,
              minPrice: 2000,
              maxPrice: undefined
            })}
          >
            Above ₹2000
          </Button>
        </div>
      </div>
    </div>
  );
};