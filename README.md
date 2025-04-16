# Food Khao - Food Delivery App

Food Khao is a modern food delivery app that allows users to browse restaurants, order food, and track their deliveries.

## Features

- Browse restaurants by category
- Search for restaurants and cuisines
- View restaurant menus
- Add items to cart
- Place orders
- View order history
- User authentication

## Technologies Used

- React.js with Vite
- Tailwind CSS
- React Router Dom
- Supabase Authentication
- React Icons
- PWA Support with Progressier

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory with the required environment variables.
4. Start the development server:
   ```
   npm run dev
   ```

## Project Structure

The project follows a modular architecture pattern with domain-based organization:

- `/src/modules/` - Contains domain-specific modules
  - `/auth` - Authentication related components and hooks
  - `/cart` - Shopping cart functionality
  - `/core` - Core UI components and layouts
  - `/orders` - Order management
  - `/restaurants` - Restaurant listings and menus
  - `/user` - User profile management

## Deployment

The app is configured for deployment on Vercel. To deploy:

1. Push your changes to your git repository
2. Connect to Vercel
3. Configure the environment variables
4. Deploy

## PWA Support

The app uses Progressier for PWA capabilities, allowing users to install it on their devices.