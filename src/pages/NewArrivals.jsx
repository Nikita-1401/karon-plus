import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiHeart,
  FiStar,
} from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Signature White Shirt",
    category: "Formal",
    price: 1499,
    image: "/product-white-shirt.jpg",
    badge: "JUST IN",
  },
  {
    id: 2,
    name: "Midnight Black Shirt",
    category: "Premium",
    price: 1699,
    image: "/product-black-shirt.jpg",
    badge: "NEW",
  },
  {
    id: 3,
    name: "Classic Sky Shirt",
    category: "Formal",
    price: 1399,
    image: "/product-blue-shirt.jpg",
    badge: "NEW",
  },
  {
    id: 4,
    name: "Modern Printed Shirt",
    category: "Printed",
    price: 1599,
    image: "/product-printed-shirt.jpg",
    badge: "JUST IN",
  },
  {
    id: 5,
    name: "Essential Formal Shirt",
    category: "Formal",
    price: 1599,
    image: "/formal-shirt.jpg",
    badge: "NEW",
  },
  {
    id: 6,
    name: "Weekend Casual Shirt",
    category: "Casual",
    price: 1299,
    image: "/casual-shirt.jpg",
    badge: "NEW",
  },
  {
    id: 7,
    name: "Refined Premium Shirt",
    category: "Premium",
    price: 1899,
    image: "/premium-shirt.jpg",
    badge: "JUST IN",
  },
  {
    id: 8,
    name: "Signature Printed Shirt",
    category: "Printed",
    price: 1499,
    image: "/printed-shirt.jpg",
    badge: "NEW",
  },
];

