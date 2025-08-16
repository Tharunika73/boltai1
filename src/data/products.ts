import { Product } from '../types';

export const sampleProducts: Product[] = [
  // Women's Traditional
  {
    id: 'w-t-001',
    name: 'Elegant Yellow Cotton Kurti',
    category: 'Women',
    style: 'Traditional',
    price: 450,
    color: 'yellow',
    sizes: ['S', 'M', 'L', 'XL'],
    imageUrl: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg',
    stock: 25,
    description: 'Beautiful yellow cotton kurti with intricate embroidery',
    tags: ['kurti', 'traditional', 'cotton', 'embroidery']
  },
  {
    id: 'w-t-002',
    name: 'Red Silk Saree',
    category: 'Women',
    style: 'Traditional',
    price: 1200,
    color: 'red',
    sizes: ['Free Size'],
    imageUrl: 'https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg',
    stock: 15,
    description: 'Elegant red silk saree perfect for special occasions',
    tags: ['saree', 'silk', 'traditional', 'wedding']
  },
  {
    id: 'w-t-003',
    name: 'Blue Anarkali Dress',
    category: 'Women',
    style: 'Traditional',
    price: 850,
    color: 'blue',
    sizes: ['S', 'M', 'L'],
    imageUrl: 'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg',
    stock: 20,
    description: 'Royal blue anarkali dress with gold work',
    tags: ['anarkali', 'dress', 'traditional', 'party']
  },
  {
    id: 'w-t-004',
    name: 'Green Lehenga Set',
    category: 'Women',
    style: 'Traditional',
    price: 2500,
    color: 'green',
    sizes: ['S', 'M', 'L', 'XL'],
    imageUrl: 'https://images.pexels.com/photos/1364967/pexels-photo-1364967.jpeg',
    stock: 10,
    description: 'Stunning green lehenga with heavy embroidery',
    tags: ['lehenga', 'traditional', 'wedding', 'heavy work']
  },
  
  // Women's Western
  {
    id: 'w-w-001',
    name: 'Yellow Floral Summer Dress',
    category: 'Women',
    style: 'Western',
    price: 650,
    color: 'yellow',
    sizes: ['XS', 'S', 'M', 'L'],
    imageUrl: 'https://images.pexels.com/photos/1488220/pexels-photo-1488220.jpeg',
    stock: 30,
    description: 'Light and breezy yellow floral dress perfect for summer',
    tags: ['dress', 'floral', 'summer', 'casual']
  },
  {
    id: 'w-w-002',
    name: 'Black Evening Gown',
    category: 'Women',
    style: 'Western',
    price: 1800,
    color: 'black',
    sizes: ['S', 'M', 'L'],
    imageUrl: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg',
    stock: 12,
    description: 'Elegant black evening gown for formal occasions',
    tags: ['gown', 'evening', 'formal', 'party']
  },
  {
    id: 'w-w-003',
    name: 'White Cotton Top',
    category: 'Women',
    style: 'Western',
    price: 350,
    color: 'white',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    imageUrl: 'https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg',
    stock: 40,
    description: 'Basic white cotton top for everyday wear',
    tags: ['top', 'cotton', 'basic', 'casual']
  },
  {
    id: 'w-w-004',
    name: 'Blue Denim Jacket',
    category: 'Women',
    style: 'Western',
    price: 950,
    color: 'blue',
    sizes: ['S', 'M', 'L', 'XL'],
    imageUrl: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg',
    stock: 25,
    description: 'Classic blue denim jacket for layering',
    tags: ['jacket', 'denim', 'casual', 'layering']
  },

  // Men's Western
  {
    id: 'm-w-001',
    name: 'Blue Formal Shirt',
    category: 'Men',
    style: 'Western',
    price: 750,
    color: 'blue',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    imageUrl: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
    stock: 35,
    description: 'Professional blue formal shirt for office wear',
    tags: ['shirt', 'formal', 'office', 'professional']
  },
  {
    id: 'm-w-002',
    name: 'Black Casual T-Shirt',
    category: 'Men',
    style: 'Western',
    price: 450,
    color: 'black',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    imageUrl: 'https://images.pexels.com/photos/1484759/pexels-photo-1484759.jpeg',
    stock: 50,
    description: 'Comfortable black t-shirt for casual wear',
    tags: ['tshirt', 'casual', 'comfortable', 'everyday']
  },
  {
    id: 'm-w-003',
    name: 'White Polo Shirt',
    category: 'Men',
    style: 'Western',
    price: 650,
    color: 'white',
    sizes: ['S', 'M', 'L', 'XL'],
    imageUrl: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg',
    stock: 28,
    description: 'Classic white polo shirt for smart casual look',
    tags: ['polo', 'smart casual', 'classic', 'versatile']
  },
  {
    id: 'm-w-004',
    name: 'Grey Chinos',
    category: 'Men',
    style: 'Western',
    price: 1100,
    color: 'grey',
    sizes: ['30', '32', '34', '36', '38'],
    imageUrl: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg',
    stock: 22,
    description: 'Comfortable grey chinos for smart casual wear',
    tags: ['chinos', 'trousers', 'smart casual', 'comfortable']
  },

  // Men's Traditional
  {
    id: 'm-t-001',
    name: 'White Cotton Kurta',
    category: 'Men',
    style: 'Traditional',
    price: 600,
    color: 'white',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    imageUrl: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg',
    stock: 30,
    description: 'Traditional white cotton kurta for festivals',
    tags: ['kurta', 'traditional', 'cotton', 'festival']
  },
  {
    id: 'm-t-002',
    name: 'Maroon Silk Sherwani',
    category: 'Men',
    style: 'Traditional',
    price: 2200,
    color: 'maroon',
    sizes: ['S', 'M', 'L', 'XL'],
    imageUrl: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg',
    stock: 8,
    description: 'Royal maroon silk sherwani for weddings',
    tags: ['sherwani', 'silk', 'wedding', 'formal']
  },
  {
    id: 'm-t-003',
    name: 'Navy Blue Nehru Jacket',
    category: 'Men',
    style: 'Traditional',
    price: 850,
    color: 'navy',
    sizes: ['S', 'M', 'L', 'XL'],
    imageUrl: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg',
    stock: 18,
    description: 'Elegant navy blue Nehru jacket',
    tags: ['nehru jacket', 'traditional', 'elegant', 'festive']
  },

  // Kids
  {
    id: 'k-001',
    name: 'Red Kids Party Dress',
    category: 'Kids',
    style: 'Western',
    price: 400,
    color: 'red',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y'],
    imageUrl: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg',
    stock: 25,
    description: 'Beautiful red party dress for little girls',
    tags: ['dress', 'party', 'kids', 'girls']
  },
  {
    id: 'k-002',
    name: 'Blue Kids Kurta Set',
    category: 'Kids',
    style: 'Traditional',
    price: 450,
    color: 'blue',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y'],
    imageUrl: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg',
    stock: 20,
    description: 'Traditional blue kurta set for boys',
    tags: ['kurta', 'traditional', 'kids', 'boys']
  },
  {
    id: 'k-003',
    name: 'Pink Princess Frock',
    category: 'Kids',
    style: 'Western',
    price: 550,
    color: 'pink',
    sizes: ['2-3Y', '4-5Y', '6-7Y'],
    imageUrl: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg',
    stock: 15,
    description: 'Adorable pink princess frock for special occasions',
    tags: ['frock', 'princess', 'girls', 'special occasion']
  },
  {
    id: 'k-004',
    name: 'Yellow Casual T-Shirt',
    category: 'Kids',
    style: 'Western',
    price: 250,
    color: 'yellow',
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'],
    imageUrl: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg',
    stock: 35,
    description: 'Bright yellow casual t-shirt for kids',
    tags: ['tshirt', 'casual', 'kids', 'bright']
  }
];