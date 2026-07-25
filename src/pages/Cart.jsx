import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiTrash2,
} from "react-icons/fi";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      const saved =
        JSON.parse(localStorage.getItem("karonCart")) || [];

      setCart(saved);
    } catch {
      setCart([]);
    }
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);

    localStorage.setItem(
      "karonCart",
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(new Event("cartUpdated"));
  };

  const increaseQuantity = (index) => {
    const updated = cart.map((item, i) =>
      i === index
        ? {
            ...item,
            quantity: Number(item.quantity || 1) + 1,
          }
        : item
    );

    updateCart(updated);
  };

  const decreaseQuantity = (index) => {
    const updated = cart.map((item, i) =>
      i === index
        ? {
            ...item,
            quantity: Math.max(
              1,
              Number(item.quantity || 1) - 1
            ),
          }
        : item
    );

    updateCart(updated);
  };

  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    updateCart(updated);
  };

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

  return (
    <main className="bg-[#f4efe7] text-[#171714] min-h-[calc(100vh-118px)]">
      <section className="px-4 sm:px-6 lg:px-10 xl:px-12 py-4">
        <div className="max-w-[1180px] mx-auto">

          {/* ================= TOP ROW ================= */}
          <div className="flex items-center justify-between mb-3">
            <Link
              to="/shop"
              className="group flex items-center gap-2.5 text-[9px] sm:text-[10px] font-bold tracking-[0.16em]"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#cbbda8] flex items-center justify-center group-hover:bg-[#171714] group-hover:text-white transition">
                <FiArrowLeft size={11} />
              </span>

              CONTINUE SHOPPING
            </Link>

            <div className="hidden sm:flex text-[9px] tracking-[0.15em] uppercase">
              <Link
                to="/"
                className="text-[#8b7d6a] hover:text-[#c7791c]"
              >
                Home
              </Link>

              <span className="mx-2">/</span>

              <span>Shopping Bag</span>
            </div>
          </div>

          {/* ================= HEADING ================= */}
          <div className="flex items-end justify-between gap-4 pb-3 border-b border-[#cfc2af]">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-px bg-[#d58420]" />

                <p className="text-[#b66d17] text-[9px] sm:text-[10px] font-bold tracking-[0.22em] uppercase">
                  Your Selection
                </p>
              </div>

              <h1 className="font-serif text-[30px] sm:text-[35px] lg:text-[38px] leading-none">
                Shopping{" "}
                <span className="italic text-[#d5811e] font-normal">
                  Bag.
                </span>
              </h1>
            </div>

            <div className="flex items-center gap-2 pb-1">
              <FiShoppingBag
                size={13}
                className="text-[#c77718]"
              />

              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.14em] uppercase">
                {totalItems}{" "}
                {totalItems === 1 ? "Item" : "Items"}
              </span>
            </div>
          </div>

          {/* ================= EMPTY CART ================= */}
          {cart.length === 0 ? (
            <div className="py-16 sm:py-20 text-center">
              <FiShoppingBag
                size={27}
                className="mx-auto mb-4 text-[#b98949]"
              />

              <h2 className="font-serif text-[28px] sm:text-[32px]">
                Your bag is empty.
              </h2>

              <p className="text-[12px] sm:text-[13px] text-[#6d6459] mt-2">
                Your selected shirts will appear here.
              </p>

              <Link
                to="/shop"
                className="inline-flex items-center gap-5 mt-5 bg-[#171714] text-white px-6 py-3 text-[9px] sm:text-[10px] font-bold tracking-[0.16em] hover:bg-[#c77718] transition"
              >
                SHOP NOW
                <FiArrowRight size={12} />
              </Link>
            </div>
          ) : (
            /* ================= CART CONTENT ================= */
            <div className="grid lg:grid-cols-[minmax(0,1fr)_310px] gap-6 lg:gap-8 items-start mt-4">

              {/* ================= PRODUCTS ================= */}
              <div>
                {cart.map((item, index) => (
                  <div
                    key={`${item.id}-${item.size}-${index}`}
                    className="
                      grid
                      grid-cols-[95px_minmax(0,1fr)]
                      sm:grid-cols-[115px_minmax(0,1fr)_110px]
                      gap-4
                      py-3
                      border-b
                      border-[#cfc2af]
                    "
                  >
                    {/* IMAGE */}
                    <Link
                      to={`/product/${item.id}`}
                      className="overflow-hidden bg-[#ded5c8]"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-[115px] sm:h-[125px] object-cover hover:scale-[1.03] transition-transform duration-500"
                      />
                    </Link>

                    {/* PRODUCT DETAILS */}
                    <div className="flex flex-col justify-center min-w-0">
                      <p className="text-[#b66d17] text-[9px] font-bold tracking-[0.16em] uppercase mb-1">
                        {item.category}
                      </p>

                      <Link
                        to={`/product/${item.id}`}
                        className="font-serif text-[17px] sm:text-[19px] leading-tight hover:text-[#c77718] transition"
                      >
                        {item.name}
                      </Link>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-[10px] sm:text-[11px] text-[#6d6459]">
                        <span>
                          SIZE:{" "}
                          <strong className="text-[#171714] font-semibold">
                            {item.size}
                          </strong>
                        </span>

                        <span>
                          ₹
                          {Number(
                            item.price
                          ).toLocaleString("en-IN")}
                        </span>
                      </div>

                      {/* MOBILE CONTROLS */}
                      <div className="sm:hidden flex items-center justify-between mt-3">
                        <div className="h-8 border border-[#bfb19e] flex items-center">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() =>
                              decreaseQuantity(index)
                            }
                            className="w-8 h-full flex items-center justify-center hover:bg-[#171714] hover:text-white transition"
                          >
                            <FiMinus size={10} />
                          </button>

                          <span className="w-7 text-center text-[10px] font-medium">
                            {item.quantity || 1}
                          </span>

                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() =>
                              increaseQuantity(index)
                            }
                            className="w-8 h-full flex items-center justify-center hover:bg-[#171714] hover:text-white transition"
                          >
                            <FiPlus size={10} />
                          </button>
                        </div>

                        <button
                          type="button"
                          aria-label="Remove item"
                          onClick={() =>
                            removeItem(index)
                          }
                          className="flex items-center gap-1.5 text-[9px] font-semibold text-[#776c5e] hover:text-[#c77718] transition"
                        >
                          <FiTrash2 size={13} />
                          REMOVE
                        </button>
                      </div>
                    </div>

                    {/* DESKTOP CONTROLS */}
                    <div className="hidden sm:flex flex-col items-end justify-center">
                      <p className="font-serif text-[16px] sm:text-[17px] mb-3">
                        ₹
                        {(
                          Number(item.price) *
                          Number(item.quantity || 1)
                        ).toLocaleString("en-IN")}
                      </p>

                      <div className="h-8 border border-[#bfb19e] flex items-center">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() =>
                            decreaseQuantity(index)
                          }
                          className="w-8 h-full flex items-center justify-center hover:bg-[#171714] hover:text-white transition"
                        >
                          <FiMinus size={10} />
                        </button>

                        <span className="w-8 text-center text-[10px] font-medium">
                          {item.quantity || 1}
                        </span>

                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() =>
                            increaseQuantity(index)
                          }
                          className="w-8 h-full flex items-center justify-center hover:bg-[#171714] hover:text-white transition"
                        >
                          <FiPlus size={10} />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          removeItem(index)
                        }
                        className="flex items-center gap-1.5 mt-2 text-[9px] font-semibold tracking-[0.08em] text-[#776c5e] hover:text-[#c77718] transition"
                      >
                        <FiTrash2 size={10} />
                        REMOVE
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* ================= ORDER SUMMARY ================= */}
              <aside className="border border-[#cbbda8] p-4 sm:p-5 bg-[#f7f2ea]">

                <p className="text-[#b66d17] text-[9px] font-bold tracking-[0.2em] uppercase">
                  Order Summary
                </p>

                <h2 className="font-serif text-[23px] sm:text-[25px] mt-1.5 pb-3 border-b border-[#d1c5b4]">
                  Your Order.
                </h2>

                <div className="py-3.5 space-y-3 border-b border-[#d1c5b4]">

                  {/* ITEMS */}
                  <div className="flex justify-between text-[11px]">
                    <span className="text-[#6d6459]">
                      Items
                    </span>

                    <span className="font-medium">
                      {totalItems}
                    </span>
                  </div>

                  {/* SUBTOTAL */}
                  <div className="flex justify-between text-[11px]">
                    <span className="text-[#6d6459]">
                      Subtotal
                    </span>

                    <span className="font-medium">
                      ₹{subtotal.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* SHIPPING */}
                  <div className="flex justify-between text-[11px]">
                    <span className="text-[#6d6459]">
                      Shipping
                    </span>

                    <span className="text-[#c77718] font-bold">
                      FREE
                    </span>
                  </div>
                </div>

                {/* TOTAL */}
                <div className="flex items-center justify-between py-3.5">
                  <span className="text-[10px] font-bold tracking-[0.14em]">
                    TOTAL
                  </span>

                  <span className="font-serif text-[21px] sm:text-[23px]">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>

                {/* CHECKOUT */}
                <button
                  type="button"
                  onClick={() => navigate("/checkout")}
                  className="
                    w-full
                    h-11
                    bg-[#171714]
                    text-white
                    px-4
                    flex
                    items-center
                    justify-between
                    text-[9px]
                    sm:text-[10px]
                    font-bold
                    tracking-[0.14em]
                    hover:bg-[#c77718]
                    transition
                  "
                >
                  PROCEED TO CHECKOUT

                  <FiArrowRight size={12} />
                </button>
              </aside>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Cart;