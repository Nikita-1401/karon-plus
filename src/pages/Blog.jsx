import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

const stories = [
  {
    title: "How to Choose the Perfect Shirt",
    description:
      "A simple guide to choosing the right shirt for work, occasions and relaxed weekends.",
    image: "/formal-white.jpg",
    category: "Style Guide",
    link: "/shirts/formal",
  },
  {
    title: "The Art of Formal Dressing",
    description:
      "Discover timeless shirts and refined details for a confident formal wardrobe.",
    image: "/formal-navy.jpg",
    category: "Formal Wear",
    link: "/shirts/formal",
  },
  {
    title: "5 Ways to Style a Casual Shirt",
    description:
      "Easy combinations that make casual shirts work from weekdays to weekends.",
    image: "/casual-shirt.jpg",
    category: "Everyday Style",
    link: "/shirts/casual",
  },
  {
    title: "What Makes a Premium Shirt?",
    description:
      "Explore the fabrics, finish and thoughtful details behind premium shirting.",
    image: "/premium-black.jpg",
    category: "Premium Collection",
    link: "/shirts/premium",
  },
];

const Blog = () => {
  return (
    <main className="bg-[#f5f0e8] text-[#171714]">

      {/* ================= HERO ================= */}
      <section className="px-5 pt-4 sm:px-7 lg:px-8">
        <div className="mx-auto max-w-[1380px]">

          <div className="grid overflow-hidden border border-[#d7cbbb] bg-[#eee5d9] lg:grid-cols-[0.88fr_1.12fr]">

            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center px-6 py-7 sm:px-8 lg:px-10 lg:py-8">

              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-[#c77b20]" />

                <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#a8661c]">
                  Karon Plus Journal
                </p>
              </div>

              <h1 className="max-w-[520px] font-serif text-[38px] leading-[0.98] sm:text-[44px] lg:text-[50px]">
                Dressing well,
                <br />
                <span className="italic text-[#c77b20]">
                  made effortless.
                </span>
              </h1>

              <p className="mt-4 max-w-[450px] text-[12px] leading-[1.8] text-[#62594f] sm:text-[13px]">
                Thoughtful ideas on shirts, styling and building a wardrobe
                that feels refined without trying too hard.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">

                <Link
                  to="/shop"
                  className="
                    group
                    inline-flex
                    h-10
                    items-center
                    justify-center
                    gap-3
                    bg-[#171714]
                    px-5
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-white
                    transition
                    hover:bg-[#c77b20]
                  "
                >
                  Explore Collection

                  <FiArrowUpRight
                    size={12}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <Link
                  to="/shirts/formal"
                  className="
                    group
                    inline-flex
                    h-10
                    items-center
                    gap-2
                    border-b
                    border-[#171714]
                    px-1
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                  "
                >
                  Style Guide

                  <FiArrowRight
                    size={11}
                    className="text-[#c77b20] transition-transform group-hover:translate-x-1"
                  />
                </Link>

              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative h-[290px] overflow-hidden bg-[#ddd2c4] sm:h-[340px] lg:h-[365px]">

              <img
                src="/casual-shirt.jpg"
                alt="Karon Plus menswear style"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  hover:scale-[1.02]
                "
              />

              <div className="absolute bottom-0 left-0 bg-[#fffdf9] px-4 py-3 sm:px-5">

                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a8661c]">
                  The Karon Edit
                </p>

                <p className="mt-1 font-serif text-[17px]">
                  Style with distinction.
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= TITLE ================= */}
      <section className="px-5 pt-5 sm:px-7 lg:px-8">
        <div className="mx-auto max-w-[1380px]">

          <div className="flex flex-col gap-2 border-b border-[#d3c6b5] pb-3 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-[#a8661c]">
                From The Journal
              </p>

              <h2 className="font-serif text-[30px] leading-none sm:text-[34px]">
                Ideas for{" "}
                <span className="italic text-[#c77b20]">
                  better dressing.
                </span>
              </h2>

            </div>

            <p className="max-w-[360px] text-[11px] leading-[1.6] text-[#71675c] sm:text-right">
              Simple style advice for a refined everyday wardrobe.
            </p>

          </div>

        </div>
      </section>

      {/* ================= BLOG CARDS ================= */}
      <section className="px-5 py-4 sm:px-7 lg:px-8">
        <div className="mx-auto max-w-[1380px]">

          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">

            {stories.map((story) => (
              <article
                key={story.title}
                className="group flex min-w-0 flex-col"
              >

                {/* IMAGE */}
                <Link
                  to={story.link}
                  className="relative block h-[260px] overflow-hidden bg-[#ddd3c6] sm:h-[275px] lg:h-[255px]"
                >

                  <img
                    src={story.image}
                    alt={story.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      object-top
                      transition-transform
                      duration-700
                      group-hover:scale-[1.035]
                    "
                  />

                  <div className="absolute left-3 top-3 bg-[#fffdf9] px-3 py-2">

                    <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#171714]">
                      {story.category}
                    </p>

                  </div>

                </Link>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col border-b border-[#d3c6b5] pb-3 pt-3">

                  <Link to={story.link}>
                    <h3 className="font-serif text-[20px] leading-[1.1] transition-colors hover:text-[#b76c17]">
                      {story.title}
                    </h3>
                  </Link>

                  <p className="mt-2 text-[11px] leading-[1.65] text-[#665d53]">
                    {story.description}
                  </p>

                  <Link
                    to={story.link}
                    className="
                      group/link
                      mt-3
                      flex
                      w-fit
                      items-center
                      gap-2
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                    "
                  >
                    Explore Story

                    <FiArrowRight
                      size={10}
                      className="text-[#c77b20] transition-transform group-hover/link:translate-x-1"
                    />
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-5 pb-4 sm:px-7 lg:px-8">
        <div className="mx-auto max-w-[1380px]">

          <div className="flex flex-col gap-4 border border-[#d1c3b1] bg-[#e8ded0] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a8661c]">
                Karon Plus
              </p>

              <h2 className="mt-1 font-serif text-[22px] leading-tight sm:text-[25px]">
                Find your next{" "}
                <span className="italic text-[#c77b20]">
                  signature shirt.
                </span>
              </h2>

            </div>

            <Link
              to="/shop"
              className="
                group
                flex
                h-10
                w-fit
                items-center
                gap-3
                bg-[#171714]
                px-5
                text-[9px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-white
                transition
                hover:bg-[#c77b20]
              "
            >
              Shop Collection

              <FiArrowUpRight
                size={12}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Blog;