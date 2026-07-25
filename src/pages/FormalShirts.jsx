import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const formalProducts = [
  {
    id: 1,
    name: "Signature White Shirt",
    subtitle: "Crisp Cotton",
    price: 1499,
    image: "/formal-white.jpg",
  },
  {
    id: 2,
    name: "Midnight Navy Shirt",
    subtitle: "Evening Formal",
    price: 1699,
    image: "/formal-navy.jpg",
  },
  {
    id: 3,
    name: "Classic Blue Shirt",
    subtitle: "Office Essential",
    price: 1399,
    image: "/formal-blue.jpg",
  },
  {
    id: 4,
    name: "Charcoal Grey Shirt",
    subtitle: "Modern Tailoring",
    price: 1599,
    image: "/formal-grey.jpg",
  },
];

const FormalShirts = () => {
  return (
    <main className="bg-[#f4efe7] text-[#171714]">
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-7 pt-3 pb-3">

        {/* HEADER */}
        <div className="flex items-end justify-between gap-8 pb-3 border-b border-[#cdbfae]">
          <div>

            {/* BREADCRUMB */}
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
                  FORMAL
                </span>
              </div>
            </div>

            <h1 className="font-serif text-[29px] sm:text-[32px] lg:text-[35px] leading-none">
              Refined for{" "}
              <span className="italic font-normal text-[#d17d1d]">
                every occasion.
              </span>
            </h1>
          </div>

          <p className="hidden md:block max-w-[360px] text-[11px] leading-[1.55] text-[#625a50] text-right">
            Sharp silhouettes and considered details, made for effortless
            formal dressing.
          </p>
        </div>

        {/* COLLECTION BAR */}
        <div className="flex items-center justify-between py-2.5">
          <div className="flex items-center gap-3">
            <p className="text-[10px] font-bold tracking-[0.15em]">
              THE FORMAL EDIT
            </p>

            <span className="hidden sm:block w-5 h-px bg-[#c77718]" />

            <p className="hidden sm:block text-[10px] text-[#74695d]">
              Tailored essentials for modern dressing
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

          {formalProducts.map((product) => (
            <article
              key={product.id}
              className="group min-w-0"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden bg-[#d8cfc3] h-[315px] sm:h-[270px] lg:h-[270px] xl:h-[280px]">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                />

                {/* FORMAL BADGE */}
                <span className="absolute top-3 right-3 bg-[#171714] text-white px-3 py-1.5 text-[9px] font-bold tracking-[0.14em]">
                  FORMAL
                </span>

              </div>

              {/* PRODUCT INFO */}
              <div className="pt-2 pb-2 border-b border-[#cdbfae]">

                <div className="flex items-center justify-between gap-3">

                  <p className="text-[#a85e16] text-[9px] sm:text-[10px] font-bold tracking-[0.11em] uppercase truncate">
                    {product.subtitle}
                  </p>

                  <p className="text-[11px] font-semibold whitespace-nowrap">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>

                </div>

                <h3 className="mt-1 font-serif text-[17px] lg:text-[18px] leading-tight">
                  {product.name}
                </h3>

              </div>
            </article>
          ))}

        </div>

        {/* BOTTOM */}
        <div className="hidden lg:flex items-center justify-between mt-2.5 pt-2">

          <div className="flex items-center gap-3">
            <span className="w-6 h-px bg-[#c77718]" />

            <p className="text-[10px] text-[#665d52]">
              Precise fits. Refined fabrics. Effortless formality.
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

export default FormalShirts;