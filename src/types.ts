export type Category = 'all' | 'outerwear' | 'knitwear' | 'trousers' | 'accessories';

export interface ProductShade {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  category: 'outerwear' | 'knitwear' | 'trousers' | 'accessories';
  editionBadge?: string;
  badgeType?: 'archival' | 'low_stock' | 'bestseller' | 'numbered';
  lowStock?: boolean;
  images: string[];
  altText: string;
  shades: ProductShade[];
  shadesLabel: string;
  sizes: string[];
  description: string;
  composition: string;
  origin: string;
  artisanMill: string;
  editionTotal: number;
}

export interface LookbookItem {
  id: string;
  lookNumber: string;
  title: string;
  subtitle: string;
  image: string;
  altText: string;
  category: Category;
  description: string;
}

export interface CartItem {
  id: string; // unique cart entry id
  product: Product;
  selectedShade: ProductShade;
  selectedSize: string;
  quantity: number;
}

export interface JournalArticle {
  id: string;
  volume: string;
  readTime: string;
  title: string;
  snippet: string;
  author: string;
  authorRole: string;
  coverImage: string;
  fullText: string[];
  quote: string;
  publishedDate: string;
}
