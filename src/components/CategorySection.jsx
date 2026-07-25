import { FiArrowUpRight } from "react-icons/fi";

const categories = [
  {
    title: "Formal Shirts",
    subtitle: "Refined Essentials",
    image: "/formal-category.jpg",
  },
  {
    title: "Casual Shirts",
    subtitle: "Effortless Style",
    image: "/casual-category.jpg",
  },
  {
    title: "Printed Shirts",
    subtitle: "Make a Statement",
    image: "/printed-category.jpg",
  },
  {
    title: "Premium Collection",
    subtitle: "Signature Luxury",
    image: "/premium-category.jpg",
  },
];

const CategorySection = () => {
  return (
    <section
      id="collection"
      style={{ fontFamily: "'Nunito', sans-serif" }}
      className="bg-[#f7f3ed] px-5 py-4 md:px-8 md:py-5 lg:px-9 lg:py-4"
    >
      <div className="mx-auto max-w-[1450px]">

        {/* HEADING */}
        <div className="mx-auto mb-4 max-w-[750px] text-center">
          <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-[0.42em] text-[#c99142]">
            Discover Your Style
          </p>

          <h2 className="text-[30px] leading-tight text-[#151515] md:text-[36px] lg:text-[40px]">
            Shop by{" "}
            <span className="italic text-[#c99142]">
              Category
            </span>
          </h2>

          <div className="mx-auto mt-2 h-px w-12 bg-[#c99142]" />

          <p className="mx-auto mt-2 max-w-[600px] text-[12px] leading-5 text-[#777] md:text-[13px]">
            Explore signature styles crafted for every occasion, from everyday
            essentials to refined statement pieces.
          </p>
        </div>

        {/* CATEGORY CARDS */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {categories.map((category, index) => (
            <a
              href="#shop"
              key={category.title}
              className="
                group relative block
                h-[400px]
                overflow-hidden
                bg-[#111]
                sm:h-[370px]
                lg:h-[315px]
                xl:h-[325px]
              "
            >
              {/* IMAGE */}
              <img
                src={category.image}
                alt={category.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.06]
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/10
                  to-black/5
                  transition-all
                  duration-500
                  group-hover:from-black/95
                "
              />

              {/* NUMBER */}
              <div className="absolute left-5 top-5 flex items-center gap-3">
                <span className="text-[8px] font-semibold tracking-[0.2em] text-[#d6a04d]">
                  0{index + 1}
                </span>

                <span className="h-px w-7 bg-white/50" />
              </div>

              {/* BOTTOM CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-5 text-white lg:p-5">
                <p className="mb-2 text-[8px] font-semibold uppercase tracking-[0.3em] text-[#d8a657]">
                  {category.subtitle}
                </p>

                <h3 className="text-[25px] leading-[1.05] lg:text-[27px]">
                  {category.title}
                </h3>

                <div className="mt-3 flex items-center gap-3">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white">
                    Explore Collection
                  </span>

                  <FiArrowUpRight
                    size={14}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                    "
                  />
                </div>

                <div
                  className="
                    mt-3
                    h-px
                    w-10
                    bg-[#d1a052]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;