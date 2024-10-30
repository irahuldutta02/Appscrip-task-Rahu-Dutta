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
      <article
        className="product-card"
        aria-labelledby={`product-title-${product._id}`}
        aria-describedby={`product-info-${product._id}`}
        role="region"
      >
        <div className="product-image">
          <Image
            src={product?.image}
            alt={product?.name}
            width={300}
            height={400}
            className={`product-image-img ${
              outOfStock ? "image-opacity-low" : ""
            }`}
          />
          {product?.markedAsNew && (
            <span className="product-tag" role="status">
              new product
            </span>
          )}

          {outOfStock && (
            <span className="product-tag-stock-out" role="status">
              out of stock
            </span>
          )}
        </div>
        <div className="product-info" id={`product-info-${product._id}`}>
          <h2 className="product-title" id={`product-title-${product._id}`}>
            {product?.name}
          </h2>
          <div className="product-info-wrapper">
            <p className="product-price">
              <span>Sign in</span> or Create an account to see pricing
            </p>
            <div className="product-rating">
              <Image
                src="/assets/svg/heart.svg"
                alt="Add to wishlist"
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
