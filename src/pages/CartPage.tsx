import React from 'react';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { Button } from '../components/UI/Button';
import { Modal } from '../components/UI/Modal';

interface CartPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartPage: React.FC<CartPageProps> = ({ isOpen, onClose }) => {
  const { 
    items, 
    updateQuantity, 
    removeItem, 
    clearCart, 
    getTotalItems, 
    getTotalPrice 
  } = useCart();

  const handleQuantityChange = (productId: string, size: string, newQuantity: number) => {
    updateQuantity(productId, size, newQuantity);
  };

  const handleRemoveItem = (productId: string, size: string) => {
    removeItem(productId, size);
  };

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  if (items.length === 0) {
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Shopping Cart"
        size="lg"
      >
        <div className="text-center py-8">
          <ShoppingBag className="mx-auto h-16 w-16 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
          <p className="text-gray-500 mb-6">Start shopping to add items to your cart!</p>
          <Button onClick={onClose}>
            Continue Shopping
          </Button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Shopping Cart (${totalItems} items)`}
      size="lg"
    >
      <div className="space-y-6">
        {/* Cart Items */}
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {items.map((item) => (
            <div
              key={`${item.product.id}-${item.size}`}
              className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg"
            >
              {/* Product Image */}
              <img
                src={item.product.imageUrl}
                alt={item.product.name}
                className="w-16 h-16 object-cover rounded-md"
              />

              {/* Product Details */}
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 truncate">
                  {item.product.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {item.product.category} • {item.product.style} • Size: {item.size}
                </p>
                <p className="text-sm text-gray-500 capitalize">
                  Color: {item.product.color}
                </p>
                <p className="font-semibold text-gray-900">
                  ₹{item.product.price}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleQuantityChange(item.product.id, item.size, item.quantity - 1)}
                  className="p-1 rounded-full border border-gray-300 hover:bg-gray-50"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-medium">
                  {item.quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(item.product.id, item.size, item.quantity + 1)}
                  className="p-1 rounded-full border border-gray-300 hover:bg-gray-50"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => handleRemoveItem(item.product.id, item.size)}
                className="p-2 text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="border-t pt-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal ({totalItems} items)</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax</span>
              <span>₹{Math.round(totalPrice * 0.12)}</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹{Math.round(totalPrice + totalPrice * 0.12)}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-6">
            <Button
              variant="outline"
              onClick={clearCart}
              className="flex-1"
            >
              Clear Cart
            </Button>
            <Button
              className="flex-1"
              onClick={() => {
                // In a real app, this would navigate to checkout
                alert('Checkout functionality would be implemented here!');
              }}
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};