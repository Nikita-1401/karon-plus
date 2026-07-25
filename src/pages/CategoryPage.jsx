import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const shirtCategories = [
  {
    id: 1,
    title: "Formal Shirts",
    subtitle: "Refined Tailoring",
    description:
      "Sharp essentials designed for work, occasions and refined everyday dressing.",
    image: "/formal-white.jpg",
    link: "/shirts/formal",
  },

  {
    id: 2,
    title: "Casual Shirts",
    subtitle: "Everyday Comfort",
    description:
      "Relaxed styles made for easy days, weekends and effortless everyday dressing.",
    image: "/casual-beige.jpg",
    link: "/shirts/casual",
  },

  {
    id: 3,
    title: "Printed Shirts",
    subtitle: "Distinctive Patterns",
    description:
      "Considered prints and refined patterns made to bring character to your wardrobe.",
    image: "/printed-dark.jpg",
    link: "/shirts/printed",
  },

  {
    id: 4,
    title: "Premium Shirts",
    subtitle: "Elevated Essentials",
    description:
      "Refined fabrics, elevated finishes and considered details for a distinguished look.",
    image: "/premium-black.jpg",
    link: "/shirts/premium",
  },
];

const CategoryPage = () => {
  return (
    <main className="bg-[#f4efe7] text-[#171714]">
      <section
        className="
          max-w-[1400px]
          mx-auto
          px-4
          sm:px-6
          lg:px-7
          pt-3
          pb-4
        "
      >
        {/* ================= HEADER ================= */}

        <div
          className="
            flex
            items-end
            justify-between
            gap-8
            pb-3
            border-b
            border-[#cdbfae]
          "
        >
          {/* LEFT */}

          <div>
            <div className="flex items-center gap-3 mb-1.5">
              <span className="w-7 h-px bg-[#c77718]" />

              <p
                className="
                  text-[10px]
                  font-bold
                  tracking-[0.18em]
                  text-[#a85e16]
                "
              >
                KARON PLUS / SHIRTS
              </p>
            </div>

            <h1
              className="
                font-serif
                text-[29px]
                sm:text-[32px]
                lg:text-[35px]
                leading-none
              "
            >
              Find your{" "}
              <span className="italic font-normal text-[#d17d1d]">
                perfect shirt.
              </span>
            </h1>
          </div>

          {/* RIGHT */}

          <p
            className="
              hidden
              md:block
              max-w-[390px]
              text-[11px]
              leading-[1.55]
              text-[#625a50]
              text-right
            "
          >
            Explore four distinct collections designed for work,
            weekends, occasions and effortless everyday style.
          </p>
        </div>

        {/* ================= COLLECTION BAR ================= */}

        <div
          className="
            flex
            items-center
            justify-between
            py-2.5
          "
        >
          <div className="flex items-center gap-3">
            <p
              className="
                text-[10px]
                font-bold
                tracking-[0.15em]
              "
            >
              EXPLORE COLLECTIONS
            </p>

            <span className="hidden sm:block w-5 h-px bg-[#c77718]" />

            <p
              className="
                hidden
                sm:block
                text-[10px]
                text-[#74695d]
              "
            >
              Four styles for every occasion
            </p>
          </div>

          <Link
            to="/shop"
            className="
              flex
              items-center
              gap-2

              text-[9px]
              font-bold
              tracking-[0.14em]

              hover:text-[#c77718]
              transition
            "
          >
            SHOP ALL
            <FiArrowRight size={11} />
          </Link>
        </div>

        {/* ================= CATEGORY GRID ================= */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4

            gap-x-3
            lg:gap-x-4
            gap-y-6
          "
        >
          {shirtCategories.map((category) => (
            <article
              key={category.id}
              className="group min-w-0"
            >
              {/* ================= IMAGE ================= */}

              <div
                className="
                  relative
                  overflow-hidden
                  bg-[#d8cfc3]

                  h-[315px]
                  sm:h-[270px]
                  lg:h-[280px]
                  xl:h-[290px]
                "
              >
                <Link
                  to={category.link}
                  className="block w-full h-full"
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      object-center

                      transition-transform
                      duration-700
                      ease-out

                      group-hover:scale-[1.03]
                    "
                  />
                </Link>

                {/* CATEGORY LABEL */}

                <span
                  className="
                    absolute
                    left-3
                    top-3

                    bg-[#f8f4ed]
                    text-[#171714]

                    px-3
                    py-1.5

                    text-[9px]
                    font-bold
                    tracking-[0.13em]
                  "
                >
                  {category.subtitle.toUpperCase()}
                </span>

                {/* DESKTOP HOVER BUTTON */}

                <Link
                  to={category.link}
                  className="
                    hidden
                    lg:flex

                    absolute
                    left-3
                    right-3
                    bottom-3

                    h-10
                    px-4

                    bg-[#171714]
                    text-white

                    items-center
                    justify-between

                    opacity-0
                    translate-y-2

                    group-hover:opacity-100
                    group-hover:translate-y-0

                    transition-all
                    duration-300
                  "
                >
                  <span
                    className="
                      text-[9px]
                      font-bold
                      tracking-[0.15em]
                    "
                  >
                    EXPLORE
                  </span>

                  <FiArrowRight
                    size={12}
                    className="text-[#d58a29]"
                  />
                </Link>
              </div>

              {/* ================= INFORMATION ================= */}

              <div
                className="
                  pt-2
                  pb-2
                  border-b
                  border-[#cdbfae]
                "
              >
                <p
                  className="
                    text-[#a85e16]
                    text-[9px]
                    font-bold
                    tracking-[0.12em]
                    uppercase
                  "
                >
                  {category.subtitle}
                </p>

                <Link
                  to={category.link}
                  className="
                    flex
                    items-center
                    justify-between
                    gap-3

                    mt-1

                    font-serif
                    text-[17px]
                    lg:text-[18px]
                    leading-tight

                    hover:text-[#c77718]
                    transition
                  "
                >
                  {category.title}

                  <FiArrowRight
                    size={12}
                    className="
                      shrink-0
                      group-hover:translate-x-1
                      transition-transform
                    "
                  />
                </Link>

                <p
                  className="
                    hidden
                    xl:block

                    text-[10px]
                    leading-[1.45]
                    text-[#6c6358]

                    mt-1.5
                  "
                >
                  {category.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* ================= BOTTOM ================= */}

        <div
          className="
            hidden
            lg:flex

            items-center
            justify-between

            mt-2.5
            pt-2
          "
        >
          <div className="flex items-center gap-3">
            <span className="w-6 h-px bg-[#c77718]" />

            <p className="text-[10px] text-[#665d52]">
              Formal. Casual. Printed. Premium.
            </p>
          </div>

          <Link
            to="/shop"
            className="
              flex
              items-center
              gap-2

              text-[9px]
              font-bold
              tracking-[0.14em]

              hover:text-[#c77718]
              transition
            "
          >
            VIEW ALL SHIRTS

            <FiArrowRight size={11} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default CategoryPage;