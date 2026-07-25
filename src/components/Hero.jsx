import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";

const slides = [
  {
    image: "/hero-shirt.jpg",
    position: "center 35%",
    eyebrow: "KARON PLUS • PREMIUM MENSWEAR",
    title: "Crafted for",
    highlight: "Distinction.",
    description:
      "Premium shirts designed with refined fabrics, modern tailoring and effortless comfort.",
  },
  {
    image: "/formal-shirt.jpg",
    position: "center 32%",
    eyebrow: "REFINED • MODERN • TIMELESS",
    title: "Confidence in",
    highlight: "Every Detail.",
    description:
      "Sharp silhouettes and premium craftsmanship created for work, occasions and everything in between.",
  },
  {
    image: "/casual-shirt.jpg",
    position: "center 30%",
    eyebrow: "EFFORTLESS EVERYDAY STYLE",
    title: "Made for",
    highlight: "Every Moment.",
    description:
      "Contemporary shirts that bring together relaxed comfort, distinctive design and modern style.",
  },
  {
    image: "/premium-shirt.jpg",
    position: "center 32%",
    eyebrow: "THE KARON PLUS SIGNATURE",
    title: "Style That",
    highlight: "Speaks.",
    description:
      "Discover elevated menswear made for those who appreciate quality, confidence and timeless style.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // Auto slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="
        relative
        h-[calc(100vh-130px)]
        min-h-[500px]
        max-h-[610px]
        w-full
        overflow-hidden
        bg-[#080808]
      "
    >
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`
            absolute inset-0
            transition-all
            duration-1000
            ease-in-out
            ${
              index === current
                ? "scale-100 opacity-100"
                : "pointer-events-none scale-[1.02] opacity-0"
            }
          `}
        >
          <img
            src={slide.image}
            alt={`${slide.title} ${slide.highlight}`}
            style={{
              objectPosition: slide.position,
            }}
            className="
              h-full
              w-full
              object-cover
            "
          />

          {/* Left Overlay */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-black/90
              via-black/50
              to-black/5
            "
          />

          {/* Bottom Overlay */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-black/30
              via-transparent
              to-transparent
            "
          />
        </div>
      ))}

      {/* Hero Content */}
      <div
        className="
          relative z-10
          mx-auto
          flex h-full
          max-w-[1440px]
          items-center
          px-6
          md:px-10
          lg:px-14
        "
      >
        <div className="w-full max-w-[600px] -translate-y-2">
          {/* Small Heading */}
          <div className="mb-5 flex items-center gap-4">
            <span className="h-[1px] w-10 bg-[#d1a052]" />

            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.34em]
                text-[#e0ad5b]
                md:text-[10px]
              "
            >
              {slides[current].eyebrow}
            </p>
          </div>

          {/* Main Heading */}
          <h1
            className="
              font-serif
              text-[42px]
              font-normal
              leading-[0.96]
              tracking-[-0.035em]
              text-white
              sm:text-[50px]
              md:text-[58px]
              lg:text-[64px]
            "
          >
            {slides[current].title}

            <span
              className="
                mt-1
                block
                italic
                text-[#d1a052]
              "
            >
              {slides[current].highlight}
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-[490px]
              text-[13px]
              font-light
              leading-6
              text-white/85
              md:text-[14px]
              md:leading-7
            "
          >
            {slides[current].description}
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="
                group
                flex
                items-center
                gap-4
                bg-[#cf9d50]
                px-7
                py-[14px]
                text-[9px]
                font-semibold
                tracking-[0.19em]
                text-white
                transition-all
                duration-300
                hover:bg-white
                hover:text-black
              "
            >
              EXPLORE COLLECTION

              <FiArrowUpRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />
            </Link>

            <Link
              to="/shop"
              className="
                group
                flex
                items-center
                gap-4
                border
                border-white/50
                bg-black/10
                px-7
                py-[13px]
                text-[9px]
                font-semibold
                tracking-[0.19em]
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-white
                hover:bg-white
                hover:text-black
              "
            >
              SHOP NOW

              <FiArrowUpRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Number */}
      <div
        className="
          absolute
          bottom-6
          left-6
          z-20
          hidden
          items-center
          gap-3
          md:left-10
          md:flex
          lg:left-14
        "
      >
        <span className="text-[10px] text-[#d1a052]">
          0{current + 1}
        </span>

        <span className="h-[1px] w-8 bg-white/35" />

        <span className="text-[9px] text-white/60">
          0{slides.length}
        </span>
      </div>

      {/* Slider Dots */}
      <div
        className="
          absolute
          bottom-7
          left-1/2
          z-20
          flex
          -translate-x-1/2
          items-center
          gap-3
        "
      >
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`
              h-[3px]
              transition-all
              duration-500
              ${
                current === index
                  ? "w-10 bg-[#d1a052]"
                  : "w-5 bg-white/35 hover:bg-white"
              }
            `}
          />
        ))}
      </div>

      {/* Previous / Next Arrows */}
      <div
        className="
          absolute
          bottom-4
          right-5
          z-20
          flex
          gap-3
          md:bottom-5
          md:right-8
        "
      >
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/40
            bg-black/20
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-[#d1a052]
            hover:bg-[#d1a052]
          "
        >
          <FiArrowLeft size={18} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/40
            bg-black/20
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-[#d1a052]
            hover:bg-[#d1a052]
          "
        >
          <FiArrowRight size={18} />
        </button>
      </div>

      {/* Slider Progress */}
      <div className="absolute bottom-0 left-0 z-20 h-[2px] w-full bg-white/10">
        <div
          key={current}
          className="h-full bg-[#cf9d50]"
          style={{
            animation: "heroProgress 4s linear forwards",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;