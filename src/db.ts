export const ProductsJSON = [
  {
    id: 1,
    name: "Apple Watch Series 9 GPS 41mm Aluminum Case with Midnight Sport Band (Small/Medium) - Midnight",
    about: "Smart Watch",
    description: "Apple Watch Series 9 GPS 41mm Aluminum",
    price: 399.0,
    category: "Watch",
    seller: "Apple",
    inStock: true,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6574/6574325_sd.jpg;maxHeight=640;maxWidth=550;format=webp",
    rating: 4.5,
    reviews: 127,
  },
  {
    id: 2,
    name: "Apple - MacBook Air 13.6 Laptop - M2 chip Built for Apple Intelligence - 8GB Memory - 256GB SSD - Midnight",
    about: "Laptop",
    description: "Apple - MacBook Air 13.6 Laptop - M2",
    price: 999.0,
    category: "Electronics",
    seller: "Apple",
    inStock: true,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/d021655e-3e56-4bb6-abc5-48c12361c56b.jpg;maxHeight=2000;maxWidth=2000;format=webp",
    rating: 4.8,
    reviews: 302,
  },
  {
    id: 3,
    name: "Microsoft - Xbox Series S 512GB All-Digital Console (Disc-Free Gaming) - White",
    about: "Gaming console",
    description: "Microsoft - Xbox Series S 512GB All-Digital Console",
    price: 299.99,
    category: "Gaming",
    seller: "Microsoft",
    inStock: true,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3542349a-03d3-4cca-af77-75dbed4befa2.jpg;maxHeight=640;maxWidth=550;format=webp",
    rating: 4.2,
    reviews: 89,
  },
];

export interface IProduct {
  id: number;
  name: string;
  about: string;
  description: string;
  price: number;
  category: string;
  seller: string;
  inStock: boolean;
  imageUrl: string;
  rating: number;
  reviews: number;
}
