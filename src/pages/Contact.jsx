import { useState } from "react";
import {
  FiArrowRight,
  FiMail,
  FiClock,
  FiCheck,
} from "react-icons/fi";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSent(true);
    e.currentTarget.reset();

    setTimeout(() => {
      setSent(false);
    }, 2200);
  };

  const inputClass = `
    w-full
    h-[36px]
    bg-transparent
    border
    border-[#c8bba8]
    px-3
    text-[11px]
    sm:text-[12px]
    outline-none
    placeholder:text-[#93887a]
    focus:border-[#171714]
    transition
  `;

  const labelClass =
    "block text-[9px] font-bold tracking-[0.12em] mb-1";

  return (
    <main className="bg-[#f4efe7] text-[#171714] lg:h-[calc(100vh-110px)] lg:overflow-hidden">

      <section
        className="
          max-w-[1140px]
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-3
          lg:py-4
        "
      >

        {/* ================= HEADER ================= */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            sm:items-end
            sm:justify-between
            gap-2
            pb-2.5
            border-b
            border-[#cfc2af]
          "
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-5 h-px bg-[#c77718]" />

              <p className="text-[#b66d17] text-[8px] sm:text-[9px] font-bold tracking-[0.18em] uppercase">
                Contact
              </p>
            </div>

            <h1
              className="
                font-serif
                text-[27px]
                sm:text-[30px]
                lg:text-[33px]
                leading-none
              "
            >
              Let&apos;s{" "}
              <span className="italic font-normal text-[#d27c19]">
                talk.
              </span>
            </h1>
          </div>

          <p className="hidden md:block max-w-[300px] text-right text-[10px] lg:text-[11px] leading-[1.5] text-[#655d52]">
            Questions about shirts, sizing or your order?
            We&apos;re here to help.
          </p>
        </div>

        {/* ================= CONTACT BOX ================= */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.68fr_1.32fr]
            border
            border-[#cfc2af]
            mt-3
          "
        >

          {/* ================= LEFT ================= */}
          <div
            className="
              bg-[#171714]
              text-white
              px-5
              sm:px-6
              lg:px-6
              py-4
              lg:py-5
              flex
              flex-col
              justify-between
            "
          >
            <div>
              <p className="text-[#d58a29] text-[8px] font-bold tracking-[0.18em] uppercase">
                Karon Plus Care
              </p>

              <h2 className="font-serif text-[23px] lg:text-[25px] leading-[1.05] mt-1.5">
                Here when
                <br />
                <span className="italic text-[#d58a29] font-normal">
                  you need us.
                </span>
              </h2>

              <p className="text-[10px] lg:text-[11px] leading-[1.55] text-white/65 mt-2.5 max-w-[275px]">
                Need help with a product, size or order?
                Send us a message and our team will assist you.
              </p>
            </div>

            {/* CONTACT INFO */}
            <div className="mt-5 lg:mt-6">

              {/* EMAIL */}
              <div className="flex items-center gap-3 py-2.5 border-t border-white/15">
                <span className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <FiMail
                    size={11}
                    className="text-[#d58a29]"
                  />
                </span>

                <div>
                  <p className="text-[8px] tracking-[0.14em] uppercase text-white/45">
                    Email
                  </p>

                  <p className="text-[10px] lg:text-[11px] mt-0.5">
                    support@karonplus.com
                  </p>
                </div>
              </div>

              {/* HOURS */}
              <div className="flex items-center gap-3 py-2.5 border-t border-white/15">
                <span className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                  <FiClock
                    size={11}
                    className="text-[#d58a29]"
                  />
                </span>

                <div>
                  <p className="text-[8px] tracking-[0.14em] uppercase text-white/45">
                    Hours
                  </p>

                  <p className="text-[10px] lg:text-[11px] mt-0.5">
                    Mon – Sat · 10 AM – 7 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= FORM ================= */}
          <div className="bg-[#f8f3eb] px-5 sm:px-6 lg:px-7 py-4 lg:py-5">

            {/* FORM TITLE */}
            <div className="mb-3">
              <p className="text-[#b66d17] text-[8px] font-bold tracking-[0.18em] uppercase">
                Send a Message
              </p>

              <h2 className="font-serif text-[20px] lg:text-[22px] leading-none mt-1">
                How can we help?
              </h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-2.5"
            >

              {/* NAME + EMAIL */}
              <div className="grid sm:grid-cols-2 gap-2.5">

                <div>
                  <label
                    htmlFor="name"
                    className={labelClass}
                  >
                    YOUR NAME
                  </label>

                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={labelClass}
                  >
                    EMAIL ADDRESS
                  </label>

                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div>
                <label
                  htmlFor="subject"
                  className={labelClass}
                >
                  SUBJECT
                </label>

                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="Order, sizing or product enquiry"
                  className={inputClass}
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className={labelClass}
                >
                  MESSAGE
                </label>

                <textarea
                  id="message"
                  required
                  rows="3"
                  placeholder="How can we help?"
                  className="
                    w-full
                    h-[68px]
                    bg-transparent
                    border
                    border-[#c8bba8]
                    px-3
                    py-2
                    text-[11px]
                    sm:text-[12px]
                    leading-4
                    outline-none
                    resize-none
                    placeholder:text-[#93887a]
                    focus:border-[#171714]
                    transition
                  "
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className={`
                  w-full
                  h-[36px]
                  px-4
                  flex
                  items-center
                  justify-between
                  text-white
                  text-[9px]
                  font-bold
                  tracking-[0.14em]
                  transition
                  ${
                    sent
                      ? "bg-[#9a6b31]"
                      : "bg-[#171714] hover:bg-[#c77718]"
                  }
                `}
              >
                <span className="flex items-center gap-2">
                  {sent && <FiCheck size={11} />}

                  {sent
                    ? "MESSAGE SENT"
                    : "SEND MESSAGE"}
                </span>

                {!sent && <FiArrowRight size={11} />}
              </button>
            </form>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="hidden lg:flex items-center justify-between pt-2 text-[9px] text-[#786e61]">
          <span>Premium service, made simple.</span>
          <span>Karon Plus Customer Care</span>
        </div>

      </section>
    </main>
  );
};

export default Contact;