import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiHeart,
  FiMinus,
  FiPlus,
  FiX,
} from "react-icons/fi";

const products = [
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

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  useEffect(() => {
    if (!product) return;

    try {
      const saved =
        JSON.parse(localStorage.getItem("karonWishlist")) || [];

      setLiked(saved.includes(product.id));
    } catch {
      setLiked(false);
    }
  }, [product]);

  if (!product) {
    return (
      <main className="min-h-[50vh] bg-[#f4efe7] flex items-center justify-center">
        <Link to="/shop">BACK TO SHOP</Link>
      </main>
    );
  }

  const toggleWishlist = () => {
    let saved = [];

    try {
      saved =
        JSON.parse(localStorage.getItem("karonWishlist")) || [];
    } catch {
      saved = [];
    }

    const updated = saved.includes(product.id)
      ? saved.filter((item) => item !== product.id)
      : [...saved, product.id];

    localStorage.setItem(
      "karonWishlist",
      JSON.stringify(updated)
    );

    setLiked(updated.includes(product.id));

    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  return (
    <main className="bg-[#f4efe7] text-[#171714]">

      <section className="px-4 sm:px-6 lg:px-10 xl:px-12 py-3 lg:py-4">
        <div className="max-w-[1280px] mx-auto">

          {/* TOP */}
          <div className="flex items-center justify-between mb-3">

            <button
              onClick={() => navigate("/shop")}
              className="flex items-center gap-2 text-[8px] font-bold tracking-[0.17em]"
            >
              <span className="w-7 h-7 rounded-full border border-[#cbbda8] flex items-center justify-center">
                <FiArrowLeft size={11} />
              </span>

              BACK TO SHOP
            </button>

            <div className="hidden sm:flex text-[7px] tracking-[0.15em] uppercase">
              <Link to="/">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/shop">Shop</Link>
              <span className="mx-2">/</span>
              <span>{product.name}</span>
            </div>
          </div>

          {/* PRODUCT */}
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

              <span className="absolute left-3 bottom-3 bg-[#f7f2e9] px-2.5 py-1.5 text-[7px] font-bold tracking-[0.17em] uppercase">
                {product.category}
              </span>
            </div>

            {/* INFO */}
            <div>
              <p className="text-[#b66d17] text-[7px] font-bold tracking-[0.24em] uppercase mb-1.5">
                {product.category}
              </p>

              <h1 className="font-serif text-[28px] sm:text-[32px] lg:text-[34px] xl:text-[36px] leading-none tracking-[-0.02em]">
                {product.name}
              </h1>

              {/* PRICE + HEART */}
              <div className="flex items-center justify-between mt-2">
                <p className="font-serif text-[17px] lg:text-[18px]">
                  ₹{product.price.toLocaleString("en-IN")}
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
                    className={liked ? "fill-current" : ""}
                  />
                </button>
              </div>

              {/* DESCRIPTION */}
              <p className="text-[10px] lg:text-[11px] leading-5 text-[#5b5349] border-y border-[#d1c5b4] py-2 mt-2.5">
                {product.description}
              </p>

              {/* SIZE + QUANTITY */}
              <div className="grid sm:grid-cols-[1fr_auto] gap-4 mt-3">

                {/* SIZE */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[7px] font-bold tracking-[0.18em]">
                      SELECT SIZE
                    </span>

                    <button
                      type="button"
                      onClick={() => setSizeGuideOpen(true)}
                      className="text-[7px] border-b border-[#171714]"
                    >
                      SIZE GUIDE
                    </button>
                  </div>

                  <div className="flex gap-1.5">
                    {["S", "M", "L", "XL"].map((size) => (
                      <button
                        type="button"
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-9 h-8 border text-[8px] transition ${
                          selectedSize === size
                            ? "bg-[#171714] text-white border-[#171714]"
                            : "border-[#bfb19e] hover:border-[#171714]"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* QUANTITY */}
                <div>
                  <span className="block text-[7px] font-bold tracking-[0.18em] mb-1.5">
                    QUANTITY
                  </span>

                  <div className="h-8 w-[100px] border border-[#bfb19e] flex items-center">
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity((prev) =>
                          Math.max(1, prev - 1)
                        )
                      }
                      className="w-8 h-full flex items-center justify-center"
                    >
                      <FiMinus size={10} />
                    </button>

                    <span className="flex-1 text-center text-[9px]">
                      {quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        setQuantity((prev) => prev + 1)
                      }
                      className="w-8 h-full flex items-center justify-center"
                    >
                      <FiPlus size={10} />
                    </button>
                  </div>
                </div>
              </div>

              {/* DETAILS */}
              <div className="mt-4 border-t border-[#d1c5b4]">
                {[
                  ["FABRIC", product.fabric],
                  ["FIT", product.fit],
                  ["CARE", product.care],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="h-8 border-b border-[#d1c5b4] flex items-center justify-between"
                  >
                    <span className="text-[7px] font-bold tracking-[0.16em]">
                      {label}
                    </span>

                    <span className="text-[8px]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SIZE GUIDE */}
      {sizeGuideOpen && (
        <div
          onClick={() => setSizeGuideOpen(false)}
          className="fixed inset-0 z-[200] bg-black/50 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#f4efe7] w-full max-w-[390px] p-5"
          >
            <button
              type="button"
              onClick={() => setSizeGuideOpen(false)}
              className="absolute top-4 right-4 w-7 h-7 border rounded-full flex items-center justify-center"
            >
              <FiX size={11} />
            </button>

            <p className="text-[#b66d17] text-[7px] tracking-[0.22em] font-bold">
              KARON PLUS
            </p>

            <h2 className="font-serif text-[24px] mt-1">
              Size Guide
            </h2>

            <div className="mt-4">
              {[
                ["SIZE", "CHEST", "LENGTH"],
                ["S", '38"', '28"'],
                ["M", '40"', '29"'],
                ["L", '42"', '30"'],
                ["XL", '44"', '31"'],
              ].map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 py-2 border-b border-[#d7ccbd] ${
                    index === 0
                      ? "border-t font-bold text-[7px]"
                      : "text-[9px]"
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
              onClick={() => setSizeGuideOpen(false)}
              className="w-full h-9 mt-4 bg-[#171714] text-white text-[8px] tracking-[0.18em]"
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