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
  ]
};

export const getMenuForRestaurant = (restaurantId) => {
  return menuItems[restaurantId] || [];
};

export const cities = [
  'Karachi', 'Lahore', 'Islamabad', 'Peshawar', 'Quetta', 'Multan', 
  'Faisalabad', 'Rawalpindi', 'Hyderabad', 'Sialkot', 'Gujranwala'
];