import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiSearch,
  FiX,
} from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Signature White Shirt",
    category: "Formal",
    price: 1499,
    image: "/product-white-shirt.jpg",
  },
  {
    id: 2,
    name: "Midnight Black Shirt",
    category: "Premium",
    price: 1699,
    image: "/product-black-shirt.jpg",
  },
  {
    id: 3,
    name: "Classic Sky Shirt",
    category: "Formal",
    price: 1399,
    image: "/product-blue-shirt.jpg",
  },
  {
    id: 4,
    name: "Modern Printed Shirt",
    category: "Printed",
    price: 1599,
    image: "/product-printed-shirt.jpg",
  },
  {
    id: 5,
    name: "Essential Formal Shirt",
    category: "Formal",
    price: 1599,
    image: "/formal-shirt.jpg",
  },
  {
    id: 6,
    name: "Weekend Casual Shirt",
    category: "Casual",
    price: 1299,
    image: "/casual-shirt.jpg",
  },
  {
    id: 7,
    name: "Refined Premium Shirt",
    category: "Premium",
    price: 1899,
    image: "/premium-shirt.jpg",
  },
  {
    id: 8,
    name: "Signature Printed Shirt",
    category: "Printed",
    price: 1499,
    image: "/printed-shirt.jpg",
  },
];

const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const searchValue = query.trim().toLowerCase();

  const results = searchValue
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchValue) ||
          product.category.toLowerCase().includes(searchValue)
      )
    : [];

  return (
    <main className="bg-[#f4efe7] text-[#171714] min-h-[calc(100vh-110px)]">
      <section className="px-5 sm:px-8 lg:px-12 py-5 sm:py-7">
        <div className="max-w-[1160px] mx-auto">

          {/* TOP */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-[9px] font-bold tracking-[0.17em]"
            >
              <span className="w-8 h-8 rounded-full border border-[#c9bca9] flex items-center justify-center hover:bg-[#171714] hover:text-white transition">
                <FiArrowLeft size={12} />
              </span>

              BACK
            </button>

            <div className="hidden sm:flex text-[8px] tracking-[0.18em] uppercase">
              <Link
                to="/"
                className="text-[#8b7d6a] hover:text-[#c7791c]"
              >
                Home
              </Link>

              <span className="mx-2">/</span>
              <span>Search</span>
            </div>
          </div>

          {/* SEARCH AREA */}
          <div
            className={`mx-auto transition-all duration-300 ${
              searchValue
                ? "max-w-[760px] mt-8"
                : "max-w-[760px] mt-20 sm:mt-24"
            }`}
          >
            {!searchValue && (
              <div className="text-center mb-7">
                <p className="text-[#b66d17] text-[9px] font-bold tracking-[0.28em] uppercase mb-3">
                  Karon Plus
                </p>

                <h1 className="font-serif text-[34px] sm:text-[42px] leading-none">
                  What are you{" "}
                  <span className="italic text-[#d5811e]">
                    looking for?
                  </span>
                </h1>

                <p className="text-[12px] sm:text-[13px] text-[#71675b] mt-3">
                  Search our collection of shirts.
                </p>
              </div>
            )}

            {/* INPUT */}
            <div className="relative">
              <FiSearch
                size={18}
                className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-[#766d61]"
              />

              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                placeholder="Search shirts..."
                className="
                  w-full
                  h-[52px]
                  sm:h-[56px]
                  bg-[#f8f3eb]
                  border
                  border-[#c8baa6]
                  pl-12
                  sm:pl-14
                  pr-12
                  text-[13px]
                  sm:text-[14px]
                  outline-none
                  placeholder:text-[#94897b]
                  focus:border-[#171714]
                  transition
                "
              />

              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#776d61] hover:text-[#c77718]"
                >
                  <FiX size={17} />
                </button>
              )}
            </div>

            {!searchValue && (
              <p className="text-center text-[10px] sm:text-[11px] text-[#8b8174] mt-3">
                Try “Formal”, “Black”, “Printed” or “Premium”
              </p>
            )}
          </div>

          {/* RESULTS - ONLY AFTER SEARCH */}
          {searchValue && (
            <div className="mt-7">

              {/* RESULT COUNT */}
              <div className="flex items-center justify-between border-b border-[#cfc2af] pb-3 mb-5">
                <p className="text-[11px] sm:text-[12px] text-[#62594e]">
                  Results for{" "}
                  <span className="font-semibold text-[#171714]">
                    “{query}”
                  </span>
                </p>

                <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.17em] uppercase">
                  {results.length}{" "}
                  {results.length === 1 ? "Product" : "Products"}
                </span>
              </div>

              {/* FOUND */}
              {results.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {results.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      className="group flex items-center gap-4 border border-[#d1c5b4] bg-[#f7f2ea] p-3 hover:border-[#aa9a84] transition"
                    >
                      {/* SMALL IMAGE */}
                      <div className="w-[82px] h-[96px] sm:w-[90px] sm:h-[105px] shrink-0 overflow-hidden bg-[#ded5c8]">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                        />
                      </div>

                      {/* DETAILS */}
                      <div className="flex-1 min-w-0">
                        <p className="text-[#b66d17] text-[8px] font-bold tracking-[0.18em] uppercase mb-1.5">
                          {product.category}
                        </p>

                        <h2 className="font-serif text-[18px] sm:text-[20px] leading-tight">
                          {product.name}
                        </h2>

                        <p className="text-[11px] sm:text-[12px] font-semibold mt-2">
                          ₹{product.price.toLocaleString("en-IN")}
                        </p>
                      </div>

                      <FiArrowRight
                        size={15}
                        className="mr-2 text-[#b87526] group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  ))}
                </div>
              ) : (
                /* NO RESULT */
                <div className="text-center py-14 sm:py-16">
                  <FiSearch
                    size={23}
                    className="mx-auto text-[#b57a34]"
                  />

                  <h2 className="font-serif text-[25px] sm:text-[28px] mt-4">
                    No shirts found.
                  </h2>

                  <p className="text-[11px] sm:text-[12px] text-[#756b5e] mt-2">
                    Try another shirt name or category.
                  </p>

                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="mt-5 text-[9px] font-bold tracking-[0.17em] border-b border-[#c77718] pb-1"
                  >
                    CLEAR SEARCH
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Search;