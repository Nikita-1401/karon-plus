import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiStar } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    quote:
      "The fabric feels premium and the fit is exactly what I was looking for. It looks sharp without compromising on comfort.",
    name: "Aarav Mehta",
    location: "Mumbai",
    product: "Signature White Shirt",
  },
  {
    id: 2,
    quote:
      "Karon Plus has become my go-to for formal shirts. The finishing, fabric quality and attention to detail genuinely stand out.",
    name: "Rohan Sharma",
    location: "Delhi",
    product: "Classic Sky Shirt",
  },
  {
    id: 3,
    quote:
      "A perfect balance of elegance and comfort. I wore it throughout an event and it still felt effortless by the end of the day.",
    name: "Kabir Malhotra",
    location: "Bengaluru",
    product: "Premium Black Shirt",
  },
  {
    id: 4,
    quote:
      "The printed collection feels sophisticated rather than loud. The shirt looks even better in person and fits beautifully.",
    name: "Aditya Kapoor",
    location: "Pune",
    product: "Azure Floral Shirt",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const getIndex = (offset) =>
    (activeIndex + offset + testimonials.length) % testimonials.length;

  const previous = testimonials[getIndex(-1)];
  const current = testimonials[activeIndex];
  const next = testimonials[getIndex(1)];

  return (
    <section className="overflow-hidden bg-[#fbf8f3] px-4 pb-2 pt-4 sm:px-6 sm:pt-5 lg:px-5 lg:pb-2 lg:pt-5 font-['Nunito']">
      <div className="mx-auto max-w-[1450px]">

        {/* ================= HEADING ================= */}
        <div className="mb-5 text-center">
          <p className="mb-2 text-[8px] font-semibold uppercase tracking-[0.45em] text-[#c58b3b]">
            The Karon Experience
          </p>

          <h2 className="font-['Nunito'] text-[32px] leading-[1.05] text-[#171715] sm:text-[39px] lg:text-[45px]">
            Worn. Loved.
            <span className="ml-2 italic text-[#d29742]">
              Remembered.
            </span>
          </h2>

          <div className="mx-auto mt-3 h-px w-10 bg-[#d29742]" />

          <p className="mx-auto mt-3 max-w-[620px] text-[10px] leading-[1.7] text-[#746c62] sm:text-[11px]">
            Stories from men who choose Karon Plus for moments that deserve
            confidence, comfort and timeless style.
          </p>
        </div>

        {/* ================= TESTIMONIAL CARDS ================= */}
        <div className="grid gap-3 lg:grid-cols-[0.82fr_1.28fr_0.82fr]">

          {/* LEFT CARD */}
          <article className="hidden h-[285px] border border-[#ded7cd] bg-[#f7f3ed] p-6 lg:flex lg:flex-col lg:justify-between">
            <div>
              <span className="font-['Nunito'] text-[40px] leading-none text-[#d4a05c]">
                “
              </span>

              <p className="mt-3 text-[11px] leading-[1.8] text-[#8a837a]">
                {previous.quote}
              </p>
            </div>

            <div className="border-t border-[#ddd5ca] pt-4">
              <h3 className="font-['Nunito'] text-[17px] text-[#615b54]">
                {previous.name}
              </h3>

              <p className="mt-1 text-[7px] font-semibold uppercase tracking-[0.25em] text-[#c58b3b]">
                {previous.location}
              </p>
            </div>
          </article>

          {/* ================= CENTER ACTIVE CARD ================= */}
          <article className="relative min-h-[285px] overflow-hidden bg-[#171714] px-7 py-6 sm:px-9 lg:h-[285px] lg:px-10">

            {/* Decorative Quote */}
            <span className="pointer-events-none absolute right-8 top-0 font-['Nunito'] text-[95px] leading-none text-white/[0.035]">
              “
            </span>

            <div className="relative z-10 flex h-full flex-col justify-between">

              <div>
                {/* Stars */}
                <div className="mb-4 flex gap-1 text-[#d49a45]">
                  {[...Array(5)].map((_, index) => (
                    <FiStar
                      key={index}
                      size={12}
                      fill="currentColor"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="max-w-[610px] font-['Nunito'] text-[20px] leading-[1.42] text-white sm:text-[22px] lg:text-[24px]">
                  “{current.quote}”
                </p>
              </div>

              {/* Customer Information */}
              <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="font-['Nunito'] text-[18px] text-white">
                    {current.name}
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="text-[7px] font-semibold uppercase tracking-[0.24em] text-[#d49a45]">
                      {current.location}
                    </span>

                    <span className="h-3 w-px bg-white/20" />

                    <span className="text-[7px] uppercase tracking-[0.18em] text-white/40">
                      {current.product}
                    </span>
                  </div>
                </div>

                <span className="text-[6px] font-semibold uppercase tracking-[0.35em] text-white/35">
                  Verified Customer
                </span>
              </div>
            </div>
          </article>

          {/* ================= RIGHT CARD ================= */}
          <article className="hidden h-[285px] border border-[#ded7cd] bg-[#f7f3ed] p-6 lg:flex lg:flex-col lg:justify-between">
            <div>
              <span className="font-['Nunito'] text-[40px] leading-none text-[#d4a05c]">
                “
              </span>

              <p className="mt-3 text-[11px] leading-[1.8] text-[#8a837a]">
                {next.quote}
              </p>
            </div>

            <div className="border-t border-[#ddd5ca] pt-4">
              <h3 className="font-['Nunito'] text-[17px] text-[#615b54]">
                {next.name}
              </h3>

              <p className="mt-1 text-[7px] font-semibold uppercase tracking-[0.25em] text-[#c58b3b]">
                {next.location}
              </p>
            </div>
          </article>
        </div>

        {/* ================= SLIDER CONTROLS ================= */}
        <div className="mt-2 flex h-[34px] items-center justify-between">

          {/* Slider Indicators - Left */}
          <div className="flex items-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial ${index + 1}`}
                className={`h-[2px] border-0 p-0 transition-all duration-300 ${
                  activeIndex === index
                    ? "w-9 bg-[#c58b3b]"
                    : "w-5 bg-[#cfc7bc]"
                }`}
              />
            ))}
          </div>

          {/* Arrows - Right */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d8d0c5] bg-transparent text-[#292622] transition-all duration-300 hover:border-[#171715] hover:bg-[#171715] hover:text-white"
            >
              <FiArrowLeft size={13} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d8d0c5] bg-transparent text-[#292622] transition-all duration-300 hover:border-[#171715] hover:bg-[#171715] hover:text-white"
            >
              <FiArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;