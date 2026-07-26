import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiImage,
  FiUploadCloud,
  FiX,
} from "react-icons/fi";

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    category: "Formal",
    price: "",
    badge: "",
  });

  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [productFound, setProductFound] = useState(true);
  const [loading, setLoading] = useState(true);

  /* =========================================================
     LOAD PRODUCT
  ========================================================= */

  useEffect(() => {
    try {
      const savedProducts =
        JSON.parse(
          localStorage.getItem("karonAdminProducts")
        ) || [];

      const products = Array.isArray(savedProducts)
        ? savedProducts
        : [];

      const currentProduct = products.find(
        (product) =>
          Number(product.id) === Number(id)
      );

      if (!currentProduct) {
        setProductFound(false);
        setLoading(false);
        return;
      }

      setForm({
        name: currentProduct.name || "",
        category: currentProduct.category || "Formal",
        price: currentProduct.price || "",
        badge: currentProduct.badge || "",
      });

      setImage(currentProduct.image || "");
      setProductFound(true);
    } catch (error) {
      console.error(
        "Unable to load product:",
        error
      );

      setProductFound(false);
    } finally {
      setLoading(false);
    }
  }, [id]);

  /* =========================================================
     INPUT CHANGE
  ========================================================= */

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

    setSuccess(false);
  };

  /* =========================================================
     IMAGE CHANGE
  ========================================================= */

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setErrors((prev) => ({
        ...prev,
        image: "Please select a valid image.",
      }));

      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
      setImageName(file.name);

      setErrors((prev) => ({
        ...prev,
        image: "",
      }));

      setSuccess(false);
    };

    reader.readAsDataURL(file);
  };

  /* =========================================================
     REMOVE IMAGE
  ========================================================= */

  const removeImage = () => {
    setImage("");
    setImageName("");
    setSuccess(false);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  /* =========================================================
     VALIDATION
  ========================================================= */

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name =
        "Product name is required.";
    }

    if (!form.price) {
      newErrors.price =
        "Price is required.";
    } else if (Number(form.price) <= 0) {
      newErrors.price =
        "Enter a valid price.";
    }

    if (!image) {
      newErrors.image =
        "Product image is required.";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  };

  /* =========================================================
     UPDATE PRODUCT
  ========================================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const savedProducts =
        JSON.parse(
          localStorage.getItem("karonAdminProducts")
        ) || [];

      const products = Array.isArray(savedProducts)
        ? savedProducts
        : [];

      const productExists = products.some(
        (product) =>
          Number(product.id) === Number(id)
      );

      if (!productExists) {
        setErrors({
          general:
            "Product could not be found.",
        });

        return;
      }

      const updatedProducts = products.map(
        (product) => {
          if (
            Number(product.id) !== Number(id)
          ) {
            return product;
          }

          return {
            ...product,
            name: form.name.trim(),
            category: form.category,
            price: Number(form.price),
            badge: form.badge,
            image,
          };
        }
      );

      localStorage.setItem(
        "karonAdminProducts",
        JSON.stringify(updatedProducts)
      );

      window.dispatchEvent(
        new Event("productsUpdated")
      );

      setSuccess(true);
      setErrors({});

      setTimeout(() => {
        navigate("/admin/products");
      }, 700);
    } catch (error) {
      console.error(
        "Product update error:",
        error
      );

      setErrors({
        general:
          "Unable to update product. Please use a smaller image.",
      });
    }
  };

  /* =========================================================
     CLASSES
  ========================================================= */

  const inputClass = `
    w-full
    h-[40px]
    border
    border-[#cbbda9]
    bg-[#f8f3eb]
    px-4
    text-[11px]
    sm:text-[12px]
    outline-none
    transition
    placeholder:text-[#95897a]
    focus:border-[#171714]
  `;

  const labelClass = `
    block
    mb-1
    text-[8px]
    font-bold
    tracking-[0.15em]
    uppercase
  `;

  const errorClass =
    "mt-1 text-[8px] font-semibold text-red-700";

  /* =========================================================
     LOADING
  ========================================================= */

  if (loading) {
    return (
      <main
        className="
          min-h-[50vh]
          bg-[#f4efe7]
          flex
          items-center
          justify-center
          font-['Nunito',sans-serif]
        "
      >
        <p
          className="
            text-[9px]
            font-bold
            uppercase
            tracking-[0.18em]
          "
        >
          Loading Product...
        </p>
      </main>
    );
  }

  /* =========================================================
     PRODUCT NOT FOUND
  ========================================================= */

  if (!productFound) {
    return (
      <main
        className="
          min-h-[50vh]
          bg-[#f4efe7]
          flex
          items-center
          justify-center
          px-5
          font-['Nunito',sans-serif]
        "
      >
        <div className="text-center">
          <p
            className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#a85e16]
            "
          >
            Karon Plus Admin
          </p>

          <h1
            className="
              mt-2
              text-[26px]
              font-bold
            "
          >
            Product not found.
          </h1>

          <button
            type="button"
            onClick={() =>
              navigate("/admin/products")
            }
            className="
              mt-5
              h-10
              bg-[#171714]
              px-6
              text-[8px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-white
              hover:bg-[#c77718]
              transition
            "
          >
            BACK TO PRODUCTS
          </button>
        </div>
      </main>
    );
  }

  return (
    <main
      className="
        bg-[#f4efe7]
        text-[#171714]
        font-['Nunito',sans-serif]
      "
    >
      <section
        className="
          mx-auto
          w-full
          max-w-[1180px]
          px-5
          sm:px-7
          lg:px-8
          pt-2
          pb-3
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          className="
            border-b
            border-[#cfc2af]
            pb-2
          "
        >
          {/* TOP */}

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() =>
                navigate("/admin/products")
              }
              className="
                group
                flex
                items-center
                gap-2
                text-[8px]
                font-bold
                tracking-[0.16em]
              "
            >
              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#cbbda8]
                  transition
                  group-hover:bg-[#171714]
                  group-hover:text-white
                "
              >
                <FiArrowLeft size={9} />
              </span>

              BACK
            </button>

            <p
              className="
                text-[7px]
                font-bold
                uppercase
                tracking-[0.24em]
                text-[#a85e16]
              "
            >
              Karon Plus Admin
            </p>
          </div>

          {/* TITLE */}

          <div className="mt-2">
            <div
              className="
                mb-1
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-px
                  w-7
                  bg-[#c77718]
                "
              />

              <p
                className="
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.21em]
                  text-[#a85e16]
                "
              >
                Product Management
              </p>
            </div>

            <h1
              className="
                text-[28px]
                font-bold
                leading-none
                sm:text-[31px]
              "
            >
              Edit{" "}
              <span
                className="
                  font-normal
                  italic
                  text-[#d17d1d]
                "
              >
                Product.
              </span>
            </h1>

            <p
              className="
                mt-1
                text-[9px]
                text-[#6b6258]
              "
            >
              Update your Karon Plus product
              information.
            </p>
          </div>
        </div>

        {/* =====================================================
            FORM
        ===================================================== */}

        <form
          onSubmit={handleSubmit}
          className="
            mt-2.5
            grid
            grid-cols-1
            gap-3
            lg:grid-cols-[1.1fr_0.9fr]
          "
        >
          {/* =================================================
              LEFT
          ================================================= */}

          <div
            className="
              border
              border-[#cbbda9]
              bg-[#f8f3eb]
              p-4
            "
          >
            {/* CARD HEADER */}

            <div
              className="
                mb-3
                flex
                items-center
                justify-between
              "
            >
              <div>
                <p
                  className="
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#a85e16]
                  "
                >
                  Product Information
                </p>

                <p
                  className="
                    mt-0.5
                    text-[8px]
                    text-[#7b7165]
                  "
                >
                  Update the product details.
                </p>
              </div>

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#d0c2ae]
                  text-[#c77718]
                "
              >
                <FiImage size={11} />
              </span>
            </div>

            {/* PRODUCT NAME */}

            <div className="mb-2.5">
              <label className={labelClass}>
                Product Name *
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Example: Signature White Shirt"
                className={inputClass}
              />

              {errors.name && (
                <p className={errorClass}>
                  {errors.name}
                </p>
              )}
            </div>

            {/* CATEGORY + PRICE */}

            <div
              className="
                mb-2.5
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
              "
            >
              <div>
                <label className={labelClass}>
                  Category *
                </label>

                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="Formal">
                    Formal
                  </option>

                  <option value="Casual">
                    Casual
                  </option>

                  <option value="Printed">
                    Printed
                  </option>

                  <option value="Premium">
                    Premium
                  </option>
                </select>
              </div>

              <div>
                <label className={labelClass}>
                  Price *
                </label>

                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  min="1"
                  placeholder="1499"
                  className={inputClass}
                />

                {errors.price && (
                  <p className={errorClass}>
                    {errors.price}
                  </p>
                )}
              </div>
            </div>

            {/* BADGE */}

            <div>
              <label className={labelClass}>
                Product Badge
              </label>

              <select
                name="badge"
                value={form.badge}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">
                  No Badge
                </option>

                <option value="NEW">
                  NEW
                </option>

                <option value="BESTSELLER">
                  BESTSELLER
                </option>

                <option value="JUST IN">
                  JUST IN
                </option>
              </select>
            </div>

            {/* PREVIEW */}

            <div
              className="
                mt-3
                border-t
                border-[#d4c8b7]
                pt-2
              "
            >
              <p
                className="
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.17em]
                  text-[#a85e16]
                "
              >
                Product Preview
              </p>

              <div
                className="
                  mt-1.5
                  flex
                  items-end
                  justify-between
                  gap-4
                "
              >
                <div className="min-w-0">
                  <p
                    className="
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.13em]
                      text-[#a85e16]
                    "
                  >
                    {form.category}
                  </p>

                  <p
                    className="
                      mt-0.5
                      truncate
                      text-[13px]
                      font-bold
                    "
                  >
                    {form.name ||
                      "Product Name"}
                  </p>
                </div>

                <p
                  className="
                    shrink-0
                    text-[12px]
                    font-bold
                  "
                >
                  ₹
                  {form.price
                    ? Number(
                        form.price
                      ).toLocaleString(
                        "en-IN"
                      )
                    : "0"}
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT
          ================================================= */}

          <div
            className="
              border
              border-[#cbbda9]
              bg-[#f8f3eb]
              p-4
            "
          >
            <div className="mb-2">
              <p
                className="
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#a85e16]
                "
              >
                Product Image
              </p>

              <p
                className="
                  mt-0.5
                  text-[8px]
                  text-[#7b7165]
                "
              >
                Keep the current image or upload
                a new one.
              </p>
            </div>

            {/* IMAGE */}

            <div
              onClick={() => {
                if (!image) {
                  fileInputRef.current?.click();
                }
              }}
              className={`
                relative
                flex
                h-[190px]
                items-center
                justify-center
                overflow-hidden
                border
                border-dashed
                border-[#c7b69f]
                bg-[#eee5d8]
                ${!image ? "cursor-pointer" : ""}
              `}
            >
              {image ? (
                <>
                  <img
                    src={image}
                    alt="Product preview"
                    className="
                      h-full
                      w-full
                      object-contain
                    "
                  />

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage();
                    }}
                    className="
                      absolute
                      right-2
                      top-2
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-[#171714]
                      text-white
                      transition
                      hover:bg-[#c77718]
                    "
                  >
                    <FiX size={10} />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      fileInputRef.current?.click();
                    }}
                    className="
                      absolute
                      bottom-2
                      left-1/2
                      -translate-x-1/2
                      bg-[#171714]
                      px-4
                      py-2
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-white
                      transition
                      hover:bg-[#c77718]
                    "
                  >
                    CHANGE IMAGE
                  </button>
                </>
              ) : (
                <div className="text-center">
                  <span
                    className="
                      mx-auto
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#c9b79e]
                      text-[#c77718]
                    "
                  >
                    <FiUploadCloud size={15} />
                  </span>

                  <p
                    className="
                      mt-2
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                    "
                  >
                    Upload Product Image
                  </p>

                  <p
                    className="
                      mt-1
                      text-[7px]
                      text-[#776d61]
                    "
                  >
                    JPG, PNG or WEBP
                  </p>
                </div>
              )}
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={handleImageChange}
              className="hidden"
            />

            {errors.image && (
              <p className={errorClass}>
                {errors.image}
              </p>
            )}

            {imageName && (
              <p
                className="
                  mt-1
                  truncate
                  text-[7px]
                  text-[#766c60]
                "
              >
                Selected: {imageName}
              </p>
            )}

            {errors.general && (
              <p
                className="
                  mt-1
                  text-[8px]
                  font-semibold
                  text-red-700
                "
              >
                {errors.general}
              </p>
            )}

            {/* SUCCESS */}

            {success && (
              <div
                className="
                  mt-1.5
                  flex
                  items-center
                  gap-2
                  border
                  border-[#bba98e]
                  bg-[#eee4d5]
                  px-3
                  py-1.5
                "
              >
                <span
                  className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-[#171714]
                    text-white
                  "
                >
                  <FiCheck size={8} />
                </span>

                <p
                  className="
                    text-[8px]
                    font-bold
                  "
                >
                  Product updated successfully.
                </p>
              </div>
            )}

            {/* BUTTON */}

            <button
              type="submit"
              className="
                group
                mt-2.5
                flex
                h-[40px]
                w-full
                items-center
                justify-between
                bg-[#171714]
                px-5
                text-[8px]
                font-bold
                uppercase
                tracking-[0.17em]
                text-white
                transition
                hover:bg-[#c77718]
              "
            >
              UPDATE PRODUCT

              <FiArrowRight
                size={10}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default EditProduct;