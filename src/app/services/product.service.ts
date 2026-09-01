export class ProductService {
  getProducts(): Product[] {
    return [
      {
        id: 1,
        name: 'Wireless Bluetooth Headphones',
        price: 79.99,
        category: 'Electronics',
        inStock: true,
      },
      {
        id: 2,
        name: 'Ergonomic Office Chair',
        price: 149.5,
        category: 'Furniture',
        inStock: true,
      },
      {
        id: 3,
        name: 'Stainless Steel Water Bottle',
        price: 24.99,
        category: 'Kitchenware',
        inStock: false,
      },
      {
        id: 4,
        name: 'Running Shoes',
        price: 89.95,
        category: 'Apparel',
        inStock: true,
      },
      {
        id: 5,
        name: 'Mechanical Gaming Keyboard',
        price: 119.99,
        category: 'Electronics',
        inStock: true,
      },
    ];
  }
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}
