// src/pages/CartPage.tsx
import React from 'react';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '../components/UI/Button';
import { Modal } from '../components/UI/Modal';

interface CartPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartPage: React.FC<CartPageProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Shopping Cart"
      size="lg"
    >
      <div className="space-y-6">
        {/* Example Cart Item */}
        <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
          {/* Image Placeholder */}
          <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">
            <ShoppingBag className="w-8 h-8 text-gray-400" />
          </div>

          {/* Product Details */}
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 truncate">Cool Shirt</h3>
            <p className="text-sm text-gray-500">Category: Casual</p>
            <p className="text-sm text-gray-500">Size: M</p>
            <p className="font-semibold text-gray-900">₹999</p>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center space-x-2">
            <button className="p-1 rounded-full border border-gray-300 hover:bg-gray-50">
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-medium">1</span>
            <button className="p-1 rounded-full border border-gray-300 hover:bg-gray-50">
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Remove Button */}
          <button className="p-2 text-red-500 hover:text-red-700 transition-colors">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        {/* Summary */}
        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>₹999</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>₹999</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-4 mt-4">
          <Button variant="outline" className="flex-1" onClick={() => alert('Cart cleared!')}>
            Clear Cart
          </Button>
          <Button className="flex-1" onClick={() => alert('Proceeding to checkout')}>
            Checkout
          </Button>
        </div>
      </div>
    </Modal>
  );
};
