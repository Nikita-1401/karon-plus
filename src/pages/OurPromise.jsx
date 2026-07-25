import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheck,
  FiFeather,
  FiShield,
} from "react-icons/fi";

const promises = [
  {
    number: "01",
    icon: FiFeather,
    title: "Premium Fabrics",
    text: "Selected for a soft feel, lasting comfort and a refined finish.",
  },
  {
    number: "02",
    icon: FiShield,
    title: "Made to Last",
    text: "Reliable construction designed for everyday wear, season after season.",
  },
  {
    number: "03",
    icon: FiCheck,
    title: "Timeless Style",
    text: "Clean silhouettes and considered details that stay relevant.",
  },
];

const OurPromise = () => {
  return (
    <main
      className="
        bg-[#f4efe7]
        text-[#171714]
        min-h-[calc(100vh-111px)]
        flex
      "
    >
      <div
        className="
          w-full
          max-w-[1180px]
          mx-auto
          px-5
          sm:px-7
          lg:px-8
          py-4
          lg:py-5

          flex
          flex-col
        "
      >
        {/* ================= HEADER ================= */}
        <section
          className="
            shrink-0
            flex
            flex-col
            md:flex-row
            md:items-end
            md:justify-between
            gap-3

            pb-4
            border-b
            border-[#d0c3b0]
          "
        >
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-5 h-px bg-[#c77718]" />

              <p
                className="
                  text-[#b66d17]
                  text-[8px]
                  sm:text-[9px]
                  font-bold
                  tracking-[0.2em]
                  uppercase
                "
              >
                Our Promise
              </p>
            </div>

            <h1
              className="
                font-serif
                text-[29px]
                sm:text-[33px]
                lg:text-[36px]
                leading-none
              "
            >
              Quality that{" "}
              <span className="italic font-normal text-[#d17a18]">
                lasts.
              </span>
            </h1>
          </div>

          <p
            className="
              max-w-[350px]
              text-[11px]
              sm:text-[12px]
              leading-[1.5]
              text-[#655c51]
              md:text-right
              md:pb-0.5
            "
          >
            Thoughtful shirts made with comfort, quality and
            timeless style in mind.
          </p>
        </section>

        {/* ================= CONTENT ================= */}
        <section
          className="
            flex-1
            min-h-0
            flex
            flex-col
            justify-center

            py-4
            lg:py-5
          "
        >
          {/* BLACK BRAND STRIP */}
          <div
            className="
              bg-[#171714]
              text-white

              px-5
              sm:px-6
              lg:px-7

              py-4

              grid
              grid-cols-1
              md:grid-cols-[auto_1px_1fr_auto]
              md:items-center
              gap-4
              lg:gap-7
            "
          >
            {/* TITLE */}
            <div className="shrink-0">
              <p
                className="
                  text-[#d48b32]
                  text-[8px]
                  font-bold
                  tracking-[0.2em]
                  uppercase
                  mb-1
                "
              >
                Karon Plus Standard
              </p>

              <h2
                className="
                  font-serif
                  text-[23px]
                  sm:text-[25px]
                  lg:text-[27px]
                  leading-none
                  whitespace-nowrap
                "
              >
                Better shirts.{" "}
                <span className="italic font-normal text-[#d9943d]">
                  Simply made.
                </span>
              </h2>
            </div>

            {/* DIVIDER */}
            <span className="hidden md:block w-px h-10 bg-white/15" />

            {/* DESCRIPTION */}
            <p
              className="
                max-w-[340px]
                text-[10px]
                sm:text-[11px]
                leading-[1.55]
                text-white/65
              "
            >
              Good fabric, comfortable fits and considered
              details — without unnecessary complexity.
            </p>

            {/* LINK */}
            <Link
              to="/shop"
              className="
                flex
                items-center
                gap-3
                text-[8px]
                sm:text-[9px]
                font-bold
                tracking-[0.16em]
                uppercase
                whitespace-nowrap
                hover:text-[#d9943d]
                transition
              "
            >
              Shop Collection
              <FiArrowRight size={11} />
            </Link>
          </div>

          {/* ================= 3 PROMISE CARDS ================= */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              border-x
              border-b
              border-[#d0c3b0]
            "
          >
            {promises.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className={`
                    group
                    px-5
                    sm:px-6

                    py-5
                    lg:py-6

                    ${
                      index !== promises.length - 1
                        ? "border-b md:border-b-0 md:border-r border-[#d0c3b0]"
                        : ""
                    }
                  `}
                >
                  {/* NUMBER + ICON */}
                  <div className="flex items-center justify-between mb-7 lg:mb-8">
                    <span
                      className="
                        text-[#b66d17]
                        text-[8px]
                        font-bold
                        tracking-[0.14em]
                      "
                    >
                      {item.number}
                    </span>

                    <span
                      className="
                        w-8
                        h-8
                        rounded-full
                        border
                        border-[#cdbfae]
                        flex
                        items-center
                        justify-center
                        text-[#b66d17]
                        group-hover:bg-[#171714]
                        group-hover:text-white
                        group-hover:border-[#171714]
                        transition
                      "
                    >
                      <Icon size={12} />
                    </span>
                  </div>

                  {/* TEXT */}
                  <h3
                    className="
                      font-serif
                      text-[19px]
                      sm:text-[20px]
                      lg:text-[21px]
                      leading-tight
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-1.5
                      max-w-[285px]
                      text-[10px]
                      sm:text-[11px]
                      leading-[1.55]
                      text-[#6a6156]
                    "
                  >
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>

          {/* ================= BOTTOM BAR ================= */}
          <div
            className="
              flex
              items-center
              justify-between
              gap-4

              py-3

              border-b
              border-[#d0c3b0]
            "
          >
            <p className="text-[9px] sm:text-[10px] text-[#71675b]">
              Made for the way you dress, every day.
            </p>

            <Link
              to="/shop"
              className="
                flex
                items-center
                gap-3

                text-[8px]
                sm:text-[9px]
                font-bold
                tracking-[0.15em]
                uppercase
                whitespace-nowrap

                hover:text-[#c77718]
                transition
              "
            >
              Discover Shirts
              <FiArrowRight size={10} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default OurPromise;