import { product } from "../types/products";

const products = [
  {
    _id: "1",
    name: "Product 1",
    image: "/assets/products/product (1).png",
    markedAsNew: true,
    stockCount: 10,
  },
  {
    _id: "2",
    name: "Product 2",
    image: "/assets/products/product (2).png",
    markedAsNew: false,
    stockCount: 0,
  },
  {
    _id: "3",
    name: "Product 3",
    image: "/assets/products/product (3).png",
    markedAsNew: false,
    stockCount: 30,
  },
  {
    _id: "4",
    name: "Product 4",
    image: "/assets/products/product (4).png",
    markedAsNew: false,
    stockCount: 40,
  },
  {
    _id: "5",
    name: "Product 5",
    image: "/assets/products/product (5).png",
    markedAsNew: false,
    stockCount: 0,
  },
  {
    _id: "6",
    name: "Product 6",
    image: "/assets/products/product (6).png",
    markedAsNew: true,
    stockCount: 60,
  },
  {
    _id: "7",
    name: "Product 7",
    image: "/assets/products/product (1).png",
    markedAsNew: false,
    stockCount: 70,
  },
  {
    _id: "8",
    name: "Product 8",
    image: "/assets/products/product (2).png",
    markedAsNew: false,
    stockCount: 80,
  },
  {
    _id: "9",
    name: "Product 9",
    image: "/assets/products/product (3).png",
    markedAsNew: false,
    stockCount: 90,
  },
  {
    _id: "10",
    name: "Product 10",
    image: "/assets/products/product (4).png",
    markedAsNew: false,
    stockCount: 100,
  },
  {
    _id: "11",
    name: "Product 11",
    image: "/assets/products/product (5).png",
    markedAsNew: false,
    stockCount: 110,
  },
  {
    _id: "12",
    name: "Product 12",
    image: "/assets/products/product (6).png",
    markedAsNew: false,
    stockCount: 120,
  },
  {
    _id: "13",
    name: "Product 13",
    image: "/assets/products/product (1).png",
    markedAsNew: false,
    stockCount: 130,
  },
  {
    _id: "14",
    name: "Product 14",
    image: "/assets/products/product (2).png",
    markedAsNew: false,
    stockCount: 140,
  },
  {
    _id: "15",
    name: "Product 15",
    image: "/assets/products/product (3).png",
    markedAsNew: false,
    stockCount: 150,
  },
  {
    _id: "16",
    name: "Product 16",
    image: "/assets/products/product (4).png",
    markedAsNew: false,
    stockCount: 160,
  },
];

// mock api call
export const getProducts = (): Promise<product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};
