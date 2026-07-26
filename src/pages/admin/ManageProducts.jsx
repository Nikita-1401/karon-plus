import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiEdit2,
  FiPlus,
  FiSearch,
  FiTrash2,
  FiX,
} from "react-icons/fi";

const ManageProducts = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [deleteProduct, setDeleteProduct] = useState(null);

  /* =========================================================
     LOAD ADMIN PRODUCTS
  ========================================================= */

  const loadProducts = () => {
    try {
      const savedProducts =
        JSON.parse(
          localStorage.getItem("karonAdminProducts")
        ) || [];

      setProducts(
        Array.isArray(savedProducts)
          ? savedProducts
          : []
      );
    } catch (error) {
      console.error(
        "Unable to load admin products:",
        error
      );

      setProducts([]);
    }
  };

  useEffect(() => {
    loadProducts();

    const handleProductsUpdated = () => {
      loadProducts();
    };

    const handleStorage = (event) => {
      if (
        event.key === "karonAdminProducts"
      ) {
        loadProducts();
      }
    };

    window.addEventListener(
      "productsUpdated",
      handleProductsUpdated
    );

    window.addEventListener(
      "storage",
      handleStorage
    );

    return () => {
      window.removeEventListener(
        "productsUpdated",
        handleProductsUpdated
      );

      window.removeEventListener(
        "storage",
        handleStorage
      );
    };
  }, []);

  /* =========================================================
     FILTER PRODUCTS
  ========================================================= */

  const filteredProducts = products.filter(
    (product) => {
      const matchesSearch =
        product.name
          ?.toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    }
  );

  /* =========================================================
     DELETE PRODUCT
  ========================================================= */

  const confirmDelete = () => {
    if (!deleteProduct) return;

    const updatedProducts = products.filter(
      (product) =>
        Number(product.id) !==
        Number(deleteProduct.id)
    );

    localStorage.setItem(
      "karonAdminProducts",
      JSON.stringify(updatedProducts)
    );

    setProducts(updatedProducts);

    setDeleteProduct(null);

    window.dispatchEvent(
      new Event("productsUpdated")
    );
  };

  /* =========================================================
     EDIT PRODUCT
  ========================================================= */

  const handleEdit = (product) => {
    navigate(
      `/admin/edit-product/${product.id}`
    );
  };

  return (
    <main
      className="
        bg-[#f4efe7]
        text-[#171714]
        min-h-screen
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
          pt-3
          pb-6
        "
      >
        {/* =====================================================
            TOP
        ===================================================== */}

        <div
          className="
            border-b
            border-[#cfc2af]
            pb-3
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <button
              type="button"
              onClick={() => navigate(-1)}
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

          <div
            className="
              mt-3
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
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
                Manage{" "}
                <span
                  className="
                    font-normal
                    italic
                    text-[#d17d1d]
                  "
                >
                  Products.
                </span>
              </h1>

              <p
                className="
                  mt-1
                  text-[9px]
                  text-[#6b6258]
                "
              >
                View, edit and manage products
                added from the admin panel.
              </p>
            </div>

            {/* ADD PRODUCT */}

            <button
              type="button"
              onClick={() =>
                navigate("/admin/add-product")
              }
              className="
                flex
                h-9
                items-center
                justify-center
                gap-2
                bg-[#171714]
                px-4
                text-[8px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-white
                transition
                hover:bg-[#c77718]
              "
            >
              <FiPlus size={11} />

              ADD PRODUCT
            </button>
          </div>
        </div>

        {/* =====================================================
            FILTER BAR
        ===================================================== */}

        <div
          className="
            mt-3
            grid
            grid-cols-1
            gap-2
            sm:grid-cols-[1fr_170px]
          "
        >
          {/* SEARCH */}

          <div className="relative">
            <FiSearch
              size={12}
              className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-[#776d61]
              "
            />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search products..."
              className="
                h-9
                w-full
                border
                border-[#cbbda9]
                bg-[#f8f3eb]
                pl-9
                pr-3
                text-[10px]
                outline-none
                placeholder:text-[#95897a]
                focus:border-[#171714]
              "
            />
          </div>

          {/* CATEGORY */}

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="
              h-9
              border
              border-[#cbbda9]
              bg-[#f8f3eb]
              px-3
              text-[9px]
              font-bold
              uppercase
              tracking-[0.1em]
              outline-none
              focus:border-[#171714]
            "
          >
            <option value="All">
              All Categories
            </option>

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

        {/* =====================================================
            PRODUCT COUNT
        ===================================================== */}

        <div
          className="
            mt-3
            flex
            items-center
            justify-between
          "
        >
          <p
            className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#a85e16]
            "
          >
            Admin Products
          </p>

          <p
            className="
              text-[8px]
              text-[#756b5e]
            "
          >
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1
              ? "product"
              : "products"}
          </p>
        </div>

        {/* =====================================================
            PRODUCTS
        ===================================================== */}

        {filteredProducts.length > 0 ? (
          <div
            className="
              mt-2
              grid
              grid-cols-1
              gap-2
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {filteredProducts.map(
              (product) => (
                <article
                  key={product.id}
                  className="
                    flex
                    min-w-0
                    border
                    border-[#cbbda9]
                    bg-[#f8f3eb]
                    p-2
                  "
                >
                  {/* IMAGE */}

                  <div
                    className="
                      h-[105px]
                      w-[82px]
                      shrink-0
                      overflow-hidden
                      bg-[#ded5c8]
                    "
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                    />
                  </div>

                  {/* INFO */}

                  <div
                    className="
                      flex
                      min-w-0
                      flex-1
                      flex-col
                      justify-between
                      pl-3
                    "
                  >
                    <div>
                      <div
                        className="
                          flex
                          items-start
                          justify-between
                          gap-2
                        "
                      >
                        <p
                          className="
                            text-[7px]
                            font-bold
                            uppercase
                            tracking-[0.14em]
                            text-[#a85e16]
                          "
                        >
                          {product.category}
                        </p>

                        {product.badge && (
                          <span
                            className="
                              shrink-0
                              bg-[#ebe1d3]
                              px-2
                              py-1
                              text-[6px]
                              font-bold
                              tracking-[0.12em]
                            "
                          >
                            {product.badge}
                          </span>
                        )}
                      </div>

                      <h2
                        className="
                          mt-1
                          truncate
                          text-[13px]
                          font-bold
                        "
                      >
                        {product.name}
                      </h2>

                      <p
                        className="
                          mt-1
                          text-[11px]
                          font-bold
                        "
                      >
                        ₹
                        {Number(
                          product.price
                        ).toLocaleString(
                          "en-IN"
                        )}
                      </p>
                    </div>

                    {/* ACTIONS */}

                    <div
                      className="
                        mt-2
                        flex
                        gap-1.5
                      "
                    >
                      <button
                        type="button"
                        onClick={() =>
                          handleEdit(product)
                        }
                        className="
                          flex
                          h-7
                          flex-1
                          items-center
                          justify-center
                          gap-1.5
                          border
                          border-[#bfb19e]
                          text-[7px]
                          font-bold
                          tracking-[0.12em]
                          transition
                          hover:border-[#171714]
                          hover:bg-[#171714]
                          hover:text-white
                        "
                      >
                        <FiEdit2 size={8} />

                        EDIT
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setDeleteProduct(
                            product
                          )
                        }
                        className="
                          flex
                          h-7
                          flex-1
                          items-center
                          justify-center
                          gap-1.5
                          border
                          border-[#bfb19e]
                          text-[7px]
                          font-bold
                          tracking-[0.12em]
                          transition
                          hover:border-red-800
                          hover:bg-red-800
                          hover:text-white
                        "
                      >
                        <FiTrash2 size={8} />

                        DELETE
                      </button>
                    </div>
                  </div>
                </article>
              )
            )}
          </div>
        ) : (
          /* ===================================================
             EMPTY STATE
          =================================================== */

          <div
            className="
              mt-3
              flex
              min-h-[240px]
              flex-col
              items-center
              justify-center
              border
              border-dashed
              border-[#c7b69f]
              bg-[#eee5d8]
              px-5
              text-center
            "
          >
            <span
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#c9b79e]
                text-[#c77718]
              "
            >
              <FiSearch size={15} />
            </span>

            <h2
              className="
                mt-3
                text-[15px]
                font-bold
              "
            >
              {products.length === 0
                ? "No products added yet."
                : "No products found."}
            </h2>

            <p
              className="
                mt-1
                max-w-[320px]
                text-[9px]
                leading-4
                text-[#71675c]
              "
            >
              {products.length === 0
                ? "Products added from the admin panel will appear here."
                : "Try changing your search or category filter."}
            </p>

            {products.length === 0 && (
              <button
                type="button"
                onClick={() =>
                  navigate(
                    "/admin/add-product"
                  )
                }
                className="
                  mt-4
                  flex
                  h-8
                  items-center
                  gap-2
                  bg-[#171714]
                  px-4
                  text-[7px]
                  font-bold
                  tracking-[0.14em]
                  text-white
                  transition
                  hover:bg-[#c77718]
                "
              >
                <FiPlus size={9} />

                ADD FIRST PRODUCT
              </button>
            )}
          </div>
        )}
      </section>

      {/* =====================================================
          DELETE CONFIRMATION
      ===================================================== */}

      {deleteProduct && (
        <div
          onClick={() =>
            setDeleteProduct(null)
          }
          className="
            fixed
            inset-0
            z-[300]
            flex
            items-center
            justify-center
            bg-black/55
            p-4
          "
        >
          <div
            onClick={(e) =>
              e.stopPropagation()
            }
            className="
              relative
              w-full
              max-w-[380px]
              bg-[#f4efe7]
              p-5
            "
          >
            <button
              type="button"
              onClick={() =>
                setDeleteProduct(null)
              }
              className="
                absolute
                right-4
                top-4
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                border
                border-[#cbbda8]
                transition
                hover:bg-[#171714]
                hover:text-white
              "
            >
              <FiX size={10} />
            </button>

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

            <h2
              className="
                mt-1
                text-[22px]
                font-bold
              "
            >
              Delete Product?
            </h2>

            <p
              className="
                mt-2
                pr-6
                text-[10px]
                leading-4
                text-[#655d53]
              "
            >
              Are you sure you want to
              delete{" "}
              <span className="font-bold text-[#171714]">
                {deleteProduct.name}
              </span>
              ? This product will also be
              removed from the shop.
            </p>

            {/* PRODUCT */}

            <div
              className="
                mt-4
                flex
                items-center
                gap-3
                border-y
                border-[#d1c5b4]
                py-3
              "
            >
              <img
                src={deleteProduct.image}
                alt={deleteProduct.name}
                className="
                  h-14
                  w-12
                  object-cover
                  bg-[#ded5c8]
                "
              />

              <div>
                <p
                  className="
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-[#a85e16]
                  "
                >
                  {deleteProduct.category}
                </p>

                <p
                  className="
                    mt-0.5
                    text-[12px]
                    font-bold
                  "
                >
                  {deleteProduct.name}
                </p>

                <p
                  className="
                    mt-0.5
                    text-[9px]
                  "
                >
                  ₹
                  {Number(
                    deleteProduct.price
                  ).toLocaleString(
                    "en-IN"
                  )}
                </p>
              </div>
            </div>

            {/* BUTTONS */}

            <div
              className="
                mt-4
                grid
                grid-cols-2
                gap-2
              "
            >
              <button
                type="button"
                onClick={() =>
                  setDeleteProduct(null)
                }
                className="
                  h-9
                  border
                  border-[#171714]
                  text-[8px]
                  font-bold
                  tracking-[0.14em]
                  transition
                  hover:bg-[#e6ddd0]
                "
              >
                CANCEL
              </button>

              <button
                type="button"
                onClick={confirmDelete}
                className="
                  h-9
                  bg-[#171714]
                  text-[8px]
                  font-bold
                  tracking-[0.14em]
                  text-white
                  transition
                  hover:bg-red-800
                "
              >
                DELETE PRODUCT
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ManageProducts;