import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiShoppingBag,
} from "react-icons/fi";

const Checkout = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    try {
      const saved =
        JSON.parse(localStorage.getItem("karonCart")) || [];
      setCart(saved);
    } catch {
      setCart([]);
    }
  }, []);

  const subtotal = useMemo(() => {
    return cart.reduce(
      (total, item) =>
        total +
        Number(item.price || 0) *
          Number(item.quantity || 1),
      0
    );
  }, [cart]);

  const totalItems = useMemo(() => {
    return cart.reduce(
      (total, item) =>
        total + Number(item.quantity || 1),
      0
    );
  }, [cart]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10 digit number.";
    }

    if (!form.address.trim()) {
      newErrors.address = "Please enter your address.";
    }

    if (!form.city.trim()) {
      newErrors.city = "Please enter your city.";
    }

    if (!form.state.trim()) {
      newErrors.state = "Please enter your state.";
    }

    if (!form.pincode.trim()) {
      newErrors.pincode = "Please enter your PIN code.";
    } else if (!/^[0-9]{6}$/.test(form.pincode)) {
      newErrors.pincode = "Enter a valid 6 digit PIN code.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cart.length === 0) return;
    if (!validateForm()) return;

    setOrderPlaced(true);

    localStorage.removeItem("karonCart");
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const inputClass = `
    w-full
    h-9
    bg-transparent
    border
    border-[#c8bba8]
    px-3
    text-[11px]
    sm:text-[12px]
    outline-none
    focus:border-[#171714]
    transition
  `;

  const labelClass =
    "block text-[9px] sm:text-[10px] font-bold tracking-[0.1em] mb-1";

  const errorClass =
    "text-[9px] sm:text-[10px] text-red-700 mt-1";

  if (orderPlaced) {
    return (
      <main className="min-h-[calc(100vh-110px)] bg-[#f4efe7] flex items-center justify-center px-5 py-8">
        <div className="w-full max-w-[480px] text-center">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#171714] text-white flex items-center justify-center">
            <FiCheck size={19} />
          </div>

          <p className="text-[#b66d17] text-[9px] font-bold tracking-[0.22em] uppercase mt-4">
            Karon Plus
          </p>

          <h1 className="font-serif text-[31px] sm:text-[38px] mt-1">
            Order Confirmed.
          </h1>

          <p className="text-[12px] leading-5 text-[#6d6459] mt-2">
            Thank you, {form.fullName}. Your order has been
            placed successfully.
          </p>

          <button
            type="button"
            onClick={() => navigate("/shop")}
            className="mx-auto mt-5 h-10 bg-[#171714] text-white px-5 flex items-center gap-6 text-[9px] font-bold tracking-[0.15em] hover:bg-[#c77718] transition"
          >
            CONTINUE SHOPPING
            <FiArrowRight size={12} />
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#f4efe7] text-[#171714] min-h-[calc(100vh-110px)]">
      <section className="px-4 sm:px-6 lg:px-8 xl:px-10 py-2 lg:py-3">
        <div className="max-w-[1120px] mx-auto">

          {/* TOP BAR */}
          <div className="flex items-center justify-between mb-2">
            <Link
              to="/cart"
              className="group flex items-center gap-2 text-[9px] sm:text-[10px] font-bold tracking-[0.14em]"
            >
              <span className="w-7 h-7 rounded-full border border-[#cbbda8] flex items-center justify-center group-hover:bg-[#171714] group-hover:text-white transition">
                <FiArrowLeft size={10} />
              </span>

              BACK TO BAG
            </Link>

            <div className="hidden sm:flex text-[9px] tracking-[0.12em] uppercase">
              <Link
                to="/"
                className="text-[#8b7d6a] hover:text-[#c7791c]"
              >
                Home
              </Link>

              <span className="mx-2">/</span>

              <Link
                to="/cart"
                className="text-[#8b7d6a] hover:text-[#c7791c]"
              >
                Bag
              </Link>

              <span className="mx-2">/</span>

              <span>Checkout</span>
            </div>
          </div>

          {/* HEADING */}
          <div className="flex items-end justify-between pb-2 border-b border-[#cfc2af]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-px bg-[#d58420]" />

                <p className="text-[#b66d17] text-[9px] font-bold tracking-[0.18em] uppercase">
                  Complete Your Order
                </p>
              </div>

              <h1 className="font-serif text-[27px] sm:text-[30px] lg:text-[33px] leading-none">
                Secure{" "}
                <span className="italic text-[#d5811e] font-normal">
                  Checkout.
                </span>
              </h1>
            </div>

            <div className="hidden sm:flex items-center gap-2 pb-1">
              <FiShoppingBag
                size={12}
                className="text-[#c77718]"
              />

              <span className="text-[9px] font-bold tracking-[0.12em] uppercase">
                {totalItems}{" "}
                {totalItems === 1 ? "Item" : "Items"}
              </span>
            </div>
          </div>

          {cart.length === 0 ? (
            <div className="py-12 text-center">
              <FiShoppingBag
                size={25}
                className="mx-auto text-[#b98949]"
              />

              <h2 className="font-serif text-[26px] mt-3">
                Your bag is empty.
              </h2>

              <p className="text-[12px] text-[#6d6459] mt-1">
                Add a product before continuing to checkout.
              </p>

              <Link
                to="/shop"
                className="inline-flex items-center gap-5 mt-4 bg-[#171714] text-white px-5 py-3 text-[9px] font-bold tracking-[0.15em] hover:bg-[#c77718] transition"
              >
                GO TO SHOP
                <FiArrowRight size={11} />
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handlePlaceOrder}
              className="
                grid
                grid-cols-1
                lg:grid-cols-[minmax(0,1fr)_315px]
                gap-5
                lg:gap-7
                items-start
                mt-3
              "
            >

              {/* LEFT SIDE */}
              <div>
                <div className="mb-3">
                  <h2 className="font-serif text-[20px] sm:text-[22px] leading-none">
                    Contact Information
                  </h2>

                  <p className="text-[11px] text-[#70675d] mt-1">
                    Enter your contact and delivery details.
                  </p>
                </div>

                {/* FULL NAME */}
                <div className="mb-2">
                  <label className={labelClass}>
                    FULL NAME
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={inputClass}
                  />

                  {errors.fullName && (
                    <p className={errorClass}>
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* EMAIL + PHONE */}
                <div className="grid sm:grid-cols-2 gap-3 mb-2">
                  <div>
                    <label className={labelClass}>
                      EMAIL
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass}
                    />

                    {errors.email && (
                      <p className={errorClass}>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>
                      PHONE NUMBER
                    </label>

                    <input
                      type="tel"
                      inputMode="numeric"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="10 digit number"
                      maxLength={10}
                      className={inputClass}
                    />

                    {errors.phone && (
                      <p className={errorClass}>
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="mb-2">
                  <label className={labelClass}>
                    DELIVERY ADDRESS
                  </label>

                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="House number, street, area"
                    className={inputClass}
                  />

                  {errors.address && (
                    <p className={errorClass}>
                      {errors.address}
                    </p>
                  )}
                </div>

                {/* CITY / STATE / PIN */}
                <div className="grid sm:grid-cols-3 gap-3">
                  <div>
                    <label className={labelClass}>
                      CITY
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="City"
                      className={inputClass}
                    />

                    {errors.city && (
                      <p className={errorClass}>
                        {errors.city}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>
                      STATE
                    </label>

                    <input
                      type="text"
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      placeholder="State"
                      className={inputClass}
                    />

                    {errors.state && (
                      <p className={errorClass}>
                        {errors.state}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass}>
                      PIN CODE
                    </label>

                    <input
                      type="text"
                      inputMode="numeric"
                      name="pincode"
                      value={form.pincode}
                      onChange={handleChange}
                      placeholder="000000"
                      maxLength={6}
                      className={inputClass}
                    />

                    {errors.pincode && (
                      <p className={errorClass}>
                        {errors.pincode}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* ORDER SUMMARY */}
              <aside className="border border-[#cbbda8] bg-[#f7f2ea] p-3.5 sm:p-4">
                <p className="text-[#b66d17] text-[9px] font-bold tracking-[0.17em] uppercase">
                  Order Summary
                </p>

                <h2 className="font-serif text-[20px] mt-0.5 pb-2 border-b border-[#d1c5b4]">
                  Your Order.
                </h2>

                {/* PRODUCTS */}
                <div
                  className="max-h-[155px] overflow-y-auto"
                  style={{
                    scrollbarWidth: "thin",
                  }}
                >
                  {cart.map((item, index) => (
                    <div
                      key={`${item.id}-${item.size}-${index}`}
                      className="flex gap-2.5 py-2 border-b border-[#d1c5b4]"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-[48px] h-[56px] shrink-0 object-cover bg-[#ded5c8]"
                      />

                      <div className="flex-1 min-w-0">
                        <p className="font-serif text-[13px] leading-tight">
                          {item.name}
                        </p>

                        <p className="text-[10px] text-[#70675d] mt-1">
                          Size: {item.size || "M"} · Qty:{" "}
                          {item.quantity || 1}
                        </p>

                        <p className="text-[11px] font-semibold mt-1">
                          ₹
                          {(
                            Number(item.price || 0) *
                            Number(item.quantity || 1)
                          ).toLocaleString("en-IN")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* PRICE */}
                <div className="py-2 space-y-2 border-b border-[#d1c5b4]">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-[#6d6459]">
                      Subtotal
                    </span>

                    <span>
                      ₹{subtotal.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex justify-between text-[11px]">
                    <span className="text-[#6d6459]">
                      Shipping
                    </span>

                    <span className="text-[#c77718] font-semibold">
                      FREE
                    </span>
                  </div>
                </div>

                {/* TOTAL */}
                <div className="flex items-center justify-between py-2">
                  <span className="text-[10px] font-bold tracking-[0.1em]">
                    TOTAL
                  </span>

                  <span className="font-serif text-[19px]">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>

                {/* PLACE ORDER */}
                <button
                  type="submit"
                  className="w-full h-10 bg-[#171714] text-white px-4 flex items-center justify-between text-[9px] sm:text-[10px] font-bold tracking-[0.13em] hover:bg-[#c77718] transition"
                >
                  PLACE ORDER
                  <FiArrowRight size={11} />
                </button>
              </aside>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Checkout;