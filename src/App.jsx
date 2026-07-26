import { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ================= PAGES =================
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import CategoryPage from "./pages/CategoryPage";

import FormalShirts from "./pages/FormalShirts";
import CasualShirts from "./pages/CasualShirts";
import PrintedShirts from "./pages/PrintedShirts";
import PremiumShirts from "./pages/PremiumShirts";

import NewArrivals from "./pages/NewArrivals";
import OurPromise from "./pages/OurPromise";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import ProductDetails from "./pages/ProductDetails";

// ================= ADMIN =================
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProduct from "./pages/admin/AddProduct";
import ManageProducts from "./pages/admin/ManageProducts";
import EditProduct from "./pages/admin/EditProduct";

// ================= SCROLL TO TOP =================
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="min-h-screen bg-[#fffdf9]">
      {/* ================= SCROLL FIX ================= */}
      <ScrollToTop />

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= ROUTES ================= */}
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ================= SHOP ================= */}
        <Route path="/shop" element={<Shop />} />

        {/* ================= PRODUCT DETAILS ================= */}
        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        {/* ================= SHIRTS MAIN PAGE ================= */}
        <Route
          path="/shirts"
          element={<CategoryPage />}
        />

        {/* ================= INDIVIDUAL SHIRT PAGES ================= */}
        <Route
          path="/shirts/formal"
          element={<FormalShirts />}
        />

        <Route
          path="/shirts/casual"
          element={<CasualShirts />}
        />

        <Route
          path="/shirts/printed"
          element={<PrintedShirts />}
        />

        <Route
          path="/shirts/premium"
          element={<PremiumShirts />}
        />

        {/* ================= OTHER PAGES ================= */}
        <Route
          path="/new-arrivals"
          element={<NewArrivals />}
        />

        <Route
          path="/our-promise"
          element={<OurPromise />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* ================= BLOG ================= */}
        <Route
          path="/blog"
          element={<Blog />}
        />

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/account"
          element={<Account />}
        />

        {/* ================= ADMIN ================= */}

        {/* ADMIN DASHBOARD */}
        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        {/* ADD PRODUCT */}
        <Route
          path="/admin/add-product"
          element={<AddProduct />}
        />

        {/* MANAGE PRODUCTS */}
        <Route
          path="/admin/products"
          element={<ManageProducts />}
        />

        {/* EDIT PRODUCT */}
        <Route
          path="/admin/edit-product/:id"
          element={<EditProduct />}
        />

        {/* ================= 404 ================= */}
        <Route
          path="*"
          element={
            <main className="min-h-[60vh] bg-[#f4efe7] flex items-center justify-center px-5">
              <div className="text-center">
                <p className="text-[#b66d17] text-[10px] font-bold tracking-[0.25em] uppercase mb-3">
                  KARON PLUS
                </p>

                <h1 className="font-serif text-[40px] sm:text-[50px] leading-none">
                  Page not found.
                </h1>

                <p className="text-[13px] text-[#6d6459] mt-4">
                  The page you are looking for does not exist.
                </p>

                <a
                  href="/"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    mt-6
                    bg-[#171714]
                    text-white
                    min-w-[170px]
                    h-11
                    px-6
                    text-[9px]
                    font-bold
                    tracking-[0.2em]
                    hover:bg-[#c77b20]
                    transition
                  "
                >
                  BACK TO HOME
                </a>
              </div>
            </main>
          }
        />
      </Routes>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}

export default App;