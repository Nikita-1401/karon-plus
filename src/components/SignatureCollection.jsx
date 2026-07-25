import { FiArrowUpRight } from "react-icons/fi";

const SignatureCollection = () => {
  return (
    <section
      id="signature"
      className="overflow-hidden bg-[#171714] text-white"
    >
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[42%_58%]">

        {/* LEFT CONTENT */}
        <div className="relative flex items-center px-6 py-14 sm:px-10 md:px-14 lg:min-h-[610px] lg:px-16 xl:px-20">

          {/* Decorative number */}
          <span className="absolute right-8 top-8 hidden font-serif text-[100px] leading-none text-white/[0.025] lg:block">
            01
          </span>

          <div className="relative z-10 max-w-[500px]">

            {/* Small heading */}
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#d29b4c]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.42em] text-[#d7a04e]">
                The Signature Collection
              </p>
            </div>

            {/* Main heading */}
            <h2 className="font-serif text-[40px] leading-[1.02] sm:text-[48px] md:text-[55px] lg:text-[58px]">
              Designed Beyond
              <span className="mt-1 block italic text-[#d6a04d]">
                Trends.
              </span>
            </h2>

            <p className="mt-6 max-w-[430px] text-[13px] leading-7 text-white/65 md:text-[14px]">
              An expression of refined craftsmanship, premium fabrics and
              timeless design — created for men who believe true style is
              defined by the details.
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-3 border-y border-white/15 py-5">

              <div>
                <p className="text-[8px] uppercase tracking-[0.25em] text-[#d6a04d]">
                  Fabric
                </p>
                <p className="mt-2 text-[11px] text-white/80">
                  Premium Quality
                </p>
              </div>

              <div className="border-x border-white/15 px-5">
                <p className="text-[8px] uppercase tracking-[0.25em] text-[#d6a04d]">
                  Detail
                </p>
                <p className="mt-2 text-[11px] text-white/80">
                  Refined Finish
                </p>
              </div>

              <div className="pl-5">
                <p className="text-[8px] uppercase tracking-[0.25em] text-[#d6a04d]">
                  Comfort
                </p>
                <p className="mt-2 text-[11px] text-white/80">
                  Made to Last
                </p>
              </div>

            </div>

            {/* Button */}
            <a
              href="#shop"
              className="group mt-8 inline-flex items-center gap-5 bg-[#d09a4b] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:bg-[#b98235]"
            >
              Discover Collection

              <FiArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE AREA */}
        <div className="relative min-h-[520px] sm:min-h-[600px] lg:min-h-[610px]">

          {/* Main Image */}
          <img
            src="/signature-main.jpg"
            alt="Karon Plus signature shirt collection"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

          {/* Detail Image */}
          <div
            className="
              absolute
              bottom-5
              left-5
              w-[150px]
              border-[5px]
              border-[#f5efe7]
              shadow-2xl
              sm:bottom-8
              sm:left-8
              sm:w-[190px]
              md:w-[210px]
              lg:-left-12
              lg:bottom-10
              lg:w-[220px]
            "
          >
            <img
              src="/signature-detail.jpg"
              alt="Premium shirt fabric and collar detail"
              className="aspect-[4/5] w-full object-cover"
            />

            <div className="bg-[#f5efe7] px-4 py-3 text-[#171714]">
              <p className="text-[7px] font-semibold uppercase tracking-[0.28em] text-[#b67e34]">
                Crafted Detail
              </p>

              <p className="mt-1 font-serif text-[15px]">
                Made with Precision
              </p>
            </div>
          </div>

          {/* Right text */}
          <div className="absolute bottom-7 right-6 text-right sm:right-8 lg:bottom-10 lg:right-10">
            <p className="font-serif text-[20px] italic text-[#e0aa58] sm:text-[24px]">
              Style That Speaks
            </p>

            <p className="mt-2 text-[7px] font-semibold uppercase tracking-[0.4em] text-white">
              Karon Plus
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SignatureCollection;