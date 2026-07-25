const WelcomeSection = () => {
  return (
    <section className="bg-[#fffdf9] px-6 py-12 md:px-10 md:py-14 lg:px-14 lg:py-16">
      <div className="mx-auto max-w-[1200px] text-center">

        {/* Small Heading */}
        <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.4em] text-[#c99142] md:text-[10px]">
          Welcome to Karon Plus
        </p>

        {/* Main Heading */}
        <h2 className="font-serif text-[30px] leading-tight text-[#181818] md:text-[38px] lg:text-[44px]">
          Premium Shirts for the{" "}
          <span className="italic text-[#c99142]">
            Modern Man
          </span>
        </h2>

        {/* Gold Line */}
        <div className="mx-auto my-5 h-[1px] w-14 bg-[#c99142]" />

        {/* Main Description */}
        <p className="mx-auto max-w-[850px] text-[13px] leading-6 text-[#666] md:text-[14px] md:leading-7">
          Where premium fabric meets timeless style. Karon Plus brings
          together comfort, craftsmanship and refined designs to create
          shirts made for work, celebrations and every moment in between.
        </p>

        {/* Second Description */}
        <p className="mx-auto mt-2 max-w-[720px] text-[13px] leading-6 text-[#888] md:text-[14px]">
          Designed for men who appreciate quality, confidence and effortless
          sophistication.
        </p>

      </div>
    </section>
  );
};

export default WelcomeSection;