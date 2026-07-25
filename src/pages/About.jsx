import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const About = () => {
  const values = [
    "Thoughtful Design",
    "Premium Feel",
    "Everyday Comfort",
  ];

  return (
    <main className="bg-[#f4efe7] text-[#171714] font-['Nunito']">
      <section
        className="
          max-w-[1360px]
          mx-auto
          px-4
          sm:px-6
          lg:px-10
          xl:px-11
          pt-4
          pb-5
          lg:pt-5
          lg:pb-6
        "
      >
        {/* ================= TOP LINE ================= */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-[#d1c5b4]
            pb-3
          "
        >
          <div className="flex items-center gap-3">
            <span className="w-7 h-px bg-[#c77718]" />

            <p
              className="
                text-[9px]
                sm:text-[10px]
                font-bold
                tracking-[0.22em]
                text-[#a85e10]
                uppercase
              "
            >
              The Karon Plus Story
            </p>
          </div>

          <p
            className="
              hidden
              sm:block
              text-[8px]
              sm:text-[9px]
              tracking-[0.18em]
              text-[#887967]
              uppercase
            "
          >
            Made With Purpose
          </p>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.95fr_1.05fr]
            gap-6
            lg:gap-11
            xl:gap-12
            items-center
            pt-5
          "
        >
          {/* ================= LEFT IMAGES ================= */}
          <div
            className="
              relative
              w-full
              max-w-[560px]
              lg:max-w-none
              pb-4
              sm:pb-5
            "
          >
            {/* MAIN IMAGE */}
            <div
              className="
                relative
                overflow-hidden
                bg-[#ddd3c5]
                h-[260px]
                sm:h-[315px]
                lg:h-[330px]
                xl:h-[345px]
              "
            >
              <img
                src="/about-main.jpg"
                alt="Karon Plus premium shirts and fabrics"
                className="
                  w-full
                  h-full
                  object-cover
                  object-center
                "
              />

              {/* BRAND TAG */}
              <div
                className="
                  absolute
                  left-3
                  bottom-3
                  bg-[#171714]
                  text-white
                  px-3
                  py-2
                "
              >
                <p className="text-[7px] sm:text-[8px] tracking-[0.2em] font-bold">
                  KARON PLUS
                </p>
              </div>
            </div>

            {/* SMALL IMAGE */}
            <div
              className="
                hidden
                sm:block
                absolute
                right-[-10px]
                lg:right-[-14px]
                bottom-0
                w-[130px]
                h-[105px]
                lg:w-[145px]
                lg:h-[112px]
                xl:w-[150px]
                xl:h-[116px]
                border-[4px]
                border-[#f4efe7]
                bg-[#d8cdbc]
                overflow-hidden
              "
            >
              <img
                src="/about-detail.jpg"
                alt="Karon Plus shirt detail"
                className="
                  w-full
                  h-full
                  object-cover
                  object-center
                "
              />
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="lg:pl-1">
            <p
              className="
                text-[#a85e10]
                text-[8px]
                sm:text-[9px]
                font-bold
                tracking-[0.22em]
                uppercase
                mb-2
              "
            >
              Our Story
            </p>

            <h1
              className="
                font-['Nunito']
                text-[31px]
                sm:text-[38px]
                lg:text-[43px]
                xl:text-[46px]
                leading-[1]
                tracking-[-0.02em]
                max-w-[600px]
              "
            >
              Shirts made for
              <br />

              <span className="italic font-normal text-[#cf7716]">
                everyday confidence.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <div className="max-w-[590px] mt-4">
              <p
                className="
                  text-[11px]
                  sm:text-[12px]
                  lg:text-[12.5px]
                  leading-[1.65]
                  text-[#5f574e]
                "
              >
                Karon Plus is built around a simple idea —
                create refined shirts that feel comfortable,
                look timeless, and fit naturally into everyday
                life.
              </p>

              <p
                className="
                  text-[11px]
                  sm:text-[12px]
                  lg:text-[12.5px]
                  leading-[1.65]
                  text-[#5f574e]
                  mt-2
                "
              >
                From clean formal styles to relaxed everyday
                pieces, our focus stays on thoughtful design,
                dependable quality and effortless style.
              </p>
            </div>

            {/* ================= VALUES ================= */}
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-3
                gap-2
                sm:gap-3
                mt-4
                pt-3
                border-t
                border-[#d1c5b4]
              "
            >
              {values.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <span
                    className="
                      w-[17px]
                      h-[17px]
                      shrink-0
                      rounded-full
                      border
                      border-[#d07a19]
                      text-[#d07a19]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <FiCheck size={8} />
                  </span>

                  <p
                    className="
                      text-[9px]
                      sm:text-[9.5px]
                      lg:text-[10px]
                      font-semibold
                      whitespace-nowrap
                    "
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* ================= ACTIONS ================= */}
            <div
              className="
                flex
                items-center
                flex-wrap
                gap-4
                sm:gap-5
                mt-4
              "
            >
              <Link
                to="/shop"
                className="
                  h-10
                  bg-[#171714]
                  text-white
                  px-5
                  flex
                  items-center
                  justify-between
                  gap-7
                  text-[8px]
                  sm:text-[9px]
                  font-bold
                  tracking-[0.15em]
                  hover:bg-[#c77718]
                  transition
                "
              >
                EXPLORE COLLECTION

                <FiArrowRight size={11} />
              </Link>

              <Link
                to="/our-promise"
                className="
                  flex
                  items-center
                  gap-2
                  text-[8px]
                  sm:text-[9px]
                  font-bold
                  tracking-[0.14em]
                  hover:text-[#c77718]
                  transition
                "
              >
                OUR PROMISE

                <FiArrowRight size={10} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;