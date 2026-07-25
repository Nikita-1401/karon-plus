import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiSearch,
  FiUser,
  FiShoppingBag,
  FiHeart,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Signature White Shirt",
    category: "Formal",
  },
  {
    id: 2,
    name: "Midnight Black Shirt",
    category: "Premium",
  },
  {
    id: 3,
    name: "Classic Sky Shirt",
    category: "Formal",
  },
  {
    id: 4,
    name: "Modern Printed Shirt",
    category: "Printed",
  },
  {
    id: 5,
    name: "Essential Formal Shirt",
    category: "Formal",
  },
  {
    id: 6,
    name: "Weekend Casual Shirt",
    category: "Casual",
  },
  {
    id: 7,
    name: "Refined Premium Shirt",
    category: "Premium",
  },
  {
    id: 8,
    name: "Signature Printed Shirt",
    category: "Printed",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const desktopSearchRef = useRef(null);
  const mobileSearchRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [shirtsOpen, setShirtsOpen] = useState(false);

  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const updateWishlistCount = () => {
    try {
      const saved =
        JSON.parse(localStorage.getItem("karonWishlist")) || [];

      setWishlistCount(saved.length);
    } catch {
      setWishlistCount(0);
    }
  };

  const updateCartCount = () => {
    try {
      const cart =
        JSON.parse(localStorage.getItem("karonCart")) || [];

      const total = cart.reduce(
        (sum, item) => sum + (item.quantity || 1),
        0
      );

      setCartCount(total);
    } catch {
      setCartCount(0);
    }
  };

  useEffect(() => {
    updateWishlistCount();
    updateCartCount();

    window.addEventListener(
      "wishlistUpdated",
      updateWishlistCount
    );

    window.addEventListener(
      "cartUpdated",
      updateCartCount
    );

    window.addEventListener(
      "storage",
      updateWishlistCount
    );

    window.addEventListener(
      "storage",
      updateCartCount
    );

    return () => {
      window.removeEventListener(
        "wishlistUpdated",
        updateWishlistCount
      );

      window.removeEventListener(
        "cartUpdated",
        updateCartCount
      );

      window.removeEventListener(
        "storage",
        updateWishlistCount
      );

      window.removeEventListener(
        "storage",
        updateCartCount
      );
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const clickedDesktopSearch =
        desktopSearchRef.current?.contains(event.target);

      const clickedMobileSearch =
        mobileSearchRef.current?.contains(event.target);

      if (!clickedDesktopSearch && !clickedMobileSearch) {
        setSearchOpen(false);
        setSearch("");
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setShopOpen(false);
    setShirtsOpen(false);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearch("");
  };

  const NavLink = ({
    to,
    children,
    className = "",
  }) => {
    return (
      <Link
        to={to}
        onClick={closeMenu}
        className={className}
      >
        {children}
      </Link>
    );
  };

  const filteredProducts =
    search.trim() === ""
      ? []
      : products
          .filter((product) => {
            const searchValue =
              search.toLowerCase().trim();

            return (
              product.name
                .toLowerCase()
                .includes(searchValue) ||
              product.category
                .toLowerCase()
                .includes(searchValue)
            );
          })
          .slice(0, 5);

  const openProduct = (id) => {
    closeSearch();
    closeMenu();

    navigate(`/product/${id}`);
  };

  return (
    <div className="sticky top-0 z-[100]">

      {/* ================= ANNOUNCEMENT ================= */}

      <div className="w-full bg-[#C99A55] text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-[7px] text-center">
          <p className="text-[10px] sm:text-[11px] tracking-[0.15em]">
            <span className="font-semibold">
              PREMIUM STYLE. TIMELESS COMFORT.
            </span>

            <span className="hidden sm:inline">
              {" "}
              Discover the latest Karon Plus collection.
            </span>
          </p>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}

      <header className="relative w-full bg-[#fffdf9] border-b border-black/10">

        <div className="relative max-w-[1440px] mx-auto h-[78px] lg:h-[92px] px-4 sm:px-6 md:px-8 lg:px-10 flex items-center justify-between">

          {/* ================= DESKTOP LEFT ================= */}

          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 flex-1">

            {/* SEARCH */}

            <div
              ref={desktopSearchRef}
              className="relative flex items-center"
            >
              {!searchOpen ? (
                <button
                  type="button"
                  aria-label="Search"
                  onClick={() => {
                    setSearchOpen(true);
                    setMenuOpen(false);
                  }}
                  className="w-7 h-7 flex items-center justify-center text-[#171714] hover:text-[#B98949] transition"
                >
                  <FiSearch size={20} />
                </button>
              ) : (
                <div className="relative w-[205px]">

                  <div className="relative flex items-center">

                    <FiSearch
                      size={15}
                      className="absolute left-0 text-[#625b52]"
                    />

                    <input
                      autoFocus
                      type="text"
                      value={search}
                      onChange={(e) =>
                        setSearch(e.target.value)
                      }
                      onKeyDown={(e) => {
                        if (
                          e.key === "Enter" &&
                          filteredProducts.length > 0
                        ) {
                          openProduct(
                            filteredProducts[0].id
                          );
                        }

                        if (e.key === "Escape") {
                          closeSearch();
                        }
                      }}
                      placeholder="Search shirts..."
                      className="
                        w-full
                        h-9
                        bg-transparent
                        border-b
                        border-[#bfb3a3]
                        pl-7
                        pr-6
                        text-[13px]
                        text-[#171714]
                        outline-none
                        placeholder:text-[#8b8277]
                        focus:border-[#B98949]
                      "
                    />

                    <button
                      type="button"
                      aria-label="Close search"
                      onClick={closeSearch}
                      className="absolute right-0 text-[#171714] hover:text-[#B98949] transition"
                    >
                      <FiX size={15} />
                    </button>
                  </div>

                  {/* SEARCH RESULTS */}

                  {search.trim() !== "" && (
                    <div
                      className="
                        absolute
                        left-0
                        top-[43px]
                        w-[260px]
                        bg-[#fffdf9]
                        border
                        border-[#d5c9ba]
                        shadow-[0_8px_22px_rgba(0,0,0,0.09)]
                        z-[200]
                      "
                    >
                      {filteredProducts.length > 0 ? (
                        filteredProducts.map(
                          (product) => (
                            <button
                              type="button"
                              key={product.id}
                              onClick={() =>
                                openProduct(
                                  product.id
                                )
                              }
                              className="
                                block
                                w-full
                                text-left
                                px-5
                                py-[13px]
                                border-b
                                border-[#e3d9cc]
                                last:border-b-0
                                font-serif
                                text-[15px]
                                leading-[1.45]
                                text-[#171714]
                                hover:bg-[#f4eee5]
                                hover:text-[#B98949]
                                transition-colors
                                duration-200
                              "
                            >
                              {product.name}
                            </button>
                          )
                        )
                      ) : (
                        <p className="px-5 py-4 text-[12px] text-[#756b60]">
                          No shirts found.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* SHOP */}

            <div className="relative group">

              <Link
                to="/shop"
                className="flex items-center gap-1.5 text-[14px] xl:text-[15px] text-[#171714] hover:text-[#B98949] transition"
              >
                Shop

                <FiChevronDown
                  size={14}
                  className="group-hover:rotate-180 transition-transform"
                />
              </Link>

              <div
                className="
                  absolute
                  left-0
                  top-full
                  pt-5
                  opacity-0
                  invisible
                  translate-y-2
                  group-hover:opacity-100
                  group-hover:visible
                  group-hover:translate-y-0
                  transition-all
                  duration-200
                "
              >
                <div className="w-[210px] bg-[#fffdf9] border border-black/10 shadow-xl py-3">

                  <NavLink
                    to="/shop"
                    className="block px-5 py-3 text-[13px] hover:bg-[#f5efe6] hover:text-[#B98949]"
                  >
                    All Shirts
                  </NavLink>

                  <NavLink
                    to="/new-arrivals"
                    className="block px-5 py-3 text-[13px] hover:bg-[#f5efe6] hover:text-[#B98949]"
                  >
                    New Arrivals
                  </NavLink>

                  <NavLink
                    to="/shop/premium"
                    className="block px-5 py-3 text-[13px] hover:bg-[#f5efe6] hover:text-[#B98949]"
                  >
                    Premium Collection
                  </NavLink>

                </div>
              </div>
            </div>

            {/* SHIRTS */}

            <div className="relative group">

              <Link
                to="/shop"
                className="flex items-center gap-1.5 text-[14px] xl:text-[15px] text-[#171714] hover:text-[#B98949] transition"
              >
                Shirts

                <FiChevronDown
                  size={14}
                  className="group-hover:rotate-180 transition-transform"
                />
              </Link>

              <div
                className="
                  absolute
                  left-0
                  top-full
                  pt-5
                  opacity-0
                  invisible
                  translate-y-2
                  group-hover:opacity-100
                  group-hover:visible
                  group-hover:translate-y-0
                  transition-all
                  duration-200
                "
              >
                <div className="w-[210px] bg-[#fffdf9] border border-black/10 shadow-xl py-3">

                  {[
                    ["Formal Shirts", "/shop/formal"],
                    ["Casual Shirts", "/shop/casual"],
                    ["Printed Shirts", "/shop/printed"],
                    ["Premium Shirts", "/shop/premium"],
                  ].map(([label, path]) => (
                    <NavLink
                      key={label}
                      to={path}
                      className="block px-5 py-3 text-[13px] hover:bg-[#f5efe6] hover:text-[#B98949]"
                    >
                      {label}
                    </NavLink>
                  ))}

                </div>
              </div>
            </div>

            {/* COLLECTION */}

            <NavLink
              to="/shop"
              className="text-[14px] xl:text-[15px] text-[#171714] hover:text-[#B98949] transition"
            >
              Collection
            </NavLink>

          </nav>

          {/* ================= LOGO ================= */}

          <Link
            to="/"
            onClick={() => {
              closeMenu();
              closeSearch();
            }}
            aria-label="Karon Plus Home"
            className="
              absolute
              left-4
              sm:left-6
              lg:left-1/2
              lg:-translate-x-1/2
              text-left
              lg:text-center
            "
          >
            <div className="text-[#B98949] font-serif text-[24px] sm:text-[27px] lg:text-[30px] leading-none tracking-[-0.07em]">
              KP
            </div>

            <div className="mt-[3px] text-[#B98949] font-serif text-[13px] sm:text-[15px] lg:text-[17px] tracking-[0.08em] whitespace-nowrap">
              KARON PLUS
            </div>

            <div className="hidden sm:block text-[6px] lg:text-[7px] text-[#8C6A3C] tracking-[0.22em] mt-[2px] whitespace-nowrap">
              THE ULTIMATE CHOICE
            </div>
          </Link>

          {/* ================= DESKTOP RIGHT ================= */}

          <nav className="hidden lg:flex items-center justify-end gap-5 xl:gap-7 flex-1">

            <NavLink
              to="/new-arrivals"
              className="text-[14px] xl:text-[15px] whitespace-nowrap hover:text-[#B98949] transition"
            >
              New Arrivals
            </NavLink>

            <NavLink
              to="/our-promise"
              className="text-[14px] xl:text-[15px] whitespace-nowrap hover:text-[#B98949] transition"
            >
              Our Promise
            </NavLink>

            {/* ABOUT ADDED */}

            <NavLink
              to="/about"
              className="text-[14px] xl:text-[15px] whitespace-nowrap hover:text-[#B98949] transition"
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className="text-[14px] xl:text-[15px] whitespace-nowrap hover:text-[#B98949] transition"
            >
              Contact
            </NavLink>

            {/* WISHLIST */}

            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="relative hover:text-[#B98949] transition"
            >
              <FiHeart size={20} />

              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 min-w-[16px] h-[16px] px-1 bg-[#B98949] text-white rounded-full flex items-center justify-center text-[9px]">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* ACCOUNT */}

            <Link
              to="/account"
              aria-label="Account"
              className="hover:text-[#B98949] transition"
            >
              <FiUser size={20} />
            </Link>

            {/* CART */}

            <Link
              to="/cart"
              aria-label="Cart"
              className="relative hover:text-[#B98949] transition"
            >
              <FiShoppingBag size={21} />

              <span className="absolute -top-2 -right-2 min-w-[16px] h-[16px] px-1 bg-[#B98949] text-white rounded-full flex items-center justify-center text-[9px]">
                {cartCount}
              </span>
            </Link>

          </nav>

          {/* ================= MOBILE ICONS ================= */}

          <div className="flex lg:hidden items-center gap-3 sm:gap-4 ml-auto">

            <button
              type="button"
              aria-label="Search"
              onClick={() => {
                setSearchOpen(true);
                setMenuOpen(false);
              }}
              className="hover:text-[#B98949] transition"
            >
              <FiSearch size={19} />
            </button>

            <Link
              to="/wishlist"
              className="relative hover:text-[#B98949]"
            >
              <FiHeart size={19} />

              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 min-w-[15px] h-[15px] bg-[#B98949] text-white rounded-full text-[8px] flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link
              to="/cart"
              className="relative hover:text-[#B98949]"
            >
              <FiShoppingBag size={20} />

              <span className="absolute -top-2 -right-2 min-w-[15px] h-[15px] bg-[#B98949] text-white rounded-full text-[8px] flex items-center justify-center">
                {cartCount}
              </span>
            </Link>

            <button
              type="button"
              aria-label="Menu"
              onClick={() => {
                setMenuOpen((prev) => !prev);
                setSearchOpen(false);
                setSearch("");
              }}
            >
              {menuOpen ? (
                <FiX size={22} />
              ) : (
                <FiMenu size={22} />
              )}
            </button>

          </div>
        </div>

        {/* ================= MOBILE SEARCH ================= */}

        {searchOpen && (
          <div
            ref={mobileSearchRef}
            className="
              lg:hidden
              absolute
              left-0
              top-full
              w-full
              bg-[#fffdf9]
              border-t
              border-black/10
              shadow-lg
              px-4
              sm:px-6
              py-3
            "
          >
            <div className="max-w-[600px] mx-auto relative flex items-center">

              <FiSearch
                size={16}
                className="absolute left-0 text-[#625b52]"
              />

              <input
                autoFocus
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    filteredProducts.length > 0
                  ) {
                    openProduct(
                      filteredProducts[0].id
                    );
                  }

                  if (e.key === "Escape") {
                    closeSearch();
                  }
                }}
                placeholder="Search shirts..."
                className="
                  w-full
                  h-9
                  bg-transparent
                  border-b
                  border-[#bfb3a3]
                  pl-7
                  pr-8
                  text-[13px]
                  text-[#171714]
                  outline-none
                  placeholder:text-[#8b8277]
                  focus:border-[#B98949]
                "
              />

              <button
                type="button"
                onClick={closeSearch}
                aria-label="Close search"
                className="absolute right-0 hover:text-[#B98949]"
              >
                <FiX size={16} />
              </button>

            </div>

            {/* MOBILE RESULTS */}

            {search.trim() !== "" && (
              <div className="max-w-[600px] mx-auto mt-2 bg-[#fffdf9] border border-[#d8cdbf] shadow-sm">

                {filteredProducts.length > 0 ? (
                  filteredProducts.map(
                    (product) => (
                      <button
                        key={product.id}
                        type="button"
                        onClick={() =>
                          openProduct(product.id)
                        }
                        className="
                          block
                          w-full
                          text-left
                          px-4
                          py-[12px]
                          border-b
                          border-[#e3dbd0]
                          last:border-b-0
                          font-serif
                          text-[14px]
                          leading-[1.45]
                          text-[#171714]
                          hover:bg-[#f4eee5]
                          hover:text-[#B98949]
                          transition
                        "
                      >
                        {product.name}
                      </button>
                    )
                  )
                ) : (
                  <p className="px-4 py-3 text-[12px] text-[#756b60]">
                    No shirts found.
                  </p>
                )}

              </div>
            )}
          </div>
        )}

        {/* ================= MOBILE MENU ================= */}

        <div
          className={`
            lg:hidden
            absolute
            left-0
            top-full
            w-full
            bg-[#fffdf9]
            border-t
            border-black/10
            shadow-xl
            overflow-y-auto
            transition-all
            duration-300
            ${
              menuOpen
                ? "max-h-[calc(100vh-100px)] opacity-100 visible"
                : "max-h-0 opacity-0 invisible"
            }
          `}
        >
          <nav className="px-5 sm:px-7 py-4">

            {/* SHOP */}

            <div className="border-b border-black/10">

              <button
                type="button"
                onClick={() =>
                  setShopOpen((prev) => !prev)
                }
                className="w-full py-4 flex items-center justify-between text-[14px]"
              >
                Shop

                <FiChevronDown
                  className={`transition-transform ${
                    shopOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {shopOpen && (
                <div className="pb-4 pl-4 flex flex-col gap-3">

                  <NavLink
                    to="/shop"
                    className="text-[13px] text-black/65"
                  >
                    All Shirts
                  </NavLink>

                  <NavLink
                    to="/new-arrivals"
                    className="text-[13px] text-black/65"
                  >
                    New Arrivals
                  </NavLink>

                </div>
              )}
            </div>

            {/* SHIRTS */}

            <div className="border-b border-black/10">

              <button
                type="button"
                onClick={() =>
                  setShirtsOpen((prev) => !prev)
                }
                className="w-full py-4 flex items-center justify-between text-[14px]"
              >
                Shirts

                <FiChevronDown
                  className={`transition-transform ${
                    shirtsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {shirtsOpen && (
                <div className="pb-4 pl-4 grid grid-cols-2 gap-3">

                  <NavLink
                    to="/shop/formal"
                    className="text-[13px] text-black/65"
                  >
                    Formal
                  </NavLink>

                  <NavLink
                    to="/shop/casual"
                    className="text-[13px] text-black/65"
                  >
                    Casual
                  </NavLink>

                  <NavLink
                    to="/shop/printed"
                    className="text-[13px] text-black/65"
                  >
                    Printed
                  </NavLink>

                  <NavLink
                    to="/shop/premium"
                    className="text-[13px] text-black/65"
                  >
                    Premium
                  </NavLink>

                </div>
              )}
            </div>

            <NavLink
              to="/shop"
              className="block py-4 border-b border-black/10 text-[14px]"
            >
              Collection
            </NavLink>

            <NavLink
              to="/new-arrivals"
              className="block py-4 border-b border-black/10 text-[14px]"
            >
              New Arrivals
            </NavLink>

            <NavLink
              to="/our-promise"
              className="block py-4 border-b border-black/10 text-[14px]"
            >
              Our Promise
            </NavLink>

            {/* ABOUT ADDED */}

            <NavLink
              to="/about"
              className="block py-4 border-b border-black/10 text-[14px]"
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className="block py-4 border-b border-black/10 text-[14px]"
            >
              Contact
            </NavLink>

            <NavLink
              to="/wishlist"
              className="flex items-center justify-between py-4 border-b border-black/10 text-[14px]"
            >
              <span className="flex items-center gap-3">
                <FiHeart size={17} />
                Wishlist
              </span>

              <span>{wishlistCount}</span>
            </NavLink>

            <NavLink
              to="/account"
              className="flex items-center gap-3 py-4 text-[14px]"
            >
              <FiUser size={17} />
              My Account
            </NavLink>

          </nav>
        </div>

      </header>
    </div>
  );
};

export default Navbar;