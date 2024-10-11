import { Product, Order } from '../types';

// Mock data (replace with actual API calls in a real application)
const products: Product[] = [
  { id: '1', name: 'Pure Bihari Chana Sattu', price: '₹325.00', image: 'https://example.com/sattu.jpg', category: 'Sattu', description: 'High-protein sattu made from roasted gram flour.' },
  { id: '2', name: 'Organic Basmati Rice', price: '₹450.00', image: 'https://example.com/rice.jpg', category: 'Rice', description: 'Premium long-grain basmati rice from Bihar.' },
  { id: '3', name: 'Traditional Litti Chokha Mix', price: '₹275.00', image: 'https://example.com/litti-chokha.jpg', category: 'Specialty', description: 'Authentic mix for making Bihari Litti Chokha.' },
  { id: '4', name: 'Organic Wheat Flour', price: '₹250.00', image: 'https://example.com/wheat-flour.jpg', category: 'Flour', description: 'High-quality organic wheat flour for various culinary uses.' },
  { id: '5', name: 'Organic Wheat Flour', price: '₹250.00', image: 'https://example.com/wheat-flour.jpg', category: 'Flour', description: 'High-quality organic wheat flour for various culinary uses.' },
  { id: '6', name: 'Organic Wheat Flour', price: '₹250.00', image: 'https://example.com/wheat-flour.jpg', category: 'Flour', description: 'High-quality organic wheat flour for various culinary uses.' },
  { id: '7', name: 'Organic Wheat Flour', price: '₹250.00', image: 'https://example.com/wheat-flour.jpg', category: 'Flour', description: 'High-quality organic wheat flour for various culinary uses.' },
  { id: '8', name: 'Organic Wheat Flour', price: '₹250.00', image: 'https://example.com/wheat-flour.jpg', category: 'Flour', description: 'High-quality organic wheat flour for various culinary uses.' },
  { id: '9', name: 'Organic Wheat Flour', price: '₹250.00', image: 'https://example.com/wheat-flour.jpg', category: 'Flour', description: 'High-quality organic wheat flour for various culinary uses.' },
  { id: '10', name: 'Organic Wheat Flour', price: '₹250.00', image: 'https://example.com/wheat-flour.jpg', category: 'Flour', description: 'High-quality organic wheat flour for various culinary uses.' },
  
];

const orders: Order[] = [
  { id: '1', date: '2023-06-01', status: 'Delivered', total: '₹1050.00', items: [
    {
        id: '1', name: 'Pure Bihari Chana Sattu', price: '₹325.00', image: 'https://example.com/sattu.jpg', quantity: 2,
        category: '',
        description: ''
    },
    {
        id: '2', name: 'Organic Basmati Rice', price: '₹450.00', image: 'https://example.com/rice.jpg', quantity: 1,
        category: '',
        description: ''
    },
  ]},
];

export function getProducts({ category, featured }: { category?: string, featured?: boolean } = {}): Product[] {
  let filteredProducts = products;
  if (category && category !== 'All') {
    filteredProducts = filteredProducts.filter(p => p.category === category);
  }
  if (featured) {
    filteredProducts = filteredProducts.slice(0, 3); // Just return the first 3 as featured
  }
  return filteredProducts;
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getOrders(): Order[] {
  return orders;
}

export function getOrderById(id: string): Order | undefined {
  return orders.find(o => o.id === id);
}