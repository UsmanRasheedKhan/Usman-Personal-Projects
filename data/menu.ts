import { ASSETS } from "./assets";

export type MenuCategoryId = 
  | 'all'
  | 'hot-coffee' 
  | 'iced-coffee' 
  | 'mocktails' 
  | 'shakes' 
  | 'burgers' 
  | 'dogs-wraps' 
  | 'sandwiches' 
  | 'bakery';

export interface MenuCategory {
  id: MenuCategoryId;
  label: string;
  description?: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'all', label: 'All Offerings' },
  { id: 'hot-coffee', label: 'Hot Coffee', description: 'Artisanal espresso and slow pours from selected origins' },
  { id: 'iced-coffee', label: 'Iced Coffee', description: 'Precision chilled brews, cold foams, and layered roasts' },
  { id: 'mocktails', label: 'Mocktails', description: 'Handcrafted botanical refreshers and iced fusions' },
  { id: 'shakes', label: 'Shakes', description: 'Velvety artisanal shakes crafted with premium ingredients' },
  { id: 'burgers', label: 'Gourmet Burgers', description: 'Prime smashed patties in toasted brioche buns' },
  { id: 'dogs-wraps', label: 'Dogs & Wraps', description: 'Street-inspired savory staples perfected for evening snacking' },
  { id: 'sandwiches', label: 'Sandwiches', description: 'Golden grilled artisan club loaves with secret sauces' },
  { id: 'bakery', label: 'Bakery', description: 'Warm flaky pastries, tea loaves, and confections' },
];

export interface MenuItem {
  id: string;
  name: string;
  category: 'hot-coffee' | 'iced-coffee' | 'mocktails' | 'shakes' | 'burgers' | 'dogs-wraps' | 'sandwiches' | 'bakery';
  price: number;
  badge?: string;
  desc?: string;
  image?: string;
}

