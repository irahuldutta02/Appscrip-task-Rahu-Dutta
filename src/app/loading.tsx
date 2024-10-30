export default function Loading() {
  return (
    <>
      <section className="product-list">
        {Array.from({ length: 8 }).map((_, index) => (
          <article
            key={index}
            className="product-card-skeleton"
            role="region"
            aria-label="Product loading"
          >
            <div className="product-image-skeleton skeleton"></div>

            <div className="product-info-skeleton">
              <div className="product-title-skeleton skeleton"></div>

              <div className="product-info-wrapper">
                <div className="product-price-skeleton skeleton"></div>
                <div className="product-rating-skeleton skeleton"></div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
