import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiChevronDown,
  FiSliders,
} from "react-icons/fi";

/* =========================================================
   PRODUCTS
========================================================= */

const products = [
  {
    id: 1,
    name: "Signature White Shirt",
    category: "Formal",
    price: 1499,
    image: "/formal-white.jpg",
    badge: "BESTSELLER",
  },
  {
    id: 2,
    name: "Midnight Navy Shirt",
    category: "Formal",
    price: 1699,
    image: "/formal-navy.jpg",
    badge: "NEW",
  },
  {
    id: 3,
    name: "Classic Blue Shirt",
    category: "Formal",
    price: 1399,
    image: "/formal-blue.jpg",
    badge: "",
  },
  {
    id: 4,
    name: "Charcoal Grey Shirt",
    category: "Formal",
    price: 1599,
    image: "/formal-grey.jpg",
    badge: "",
  },

  {
    id: 6,
    name: "Striped Weekend Shirt",
    category: "Casual",
    price: 1299,
    image: "/casual-shirt.jpg",
    badge: "BESTSELLER",
  },
  {
    id: 9,
    name: "Ivory Linen Shirt",
    category: "Casual",
    price: 1399,
    image: "/casual-beige.jpg",
    badge: "",
  },
  {
    id: 10,
    name: "Stone Casual Shirt",
    category: "Casual",
    price: 1499,
    image: "/casual-denim.jpg",
    badge: "NEW",
  },
  {
    id: 11,
    name: "Olive Textured Shirt",
    category: "Casual",
    price: 1599,
    image: "/casual-olive.jpg",
    badge: "",
  },

  {
    id: 12,
    name: "Botanical Print Shirt",
    category: "Printed",
    price: 1599,
    image: "/product-printed-shirt.jpg",
    badge: "NEW",
  },
  {
    id: 13,
    name: "Midnight Pattern Shirt",
    category: "Printed",
    price: 1699,
    image: "/printed-dark.jpg",
    badge: "",
  },
  {
    id: 14,
    name: "Sage Floral Shirt",
    category: "Printed",
    price: 1499,
    image: "/printed-sage.jpg",
    badge: "",
  },
  {
    id: 15,
    name: "Ivory Motif Shirt",
    category: "Printed",
    price: 1599,
    image: "/printed-ivory.jpg",
    badge: "",
  },

  {
    id: 16,
    name: "Midnight Luxe Shirt",
    category: "Premium",
    price: 1999,
    image: "/premium-black.jpg",
    badge: "BESTSELLER",
  },
  {
    id: 17,
    name: "Champagne Satin Shirt",
    category: "Premium",
    price: 2199,
    image: "/premium-cream.jpg",
    badge: "NEW",
  },
  {
    id: 18,
    name: "Royal Navy Shirt",
    category: "Premium",
    price: 2299,
    image: "/premium-navy.jpg",
    badge: "",
  },
  {
    id: 19,
    name: "Mocha Textured Shirt",
    category: "Premium",
    price: 2099,
    image: "/premium-brown.jpg",
    badge: "",
  },
];

/* =========================================================
   TOP CATEGORY LINKS
========================================================= */

const categoryLinks = [
  {
    name: "All Shirts",
    path: "/shop",
  },
  {
    name: "Formal",
    path: "/shirts/formal",
  },
  {
    name: "Casual",
    path: "/shirts/casual",
  },
  {
    name: "Printed",
    path: "/shirts/printed",
  },
  {
    name: "Premium",
    path: "/shirts/premium",
  },
];

/* =========================================================
   FILTER CATEGORIES
========================================================= */

const filterCategories = [
  "All Shirts",
  "Formal",
  "Casual",
  "Printed",
  "Premium",
];

/* =========================================================
   PRODUCT CARD
========================================================= */

