import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiBox,
  FiGrid,
  FiPlus,
  FiShoppingBag,
} from "react-icons/fi";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
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
  }, []);

  const formalCount = products.filter(
    (product) => product.category === "Formal"
  ).length;

  const casualCount = products.filter(
    (product) => product.category === "Casual"
  ).length;

  const printedCount = products.filter(
    (product) => product.category === "Printed"
  ).length;

  const premiumCount = products.filter(
    (product) => product.category === "Premium"
  ).length;

  return (
    <main
      className="
        min-h-[calc(100vh-145px)]
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
          pt-3
          pb-5
        "
      >
        {/* ================= TOP ================= */}

        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate("/")}
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

            BACK TO WEBSITE
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

        {/* ================= HEADER ================= */}

        <div
          className="
            mt-3
            flex
            flex-col
            gap-4
            border-b
            border-[#cfc2af]
            pb-4
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <div>
            <div className="mb-1.5 flex items-center gap-3">
              <span className="h-px w-7 bg-[#c77718]" />

              <p
                className="
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.21em]
                  text-[#a85e16]
                "
              >
                Admin Panel
              </p>
            </div>

            <h1
              className="
                text-[29px]
                font-bold
                leading-none
                sm:text-[33px]
              "
            >
              Admin{" "}
              <span
                className="
                  font-normal
                  italic
                  text-[#d17d1d]
                "
              >
                Dashboard.
              </span>
            </h1>

            <p
              className="
                mt-1.5
                max-w-[480px]
                text-[8px]
                leading-3
                text-[#6b6258]
              "
            >
              Manage your Karon Plus products and
              collection from one place.
            </p>
          </div>

          <Link
            to="/admin/add-product"
            className="
              group
              flex
              h-10
              items-center
              justify-between
              gap-6
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
            <span className="flex items-center gap-2">
              <FiPlus size={11} />
              ADD PRODUCT
            </span>

            <FiArrowRight
              size={10}
              className="
                transition-transform
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>

        {/* ================= STATS ================= */}

        <div
          className="
            mt-4
            grid
            grid-cols-2
            gap-3
            lg:grid-cols-5
          "
        >
          {/* TOTAL */}

          <div
            className="
              col-span-2
              border
              border-[#cbbda9]
              bg-[#171714]
              px-4
              py-4
              text-white
              lg:col-span-1
            "
          >
            <div className="flex items-start justify-between">
              <div>
                <p
                  className="
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#d99a4c]
                  "
                >
                  Admin Products
                </p>

                <p
                  className="
                    mt-2
                    text-[27px]
                    font-bold
                    leading-none
                  "
                >
                  {products.length}
                </p>

                <p className="mt-2 text-[7px] text-white/60">
                  Products added by admin
                </p>
              </div>

              <FiBox
                size={16}
                className="text-[#d99a4c]"
              />
            </div>
          </div>

          {/* FORMAL */}

          <div
            className="
              border
              border-[#cbbda9]
              bg-[#f8f3eb]
              px-4
              py-4
            "
          >
            <p className="text-[7px] font-bold uppercase tracking-[0.17em] text-[#a85e16]">
              Formal
            </p>

            <p className="mt-2 text-[25px] font-bold leading-none">
              {formalCount}
            </p>

            <p className="mt-2 text-[7px] text-[#766c60]">
              Products
            </p>
          </div>

          {/* CASUAL */}

          <div
            className="
              border
              border-[#cbbda9]
              bg-[#f8f3eb]
              px-4
              py-4
            "
          >
            <p className="text-[7px] font-bold uppercase tracking-[0.17em] text-[#a85e16]">
              Casual
            </p>

            <p className="mt-2 text-[25px] font-bold leading-none">
              {casualCount}
            </p>

            <p className="mt-2 text-[7px] text-[#766c60]">
              Products
            </p>
          </div>

          {/* PRINTED */}

          <div
            className="
              border
              border-[#cbbda9]
              bg-[#f8f3eb]
              px-4
              py-4
            "
          >
            <p className="text-[7px] font-bold uppercase tracking-[0.17em] text-[#a85e16]">
              Printed
            </p>

            <p className="mt-2 text-[25px] font-bold leading-none">
              {printedCount}
            </p>

            <p className="mt-2 text-[7px] text-[#766c60]">
              Products
            </p>
          </div>

          {/* PREMIUM */}

          <div
            className="
              border
              border-[#cbbda9]
              bg-[#f8f3eb]
              px-4
              py-4
            "
          >
            <p className="text-[7px] font-bold uppercase tracking-[0.17em] text-[#a85e16]">
              Premium
            </p>

            <p className="mt-2 text-[25px] font-bold leading-none">
              {premiumCount}
            </p>

            <p className="mt-2 text-[7px] text-[#766c60]">
              Products
            </p>
          </div>
        </div>

        {/* ================= MANAGEMENT ================= */}

        <div className="mt-4">
          <div className="mb-3 flex items-end justify-between">
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
                Product Management
              </p>

              <h2 className="mt-1 text-[19px] font-bold">
                Manage your collection
              </h2>
            </div>

            <FiGrid
              size={14}
              className="text-[#c77718]"
            />
          </div>

          <div
            className="
              grid
              grid-cols-1
              gap-3
              md:grid-cols-2
            "
          >
            {/* ADD PRODUCT */}

            <Link
              to="/admin/add-product"
              className="
                group
                border
                border-[#cbbda9]
                bg-[#f8f3eb]
                px-4
                py-4
                transition
                hover:border-[#171714]
              "
            >
              <div className="flex items-start justify-between">
                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#cbbda9]
                    text-[#c77718]
                  "
                >
                  <FiPlus size={13} />
                </span>

                <FiArrowRight
                  size={12}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </div>

              <h3 className="mt-4 text-[17px] font-bold">
                Add New Product
              </h3>

              <p
                className="
                  mt-1
                  text-[8px]
                  leading-3
                  text-[#6b6258]
                "
              >
                Add a new shirt with product name,
                category, price, badge and image.
              </p>
            </Link>

            {/* MANAGE PRODUCTS */}

            <Link
              to="/admin/products"
              className="
                group
                border
                border-[#cbbda9]
                bg-[#f8f3eb]
                px-4
                py-4
                transition
                hover:border-[#171714]
              "
            >
              <div className="flex items-start justify-between">
                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#cbbda9]
                    text-[#c77718]
                  "
                >
                  <FiShoppingBag size={13} />
                </span>

                <FiArrowRight
                  size={12}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </div>

              <h3 className="mt-4 text-[17px] font-bold">
                Manage Products
              </h3>

              <p
                className="
                  mt-1
                  text-[8px]
                  leading-3
                  text-[#6b6258]
                "
              >
                View and manage products that have
                been added from the admin panel.
              </p>
            </Link>
          </div>
        </div>

        {/* ================= WEBSITE ================= */}

        <div
          className="
            mt-4
            flex
            flex-col
            gap-3
            border-t
            border-[#cfc2af]
            pt-3
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            <p className="text-[8px] font-bold tracking-[0.16em] uppercase">
              Customer Website
            </p>

            <p className="mt-1 text-[8px] text-[#766c60]">
              Preview the products on the customer
              shop.
            </p>
          </div>

          <Link
            to="/shop"
            className="
              flex
              items-center
              gap-3
              text-[8px]
              font-bold
              uppercase
              tracking-[0.16em]
              hover:text-[#c77718]
              transition
            "
          >
            VIEW SHOP
            <FiArrowRight size={10} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AdminDashboard;