const NewArrivals = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    try {
      const saved =
        JSON.parse(localStorage.getItem("karonWishlist")) || [];

      setWishlist(saved);
    } catch {
      setWishlist([]);
    }
  }, []);

  const toggleWishlist = (productId) => {
    const updated = wishlist.includes(productId)
      ? wishlist.filter((id) => id !== productId)
      : [...wishlist, productId];

    setWishlist(updated);

    localStorage.setItem(
      "karonWishlist",
      JSON.stringify(updated)
    );

    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  const HeartButton = ({ productId }) => {
    const liked = wishlist.includes(productId);

    return (
      <button
        type="button"
        onClick={() => toggleWishlist(productId)}
        aria-label={
          liked
            ? "Remove from wishlist"
            : "Add to wishlist"
        }
        className={`
          w-8 h-8
          rounded-full
          flex items-center
          justify-center
          transition
          ${
            liked
              ? "bg-[#171714] text-white"
              : "bg-[#faf7f1] text-[#171714] hover:bg-[#171714] hover:text-white"
          }
        `}
      >
        <FiHeart
          size={12}
          className={liked ? "fill-current" : ""}
        />
      </button>
    );
  };

  const topProducts = products.slice(0, 3);
  const moreProducts = products.slice(3);

  return (
    <main className="min-h-screen bg-[#f4efe7] text-[#171714]">

      {/* ================= TOP INTRO ================= */}
      <section className="border-b border-[#d6cbbb]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-9 xl:px-10">

          <div className="h-auto sm:h-[66px] py-3 sm:py-0 flex items-center justify-between gap-4">

            {/* LEFT */}
            <div className="flex items-center gap-3">

              <div className="w-9 h-9 rounded-full bg-[#171714] text-white flex items-center justify-center shrink-0">
                <FiStar size={12} />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[#c77718] text-[8px] font-bold tracking-[0.2em]">
                    NEW DROP
                  </span>

                  <span className="w-5 h-px bg-[#c77718]" />
                </div>

                <h1 className="font-serif text-[25px] sm:text-[28px] leading-none mt-[2px]">
                  Just{" "}
                  <span className="italic font-normal text-[#d27c19]">
                    Arrived.
                  </span>
                </h1>
              </div>
            </div>

            {/* RIGHT */}
            <div className="hidden sm:flex items-center gap-5">

              <p className="hidden md:block text-[10px] text-[#675e53]">
                Fresh styles made for what comes next.
              </p>

              <span className="w-px h-7 bg-[#d0c2af]" />

              <div className="text-right">
                <p className="text-[7px] tracking-[0.17em] text-[#8a7d6c]">
                  LATEST
                </p>

                <p className="text-[9px] font-bold mt-[2px]">
                  {products.length} NEW STYLES
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NEW DROP ================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-9 xl:px-10 pt-4">

        {/* SECTION HEADER */}
        <div className="flex items-end justify-between mb-3">

          <div>
            <p className="text-[#c77718] text-[7px] font-bold tracking-[0.2em]">
              01 / NEW SEASON
            </p>

            <h2 className="font-serif text-[20px] sm:text-[22px] leading-none mt-1">
              The New Drop
            </h2>
          </div>

          <Link
            to="/shop"
            className="flex items-center gap-2 text-[8px] font-bold tracking-[0.14em] hover:text-[#c77718] transition"
          >
            VIEW COLLECTION
            <FiArrowRight size={10} />
          </Link>
        </div>

        {/* TOP 3 DIFFERENT CARDS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-[1.15fr_1fr_1fr]
            gap-3
          "
        >
          {topProducts.map((product, index) => {
            const isFeatured = index === 0;

            return (
              <article
                key={product.id}
                className="group min-w-0"
              >

                {/* IMAGE BOX */}
                <div
                  className={`
                    relative
                    overflow-hidden
                    bg-[#ddd3c5]
                    h-[300px]
                    sm:h-[320px]
                    lg:h-[325px]
                    ${isFeatured ? "sm:col-span-2 lg:col-span-1" : ""}
                  `}
                >
                  <Link
                    to={`/product/${product.id}`}
                    className="block w-full h-full"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="
                        w-full
                        h-full
                        object-contain
                        transition-transform
                        duration-500
                        group-hover:scale-[1.025]
                      "
                    />
                  </Link>

                  {/* BADGE */}
                  <span className="absolute top-3 left-3 bg-[#171714] text-white px-2.5 py-1.5 text-[7px] font-bold tracking-[0.15em]">
                    {isFeatured
                      ? "EDITOR'S PICK"
                      : product.badge}
                  </span>

                  {/* HEART */}
                  <div className="absolute top-3 right-3">
                    <HeartButton productId={product.id} />
                  </div>

                  {/* NUMBER */}
                  <span className="absolute left-3 bottom-3 bg-[#f8f3eb]/95 px-2 py-1 text-[7px] font-bold tracking-[0.15em]">
                    0{index + 1}
                  </span>
                </div>

                {/* PRODUCT INFO */}
                <div className="pt-2.5 pb-3 border-b border-[#cfc3b2]">

                  <div className="flex items-center justify-between gap-3">

                    <p className="text-[#b66d17] text-[7px] font-bold tracking-[0.17em] uppercase">
                      {product.category}
                    </p>

                    <p className="text-[10px] font-semibold">
                      ₹
                      {product.price.toLocaleString(
                        "en-IN"
                      )}
                    </p>
                  </div>

                  <div className="flex items-end justify-between gap-3 mt-1">

                    <Link
                      to={`/product/${product.id}`}
                      className="font-serif text-[16px] sm:text-[17px] lg:text-[18px] leading-tight hover:text-[#c77718] transition"
                    >
                      {product.name}
                    </Link>

                    <Link
                      to={`/product/${product.id}`}
                      className="w-7 h-7 shrink-0 border border-[#bdae9b] flex items-center justify-center hover:bg-[#171714] hover:text-white hover:border-[#171714] transition"
                    >
                      <FiArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ================= SECOND COLLECTION ================= */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-9 xl:px-10 pt-6 pb-9">

        {/* HEADER */}
        <div className="flex items-end justify-between border-b border-[#cec1af] pb-2 mb-3">

          <div>
            <p className="text-[#c77718] text-[7px] font-bold tracking-[0.2em]">
              02 / FRESH PICKS
            </p>

            <h2 className="font-serif text-[18px] sm:text-[20px] leading-none mt-1">
              Just Landed
            </h2>
          </div>

          <p className="hidden md:block text-[9px] text-[#756b5f]">
            Five fresh additions to the collection.
          </p>
        </div>

        {/* 5 SMALL CARDS */}
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
            gap-3
          "
        >
          {moreProducts.map((product, index) => {
            const liked = wishlist.includes(product.id);

            return (
              <article
                key={product.id}
                className="group min-w-0"
              >

                {/* IMAGE */}
                <div
                  className="
                    relative
                    overflow-hidden
                    bg-[#ddd3c5]
                    h-[220px]
                    sm:h-[240px]
                    lg:h-[225px]
                  "
                >
                  <Link
                    to={`/product/${product.id}`}
                    className="block w-full h-full"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="
                        w-full
                        h-full
                        object-contain
                        transition-transform
                        duration-500
                        group-hover:scale-[1.025]
                      "
                    />
                  </Link>

                  <span className="absolute top-2.5 left-2.5 bg-[#171714] text-white px-2 py-1 text-[6px] font-bold tracking-[0.14em]">
                    {product.badge}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      toggleWishlist(product.id)
                    }
                    aria-label="Wishlist"
                    className={`
                      absolute
                      top-2.5
                      right-2.5
                      w-7
                      h-7
                      rounded-full
                      flex
                      items-center
                      justify-center
                      transition
                      ${
                        liked
                          ? "bg-[#171714] text-white"
                          : "bg-[#f8f4ed] hover:bg-[#171714] hover:text-white"
                      }
                    `}
                  >
                    <FiHeart
                      size={11}
                      className={
                        liked ? "fill-current" : ""
                      }
                    />
                  </button>

                  <span className="absolute left-2.5 bottom-2.5 bg-[#f8f3eb]/95 px-2 py-1 text-[6px] font-bold tracking-[0.14em]">
                    0{index + 4}
                  </span>
                </div>

                {/* INFO */}
                <div className="pt-2 pb-2.5 border-b border-[#cfc3b2]">

                  <div className="flex items-center justify-between gap-2">

                    <p className="text-[#b66d17] text-[6px] sm:text-[7px] font-bold tracking-[0.15em] uppercase">
                      {product.category}
                    </p>

                    <p className="text-[9px] font-semibold">
                      ₹
                      {product.price.toLocaleString(
                        "en-IN"
                      )}
                    </p>
                  </div>

                  <Link
                    to={`/product/${product.id}`}
                    className="block font-serif text-[14px] sm:text-[15px] leading-tight mt-1 hover:text-[#c77718] transition"
                  >
                    {product.name}
                  </Link>

                  <Link
                    to={`/product/${product.id}`}
                    className="mt-2 flex items-center justify-between text-[7px] font-bold tracking-[0.13em] hover:text-[#c77718] transition"
                  >
                    DISCOVER
                    <FiArrowRight size={9} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default NewArrivals;