export const MENU_ITEMS: MenuItem[] = [
  // Hot Coffee
  { id: 'h1', name: 'Espresso (Single / Double)', price: 200, category: 'hot-coffee', desc: 'Concentrated double shot of dark roasted beans', image: ASSETS.v60Brew },
  { id: 'h2', name: 'Americano', price: 400, category: 'hot-coffee', desc: 'Espresso lengthened with hot water', image: ASSETS.v60Brew },
  { id: 'h3', name: 'Café Latte', price: 450, category: 'hot-coffee', badge: 'House Favorite', desc: 'Velvety microfoam over rich espresso', image: ASSETS.latteArt },
  { id: 'h4', name: 'Cappuccino', price: 450, category: 'hot-coffee', desc: 'Traditional equal-parts espresso, milk, and foam', image: ASSETS.latteArt },
  { id: 'h5', name: 'Cardamom Green Tea / Karak Chai', price: 100, category: 'hot-coffee', desc: 'Aromatic slow-simmered spiced karak chai with whole crushed cardamom pods', image: ASSETS.v60Brew },

  // Iced Coffee
  { id: 'c1', name: 'Classic Iced Latte', price: 450, category: 'iced-coffee', badge: 'Bestseller', desc: 'Double espresso poured over crisp milk and artisanal ice cubes', image: ASSETS.icedLatte },
  { id: 'c2', name: 'Caramel Iced Latte', price: 550, category: 'iced-coffee', badge: 'Popular', desc: 'Slow-drizzled house salted caramel with silky milk and robust espresso', image: ASSETS.icedLatte },
  { id: 'c3', name: 'Iced Americano', price: 450, category: 'iced-coffee', desc: 'Bold espresso shots shaken with crystal clear ice and cold filtered water', image: ASSETS.icedLatte },
  { id: 'c4', name: 'Mocha Iced Latte', price: 550, category: 'iced-coffee', desc: 'Single-origin Dutch dark cocoa infused with rich espresso and milk', image: ASSETS.icedLatte },
  { id: 'c5', name: 'Affogato al Caffè', price: 400, category: 'iced-coffee', desc: 'Vanilla bean scoop drowned in fresh double espresso', image: ASSETS.icedLatte },

  // Mocktails
  { id: 'm1', name: 'Signature Mint Margarita', price: 250, category: 'mocktails', badge: 'Must Try', desc: 'Fresh garden spearmint, crushed lime, and sparkling soda over shaved ice', image: ASSETS.mocktail },
  { id: 'm2', name: 'Strawberry Margarita', price: 250, category: 'mocktails', desc: 'Muddled ripe strawberries with tangy citrus and botanical effervescence', image: ASSETS.mocktail },
  { id: 'm3', name: 'Lychee Daiquiri', price: 250, category: 'mocktails', desc: 'Exotic fragrant lychee nectar balanced with fresh pressed lime and fizz', image: ASSETS.mocktail },
  { id: 'm4', name: 'Blue Breeze Refresher', price: 250, category: 'mocktails', desc: 'Curacao-style citrus essence with crisp lemon and crushed crystal ice', image: ASSETS.mocktail },
  { id: 'm5', name: 'Piña Colada', price: 450, category: 'mocktails', desc: 'Silky pressed coconut cream blended with sweet golden island pineapple', image: ASSETS.mocktail },
  { id: 'm6', name: 'Peach Iced Tea', price: 200, category: 'mocktails', desc: 'Cold brewed Ceylon black tea infused with fragrant orchard peach essence', image: ASSETS.mocktail },

  // Shakes & Smoothies
  { id: 's1', name: 'Oreo Thick Shake', price: 350, category: 'shakes', badge: 'Top Rated', desc: 'Dense cookies & cream churned with rich dairy and chocolate cookie crumble', image: ASSETS.shake },
  { id: 's2', name: 'Chocolate Velvet Shake', price: 350, category: 'shakes', desc: 'Deep Swiss chocolate ganache whipped into cold creamy indulgence', image: ASSETS.shake },
  { id: 's3', name: 'Fresh Banana Smoothie', price: 500, category: 'shakes', desc: 'Handpicked sweet bananas blended with natural yogurt and wild honey drizzle', image: ASSETS.shake },
  { id: 's4', name: 'Strawberry Cream Smoothie', price: 500, category: 'shakes', desc: 'Ripe sweet berries whipped with rich farm cream and subtle vanilla', image: ASSETS.shake },

  // Burgers & Comfort
  { id: 'b1', name: 'Hawaiian Beef Burger', price: 690, category: 'burgers', badge: 'Chef Special', desc: 'Prime smashed beef patty crowned with caramelized pineapple and glaze', image: ASSETS.burger },
  { id: 'b2', name: 'Hickory Smoked Beef Burger', price: 750, category: 'burgers', desc: 'Oakwood smoked barbecue sauce, aged cheddar, and crispy onion crunch', image: ASSETS.burger },
  { id: 'b3', name: 'Classic Beef Cheeseburger', price: 750, category: 'burgers', desc: 'Double smashed beef patties with melted American cheese and house pickles', image: ASSETS.burger },
  { id: 'b4', name: 'Crispy Royal Chicken Burger', price: 600, category: 'burgers', desc: 'Golden buttermilk spiced fried chicken thigh with garlic aioli & lettuce', image: ASSETS.burger },
  { id: 'b5', name: 'Traditional Bun Kabab', price: 160, category: 'burgers', desc: 'Authentic Karachi street-style spiced lentil & beef patty with spicy mint chutney', image: ASSETS.burger },

  // Dogs & Wraps
  { id: 'd1', name: 'Runaway Signature Hot Dog', price: 450, category: 'dogs-wraps', badge: 'Signature', desc: 'Artisanal sausage nestled in a toasted buttery bun with signature relish', image: ASSETS.outdoorAmbience },
  { id: 'd2', name: 'Chilli Cheese Dog', price: 600, category: 'dogs-wraps', desc: 'Smothered in slow-cooked spiced chili con carne and melted cheddar cheese', image: ASSETS.outdoorAmbience },
  { id: 'd3', name: 'Crispy Honey Mustard Wrap', price: 550, category: 'dogs-wraps', desc: 'Crispy chicken strips wrapped in a grilled tortilla with tangy honey mustard', image: ASSETS.outdoorAmbience },
  { id: 'd4', name: 'Beef Fajita Wrap', price: 600, category: 'dogs-wraps', desc: 'Seared strips of spiced beef with charred bell peppers, onions, and chipotle', image: ASSETS.outdoorAmbience },

  // Sandwiches
  { id: 'sw1', name: 'Grilled Chicken Club Sandwich', price: 550, category: 'sandwiches', desc: 'Triple-decker toasted bread with grilled rosemary chicken, fried egg & cheese', image: ASSETS.burger },
  { id: 'sw2', name: 'Crispy Fried Club Sandwich', price: 600, category: 'sandwiches', badge: 'Popular', desc: 'Crunchy golden chicken tenders layered with fresh tomato, lettuce and remoulade', image: ASSETS.burger },

  // Bakery & Desserts
  { id: 'bk1', name: 'Flaky Butter Croissant', price: 130, category: 'bakery', badge: 'Fresh', desc: 'Golden lamination baked fresh with rich European cultured butter', image: ASSETS.pastry },
  { id: 'bk2', name: 'Chocolate Cloud Cake', price: 80, category: 'bakery', desc: 'Decadent moist chocolate sponge slice filled with dark silky ganache', image: ASSETS.pastry },
  { id: 'bk3', name: 'Walnut Tea Slice', price: 100, category: 'bakery', desc: 'Traditional buttery tea loaf infused with roasted English walnut chunks', image: ASSETS.pastry },
  { id: 'bk4', name: 'Glazed Donut', price: 100, category: 'bakery', desc: 'Pillowy brioche dough dipped in a classic crystal sugar vanilla glaze', image: ASSETS.pastry }
];

export const SIGNATURE_DRINKS = [
  MENU_ITEMS.find(i => i.id === 'c1')!,
  MENU_ITEMS.find(i => i.id === 'c2')!,
  MENU_ITEMS.find(i => i.id === 'h3')!,
  MENU_ITEMS.find(i => i.id === 'm1')!,
  MENU_ITEMS.find(i => i.id === 'c5')!,
  MENU_ITEMS.find(i => i.id === 's1')!,
];
