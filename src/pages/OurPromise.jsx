import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
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
    <main className="bg-[#eee8de] text-[#171714]">
      <section
        className="
          mx-auto
          w-full
          max-w-[1220px]
          px-4
          py-3
          sm:px-6
          lg:px-8
          lg:py-4
        "
      >
        {/* ================= TOP LABEL ================= */}
        <div className="mb-2 flex items-center gap-3">
          <span className="h-px w-7 bg-[#c67a20]" />

          <p className="text-[7px] font-bold uppercase tracking-[0.27em] text-[#a96119] sm:text-[8px]">
            Karon Plus / Our Promise
          </p>
        </div>

        {/* ================= MAIN CARD ================= */}
        <div
          className="
            overflow-hidden
            border
            border-[#cfc2af]
            bg-[#f6f1e9]

            lg:grid
            lg:h-[445px]
            lg:grid-cols-[46%_54%]

            xl:h-[455px]
          "
        >
          {/* ================= LEFT IMAGE ================= */}
          <div
            className="
              group
              relative
              min-h-[320px]
              overflow-hidden
              sm:min-h-[380px]
              lg:min-h-0
              lg:h-full
            "
          >
            <img
              src="/our-promise.jpg"
              alt="Karon Plus premium shirt craftsmanship"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-[center_18%]
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.025]
              "
            />

            {/* IMAGE OVERLAY */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/80
                via-black/5
                to-black/10
              "
            />

            {/* TOP LABEL */}
            <div className="absolute left-5 top-5 flex items-center gap-3 lg:left-7 lg:top-6">
              <span className="h-px w-7 bg-[#dda04b]" />

              <p className="text-[6px] font-bold uppercase tracking-[0.3em] text-white lg:text-[7px]">
                The Standard
              </p>
            </div>

            {/* BOTTOM IMAGE CONTENT */}
            <div
              className="
                absolute
                bottom-0
                left-0
                w-full
                p-5
                text-white
                sm:p-6
                lg:p-7
              "
            >
              <p className="mb-1.5 text-[6px] font-bold uppercase tracking-[0.3em] text-[#e0a24c] lg:text-[7px]">
                Karon Plus
              </p>

              <h2
                className="
                  max-w-[390px]
                  font-serif
                  text-[25px]
                  leading-[1.02]
                  sm:text-[28px]
                  lg:text-[29px]
                "
              >
                Made with purpose.

                <span className="block italic text-[#dda04b]">
                  Worn with confidence.
                </span>
              </h2>

              <div className="mt-3 flex items-center gap-3">
                <span className="h-px w-8 bg-[#dda04b]" />

                <p className="text-[6px] font-semibold uppercase tracking-[0.22em] text-white/80">
                  Thoughtful by design
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div
            className="
              flex
              h-full
              flex-col
              justify-center

              px-6
              py-6

              sm:px-8

              lg:px-10
              lg:py-5

              xl:px-12
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#c77718]" />

              <p className="text-[7px] font-bold uppercase tracking-[0.28em] text-[#a96119]">
                Our Promise
              </p>
            </div>

            {/* HEADING */}
            <h1
              className="
                mt-2
                font-serif
                text-[34px]
                leading-[0.98]
                sm:text-[38px]
                lg:text-[39px]
                xl:text-[41px]
              "
            >
              Quality that{" "}
              <span className="italic font-normal text-[#cf7b1d]">
                lasts.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-3
                max-w-[470px]
                text-[10px]
                leading-[1.6]
                text-[#655c52]
                sm:text-[11px]
              "
            >
              Thoughtful shirts made with comfort, quality and timeless
              style in mind — because the pieces you wear most should
              also be the ones made best.
            </p>

            {/* DIVIDER */}
            <div className="my-4 h-px w-full bg-[#d2c5b3]" />

            {/* ================= PROMISE ROWS ================= */}
            <div>
              {promises.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    className="
                      group
                      grid
                      min-h-[66px]
                      grid-cols-[30px_1fr_auto]
                      items-center
                      gap-3
                      border-b
                      border-[#d2c5b3]
                      py-2.5
                      transition-all
                      duration-300
                      hover:pl-1.5
                    "
                  >
                    {/* NUMBER */}
                    <span className="text-[6px] font-bold tracking-[0.18em] text-[#bd711c]">
                      {item.number}
                    </span>

                    {/* TEXT */}
                    <div>
                      <h3 className="font-serif text-[17px] leading-none sm:text-[18px] lg:text-[19px]">
                        {item.title}
                      </h3>

                      <p className="mt-1 max-w-[370px] text-[8px] leading-[1.45] text-[#70675d] lg:text-[9px]">
                        {item.text}
                      </p>
                    </div>

                    {/* ICON */}
                    <span
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#c9baa6]
                        text-[#b96d18]
                        transition-all
                        duration-300

                        group-hover:border-[#171714]
                        group-hover:bg-[#171714]
                        group-hover:text-[#dfa34f]
                      "
                    >
                      <Icon size={11} />
                    </span>
                  </div>
                );
              })}
            </div>

            {/* ================= CTA ================= */}
            <div className="mt-4 flex items-center justify-between gap-4">
              <Link
                to="/shop"
                className="
                  group
                  inline-flex
                  h-9
                  items-center
                  justify-center
                  gap-5
                  bg-[#171714]
                  px-5

                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-white

                  transition-all
                  duration-300

                  hover:bg-[#c77a1d]
                "
              >
                Discover Collection

                <FiArrowUpRight
                  size={11}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>

              <p
                className="
                  hidden
                  text-[5px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#9b8d7b]
                  sm:block
                "
              >
                Comfort · Quality · Style
              </p>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM STRIP ================= */}
        <div
          className="
            flex
            min-h-[38px]
            items-center
            justify-between
            gap-4

            border-x
            border-b
            border-[#cfc2af]

            bg-[#e4dbce]
            px-5
          "
        >
          <p className="font-serif text-[10px] italic text-[#4c453d]">
            Better shirts, thoughtfully made.
          </p>

          <div className="hidden items-center gap-3 sm:flex">
            <span className="text-[5px] font-bold uppercase tracking-[0.3em] text-[#a96925]">
              Karon Plus
            </span>

            <span className="h-px w-8 bg-[#b87a34]" />

            <span className="text-[5px] font-bold uppercase tracking-[0.25em] text-[#887968]">
              The Ultimate Choice
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurPromise;