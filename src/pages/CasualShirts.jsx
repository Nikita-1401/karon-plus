import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const casualProducts = [
  {
    id: 6,
    name: "Striped Weekend Shirt",
    type: "Weekend Essential",
    price: 1299,
    image: "/casual-shirt.jpg",
  },
  {
    id: 9,
    name: "Ivory Linen Shirt",
    type: "Relaxed Linen",
    price: 1399,
    image: "/casual-beige.jpg",
  },
  {
    id: 10,
    name: "Stone Casual Shirt",
    type: "Everyday Cotton",
    price: 1499,
    image: "/casual-denim.jpg",
  },
  {
    id: 11,
    name: "Olive Textured Shirt",
    type: "Weekend Edit",
    price: 1599,
    image: "/casual-olive.jpg",
  },
];

const CasualShirts = () => {
  const [adminCasualProducts, setAdminCasualProducts] = useState([]);

  /* ================= ADMIN CASUAL PRODUCTS ================= */

  const loadAdminCasualProducts = () => {
    try {
      const savedProducts =
        JSON.parse(
          localStorage.getItem("karonAdminProducts")
        ) || [];

      const onlyCasualProducts = Array.isArray(savedProducts)
        ? savedProducts
            .filter(
              (product) => product.category === "Casual"
            )
            .map((product) => ({
              ...product,
              type:
                product.type || "Casual Collection",
            }))
        : [];

      setAdminCasualProducts(onlyCasualProducts);
    } catch (error) {
      console.error(
        "Unable to load casual products:",
        error
      );

      setAdminCasualProducts([]);
    }
  };

  useEffect(() => {
    loadAdminCasualProducts();

    const handleProductsUpdated = () => {
      loadAdminCasualProducts();
    };

    const handleStorage = (event) => {
      if (event.key === "karonAdminProducts") {
        loadAdminCasualProducts();
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

  const allCasualProducts = [
    ...adminCasualProducts,
    ...casualProducts,
  ];

  return (
    <main className="bg-[#f4efe7] text-[#171714] font-['Nunito']">
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-7 pt-3 pb-3">

        {/* HEADER */}

        <div className="flex items-end justify-between gap-8 pb-3 border-b border-[#cdbfae]">
          <div>
            <div className="flex items-center gap-3 mb-1.5">
              <span className="w-7 h-px bg-[#c77718]" />

              <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.18em]">
                <Link
                  to="/shop"
                  className="text-[#a85e16] hover:text-[#171714] transition-colors"
                >
                  SHOP
                </Link>

                <span className="text-[#9c8d7b]">/</span>

                <span className="text-[#a85e16]">
                  CASUAL
                </span>
              </div>
            </div>

            <h1 className="font-['Nunito'] text-[29px] sm:text-[32px] lg:text-[35px] leading-none">
              The Everyday{" "}
              <span className="italic font-normal text-[#d17d1d]">
                Edit.
              </span>
            </h1>
          </div>

          <p className="hidden md:block max-w-[360px] text-[11px] leading-[1.55] text-[#625a50] text-right">
            Relaxed shirts designed for easy days, everyday plans and
            effortless style.
          </p>
        </div>

        {/* COLLECTION BAR */}

        <div className="flex items-center justify-between py-2.5">
          <div className="flex items-center gap-3">
            <p className="text-[10px] font-bold tracking-[0.15em]">
              RELAXED ESSENTIALS
            </p>

            <span className="hidden sm:block w-5 h-px bg-[#c77718]" />

            <p className="hidden sm:block text-[10px] text-[#74695d]">
              Made for everyday comfort
            </p>
          </div>

          <Link
            to="/shop"
            className="flex items-center gap-2 text-[9px] font-bold tracking-[0.14em] hover:text-[#c77718] transition"
          >
            ALL SHIRTS
            <FiArrowRight size={11} />
          </Link>
        </div>

        {/* PRODUCTS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 lg:gap-x-4 gap-y-6">

          {allCasualProducts.map((product) => (
            <article
              key={product.id}
              className="group min-w-0"
            >

              {/* IMAGE */}

              <Link
                to={`/product/${product.id}`}
                className="relative block overflow-hidden bg-[#ded4c6] h-[315px] sm:h-[270px] lg:h-[270px] xl:h-[280px]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.025]"
                />

                {/* CASUAL BADGE */}

                <span className="absolute left-3 bottom-3 bg-[#f8f4ed] text-[#171714] px-3 py-1.5 text-[9px] font-bold tracking-[0.14em]">
                  CASUAL
                </span>
              </Link>

              {/* PRODUCT INFO */}

              <div className="pt-2 pb-2 border-b border-[#cdbfae]">

                <div className="flex items-center justify-between gap-3">

                  <p className="text-[#a85e16] text-[10px] font-bold tracking-[0.11em] uppercase truncate">
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
            <span className="w-6 h-px bg-[#c77718]" />

            <p className="text-[10px] text-[#665d52]">
              Relaxed fits. Natural fabrics. Everyday comfort.
            </p>
          </div>

          <Link
            to="/shop"
            className="flex items-center gap-2 text-[9px] font-bold tracking-[0.14em] hover:text-[#c77718] transition"
          >
            BACK TO SHOP
            <FiArrowRight size={11} />
          </Link>

        </div>

      </section>
    </main>
  );
};

export default CasualShirts;