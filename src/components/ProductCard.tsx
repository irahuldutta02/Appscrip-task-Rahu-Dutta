import Image from "next/image";

export default function ProductCard({
  product,
}: {
  product: {
    _id: string;
    name: string;
    image: string;
    markedAsNew: boolean;
    stockCount: number;
  };
}) {
  const outOfStock = product?.stockCount === 0;

  return (
    <>
      <article className="product-card">
        <div className="product-image">
          <Image
            src={product?.image}
            alt={product?.name}
            width={300}
            height={400}
            className={`${outOfStock ? "image-opacity-low" : ""}`}
            layout="responsive"
          />
          {product?.markedAsNew && (
            <span className="product-tag">new product</span>
          )}

          {outOfStock && (
            <span className="product-tag-stock-out">out of stock</span>
          )}
        </div>
        <div className="product-info">
          <h2 className="product-title">{product?.name}</h2>
          <div className="product-info-wrapper">
            <p className="product-price">
              <span>Sign in</span> or Create an account to see pricing
            </p>
            <div className="product-rating">
              <Image
                src="/assets/svg/heart.svg"
                alt="wishlist"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
