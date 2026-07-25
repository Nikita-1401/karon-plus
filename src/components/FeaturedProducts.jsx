import { FiArrowUpRight, FiHeart, FiEye } from "react-icons/fi";

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
  return (
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
                    duration-400
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
  );
};

export default FeaturedProducts;