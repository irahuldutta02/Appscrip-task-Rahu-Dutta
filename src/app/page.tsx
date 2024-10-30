import ProductCard from "@/components/ProductCard";
import { getProducts } from "../../data/data";

export default function Home() {
  const products = getProducts();

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
