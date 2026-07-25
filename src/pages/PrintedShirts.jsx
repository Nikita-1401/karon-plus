import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const printedProducts = [
  {
    id: 12,
    name: "Botanical Print Shirt",
    type: "Signature Print",
    price: 1599,
    image: "/product-printed-shirt.jpg",
  },
  {
    id: 13,
    name: "Midnight Pattern Shirt",
    type: "Evening Print",
    price: 1699,
    image: "/printed-dark.jpg",
  },
  {
    id: 14,
    name: "Sage Floral Shirt",
    type: "Seasonal Edit",
    price: 1499,
    image: "/printed-sage.jpg",
  },
  {
    id: 15,
    name: "Ivory Motif Shirt",
    type: "Refined Pattern",
    price: 1599,
    image: "/printed-ivory.jpg",
  },
];

const PrintedShirts = () => {
  return (
    <main className="bg-[#f4efe7] text-[#171714]">
      <section className="max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-5 pt-3 pb-3">
        {/* HEADER */}
        <div className="flex items-end justify-between gap-8 pb-3 border-b border-[#cdbfae]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-px bg-[#c77718]" />

              <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.18em]">
                <Link
                  to="/shop"
                  className="text-[#a85e16] hover:text-[#171714] transition-colors"
                >
                  SHOP
                </Link>

                <span className="text-[#9c8d7b]">/</span>

                <span className="text-[#a85e16]">PRINTED</span>
              </div>
            </div>

            <h1 className="font-serif text-[29px] sm:text-[32px] lg:text-[35px] leading-none">
              Prints with{" "}
              <span className="italic font-normal text-[#d17d1d]">
                personality.
              </span>
            </h1>
          </div>

          <p className="hidden md:block max-w-[340px] text-[11px] leading-[1.55] text-[#625a50] text-right">
            Considered patterns and refined details for shirts that make an
            effortless statement.
          </p>
        </div>

        {/* COLLECTION BAR */}
        <div className="flex items-center justify-between py-2.5">
          <div className="flex items-center gap-3">
            <p className="text-[10px] font-bold tracking-[0.15em]">
              DISTINCTIVE PATTERNS
            </p>

            <span className="hidden sm:block w-5 h-px bg-[#c77718]" />

            <p className="hidden sm:block text-[10px] text-[#74695d]">
              Designed to stand apart
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
          {printedProducts.map((product) => (
            <article key={product.id} className="group min-w-0">
              <div className="relative overflow-hidden bg-[#ded4c6] h-[315px] sm:h-[270px] lg:h-[290px] xl:h-[300px]">
                <Link
                  to={`/product/${product.id}`}
                  className="block w-full h-full"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  />
                </Link>

                <span className="absolute bottom-3 left-3 bg-[#f8f4ed] text-[#171714] px-3 py-1.5 text-[9px] font-bold tracking-[0.14em]">
                  PRINTED
                </span>

                <Link
                  to={`/product/${product.id}`}
                  aria-label={`View ${product.name}`}
                  className="hidden lg:flex absolute right-3 bottom-3 w-9 h-9 bg-[#171714] text-white items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                >
                  <FiArrowRight size={12} />
                </Link>
              </div>

              <div className="pt-2 pb-2 border-b border-[#cdbfae]">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[#a85e16] text-[10px] font-bold tracking-[0.11em] uppercase truncate">
                    {product.type}
                  </p>

                  <p className="text-[11px] font-semibold whitespace-nowrap">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>
                </div>

                <Link
                  to={`/product/${product.id}`}
                  className="block mt-1 font-serif text-[17px] lg:text-[18px] leading-tight hover:text-[#c77718] transition"
                >
                  {product.name}
                </Link>

                <Link
                  to={`/product/${product.id}`}
                  className="lg:hidden flex items-center gap-2 mt-2 text-[9px] font-bold tracking-[0.13em]"
                >
                  VIEW SHIRT
                  <FiArrowRight size={10} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="hidden lg:flex items-center justify-between mt-2.5 pt-2">
          <div className="flex items-center gap-3">
            <span className="w-6 h-px bg-[#c77718]" />
            <p className="text-[10px] text-[#665d52]">
              Refined prints. Considered details. Individual style.
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

export default PrintedShirts;