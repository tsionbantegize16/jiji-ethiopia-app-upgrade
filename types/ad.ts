// types/ad.ts
export interface Ad {
  id: string;
  title: string;
  price: string; // Using string for formatted price (e.g., "ETB 1,200,000")
  location: string;
  category: string;
  imageUrl: string;
  createdAt: string; // e.g., "2 hours ago"
  // Add more properties as needed for a full ad listing:
  // description?: string;
  // sellerInfo?: {
  //   name: string;
  //   phone: string;
  // };
  // condition?: 'new' | 'used';
  // images?: string[];
}