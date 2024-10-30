import ProductCard from "@/components/ProductCard";
import { getProducts } from "../../data/data";
import { product } from "../../types/products";

export default function Home() {
  const products: product[] = getProducts();

  return (
    <>
      <section className="product-list">
        {products.map((product) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </section>
    </>
  );
}
