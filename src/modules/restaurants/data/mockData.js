import { pakistanCities } from './pakistanCities';

export const categories = [
  'Biryani', 
  'Karahi', 
  'BBQ', 
  'Street Food', 
  'Nihari', 
  'Haleem', 
  'Chaat', 
  'Desserts', 
  'Fast Food', 
  'Vegetarian'
];

export const restaurants = [
  // Karachi Restaurants
  {
    id: '1',
    name: 'Karachi Biryani House',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    cuisine: 'Pakistani',
    rating: 4.7,
    deliveryTime: 30,
    minOrder: 15,
    categories: ['Biryani', 'Rice'],
    description: 'Famous for authentic Sindhi biryani and other traditional Pakistani rice dishes.',
    location: {
      address: '123 Food Street, Karachi',
      coordinates: {
        lat: 24.8607,
        lng: 67.0011
      },
      city: 'Karachi',
      area: 'Saddar'
    }
  },
  // Lahore Restaurants
  {
    id: '2',
    name: 'Lahore BBQ Center',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    cuisine: 'Pakistani',
    rating: 4.5,
    deliveryTime: 25,
    minOrder: 12,
    categories: ['BBQ', 'Tikka'],
    description: 'The best BBQ in Lahore serving delicious tikka, kebabs, and traditional grilled delicacies.',
    location: {
      address: '45 Food Street, Lahore',
      coordinates: {
        lat: 31.5204,
        lng: 74.3587
      },
      city: 'Lahore',
      area: 'Anarkali'
    }
  },
  // Peshawar Restaurants
  {
    id: '3',
    name: 'Peshawar Chapli Kebab',
    image: 'https://images.unsplash.com/photo-1633321702518-7fecdafb94d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    cuisine: 'Pakistani',
    rating: 4.8,
    deliveryTime: 35,
    minOrder: 10,
    categories: ['BBQ', 'Street Food'],
    description: 'Famous for authentic Peshawari chapli kebabs and traditional Pashtun cuisine.',
    location: {
      address: '78 Qissa Khwani Bazaar, Peshawar',
      coordinates: {
        lat: 34.0151,
        lng: 71.5249
      },
      city: 'Peshawar',
      area: 'Qissa Khwani'
    }
  },
  // Islamabad Restaurants
  {
    id: '4',
    name: 'Islamabad Nihari House',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    cuisine: 'Pakistani',
    rating: 4.6,
    deliveryTime: 40,
    minOrder: 18,
    categories: ['Nihari', 'Haleem'],
    description: 'Serving the most delicious slow-cooked Nihari and Haleem in the capital city.',
    location: {
      address: '32 Blue Area, Islamabad',
      coordinates: {
        lat: 33.7294,
        lng: 73.0931
      },
      city: 'Islamabad',
      area: 'Blue Area'
    }
  },
  // Multan Restaurants
  {
    id: '5',
    name: 'Multan Sohan Halwa',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    cuisine: 'Pakistani',
    rating: 4.4,
    deliveryTime: 25,
    minOrder: 8,
    categories: ['Desserts', 'Sweets'],
    description: 'Famous for traditional Multani desserts including the renowned Sohan Halwa.',
    location: {
      address: '15 Ghanta Ghar Chowk, Multan',
      coordinates: {
        lat: 30.1798,
        lng: 71.4211
      },
      city: 'Multan',
      area: 'Old City'
    }
  },
  // Quetta Restaurants
  {
    id: '6',
    name: 'Quetta Sajji Center',
    image: 'https://images.unsplash.com/photo-1606491048802-4f023e4a1b2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    cuisine: 'Pakistani',
    rating: 4.9,
    deliveryTime: 45,
    minOrder: 20,
    categories: ['BBQ', 'Balochi'],
    description: 'Authentic Balochi Sajji, slow-roasted and marinated to perfection.',
    location: {
      address: '56 Jinnah Road, Quetta',
      coordinates: {
        lat: 30.1984,
        lng: 67.0151
      },
      city: 'Quetta',
      area: 'Jinnah Road'
    }
  },
  // Faisalabad Restaurants
  {
    id: '7',
    name: 'Faisalabad Food Junction',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    cuisine: 'Pakistani',
    rating: 4.3,
    deliveryTime: 30,
    minOrder: 10,
    categories: ['Fast Food', 'Street Food'],
    description: 'A popular food spot offering a variety of local street food specialties.',
    location: {
      address: '22 D Ground, Faisalabad',
      coordinates: {
        lat: 31.4187,
        lng: 73.0791
      },
      city: 'Faisalabad',
      area: 'D Ground'
    }
  },
  // Hyderabad Restaurants
  {
    id: '8',
    name: 'Hyderabad Chaat Corner',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    cuisine: 'Pakistani',
    rating: 4.4,
    deliveryTime: 20,
    minOrder: 7,
    categories: ['Chaat', 'Street Food'],
    description: 'Famous for delicious and tangy chaat varieties and street food.',
    location: {
      address: '10 Saddar Market, Hyderabad',
      coordinates: {
        lat: 25.3960,
        lng: 68.3578
      },
      city: 'Hyderabad',
      area: 'Saddar'
    }
  },
  // Rawalpindi Restaurants
  {
    id: '9',
    name: 'Rawalpindi Namak Mandi',
    image: 'https://images.unsplash.com/photo-1595854341625-f33e32c9a8f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    cuisine: 'Pakistani',
    rating: 4.7,
    deliveryTime: 35,
    minOrder: 15,
    categories: ['Karahi', 'BBQ'],
    description: 'Known for its mouth-watering karahi and traditional BBQ dishes.',
    location: {
      address: '45 Raja Bazaar, Rawalpindi',
      coordinates: {
        lat: 33.6007,
        lng: 73.0679
      },
      city: 'Rawalpindi',
      area: 'Raja Bazaar'
    }
  },
  // Sialkot Restaurants
  {
    id: '10',
    name: 'Sialkot Halwa Puri',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    cuisine: 'Pakistani',
    rating: 4.5,
    deliveryTime: 25,
    minOrder: 8,
    categories: ['Breakfast', 'Street Food'],
    description: 'Serving traditional Pakistani breakfast with famous halwa puri.',
    location: {
      address: '33 Trunk Bazaar, Sialkot',
      coordinates: {
        lat: 32.4945,
        lng: 74.5229
      },
      city: 'Sialkot',
      area: 'Trunk Bazaar'
    }
  }
];

