import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 2980,
    description: "使いやすいワイヤレスマウス",
    category: "Accessories",
    inStock: true,
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 12800,
    description: "快適なタイピングができるキーボード",
    category: "Accessories",
    inStock: true,
  },
  {
    id: 3,
    name: "USB-C Hub",
    price: 4980,
    description: "複数のデバイスを接続できるUSB-Cハブ",
    category: "Accessories",
    inStock: false,
  },
  {
    id: 4,
    name: "Wireless Headphones",
    price: 15800,
    description: "高音質なワイヤレスヘッドホン",
    category: "Audio",
    inStock: true,
  },
];