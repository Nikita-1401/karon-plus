import "./KaronEssentials.css";

const products = [
  {
    id: 1,
    tag: "THE SIGNATURE",
    name: "Signature White Shirt",
    price: "₹1,499",
    image: "/signature-detail.jpg",
    className: "essential-featured",
  },
  {
    id: 2,
    tag: "EVENING EDIT",
    name: "Premium Black Shirt",
    price: "₹1,699",
    image: "/premium-shirt.jpg",
    className: "essential-small",
  },
  {
    id: 3,
    tag: "MODERN FORMAL",
    name: "Classic Formal Shirt",
    price: "₹1,399",
    image: "/formal-shirt.jpg",
    className: "essential-small",
  },
];

const KaronEssentials = () => {
  return (
    <section className="essentials-section" id="essentials">
      <div className="essentials-header">
        <div className="essentials-heading">
          <div className="essentials-eyebrow">
            <span></span>
            <p>THE KARON ESSENTIALS</p>
          </div>

          <h2>
            The pieces you
            <br />
            <em>always return to.</em>
          </h2>
        </div>

        <div className="essentials-intro">
          <p>
            Timeless shirts designed to move effortlessly between work,
            evenings and everything in between.
          </p>

          <a href="#collection">
            SHOP THE ESSENTIALS
            <span>↗</span>
          </a>
        </div>
      </div>

      <div className="essentials-layout">
        {products.map((product, index) => (
          <article
            className={`essential-card ${product.className}`}
            key={product.id}
          >
            <a href="#collection" className="essential-image">
              <img src={product.image} alt={product.name} />

              <div className="essential-number">
                0{index + 1}
              </div>

              <div className="essential-hover">
                <span>VIEW PRODUCT</span>
                <span>↗</span>
              </div>
            </a>

            <div className="essential-info">
              <div>
                <span className="essential-tag">
                  {product.tag}
                </span>

                <h3>{product.name}</h3>
              </div>

              <p>{product.price}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="essentials-footer">
        <p>
          Essential by design. Distinctly Karon Plus.
        </p>

        <span>
          KARON PLUS · THE EVERYDAY EDIT
        </span>
      </div>
    </section>
  );
};

export default KaronEssentials;