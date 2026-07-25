import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiHeart,
  FiTrash2,
} from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Signature White Shirt",
    category: "Formal",
    price: 1499,
    image: "/product-white-shirt.jpg",
    badge: "BESTSELLER",
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
    badge: "",
  },
  {
    id: 4,
    name: "Modern Printed Shirt",
    category: "Printed",
    price: 1599,
    image: "/product-printed-shirt.jpg",
    badge: "NEW",
  },
  {
    id: 5,
    name: "Essential Formal Shirt",
    category: "Formal",
    price: 1599,
    image: "/formal-shirt.jpg",
    badge: "",
  },
  {
    id: 6,
    name: "Weekend Casual Shirt",
    category: "Casual",
    price: 1299,
    image: "/casual-shirt.jpg",
    badge: "BESTSELLER",
  },
  {
    id: 7,
    name: "Refined Premium Shirt",
    category: "Premium",
    price: 1899,
    image: "/premium-shirt.jpg",
    badge: "",
  },
  {
    id: 8,
    name: "Signature Printed Shirt",
    category: "Printed",
    price: 1499,
    image: "/printed-shirt.jpg",
    badge: "",
  },
];

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  const loadWishlist = () => {
    try {
      const saved =
        JSON.parse(localStorage.getItem("karonWishlist")) || [];

      setWishlist(saved);
    } catch {
      setWishlist([]);
    }
  };

  useEffect(() => {
    loadWishlist();

    window.addEventListener("wishlistUpdated", loadWishlist);
    window.addEventListener("storage", loadWishlist);

    return () => {
      window.removeEventListener("wishlistUpdated", loadWishlist);
      window.removeEventListener("storage", loadWishlist);
    };
  }, []);

  const wishlistProducts = products.filter((product) =>
    wishlist.includes(product.id)
  );

  const removeFromWishlist = (productId) => {
    const updated = wishlist.filter((id) => id !== productId);

    setWishlist(updated);

    localStorage.setItem(
      "karonWishlist",
      JSON.stringify(updated)
    );

    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  return (
    <main className="bg-[#f4efe7] text-[#171714] min-h-[70vh]">

      {/* COMPACT HEADER */}
      <section className="px-4 sm:px-6 lg:px-10 xl:px-12 pt-4">
        <div className="max-w-[1360px] mx-auto">

          <div className="flex items-center justify-between mb-4">
            <Link
              to="/shop"
              className="group flex items-center gap-2 text-[8px] sm:text-[9px] font-bold tracking-[0.18em]"
            >
              <span className="w-7 h-7 rounded-full border border-[#cbbda8] flex items-center justify-center group-hover:bg-[#171714] group-hover:text-white transition">
                <FiArrowLeft size={12} />
              </span>

              BACK TO SHOP
            </Link>

            <div className="hidden sm:flex text-[8px] tracking-[0.17em] uppercase">
              <Link
                to="/"
                className="text-[#8b7d6a] hover:text-[#c7791c]"
              >
                Home
              </Link>

              <span className="mx-2">/</span>

              <span>Wishlist</span>
            </div>
          </div>

          {/* TITLE ROW */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 pb-4 border-b border-[#cfc2af]">

            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-px bg-[#d58420]" />

                <p className="text-[#b66d17] text-[8px] font-bold tracking-[0.25em] uppercase">
                  Saved Favourites
                </p>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-end gap-2 lg:gap-5">
                <h1 className="font-serif text-[32px] sm:text-[37px] lg:text-[41px] leading-none tracking-[-0.025em]">
                  My{" "}
                  <span className="italic font-normal text-[#d5811e]">
                    Wishlist.
                  </span>
                </h1>

                <p className="text-[#655d52] text-[10px] sm:text-[11px] lg:pb-[2px]">
                  Your favourite Karon Plus pieces, saved in one place.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FiHeart size={14} className="text-[#c77718]" />

              <span className="text-[8px] font-bold tracking-[0.18em] uppercase">
                {wishlistProducts.length}{" "}
                {wishlistProducts.length === 1
                  ? "Saved Item"
                  : "Saved Items"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-4 sm:px-6 lg:px-10 xl:px-12 pt-5 pb-8">
        <div className="max-w-[1360px] mx-auto">

          {wishlistProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 sm:gap-x-4 lg:gap-x-5 gap-y-6">

              {wishlistProducts.map((product) => (
                <article key={product.id} className="group min-w-0">

                  <div className="relative overflow-hidden bg-[#ded5c8] aspect-[4/4.7]">

                    <Link
                      to={`/product/${product.id}`}
                      className="block w-full h-full"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </Link>

                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-[#f7f2e9] px-2.5 py-1.5 text-[7px] font-bold tracking-[0.16em]">
                        {product.badge}
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={() =>
                        removeFromWishlist(product.id)
                      }
                      aria-label={`Remove ${product.name}`}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#171714] text-white flex items-center justify-center hover:bg-[#c77718] transition"
                    >
                      <FiTrash2 size={12} />
                    </button>

                    <Link
                      to={`/product/${product.id}`}
                      className="hidden lg:flex absolute inset-x-0 bottom-0 bg-[#171714] text-white px-4 py-3 items-center justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <span className="text-[8px] font-bold tracking-[0.18em]">
                        VIEW PRODUCT
                      </span>

                      <FiArrowRight
                        size={12}
                        className="text-[#d58a29]"
                      />
                    </Link>
                  </div>

                  <div className="pt-3 pb-3 border-b border-[#cfc4b4]">
                    <p className="text-[#b66d17] text-[7px] sm:text-[8px] tracking-[0.18em] font-semibold uppercase mb-1.5">
                      {product.category}
                    </p>

                    <div className="flex items-start justify-between gap-2">
                      <Link
                        to={`/product/${product.id}`}
                        className="font-serif text-[14px] sm:text-[16px] lg:text-[17px] leading-tight hover:text-[#bd7119] transition"
                      >
                        {product.name}
                      </Link>

                      <span className="font-semibold text-[9px] sm:text-[10px] whitespace-nowrap">
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <Link
                      to={`/product/${product.id}`}
                      className="mt-2.5 flex items-center justify-between text-[7px] sm:text-[8px] font-bold tracking-[0.17em] uppercase hover:text-[#c77718] transition"
                    >
                      View Details
                      <FiArrowRight size={11} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="min-h-[280px] flex flex-col items-center justify-center text-center border border-[#d4c8b7] px-5 py-8">

              <div className="w-11 h-11 rounded-full border border-[#cbbda8] flex items-center justify-center mb-3">
                <FiHeart size={17} />
              </div>

              <p className="text-[#b66d17] text-[8px] font-bold tracking-[0.25em] uppercase mb-2">
                Your Wishlist
              </p>

              <h2 className="font-serif text-[27px] sm:text-[32px]">
                Nothing saved yet.
              </h2>

              <p className="max-w-[390px] text-[10px] sm:text-[11px] leading-5 text-[#6d6459] mt-2">
                Explore our collection and save the shirts you love.
              </p>

              <Link
                to="/shop"
                className="mt-5 bg-[#171714] text-white px-5 py-3 flex items-center gap-6 text-[8px] font-bold tracking-[0.18em] hover:bg-[#c77718] transition"
              >
                EXPLORE SHOP
                <FiArrowRight size={11} />
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Wishlist;