const ProductCard = ({ product }) => {
  return (
    <div className="group min-w-0">
      <Link
        to={`/product/${product.id}`}
        className="relative block overflow-hidden bg-[#ded5c8] aspect-[4/5]"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
        />

        {product.badge && (
          <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#f7f2e9] px-3 py-2 text-[8px] sm:text-[9px] font-bold tracking-[0.18em] z-10">
            {product.badge}
          </span>
        )}
      </Link>

      <div className="pt-3 sm:pt-4 pb-4 border-b border-[#cfc4b4]">
        <p className="text-[#b66d17] text-[8px] sm:text-[9px] tracking-[0.2em] font-semibold uppercase mb-2">
          {product.category}
        </p>

        <div className="flex items-start justify-between gap-3">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-serif text-[16px] sm:text-[19px] lg:text-[20px] leading-tight">
              {product.name}
            </h3>
          </Link>

          <span className="font-semibold text-[11px] sm:text-[12px] whitespace-nowrap">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   SHOP PAGE
========================================================= */

const Shop = () => {
  const sliderRef = useRef(null);

  const [activeCategory, setActiveCategory] =
    useState("All Shirts");

  const [sortOpen, setSortOpen] = useState(false);

  const [filterOpen, setFilterOpen] = useState(false);

  const [sortBy, setSortBy] = useState("Featured");

  const [visibleCount, setVisibleCount] = useState(4);

  /* ================= FILTER ================= */

  const changeCategory = (category) => {
    setActiveCategory(category);
    setVisibleCount(4);
    setFilterOpen(false);
  };

  const filteredProducts =
    activeCategory === "All Shirts"
      ? products
      : products.filter(
          (product) =>
            product.category === activeCategory
        );

  /* ================= SORT ================= */

  const sortedProducts = [...filteredProducts].sort(
    (a, b) => {
      if (sortBy === "Price: Low to High") {
        return a.price - b.price;
      }

      if (sortBy === "Price: High to Low") {
        return b.price - a.price;
      }

      if (sortBy === "Name") {
        return a.name.localeCompare(b.name);
      }

      return 0;
    }
  );

  const visibleProducts =
    sortedProducts.slice(0, visibleCount);

  const bestSellers = products.filter(
    (product) =>
      product.badge === "BESTSELLER"
  );

  /* ================= SLIDER ================= */

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    const amount =
      sliderRef.current.clientWidth * 0.7;

    sliderRef.current.scrollBy({
      left:
        direction === "left"
          ? -amount
          : amount,
      behavior: "smooth",
    });
  };

  return (
    <main
      className="
        bg-[#f4efe7]
        text-[#171714]
        min-h-screen
      "
    >
      {/* =====================================================
          SHOP HEADER
      ===================================================== */}

      <section
        className="
          px-5
          sm:px-8
          lg:px-12
          xl:px-14

          pt-5
          lg:pt-6
        "
      >
        <div className="max-w-[1440px] mx-auto">
          <div
            className="
              grid
              lg:grid-cols-[1.2fr_0.8fr]

              gap-5
              lg:gap-12

              items-end

              pb-5
            "
          >
            {/* LEFT */}

            <div>
              <div
                className="
                  flex
                  items-center
                  gap-4
                  mb-3
                "
              >
                <span
                  className="
                    w-7
                    h-px
                    bg-[#d58420]
                  "
                />

                <p
                  className="
                    text-[#b66d17]

                    text-[9px]
                    sm:text-[10px]

                    font-bold
                    tracking-[0.3em]
                    uppercase
                  "
                >
                  Karon Plus Shop
                </p>
              </div>

              <h1
                className="
                  font-serif

                  text-[42px]
                  sm:text-[52px]
                  lg:text-[58px]

                  leading-[0.95]
                  tracking-[-0.03em]
                "
              >
                Shop All{" "}

                <span
                  className="
                    italic
                    font-normal
                    text-[#d5811e]
                  "
                >
                  Shirts.
                </span>
              </h1>
            </div>

            {/* RIGHT */}

            <div
              className="
                hidden
                md:block

                max-w-[430px]
                lg:ml-auto
              "
            >
              <p
                className="
                  text-[12px]
                  leading-[1.6]
                  text-[#514a41]
                  text-right
                "
              >
                Refined shirts for work,
                weekends and everything in
                between — designed for comfort,
                confidence and effortless style.
              </p>
            </div>
          </div>

          {/* CATEGORY LINKS */}

          <div
            className="
              border-y
              border-[#cfc2af]
            "
          >
            <div
              className="
                flex
                items-center

                gap-7
                sm:gap-10

                overflow-x-auto

                py-3.5

                [&::-webkit-scrollbar]:hidden
                [-ms-overflow-style:none]
                [scrollbar-width:none]
              "
            >
              {categoryLinks.map((category) => (
                <Link
                  key={category.name}
                  to={category.path}
                  className={`
                    relative
                    shrink-0

                    text-[9px]
                    sm:text-[10px]

                    font-bold
                    tracking-[0.2em]
                    uppercase

                    pb-1

                    transition-colors

                    ${
                      category.name === "All Shirts"
                        ? "text-[#c77718]"
                        : "text-[#171714] hover:text-[#c77718]"
                    }
                  `}
                >
                  {category.name}

                  {category.name === "All Shirts" && (
                    <span
                      className="
                        absolute
                        left-0
                        right-0
                        -bottom-[15px]
                        h-[2px]
                        bg-[#c77718]
                      "
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          NEW ARRIVALS
      ===================================================== */}

      <section
        className="
          px-5
          sm:px-8
          lg:px-12
          xl:px-14

          pt-6
          lg:pt-7
        "
      >
        <div className="max-w-[1440px] mx-auto">
          <div
            className="
              flex
              items-end
              justify-between
              gap-5
              mb-5
            "
          >
            <div>
              <p
                className="
                  text-[#b66d17]
                  text-[9px]
                  font-bold
                  tracking-[0.3em]
                  uppercase
                  mb-2
                "
              >
                Latest Drop
              </p>

              <h2
                className="
                  font-serif
                  text-[34px]
                  sm:text-[40px]
                  lg:text-[42px]
                  leading-none
                "
              >
                New Arrivals
              </h2>
            </div>

            <Link
              to="/new-arrivals"
              className="
                hidden
                sm:flex
                items-center
                gap-5
                text-[9px]
                font-bold
                tracking-[0.2em]
                border-b
                border-[#c7781a]
                pb-2
              "
            >
              VIEW NEW ARRIVALS

              <FiArrowRight
                className="text-[#c7781a]"
              />
            </Link>
          </div>

          <div
            className="
              grid
              grid-cols-2
              lg:grid-cols-4
              gap-x-3
              sm:gap-x-5
              gap-y-7
            "
          >
            {products
              .slice(0, 4)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BEST SELLERS
      ===================================================== */}

      <section
        className="
          mt-12
          lg:mt-16
          bg-[#171715]
          text-[#f5f0e8]
          py-11
          lg:py-12
        "
      >
        <div className="max-w-[1440px] mx-auto">
          <div
            className="
              px-5
              sm:px-8
              lg:px-12
              xl:px-14
              flex
              items-end
              justify-between
              gap-6
              mb-7
            "
          >
            <div>
              <p
                className="
                  text-[#d88b28]
                  text-[9px]
                  font-bold
                  tracking-[0.3em]
                  uppercase
                  mb-3
                "
              >
                Most Wanted
              </p>

              <h2
                className="
                  font-serif
                  text-[36px]
                  sm:text-[44px]
                  lg:text-[50px]
                  leading-none
                "
              >
                Best Sellers.
              </h2>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() =>
                  scrollSlider("left")
                }
                aria-label="Scroll left"
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-white/30
                  flex
                  items-center
                  justify-center
                  hover:bg-[#d48826]
                  hover:border-[#d48826]
                  transition
                "
              >
                <FiArrowLeft />
              </button>

              <button
                type="button"
                onClick={() =>
                  scrollSlider("right")
                }
                aria-label="Scroll right"
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-white/30
                  flex
                  items-center
                  justify-center
                  hover:bg-[#d48826]
                  hover:border-[#d48826]
                  transition
                "
              >
                <FiArrowRight />
              </button>
            </div>
          </div>

          <div
            ref={sliderRef}
            className="
              flex
              overflow-x-auto
              scroll-smooth
              gap-4
              sm:gap-5
              pl-5
              sm:pl-8
              lg:pl-12
              xl:pl-14
              pr-5
              pb-2
              [&::-webkit-scrollbar]:hidden
              [-ms-overflow-style:none]
              [scrollbar-width:none]
            "
          >
            {[
              ...bestSellers,
              ...products.slice(0, 4),
            ].map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="
                  group
                  shrink-0
                  w-[72vw]
                  sm:w-[42vw]
                  md:w-[31vw]
                  lg:w-[25vw]
                  xl:w-[300px]
                "
              >
                <Link
                  to={`/product/${product.id}`}
                  className="
                    aspect-[4/5]
                    overflow-hidden
                    bg-[#2a2926]
                    relative
                    block
                  "
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-[1.04]
                      transition-transform
                      duration-700
                    "
                  />

                  <span
                    className="
                      absolute
                      top-4
                      left-4
                      bg-[#f5f0e8]
                      text-[#171714]
                      px-3
                      py-2
                      text-[8px]
                      font-bold
                      tracking-[0.18em]
                    "
                  >
                    BESTSELLER
                  </span>
                </Link>

                <div className="pt-3">
                  <p
                    className="
                      text-[#d68a28]
                      text-[8px]
                      tracking-[0.2em]
                      uppercase
                      mb-2
                    "
                  >
                    {product.category}
                  </p>

                  <div
                    className="
                      flex
                      justify-between
                      gap-4
                    "
                  >
                    <Link to={`/product/${product.id}`}>
                      <h3
                        className="
                          font-serif
                          text-[19px]
                          hover:text-[#d68a28]
                          transition
                        "
                      >
                        {product.name}
                      </h3>
                    </Link>

                    <span
                      className="
                        text-[12px]
                        whitespace-nowrap
                      "
                    >
                      ₹
                      {product.price.toLocaleString(
                        "en-IN"
                      )}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ALL PRODUCTS
      ===================================================== */}

      <section
        className="
          px-5
          sm:px-8
          lg:px-12
          xl:px-14
          py-11
          lg:py-14
        "
      >
        <div className="max-w-[1440px] mx-auto">
          <div
            className="
              flex
              flex-col
              lg:flex-row
              lg:items-end
              justify-between
              gap-6
              pb-6
              border-b
              border-[#cfc2af]
            "
          >
            <div>
              <p
                className="
                  text-[#b66d17]
                  text-[9px]
                  font-bold
                  tracking-[0.3em]
                  uppercase
                  mb-3
                "
              >
                The Collection
              </p>

              <h2
                className="
                  font-serif
                  text-[36px]
                  sm:text-[44px]
                  lg:text-[50px]
                  leading-none
                "
              >
                {activeCategory ===
                "All Shirts"
                  ? "All Shirts"
                  : `${activeCategory} Shirts`}
              </h2>

              <p
                className="
                  text-[11px]
                  text-[#756b5e]
                  mt-3
                "
              >
                {sortedProducts.length} products
              </p>
            </div>

            {/* FILTER / SORT */}

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-3
                relative
              "
            >
              {/* FILTER */}

              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setFilterOpen(
                      !filterOpen
                    );
                    setSortOpen(false);
                  }}
                  className="
                    h-11
                    px-4
                    sm:px-5
                    border
                    border-[#c7baa7]
                    flex
                    items-center
                    gap-3
                    text-[9px]
                    font-bold
                    tracking-[0.17em]
                    hover:border-[#171714]
                    transition
                  "
                >
                  <FiSliders />
                  FILTER
                </button>

                {filterOpen && (
                  <div
                    className="
                      absolute
                      left-0
                      top-[52px]
                      bg-[#f8f3eb]
                      border
                      border-[#c9bda9]
                      w-[230px]
                      p-5
                      z-30
                      shadow-lg
                    "
                  >
                    <p
                      className="
                        text-[9px]
                        font-bold
                        tracking-[0.2em]
                        mb-4
                      "
                    >
                      CATEGORY
                    </p>

                    <div className="space-y-3">
                      {filterCategories.map(
                        (category) => (
                          <button
                            type="button"
                            key={category}
                            onClick={() =>
                              changeCategory(
                                category
                              )
                            }
                            className={`
                              block
                              text-[12px]

                              ${
                                activeCategory ===
                                category
                                  ? "text-[#c77718] font-semibold"
                                  : "hover:text-[#c77718]"
                              }
                            `}
                          >
                            {category}
                          </button>
                        )
                      )}
                    </div>

                    <div
                      className="
                        border-t
                        border-[#d4c9ba]
                        mt-5
                        pt-5
                      "
                    >
                      <p
                        className="
                          text-[9px]
                          font-bold
                          tracking-[0.2em]
                          mb-3
                        "
                      >
                        AVAILABLE SIZES
                      </p>

                      <div className="flex gap-2">
                        {[
                          "S",
                          "M",
                          "L",
                          "XL",
                        ].map((size) => (
                          <button
                            type="button"
                            key={size}
                            className="
                              w-9
                              h-9
                              border
                              border-[#c9bda9]
                              text-[10px]
                              hover:bg-[#171714]
                              hover:text-white
                              transition
                            "
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* SORT */}

              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setSortOpen(!sortOpen);
                    setFilterOpen(false);
                  }}
                  className="
                    h-11
                    min-w-[150px]
                    sm:min-w-[185px]
                    px-4
                    sm:px-5
                    border
                    border-[#c7baa7]
                    flex
                    items-center
                    justify-between
                    gap-4
                    text-[9px]
                    font-bold
                    tracking-[0.14em]
                    hover:border-[#171714]
                    transition
                  "
                >
                  {sortBy.toUpperCase()}

                  <FiChevronDown />
                </button>

                {sortOpen && (
                  <div
                    className="
                      absolute
                      right-0
                      top-[52px]
                      bg-[#f8f3eb]
                      border
                      border-[#c9bda9]
                      w-[210px]
                      z-30
                      shadow-lg
                    "
                  >
                    {[
                      "Featured",
                      "Price: Low to High",
                      "Price: High to Low",
                      "Name",
                    ].map((option) => (
                      <button
                        type="button"
                        key={option}
                        onClick={() => {
                          setSortBy(option);
                          setSortOpen(false);
                        }}
                        className="
                          block
                          w-full
                          text-left
                          px-5
                          py-3
                          text-[11px]
                          hover:bg-[#ebe2d5]
                          transition
                        "
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* PRODUCTS */}

          <div
            className="
              grid
              grid-cols-2
              lg:grid-cols-4
              gap-x-3
              sm:gap-x-5
              gap-y-8
              mt-7
            "
          >
            {visibleProducts.map(
              (product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              )
            )}
          </div>

          {/* LOAD MORE */}

          {visibleCount <
            sortedProducts.length && (
            <div
              className="
                flex
                justify-center
                mt-9
                lg:mt-10
              "
            >
              <button
                type="button"
                onClick={() =>
                  setVisibleCount(
                    (current) =>
                      Math.min(
                        current + 4,
                        sortedProducts.length
                      )
                  )
                }
                className="
                  group
                  min-w-[190px]
                  border
                  border-[#171714]
                  px-6
                  py-3.5
                  flex
                  items-center
                  justify-between
                  gap-7
                  text-[9px]
                  font-bold
                  tracking-[0.2em]
                  hover:bg-[#171714]
                  hover:text-white
                  transition-all
                "
              >
                LOAD MORE

                <FiArrowRight
                  className="
                    group-hover:translate-x-1
                    transition-transform
                  "
                />
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Shop;