import React from 'react';

interface CategoryNavProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  selectedCategory,
  onCategoryChange
}) => {
  const categories = [
    { id: 'All', label: 'All Products' },
    { id: 'Women', label: 'Women' },
    { id: 'Men', label: 'Men' },
    { id: 'Kids', label: 'Kids' },
    { id: 'Traditional', label: 'Traditional' },
    { id: 'Western', label: 'Western' }
  ];

  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto py-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};