export const menuItems = {
  '1': [
    {
      id: '101',
      name: 'Chicken Biryani',
      description: 'Aromatic basmati rice cooked with tender chicken pieces, saffron, and traditional spices',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1589566668469-51b1a57a7c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Biryani'
    },
    {
      id: '102',
      name: 'Mutton Biryani',
      description: 'Flavorful basmati rice layered with tender mutton pieces and authentic Karachi spices',
      price: 10.99,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Biryani'
    },
    {
      id: '103',
      name: 'Sindhi Pulao',
      description: 'Traditional Sindhi style rice with aromatic spices, meat, and fresh herbs',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1547496502-affa22d38842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Rice'
    },
    {
      id: '104',
      name: 'Zarda Rice',
      description: 'Sweet rice with saffron, milk, sugar, and nuts - a perfect dessert',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Desserts'
    },
    {
      id: '105',
      name: 'Lassi',
      description: 'Traditional yogurt drink, available in sweet or salty options',
      price: 2.99,
      image: 'https://images.unsplash.com/photo-1553787499-6f9133242787?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Beverages'
    }
  ],
  '2': [
    {
      id: '201',
      name: 'Seekh Kebab',
      description: 'Minced meat kebabs grilled to perfection with traditional spices',
      price: 7.99,
      image: 'https://images.unsplash.com/photo-1530469912745-a215c6b256ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'BBQ'
    },
    {
      id: '202',
      name: 'Chicken Tikka',
      description: 'Marinated chicken pieces grilled in a traditional tandoor',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'BBQ'
    },
    {
      id: '203',
      name: 'Beef Boti',
      description: 'Tender beef pieces marinated and grilled with special Lahori spices',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'BBQ'
    },
    {
      id: '204',
      name: 'Lahori Charga',
      description: 'Whole chicken marinated in special spices and grilled to perfection',
      price: 15.99,
      image: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Tikka'
    },
    {
      id: '205',
      name: 'Naan',
      description: 'Freshly baked traditional Pakistani bread',
      price: 1.99,
      image: 'https://images.unsplash.com/photo-1595489226062-fe1f9e9a2336?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Bread'
    }
  ],
  '3': [
    {
      id: '301',
      name: 'Chapli Kebab',
      description: 'Famous Peshawari flat kebabs made with minced beef and special spices',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'BBQ'
    },
    {
      id: '302',
      name: 'Charsi Tikka',
      description: 'Traditional Peshawari tikka known for its unique flavor and preparation',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1599487489865-7165eba1b0ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'BBQ'
    },
    {
      id: '303',
      name: 'Kabuli Pulao',
      description: 'Traditional Afghan-influenced rice dish with meat, carrots, and raisins',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1618492884533-4b8b6727826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Rice'
    },
    {
      id: '304',
      name: 'Peshawari Naan',
      description: 'Sweet naan filled with dried fruits and nuts',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1576086067766-5027996ffa91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Bread'
    }
  ],
  '4': [
    {
      id: '401',
      name: 'Beef Nihari',
      description: 'Slow-cooked beef stew with rich spices, a traditional breakfast dish',
      price: 10.99,
      image: 'https://images.unsplash.com/photo-1645171606256-db0ed04a1ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Nihari'
    },
    {
      id: '402',
      name: 'Haleem',
      description: 'Thick stew made with wheat, lentils, and meat, slow-cooked to perfection',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1626202857362-ab77c600a963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Haleem'
    },
    {
      id: '403',
      name: 'Paya Soup',
      description: 'Traditional trotters soup, slow-cooked with spices and herbs',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Soup'
    },
    {
      id: '404',
      name: 'Maghaz',
      description: 'Brain curry prepared with traditional spices',
      price: 7.99,
      image: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Curry'
    }
  ],
  '5': [
    {
      id: '501',
      name: 'Sohan Halwa',
      description: 'Traditional Multani sweet made with cornflour, sugar, and nuts',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1637949599817-6c4d8cc9bf09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Desserts'
    },
    {
      id: '502',
      name: 'Gulab Jamun',
      description: 'Sweet milk dumplings soaked in sugar syrup',
      price: 4.99,
      image: 'https://images.unsplash.com/photo-1585665187093-a3511c2fe57b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Desserts'
    },
    {
      id: '503',
      name: 'Jalebi',
      description: 'Crispy pretzel-shaped sweets soaked in sugar syrup',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1615832494738-b3aa54452a14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Desserts'
    },
    {
      id: '504',
      name: 'Multani Kheer',
      description: 'Traditional rice pudding with milk, cardamom, and nuts',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1660984465439-1f1b493cfcc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Desserts'
    }
  ],
  '6': [
    {
      id: '601',
      name: 'Sajji',
      description: 'Traditional Balochi dish made with whole chicken or lamb marinated and roasted',
      price: 16.99,
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'BBQ'
    },
    {
      id: '602',
      name: 'Balochi Rosh',
      description: 'Slow-cooked meat with minimal spices, a traditional Balochi delicacy',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1612392983565-a6e8f84a90fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Balochi'
    },
    {
      id: '603',
      name: 'Dampukht',
      description: 'Meat and rice cooked together in a sealed pot with aromatic spices',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1605709303005-0cacdd0e1e06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Rice'
    },
    {
      id: '604',
      name: 'Namkeen Roti',
      description: 'Traditional Balochi bread with a unique salty taste',
      price: 2.99,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Bread'
    }
  ],
  // Adding menus for new restaurants
  '7': [
    {
      id: '701',
      name: 'Chicken Karahi',
      description: 'Spicy chicken dish cooked in a traditional wok with tomatoes and green chilies',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Karahi'
    },
    {
      id: '702',
      name: 'Faisalabadi Samosa',
      description: 'Crispy pastry filled with spiced potatoes, onions, and peas',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Street Food'
    }
  ],
  '8': [
    {
      id: '801',
      name: 'Hyderabadi Chaat',
      description: 'Mix of crispy, tangy, and sweet flavors with yogurt and tamarind chutney',
      price: 4.99,
      image: 'https://images.unsplash.com/photo-1582149509158-bbd63a819bf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Chaat'
    },
    {
      id: '802',
      name: 'Dahi Baray',
      description: 'Lentil dumplings soaked in spiced yogurt with sweet and tangy chutneys',
      price: 5.99,
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Chaat'
    }
  ],
  '9': [
    {
      id: '901',
      name: 'Pindi Chana',
      description: 'Spicy chickpea curry, a specialty of Rawalpindi',
      price: 7.99,
      image: 'https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Curry'
    },
    {
      id: '902',
      name: 'Peshawari Karahi',
      description: 'Traditional style karahi with minimal spices and rich flavor',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Karahi'
    }
  ],
  '10': [
    {
      id: '1001',
      name: 'Halwa Puri',
      description: 'Traditional breakfast with semolina halwa, fried flatbread, and chickpea curry',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1620894169427-2dbcf696a563?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Breakfast'
    },
    {
      id: '1002',
      name: 'Sialkoti Kulfi',
      description: 'Traditional frozen dairy dessert with cardamom and pistachios',
      price: 4.99,
      image: 'https://images.unsplash.com/photo-1617122094623-50b85c5fbe8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'Desserts'
    }
  ]
};

export const getMenuForRestaurant = (restaurantId) => {
  return menuItems[restaurantId] || [];
};

export const cities = pakistanCities;

// Function to get restaurants by city
export const getRestaurantsByCity = (cityName) => {
  if (!cityName) return restaurants;
  return restaurants.filter(restaurant => 
    restaurant.location.city.toLowerCase() === cityName.toLowerCase()
  );
};