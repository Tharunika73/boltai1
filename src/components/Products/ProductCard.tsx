import React from 'react';
import { Product } from '../../types';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '../UI/Button';
import { useCart } from '../../hooks/useCart';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onQuickView 
}) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    // Default to the first available size
    const defaultSize = product.sizes[0];
    addItem(product, defaultSize);
  };

  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-2">
            <Button
              size="sm"
              onClick={() => onQuickView?.(product)}
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              Quick View
            </Button>
            <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
              <Heart className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Stock status */}
        {product.stock < 10 && product.stock > 0 && (
          <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">
            Only {product.stock} left
          </div>
        )}
        
        {product.stock === 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
            Out of Stock
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-gray-900 line-clamp-2 text-sm">
              {product.name}
            </h3>
            <p className="text-xs text-gray-500 capitalize">
              {product.category} • {product.style}
            </p>
          </div>
        </div>

        <p className="text-gray-600 text-xs line-clamp-2">
          {product.description}
        </p>

        {/* Color and sizes */}
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500">
            Color: <span className="capitalize font-medium">{product.color}</span>
          </span>
          <span className="text-gray-500">
            Sizes: {product.sizes.slice(0, 3).join(', ')}
            {product.sizes.length > 3 && '...'}
          </span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between pt-2 border-t">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900">
              ₹{product.price}
            </span>
          </div>
          
          <Button
            size="sm"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="flex items-center space-x-1"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add</span>
          </Button>
        </div>
      </div>
    </div>
  );
};