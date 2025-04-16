export const categories = [
  'Fast Food', 
  'Pizza', 
  'Chinese', 
  'Indian', 
  'Italian', 
  'Mexican', 
  'Healthy', 
  'Desserts', 
  'Vegetarian'
];

export const restaurants = [
  {
    id: '1',
    name: 'Burger Palace',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    cuisine: 'American',
    rating: 4.5,
    deliveryTime: 25,
    minOrder: 10,
    categories: ['Fast Food', 'American'],
    description: 'Home of the best burgers in town with fresh ingredients and secret sauces.'
  },
  {
    id: '2',
    name: 'Pizza Express',
    image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    cuisine: 'Italian',
    rating: 4.3,
    deliveryTime: 30,
    minOrder: 15,
    categories: ['Pizza', 'Italian'],
    description: 'Authentic Italian pizzas made with traditional recipes and premium ingredients.'
  },
  {
    id: '3',
    name: 'Sushi World',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    cuisine: 'Japanese',
    rating: 4.7,
    deliveryTime: 35,
    minOrder: 20,
    categories: ['Japanese', 'Healthy'],
    description: 'Fresh and expertly crafted sushi delivered to your door.'
  },
  {
    id: '4',
    name: 'Taco Fiesta',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    cuisine: 'Mexican',
    rating: 4.2,
    deliveryTime: 20,
    minOrder: 12,
    categories: ['Mexican', 'Fast Food'],
    description: 'Authentic Mexican street food with explosive flavors.'
  },
  {
    id: '5',
    name: 'Curry House',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356cbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    cuisine: 'Indian',
    rating: 4.6,
    deliveryTime: 40,
    minOrder: 18,
    categories: ['Indian', 'Spicy'],
    description: 'Aromatic Indian curries and tandoor specialties made with traditional spices.'
  },
  {
    id: '6',
    name: 'Green Bowl',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    cuisine: 'Healthy',
    rating: 4.4,
    deliveryTime: 25,
    minOrder: 15,
    categories: ['Healthy', 'Vegetarian'],
    description: 'Nutritious salads, grain bowls, and plant-based meals for the health-conscious.'
  }
];

export const menuItems = {
  '1': [
    {
      id: '101',
      name: 'Classic Cheeseburger',
      description: 'Beef patty with cheddar cheese, lettuce, tomato, and special sauce',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Burgers'
    },
    {
      id: '102',
      name: 'Bacon Deluxe',
      description: 'Beef patty with bacon, lettuce, tomato, cheese, and mayo',
      price: 10.99,
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Burgers'
    },
    {
      id: '103',
      name: 'French Fries',
      description: 'Crispy golden fries served with ketchup',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Sides'
    },
    {
      id: '104',
      name: 'Onion Rings',
      description: 'Crispy battered onion rings',
      price: 4.99,
      image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Sides'
    },
    {
      id: '105',
      name: 'Chocolate Milkshake',
      description: 'Creamy chocolate milkshake topped with whipped cream',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1553787499-6f9133242787?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Beverages'
    }
  ],
  '2': [
    {
      id: '201',
      name: 'Margherita Pizza',
      description: 'Classic tomato sauce, mozzarella, and basil',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Pizzas'
    },
    {
      id: '202',
      name: 'Pepperoni Pizza',
      description: 'Tomato sauce, mozzarella, and pepperoni',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Pizzas'
    },
    {
      id: '203',
      name: 'Vegetarian Pizza',
      description: 'Tomato sauce, mozzarella, bell peppers, mushrooms, onions, and olives',
      price: 13.99,
      image: 'https://images.unsplash.com/photo-1604917877934-07d8d248d396?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Pizzas'
    },
    {
      id: '204',
      name: 'Garlic Bread',
      description: 'Freshly baked bread with garlic butter and herbs',
      price: 4.99,
      image: 'https://images.unsplash.com/photo-1573140401455-cbf6b0b14a02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Sides'
    },
    {
      id: '205',
      name: 'Caesar Salad',
      description: 'Romaine lettuce, croutons, parmesan cheese, and Caesar dressing',
      price: 7.99,
      image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Salads'
    }
  ]
  // Additional restaurant menus...
};

export const getMenuForRestaurant = (restaurantId) => {
  return menuItems[restaurantId] || [];
};