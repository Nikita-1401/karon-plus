import { FiArrowUpRight } from "react-icons/fi";
import "./CollectionCTA.css";

const collections = [
  { number: "01", name: "FORMAL", href: "/shirts/formal" },
  { number: "02", name: "CASUAL", href: "/shirts/casual" },
  { number: "03", name: "PRINTED", href: "/shirts/printed" },
  { number: "04", name: "PREMIUM", href: "/shirts/premium" },
];

const CollectionCTA = () => {
  return (
    <section className="wardrobe-section">
      <div className="wardrobe-container">

        {/* LEFT IMAGE */}
        <div className="wardrobe-visual">
          <div className="wardrobe-image-wrap">
            <img
              src="/collection-cta.jpg"
              alt="Karon Plus premium shirt collection"
            />

            <div className="wardrobe-image-number">04</div>
          </div>

          <div className="wardrobe-caption">
            <span>KARON PLUS</span>
            <p>Curated for the modern wardrobe.</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="wardrobe-content">

          <div className="wardrobe-eyebrow">
            <span></span>
            <p>THE WARDROBE EDIT</p>
          </div>

          <h2>
            Four moods.
            <br />
            <em>One standard.</em>
          </h2>

          <p className="wardrobe-description">
            From sharp formals to relaxed everyday pieces, explore collections
            created for the different ways you choose to show up.
          </p>

          {/* COLLECTION OPTIONS */}
          <div className="wardrobe-categories">
            {collections.map((item) => (
              <a
                href={item.href}
                className="wardrobe-category"
                key={item.number}
              >
                <div>
                  <span>{item.number}</span>
                  <h3>{item.name}</h3>
                </div>

                <FiArrowUpRight
                  className="wardrobe-arrow"
                  size={15}
                />
              </a>
            ))}
          </div>

          {/* MAIN CTA */}
          <a href="/shop" className="wardrobe-main-link">
            <span>VIEW THE COLLECTION</span>

            <FiArrowUpRight
              className="wardrobe-main-arrow"
              size={15}
            />
          </a>

        </div>
      </div>

      {/* BOTTOM BRAND LINE */}
      <div className="wardrobe-footer-line">
        <p>Made for moments. Designed to last.</p>
        <span>KARON PLUS • EST. 2026</span>
      </div>
    </section>
  );
};

export default CollectionCTA;