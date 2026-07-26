import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiHeart,
  FiMinus,
  FiPlus,
  FiX,
} from "react-icons/fi";

/* =========================================================
   DEFAULT PRODUCTS
========================================================= */

const defaultProducts = [
  {
    id: 1,
    name: "Signature White Shirt",
    category: "Formal",
    price: 1499,
    image: "/product-white-shirt.jpg",
    description:
      "A refined white shirt crafted for work, occasions and timeless everyday style.",
    fabric: "Premium Cotton",
    fit: "Regular Fit",
    care: "Machine Wash",
  },
  {
    id: 2,
    name: "Midnight Black Shirt",
    category: "Premium",
    price: 1699,
    image: "/product-black-shirt.jpg",
    description:
      "A premium black shirt with a sharp silhouette for evenings and elevated occasions.",
    fabric: "Premium Cotton",
    fit: "Regular Fit",
    care: "Machine Wash",
  },
  {
    id: 3,
    name: "Classic Sky Shirt",
    category: "Formal",
    price: 1399,
    image: "/product-blue-shirt.jpg",
    description:
      "A versatile sky-blue shirt combining refined tailoring with everyday comfort.",
    fabric: "Premium Cotton",
    fit: "Regular Fit",
    care: "Machine Wash",
  },
  {
    id: 4,
    name: "Modern Printed Shirt",
    category: "Printed",
    price: 1599,
    image: "/product-printed-shirt.jpg",
    description:
      "A modern printed shirt created for confident everyday styling.",
    fabric: "Soft Cotton",
    fit: "Slim Fit",
    care: "Machine Wash",
  },
  {
    id: 5,
    name: "Essential Formal Shirt",
    category: "Formal",
    price: 1599,
    image: "/formal-shirt.jpg",
    description:
      "A polished formal shirt designed for office wear and refined occasions.",
    fabric: "Premium Cotton",
    fit: "Regular Fit",
    care: "Machine Wash",
  },
  {
    id: 6,
    name: "Weekend Casual Shirt",
    category: "Casual",
    price: 1299,
    image: "/casual-shirt.jpg",
    description:
      "A relaxed casual shirt designed for comfortable weekends.",
    fabric: "Soft Cotton",
    fit: "Comfort Fit",
    care: "Machine Wash",
  },
  {
    id: 7,
    name: "Refined Premium Shirt",
    category: "Premium",
    price: 1899,
    image: "/premium-shirt.jpg",
    description:
      "A refined premium shirt with elevated fabric and a sophisticated finish.",
    fabric: "Premium Cotton",
    fit: "Tailored Fit",
    care: "Gentle Machine Wash",
  },
  {
    id: 8,
    name: "Signature Printed Shirt",
    category: "Printed",
    price: 1499,
    image: "/printed-shirt.jpg",
    description:
      "A signature printed shirt combining modern character with everyday comfort.",
    fabric: "Cotton Blend",
    fit: "Regular Fit",
    care: "Machine Wash",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  /* =========================================================
     ADMIN PRODUCTS
  ========================================================= */

  const [adminProducts, setAdminProducts] = useState([]);

  useEffect(() => {
    try {
      const savedProducts =
        JSON.parse(
          localStorage.getItem("karonAdminProducts")
        ) || [];

      setAdminProducts(
        Array.isArray(savedProducts)
          ? savedProducts
          : []
      );
    } catch (error) {
      console.error(
        "Unable to load admin products:",
        error
      );

      setAdminProducts([]);
    }
  }, []);

  /* =========================================================
     FIND PRODUCT
  ========================================================= */

  const allProducts = [
    ...adminProducts,
    ...defaultProducts,
  ];

  const product = allProducts.find(
    (item) => Number(item.id) === Number(id)
  );

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  /* ================= BULK ORDER ================= */

  const [bulkOrderOpen, setBulkOrderOpen] = useState(false);

  const [bulkOrderSubmitted, setBulkOrderSubmitted] =
    useState(false);

  const [bulkForm, setBulkForm] = useState({
    name: "",
    phone: "",
    email: "",
    quantity: 10,
    message: "",
  });

  /* =========================================================
     WISHLIST
  ========================================================= */

  useEffect(() => {
    if (!product) return;

    try {
      const saved =
        JSON.parse(
          localStorage.getItem("karonWishlist")
        ) || [];

      setLiked(
        saved.some(
          (savedId) =>
            Number(savedId) === Number(product.id)
        )
      );
    } catch {
      setLiked(false);
    }
  }, [product]);

  /* =========================================================
     PRODUCT NOT FOUND
  ========================================================= */

  if (!product) {
    return (
      <main
        className="min-h-[50vh] bg-[#f4efe7] flex items-center justify-center"
        style={{
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        <Link to="/shop">
          BACK TO SHOP
        </Link>
      </main>
    );
  }

  /* =========================================================
     PRODUCT VALUES
  ========================================================= */

  const productDescription =
    product.description ||
    `A refined ${product.category.toLowerCase()} shirt designed for comfort, confidence and effortless everyday style.`;

  const productFabric =
    product.fabric || "Premium Cotton";

  const productFit =
    product.fit || "Regular Fit";

  const productCare =
    product.care || "Machine Wash";

  /* =========================================================
     WISHLIST TOGGLE
  ========================================================= */

  const toggleWishlist = () => {
    let saved = [];

    try {
      saved =
        JSON.parse(
          localStorage.getItem("karonWishlist")
        ) || [];
    } catch {
      saved = [];
    }

    const alreadySaved = saved.some(
      (savedId) =>
        Number(savedId) === Number(product.id)
    );

    const updated = alreadySaved
      ? saved.filter(
          (savedId) =>
            Number(savedId) !== Number(product.id)
        )
      : [...saved, product.id];

    localStorage.setItem(
      "karonWishlist",
      JSON.stringify(updated)
    );

    setLiked(!alreadySaved);

    window.dispatchEvent(
      new Event("wishlistUpdated")
    );
  };

  /* =========================================================
     BULK ORDER
  ========================================================= */

  const handleBulkChange = (e) => {
    const { name, value } = e.target;

    setBulkForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openBulkOrder = () => {
    setBulkOrderSubmitted(false);

    setBulkForm((prev) => ({
      ...prev,
      quantity: Math.max(10, quantity),
    }));

    setBulkOrderOpen(true);
  };

  const closeBulkOrder = () => {
    setBulkOrderOpen(false);
    setBulkOrderSubmitted(false);
  };

  const handleBulkSubmit = (e) => {
    e.preventDefault();

    setBulkOrderSubmitted(true);
  };

  return (
    <main
      className="bg-[#f4efe7] text-[#171714]"
      style={{
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      <section className="px-4 sm:px-6 lg:px-10 xl:px-12 py-3 lg:py-4">
        <div className="max-w-[1280px] mx-auto">

          {/* ================= TOP ================= */}

          <div className="flex items-center justify-between mb-3">
            <button
              type="button"
              onClick={() => navigate("/shop")}
              className="flex items-center gap-2 text-[10px] font-bold tracking-[0.17em]"
            >
              <span className="w-7 h-7 rounded-full border border-[#cbbda8] flex items-center justify-center">
                <FiArrowLeft size={11} />
              </span>

              BACK TO SHOP
            </button>

            <div className="hidden sm:flex text-[9px] tracking-[0.15em] uppercase">
              <Link to="/">
                Home
              </Link>

              <span className="mx-2">
                /
              </span>

              <Link to="/shop">
                Shop
              </Link>

              <span className="mx-2">
                /
              </span>

              <span>
                {product.name}
              </span>
            </div>
          </div>

          {/* ================= PRODUCT ================= */}

          <div className="grid lg:grid-cols-[0.82fr_1fr] gap-5 lg:gap-8 items-start">

            {/* IMAGE */}

            <div className="relative bg-[#ded5c8] overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="
                  w-full
                  h-[330px]
                  sm:h-[390px]
                  md:h-[420px]
                  lg:h-[365px]
                  xl:h-[385px]
                  object-cover
                "
              />

              <span className="absolute left-3 bottom-3 bg-[#f7f2e9] px-2.5 py-1.5 text-[9px] font-bold tracking-[0.17em] uppercase">
                {product.category}
              </span>
            </div>

            {/* ================= INFO ================= */}

            <div>
              <p className="text-[#b66d17] text-[9px] font-bold tracking-[0.24em] uppercase mb-1.5">
                {product.category}
              </p>

              <h1 className="text-[28px] sm:text-[32px] lg:text-[34px] xl:text-[36px] leading-none tracking-[-0.02em]">
                {product.name}
              </h1>

              {/* PRICE + HEART */}

              <div className="flex items-center justify-between mt-2">
                <p className="text-[17px] lg:text-[18px]">
                  ₹
                  {Number(
                    product.price
                  ).toLocaleString("en-IN")}
                </p>

                <button
                  type="button"
                  onClick={toggleWishlist}
                  aria-label="Add to wishlist"
                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition ${
                    liked
                      ? "bg-[#c77b20] border-[#c77b20] text-white"
                      : "border-[#c7baa7] hover:bg-[#171714] hover:text-white"
                  }`}
                >
                  <FiHeart
                    size={13}
                    className={
                      liked
                        ? "fill-current"
                        : ""
                    }
                  />
                </button>
              </div>

              {/* DESCRIPTION */}

              <p className="text-[11px] lg:text-[12px] leading-5 text-[#5b5349] border-y border-[#d1c5b4] py-2 mt-2.5">
                {productDescription}
              </p>

              {/* SIZE + QUANTITY */}

              <div className="grid sm:grid-cols-[1fr_auto] gap-4 mt-3">

                {/* SIZE */}

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] font-bold tracking-[0.18em]">
                      SELECT SIZE
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        setSizeGuideOpen(true)
                      }
                      className="text-[9px] border-b border-[#171714]"
                    >
                      SIZE GUIDE
                    </button>
                  </div>

                  <div className="flex gap-1.5">
                    {["S", "M", "L", "XL"].map(
                      (size) => (
                        <button
                          type="button"
                          key={size}
                          onClick={() =>
                            setSelectedSize(size)
                          }
                          className={`w-9 h-8 border text-[10px] transition ${
                            selectedSize === size
                              ? "bg-[#171714] text-white border-[#171714]"
                              : "border-[#bfb19e] hover:border-[#171714]"
                          }`}
                        >
                          {size}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* QUANTITY */}

                <div>
                  <span className="block text-[9px] font-bold tracking-[0.18em] mb-1.5">
                    QUANTITY
                  </span>

                  <div className="h-8 w-[100px] border border-[#bfb19e] flex items-center">
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity((prev) =>
                          Math.max(
                            1,
                            prev - 1
                          )
                        )
                      }
                      className="w-8 h-full flex items-center justify-center"
                    >
                      <FiMinus size={10} />
                    </button>

                    <span className="flex-1 text-center text-[10px]">
                      {quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        setQuantity(
                          (prev) => prev + 1
                        )
                      }
                      className="w-8 h-full flex items-center justify-center"
                    >
                      <FiPlus size={10} />
                    </button>
                  </div>
                </div>
              </div>

              {/* ================= DETAILS ================= */}

              <div className="mt-4 border-t border-[#d1c5b4]">
                {[
                  [
                    "FABRIC",
                    productFabric,
                  ],
                  [
                    "FIT",
                    productFit,
                  ],
                  [
                    "CARE",
                    productCare,
                  ],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="h-8 border-b border-[#d1c5b4] flex items-center justify-between"
                  >
                    <span className="text-[9px] font-bold tracking-[0.16em]">
                      {label}
                    </span>

                    <span className="text-[10px]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* ================= BULK ORDER ================= */}

              <button
                type="button"
                onClick={openBulkOrder}
                className="
                  w-full
                  h-11
                  mt-4
                  bg-[#171714]
                  text-white
                  text-[10px]
                  font-bold
                  tracking-[0.18em]
                  uppercase
                  hover:bg-[#c77b20]
                  transition
                "
              >
                BULK ORDER
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BULK ORDER MODAL
      ===================================================== */}

      {bulkOrderOpen && (
        <div
          onClick={closeBulkOrder}
          className="
            fixed
            inset-0
            z-[300]
            bg-black/55
            flex
            items-center
            justify-center
            p-3
          "
        >
          <div
            onClick={(e) =>
              e.stopPropagation()
            }
            className="
              relative
              bg-[#f4efe7]
              w-full
              max-w-[500px]
              max-h-[88vh]
              overflow-y-auto
              p-5
              sm:p-6
            "
          >
            <button
              type="button"
              onClick={closeBulkOrder}
              className="
                absolute
                top-4
                right-4
                w-8
                h-8
                border
                border-[#cbbda8]
                rounded-full
                flex
                items-center
                justify-center
                hover:bg-[#171714]
                hover:text-white
                transition
              "
            >
              <FiX size={13} />
            </button>

            {!bulkOrderSubmitted ? (
              <>
                <p className="text-[#b66d17] text-[10px] tracking-[0.2em] font-bold uppercase">
                  Karon Plus
                </p>

                <h2 className="text-[28px] mt-1">
                  Bulk Order
                </h2>

                <p className="text-[12px] leading-5 text-[#655d53] mt-2 max-w-[400px]">
                  Looking to order in quantity?
                  Send us your requirement and our
                  team will get in touch with you.
                </p>

                {/* PRODUCT */}

                <div className="flex items-center gap-3 mt-4 py-3 border-y border-[#d1c5b4]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-16 object-cover bg-[#ded5c8]"
                  />

                  <div>
                    <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#b66d17]">
                      {product.category}
                    </p>

                    <h3 className="text-[17px] mt-1">
                      {product.name}
                    </h3>

                    <p className="text-[11px] mt-1">
                      ₹
                      {Number(
                        product.price
                      ).toLocaleString(
                        "en-IN"
                      )}{" "}
                      / piece
                    </p>
                  </div>
                </div>

                {/* FORM */}

                <form
                  onSubmit={handleBulkSubmit}
                  className="mt-4"
                >
                  <div className="grid sm:grid-cols-2 gap-3">

                    {/* NAME */}

                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.14em] mb-1.5">
                        YOUR NAME
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={bulkForm.name}
                        onChange={
                          handleBulkChange
                        }
                        required
                        className="
                          w-full
                          h-9
                          bg-transparent
                          border
                          border-[#bfb19e]
                          px-3
                          text-[12px]
                          outline-none
                          focus:border-[#171714]
                        "
                      />
                    </div>

                    {/* PHONE */}

                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.14em] mb-1.5">
                        PHONE NUMBER
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={bulkForm.phone}
                        onChange={
                          handleBulkChange
                        }
                        required
                        className="
                          w-full
                          h-9
                          bg-transparent
                          border
                          border-[#bfb19e]
                          px-3
                          text-[12px]
                          outline-none
                          focus:border-[#171714]
                        "
                      />
                    </div>
                  </div>

                  {/* EMAIL */}

                  <div className="mt-3">
                    <label className="block text-[10px] font-bold tracking-[0.14em] mb-1.5">
                      EMAIL
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={bulkForm.email}
                      onChange={
                        handleBulkChange
                      }
                      required
                      className="
                        w-full
                        h-9
                        bg-transparent
                        border
                        border-[#bfb19e]
                        px-3
                        text-[12px]
                        outline-none
                        focus:border-[#171714]
                      "
                    />
                  </div>

                  {/* QUANTITY */}

                  <div className="mt-3">
                    <label className="block text-[10px] font-bold tracking-[0.14em] mb-1.5">
                      REQUIRED QUANTITY
                    </label>

                    <input
                      type="number"
                      name="quantity"
                      min="10"
                      value={bulkForm.quantity}
                      onChange={
                        handleBulkChange
                      }
                      required
                      className="
                        w-full
                        h-9
                        bg-transparent
                        border
                        border-[#bfb19e]
                        px-3
                        text-[12px]
                        outline-none
                        focus:border-[#171714]
                      "
                    />

                    <p className="text-[10px] text-[#766d61] mt-1">
                      Minimum bulk order quantity:
                      10 pieces
                    </p>
                  </div>

                  {/* MESSAGE */}

                  <div className="mt-3">
                    <label className="block text-[10px] font-bold tracking-[0.14em] mb-1.5">
                      REQUIREMENT / MESSAGE
                    </label>

                    <textarea
                      name="message"
                      value={bulkForm.message}
                      onChange={
                        handleBulkChange
                      }
                      rows="2"
                      placeholder="Sizes, quantity split or any special requirement..."
                      className="
                        w-full
                        bg-transparent
                        border
                        border-[#bfb19e]
                        p-3
                        text-[12px]
                        leading-5
                        outline-none
                        resize-none
                        focus:border-[#171714]
                      "
                    />
                  </div>

                  {/* BUTTONS */}

                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <button
                      type="button"
                      onClick={
                        closeBulkOrder
                      }
                      className="
                        h-10
                        border
                        border-[#171714]
                        text-[10px]
                        font-bold
                        tracking-[0.15em]
                        hover:bg-[#e6ddd0]
                        transition
                      "
                    >
                      CANCEL
                    </button>

                    <button
                      type="submit"
                      className="
                        h-10
                        bg-[#171714]
                        text-white
                        text-[10px]
                        font-bold
                        tracking-[0.15em]
                        hover:bg-[#c77b20]
                        transition
                      "
                    >
                      SEND ENQUIRY
                    </button>
                  </div>
                </form>
              </>
            ) : (
              /* SUCCESS */

              <div className="py-8 text-center">
                <p className="text-[#b66d17] text-[10px] font-bold tracking-[0.2em] uppercase">
                  Karon Plus
                </p>

                <h2 className="text-[28px] mt-2">
                  Enquiry Received
                </h2>

                <p className="text-[12px] leading-5 text-[#655d53] mt-3">
                  Thank you for your bulk order
                  enquiry. Our team will contact
                  you regarding your requirement.
                </p>

                <button
                  type="button"
                  onClick={closeBulkOrder}
                  className="
                    mt-5
                    bg-[#171714]
                    text-white
                    h-10
                    px-8
                    text-[10px]
                    font-bold
                    tracking-[0.16em]
                    hover:bg-[#c77b20]
                    transition
                  "
                >
                  CLOSE
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =====================================================
          SIZE GUIDE
      ===================================================== */}

      {sizeGuideOpen && (
        <div
          onClick={() =>
            setSizeGuideOpen(false)
          }
          className="fixed inset-0 z-[200] bg-black/50 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) =>
              e.stopPropagation()
            }
            className="relative bg-[#f4efe7] w-full max-w-[390px] p-5"
          >
            <button
              type="button"
              onClick={() =>
                setSizeGuideOpen(false)
              }
              className="absolute top-4 right-4 w-7 h-7 border rounded-full flex items-center justify-center"
            >
              <FiX size={11} />
            </button>

            <p className="text-[#b66d17] text-[9px] tracking-[0.22em] font-bold">
              KARON PLUS
            </p>

            <h2 className="text-[24px] mt-1">
              Size Guide
            </h2>

            <div className="mt-4">
              {[
                [
                  "SIZE",
                  "CHEST",
                  "LENGTH",
                ],
                ["S", '38"', '28"'],
                ["M", '40"', '29"'],
                ["L", '42"', '30"'],
                ["XL", '44"', '31"'],
              ].map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 py-2 border-b border-[#d7ccbd] ${
                    index === 0
                      ? "border-t font-bold text-[9px]"
                      : "text-[10px]"
                  }`}
                >
                  {row.map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                setSizeGuideOpen(false)
              }
              className="w-full h-9 mt-4 bg-[#171714] text-white text-[10px] tracking-[0.18em]"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProductDetails;