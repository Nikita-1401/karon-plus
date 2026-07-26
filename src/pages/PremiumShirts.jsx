import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const premiumProducts = [
  {
    id: 15,
    name: "Midnight Luxe Shirt",
    type: "Signature Premium",
    price: 1999,
    image: "/premium-black.jpg",
  },
  {
    id: 16,
    name: "Champagne Satin Shirt",
    type: "Luxury Finish",
    price: 2199,
    image: "/premium-cream.jpg",
  },
  {
    id: 17,
    name: "Royal Navy Shirt",
    type: "Evening Collection",
    price: 2299,
    image: "/premium-navy.jpg",
  },
  {
    id: 18,
    name: "Mocha Textured Shirt",
    type: "Refined Essential",
    price: 2099,
    image: "/premium-brown.jpg",
  },
];

const PremiumShirts = () => {
  const [adminPremiumProducts, setAdminPremiumProducts] = useState([]);

  /* ================= ADMIN PREMIUM PRODUCTS ================= */

  const loadAdminPremiumProducts = () => {
    try {
      const savedProducts =
        JSON.parse(
          localStorage.getItem("karonAdminProducts")
        ) || [];

      const onlyPremiumProducts = Array.isArray(savedProducts)
        ? savedProducts
            .filter(
              (product) => product.category === "Premium"
            )
            .map((product) => ({
              ...product,
              type:
                product.type || "Premium Collection",
            }))
        : [];

      setAdminPremiumProducts(onlyPremiumProducts);
    } catch (error) {
      console.error(
        "Unable to load premium products:",
        error
      );

      setAdminPremiumProducts([]);
    }
  };

  useEffect(() => {
    loadAdminPremiumProducts();

    const handleProductsUpdated = () => {
      loadAdminPremiumProducts();
    };

    const handleStorage = (event) => {
      if (event.key === "karonAdminProducts") {
        loadAdminPremiumProducts();
      }
    };

    window.addEventListener(
      "productsUpdated",
      handleProductsUpdated
    );

    window.addEventListener(
      "storage",
      handleStorage
    );

    return () => {
      window.removeEventListener(
        "productsUpdated",
        handleProductsUpdated
      );

      window.removeEventListener(
        "storage",
        handleStorage
      );
    };
  }, []);

  /* ================= COMBINED PRODUCTS ================= */

  const allPremiumProducts = [
    ...adminPremiumProducts,
    ...premiumProducts,
  ];

  return (
    <main className="bg-[#f2ece2] text-[#171714] font-['Nunito']">
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-7 pt-3 pb-3">

        {/* HEADER */}

        <div className="flex items-end justify-between gap-8 pb-3 border-b border-[#c9b99f]">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="w-7 h-px bg-[#b97824]" />

              <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em]">
                <Link
                  to="/shop"
                  className="text-[#a96619] hover:text-[#171714] transition-colors"
                >
                  SHOP
                </Link>

                <span className="text-[#9c8d7b]">/</span>

                <span className="text-[#a96619]">
                  PREMIUM
                </span>
              </div>
            </div>

            <h1 className="font-['Nunito'] text-[29px] sm:text-[32px] lg:text-[35px] leading-none">
              The{" "}
              <span className="italic text-[#c67b22] font-normal">
                Signature
              </span>{" "}
              Collection.
            </h1>
          </div>

          <div className="hidden md:flex items-end gap-5">
            <p className="max-w-[330px] text-[11px] leading-[1.55] text-[#61584d] text-right">
              Exceptional fabrics and refined finishes, selected for a more
              elevated wardrobe.
            </p>

            <span className="h-8 w-px bg-[#cdbda6]" />

            <p className="text-[9px] font-bold tracking-[0.16em] text-[#9c611c] whitespace-nowrap">
              PREMIUM EDIT
            </p>
          </div>
        </div>

        {/* COLLECTION BAR */}

        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-3">
            <p className="text-[9px] font-bold tracking-[0.16em]">
              ELEVATED ESSENTIALS
            </p>

            <span className="hidden sm:block w-5 h-px bg-[#b97824]" />

            <p className="hidden sm:block text-[10px] text-[#74695c]">
              Designed with distinction
            </p>
          </div>

          <Link
            to="/shop"
            className="flex items-center gap-2 text-[9px] font-bold tracking-[0.15em] hover:text-[#b97824] transition"
          >
            ALL SHIRTS
            <FiArrowRight size={11} />
          </Link>
        </div>

        {/* PRODUCTS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 lg:gap-x-4 gap-y-6">

          {allPremiumProducts.map((product) => (
            <article
              key={product.id}
              className="group min-w-0"
            >

              {/* IMAGE */}

              <Link
                to={`/product/${product.id}`}
                className="relative block overflow-hidden bg-[#d7c9b6] h-[315px] sm:h-[270px] lg:h-[275px] xl:h-[285px]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />

                <div className="absolute left-3 bottom-3 bg-[#171714] text-[#dca557] px-3 py-2 text-[9px] font-bold tracking-[0.16em]">
                  KARON PREMIUM
                </div>
              </Link>

              {/* PRODUCT INFO */}

              <div className="pt-2 pb-2 border-b border-[#c9b99f]">

                <div className="flex items-center justify-between gap-3">

                  <p className="text-[#a96619] text-[9px] font-bold tracking-[0.13em] uppercase truncate">
                    {product.type}
                  </p>

                  <p className="text-[11px] font-semibold whitespace-nowrap">
                    ₹
                    {Number(product.price).toLocaleString(
                      "en-IN"
                    )}
                  </p>

                </div>

                <Link to={`/product/${product.id}`}>
                  <h3 className="mt-1 font-['Nunito'] text-[17px] lg:text-[18px] leading-tight">
                    {product.name}
                  </h3>
                </Link>

              </div>

            </article>
          ))}

        </div>

        {/* BOTTOM */}

        <div className="hidden lg:flex items-center justify-between mt-2.5 pt-2">

          <div className="flex items-center gap-3">
            <span className="w-6 h-px bg-[#b97824]" />

            <p className="text-[10px] text-[#665c50]">
              Selected materials. Precise details. Lasting refinement.
            </p>
          </div>

          <Link
            to="/shop"
            className="flex items-center gap-2 text-[9px] font-bold tracking-[0.15em] hover:text-[#b97824] transition"
          >
            BACK TO SHOP
            <FiArrowRight size={11} />
          </Link>

        </div>

      </section>
    </main>
  );
};

export default PremiumShirts;