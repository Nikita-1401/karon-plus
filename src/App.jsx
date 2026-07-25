import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ================= PAGES =================
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import CategoryPage from "./pages/CategoryPage";

// ================= SHIRT CATEGORY PAGES =================
import FormalShirts from "./pages/FormalShirts";
import CasualShirts from "./pages/CasualShirts";
import PrintedShirts from "./pages/PrintedShirts";
import PremiumShirts from "./pages/PremiumShirts";

// ================= OTHER PAGES =================
import NewArrivals from "./pages/NewArrivals";
import OurPromise from "./pages/OurPromise";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Account from "./pages/Account";

function App() {
  return (
    <div className="min-h-screen bg-[#fffdf9]">
      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= WEBSITE ROUTES ================= */}
      <Routes>

        {/* ================= HOME ================= */}
        <Route path="/" element={<Home />} />

        {/* ================= SHOP ================= */}
        <Route path="/shop" element={<Shop />} />

        {/* =================================================
            MAIN SHIRTS PAGE
        ================================================= */}
        <Route path="/shirts" element={<CategoryPage />} />

        {/* =================================================
            NEW SHIRT CATEGORY ROUTES
            Navbar / Category page can use these
        ================================================= */}

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

        {/* =================================================
            OLD SHOP CATEGORY ROUTES

            IMPORTANT:
            Ye isliye rakhe hain taki agar Navbar ya kisi
            old button me /shop/formal etc laga hua hai,
            tab bhi Page Not Found na aaye.
        ================================================= */}

        <Route
          path="/shop/formal"
          element={<FormalShirts />}
        />

        <Route
          path="/shop/casual"
          element={<CasualShirts />}
        />

        <Route
          path="/shop/printed"
          element={<PrintedShirts />}
        />

        <Route
          path="/shop/premium"
          element={<PremiumShirts />}
        />

        {/* =================================================
            EXTRA OLD ROUTES SUPPORT
            Agar kisi purane component me direct /formal
            etc laga ho to wo bhi chalega.
        ================================================= */}

        <Route
          path="/formal"
          element={<FormalShirts />}
        />

        <Route
          path="/casual"
          element={<CasualShirts />}
        />

        <Route
          path="/printed"
          element={<PrintedShirts />}
        />

        <Route
          path="/premium"
          element={<PremiumShirts />}
        />

        {/* ================= PRODUCT DETAILS ================= */}

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        {/* ================= NEW ARRIVALS ================= */}

        <Route
          path="/new-arrivals"
          element={<NewArrivals />}
        />

        {/* ================= OUR PROMISE ================= */}

        <Route
          path="/our-promise"
          element={<OurPromise />}
        />

        {/* ================= ABOUT ================= */}

        <Route
          path="/about"
          element={<About />}
        />

        {/* ================= CONTACT ================= */}

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* ================= WISHLIST ================= */}

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

        {/* ================= CART ================= */}

        <Route
          path="/cart"
          element={<Cart />}
        />

        {/* ================= ACCOUNT ================= */}

        <Route
          path="/account"
          element={<Account />}
        />

        {/* ================= 404 PAGE ================= */}

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