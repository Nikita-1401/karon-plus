import { Link } from "react-router-dom";
import {
  FiInstagram,
  FiFacebook,
  FiMail,
} from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();

    if (!email) return;

    alert("Thank you for joining Karon Plus.");
    e.target.reset();
  };

  return (
    <footer className="footer">

      {/* ================= TOP ================= */}
      <div className="footer-container">

        <section className="footer-top">

          {/* LEFT */}
          <div className="footer-intro">

            <div className="footer-eyebrow">
              <span />
              <p>STAY IN THE KNOW</p>
            </div>

            <h2>
              Refined style,
              <br />
              <em>made for every day.</em>
            </h2>

          </div>

          {/* NEWSLETTER */}
          <div className="footer-newsletter">

            <p>
              New collections and considered essentials,
              delivered occasionally.
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                aria-label="Email address"
                required
              />

              <button type="submit">
                JOIN <span>↗</span>
              </button>
            </form>

          </div>

        </section>

        {/* ================= LINKS ================= */}

        <section className="footer-main">

          {/* BRAND */}
          <div className="footer-brand">

            <p className="footer-title">
              KARON PLUS
            </p>

            <p className="footer-brand-text">
              Premium shirts designed with refined details,
              everyday comfort and timeless style.
            </p>

            <p className="footer-signature">
              Style that speaks. Comfort that lasts.
            </p>

          </div>

          {/* SHOP */}
          <div className="footer-column">

            <p className="footer-title">
              SHOP
            </p>

            <Link to="/shop">
              All Shirts
            </Link>

            <Link to="/new-arrivals">
              New Arrivals
            </Link>

            <Link to="/shop/formal">
              Formal
            </Link>

            <Link to="/shop/casual">
              Casual
            </Link>

            <Link to="/shop/premium">
              Premium
            </Link>

          </div>

          {/* DISCOVER */}
          <div className="footer-column">

            <p className="footer-title">
              DISCOVER
            </p>

            <Link to="/about">
              Our Story
            </Link>

            <Link to="/our-promise">
              Our Promise
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </div>

          {/* ACCOUNT */}
          <div className="footer-column">

            <p className="footer-title">
              YOUR ACCOUNT
            </p>

            <Link to="/account">
              My Account
            </Link>

            <Link to="/wishlist">
              Wishlist
            </Link>

            <Link to="/cart">
              Shopping Bag
            </Link>

          </div>

          {/* CONNECT */}
          <div className="footer-column footer-connect">

            <p className="footer-title">
              CONNECT
            </p>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FiInstagram className="footer-social-icon" />
              Instagram
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FiFacebook className="footer-social-icon" />
              Facebook
            </a>

            <a href="mailto:hello@karonplus.com">
              <FiMail className="footer-social-icon" />
              Email
            </a>

          </div>

        </section>

        {/* ================= BRAND STRIP ================= */}

        <section className="footer-brand-strip">

          <div className="footer-mini-logo">
            <span>KP</span>

            <div>
              <strong>KARON PLUS</strong>
              <p>THE ULTIMATE CHOICE</p>
            </div>
          </div>

          <p className="footer-brand-line">
            Premium essentials for modern wardrobes.
          </p>

        </section>

      </div>

      {/* ================= BOTTOM ================= */}

      <div className="footer-bottom">

        <p>
          © 2026 KARON PLUS
        </p>

        <div>
          <span>Privacy</span>
          <span>Terms</span>
        </div>

        <p>
          DESIGNED FOR EVERYDAY CONFIDENCE.
        </p>

      </div>

    </footer>
  );
};

export default Footer;