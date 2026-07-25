import {
  FiFeather,
  FiWind,
  FiAward,
  FiShield,
  FiArrowUpRight,
} from "react-icons/fi";

const features = [
  {
    number: "01",
    icon: FiFeather,
    title: "Premium Fabrics",
    text: "Selected for superior feel, refined finish and lasting comfort.",
  },
  {
    number: "02",
    icon: FiWind,
    title: "Everyday Comfort",
    text: "Breathable construction designed for effortless all-day wear.",
  },
  {
    number: "03",
    icon: FiAward,
    title: "Refined Craft",
    text: "Precision in every collar, cuff, stitch and finishing detail.",
  },
  {
    number: "04",
    icon: FiShield,
    title: "Made to Last",
    text: "Timeless construction created to look refined beyond seasons.",
  },
];

const WhyKaronPlus = () => {
  return (
    <section className="bg-[#f7f3ed] px-5 py-12 sm:px-8 lg:px-10 lg:py-14 font-['Nunito']">
      <div className="mx-auto max-w-[1450px]">

        <div className="grid overflow-hidden bg-[#181815] lg:grid-cols-[35%_65%]">

          {/* LEFT SIDE */}
          <div className="relative flex flex-col justify-between border-b border-white/10 px-7 py-9 sm:px-10 lg:min-h-[400px] lg:border-b-0 lg:border-r lg:px-11 lg:py-10">

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d39a46]" />

                <p className="text-[8px] font-semibold uppercase tracking-[0.4em] text-[#d39a46]">
                  Why Karon Plus
                </p>
              </div>

              <h2 className="font-['Nunito'] max-w-[390px] text-[34px] leading-[1.08] text-white sm:text-[40px] lg:text-[44px]">
                More Than
                <span className="block italic text-[#d39a46]">
                  Just a Shirt.
                </span>
              </h2>

              <p className="mt-5 max-w-[350px] text-[12px] leading-6 text-white/55">
                Thoughtfully made for men who value quality, comfort and
                understated sophistication in every detail.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#shop"
                className="group inline-flex items-center gap-3 text-[8px] font-semibold uppercase tracking-[0.25em] text-white"
              >
                Discover Our Standard

                <FiArrowUpRight
                  size={14}
                  className="text-[#d39a46] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <div className="mt-3 h-px w-16 bg-[#d39a46]" />
            </div>

            <span className="absolute bottom-5 right-7 font-['Nunito'] text-[70px] leading-none text-white/[0.025] lg:text-[90px]">
              KP
            </span>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid sm:grid-cols-2">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className={`
                    group relative
                    min-h-[200px]
                    border-white/10
                    px-7 py-7
                    transition-colors duration-500
                    hover:bg-[#211f1b]
                    sm:px-8

                    ${index % 2 === 0 ? "sm:border-r" : ""}
                    ${index < 2 ? "border-b" : ""}
                    ${index > 0 && index < 2 ? "" : ""}
                  `}
                >
                  {/* NUMBER */}
                  <span className="absolute right-6 top-6 text-[8px] tracking-[0.2em] text-white/25">
                    {feature.number}
                  </span>

                  {/* ICON */}
                  <div className="flex h-9 w-9 items-center justify-center border border-[#b98238]/60 text-[#d39a46] transition-all duration-300 group-hover:bg-[#d39a46] group-hover:text-white">
                    <Icon size={15} />
                  </div>

                  {/* TEXT */}
                  <div className="mt-6">
                    <p className="mb-2 text-[7px] font-semibold uppercase tracking-[0.3em] text-[#d39a46]">
                      Karon Plus Standard
                    </p>

                    <h3 className="font-['Nunito'] text-[20px] text-white sm:text-[21px]">
                      {feature.title}
                    </h3>

                    <p className="mt-3 max-w-[260px] text-[11px] leading-5 text-white/50">
                      {feature.text}
                    </p>
                  </div>

                  {/* HOVER LINE */}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#d39a46] transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}

          </div>
        </div>

        {/* BOTTOM TEXT */}
        <div className="flex flex-col gap-2 border-x border-b border-[#ddd4c8] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-['Nunito'] text-[14px] italic text-[#625b52]">
            Style that speaks. Comfort that lasts.
          </p>

          <p className="text-[7px] font-semibold uppercase tracking-[0.35em] text-[#b97f35]">
            The Ultimate Choice
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyKaronPlus;