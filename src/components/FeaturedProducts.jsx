import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiHeart,
  FiEye,
  FiX,
} from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Signature White Shirt",
    category: "Premium Formal",
    price: "₹1,499",
    image: "/product-white-shirt.jpg",
    tag: "BESTSELLER",
  },
  {
    id: 2,
    name: "Midnight Black Shirt",
    category: "Evening Collection",
    price: "₹1,699",
    image: "/product-black-shirt.jpg",
    tag: "NEW",
  },
  {
    id: 3,
    name: "Classic Sky Shirt",
    category: "Modern Formal",
    price: "₹1,399",
    image: "/product-blue-shirt.jpg",
    tag: "SIGNATURE",
  },
  {
    id: 4,
    name: "Azure Floral Shirt",
    category: "Printed Collection",
    price: "₹1,599",
    image: "/product-printed-shirt.jpg",
    tag: "TRENDING",
  },
];

const FeaturedProducts = () => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  return (
    <>
      <section
        id="shop"
        className="bg-[#fffdf9] px-5 py-12 md:px-8 md:py-14 lg:px-10 lg:py-16"
      >
        <div className="mx-auto max-w-[1450px]">
          {/* HEADER */}
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.4em] text-[#c99142]">
                Curated For You
              </p>

              <h2 className="font-serif text-[30px] leading-tight text-[#171717] md:text-[38px] lg:text-[42px]">
                The Karon{" "}
                <span className="italic text-[#c99142]">
                  Edit
                </span>
              </h2>

              <p className="mt-3 max-w-[540px] text-[13px] leading-6 text-[#777]">
                A refined selection of our signature shirts, designed for
                effortless style and everyday distinction.
              </p>
            </div>

            <a
              href="#all-products"
              className="
                group flex w-fit items-center gap-3
                border-b border-[#222]
                pb-2
                text-[9px] font-semibold
                uppercase tracking-[0.22em]
                text-[#222]
              "
            >
              View All Collection

              <FiArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* PRODUCTS */}
          <div className="grid grid-cols-1 gap-x-4 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article key={product.id} className="group">
                {/* IMAGE */}
                <div className="relative overflow-hidden bg-[#f2ede6]">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.05]
                      "
                    />
                  </div>

                  {/* TAG */}
                  <span
                    className="
                      absolute left-4 top-4
                      bg-[#fffdf9]
                      px-3 py-2
                      text-[8px]
                      font-bold
                      tracking-[0.18em]
                      text-[#222]
                    "
                  >
                    {product.tag}
                  </span>

                  {/* HEART */}
                  <button
                    type="button"
                    aria-label={`Add ${product.name} to wishlist`}
                    className="
                      absolute right-4 top-4
                      flex h-9 w-9
                      items-center justify-center
                      rounded-full
                      bg-white
                      text-[#111]
                      shadow-sm
                      transition
                      duration-300
                      hover:bg-[#c99142]
                      hover:text-white
                    "
                  >
                    <FiHeart size={16} />
                  </button>

                  {/* QUICK VIEW */}
                  <button
                    type="button"
                    onClick={() => setQuickViewProduct(product)}
                    className="
                      absolute bottom-0 left-0
                      flex w-full
                      translate-y-full
                      items-center justify-center
                      gap-2
                      bg-[#171717]/95
                      py-4
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-white
                      transition-transform
                      duration-300
                      group-hover:translate-y-0
                    "
                  >
                    <FiEye size={15} />
                    Quick View
                  </button>
                </div>

                {/* PRODUCT INFO */}
                <div className="pt-4">
                  <p className="mb-1 text-[8px] font-semibold uppercase tracking-[0.25em] text-[#b9853d]">
                    {product.category}
                  </p>

                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-[19px] text-[#191919] md:text-[20px]">
                      {product.name}
                    </h3>

                    <p className="whitespace-nowrap text-[13px] font-semibold text-[#222]">
                      {product.price}
                    </p>
                  </div>

                  <div className="mt-3 h-px w-full bg-[#e5ded4]">
                    <div className="h-px w-0 bg-[#c99142] transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK VIEW MODAL */}
      {quickViewProduct && (
        <div
          className="
            fixed inset-0 z-[9999]
            flex items-center justify-center
            bg-black/55
            p-4
          "
          onClick={closeQuickView}
        >
          <div
            className="
              relative
              w-full max-w-[760px]
              overflow-hidden
              bg-[#fffdf9]
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              type="button"
              onClick={closeQuickView}
              aria-label="Close quick view"
              className="
                absolute right-4 top-4 z-20
                flex h-10 w-10
                items-center justify-center
                rounded-full
                bg-white
                text-[#171717]
                shadow-md
                transition
                hover:bg-[#171717]
                hover:text-white
              "
            >
              <FiX size={19} />
            </button>

            <div className="grid md:grid-cols-2">
              {/* IMAGE */}
              <div className="bg-[#eee6db]">
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  className="
                    h-[340px]
                    w-full
                    object-cover
                    sm:h-[400px]
                    md:h-[460px]
                  "
                />
              </div>

              {/* DETAILS */}
              <div className="flex flex-col justify-center p-7 sm:p-9">
                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.25em] text-[#b9853d]">
                  {quickViewProduct.category}
                </p>

                <h2 className="font-serif text-[30px] leading-tight text-[#171717]">
                  {quickViewProduct.name}
                </h2>

                <p className="mt-4 text-[18px] font-semibold text-[#171717]">
                  {quickViewProduct.price}
                </p>

                <div className="my-6 h-px bg-[#ded5c9]" />

                <p className="text-[13px] leading-6 text-[#70685e]">
                  Refined craftsmanship, comfortable fabric and timeless
                  styling designed for effortless everyday wear.
                </p>

                {/* SIZES */}
                <div className="mt-7">
                  <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em]">
                    Available Sizes
                  </p>

                  <div className="flex gap-2">
                    {["S", "M", "L", "XL"].map((size) => (
                      <button
                        key={size}
                        type="button"
                        className="
                          flex h-10 w-10
                          items-center justify-center
                          border border-[#cfc4b5]
                          text-[11px]
                          font-semibold
                          transition
                          hover:border-[#171717]
                          hover:bg-[#171717]
                          hover:text-white
                        "
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* VIEW PRODUCT */}
                <Link
                  to={`/product/${quickViewProduct.id}`}
                  onClick={closeQuickView}
                  className="
                    mt-7
                    flex h-12 w-full
                    items-center justify-center
                    bg-[#171717]
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-white
                    transition
                    hover:bg-[#c99142]
                  "
                >
                  VIEW PRODUCT
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedProducts;