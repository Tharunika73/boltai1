// Core type definitions for the shopping assistant

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface Product {
  id: string;
  name: string;
  category: 'Men' | 'Women' | 'Kids';
  style: 'Traditional' | 'Western';
  price: number;
  color: string;
  sizes: string[];
  imageUrl: string;
  stock: number;
  description: string;
  tags: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  products?: Product[];
}

export interface SearchFilters {
  category?: string;
  style?: string;
  minPrice?: number;
  maxPrice?: number;
  color?: string;
  size?: string;
  query?: string;
}

export interface QueryParameters {
  itemType?: string;
  priceRange?: {
    min?: number;
    max?: number;
  };
  color?: string;
  size?: string;
  style?: 'Traditional' | 'Western';
  category?: 'Men' | 'Women' | 'Kids';
}