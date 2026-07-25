import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiEye,
  FiEyeOff,
  FiArrowRight,
} from "react-icons/fi";

const Account = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeTab = (tab) => {
    setActiveTab(tab);
    setMessage("");
    setShowPassword(false);
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!signInData.email || !signInData.password) {
      setMessage("Please enter your email and password.");
      return;
    }

    if (signInData.password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    localStorage.setItem(
      "karonUser",
      JSON.stringify({
        email: signInData.email,
      })
    );

    setMessage("");
    navigate("/shop");
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      !registerData.name ||
      !registerData.email ||
      !registerData.password
    ) {
      setMessage("Please complete all fields.");
      return;
    }

    if (registerData.password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    localStorage.setItem(
      "karonUser",
      JSON.stringify({
        name: registerData.name,
        email: registerData.email,
      })
    );

    setMessage("");
    navigate("/shop");
  };

  return (
    <main className="bg-[#f4efe7] text-[#171714] min-h-[calc(100vh-120px)] lg:h-[calc(100vh-120px)] lg:overflow-hidden">
      <section className="h-full px-4 sm:px-6 lg:px-10 py-3">
        <div className="max-w-[980px] mx-auto h-full">

          {/* ================= TOP ================= */}
          <div className="flex items-center justify-between h-8">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="group flex items-center gap-2 text-[9px] font-bold tracking-[0.15em]"
            >
              <span className="w-6 h-6 rounded-full border border-[#c9bba7] flex items-center justify-center group-hover:bg-[#171714] group-hover:text-white transition">
                <FiArrowLeft size={11} />
              </span>

              BACK HOME
            </button>

            <div className="hidden sm:flex text-[9px] tracking-[0.14em] uppercase">
              <Link
                to="/"
                className="text-[#897e70] hover:text-[#c7791c] transition"
              >
                Home
              </Link>

              <span className="mx-2">/</span>

              <span>Account</span>
            </div>
          </div>

          {/* ================= HEADING ================= */}
          <div className="flex items-end justify-between border-b border-[#d0c3b0] pb-2 mt-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-px bg-[#d17c18]" />

                <span className="text-[#b66d17] text-[9px] font-bold tracking-[0.2em] uppercase">
                  Karon Plus Account
                </span>
              </div>

              <h1 className="font-serif text-[27px] sm:text-[30px] lg:text-[32px] leading-none">
                Your{" "}
                <span className="italic text-[#d17c18] font-normal">
                  Account.
                </span>
              </h1>
            </div>

            <p className="hidden md:block text-[10px] text-[#756c61] pb-1">
              Sign in or create your Karon Plus account.
            </p>
          </div>

          {/* ================= ACCOUNT CARD ================= */}
          <div className="w-full max-w-[620px] mx-auto mt-3 border border-[#cfc1ad] bg-[#f8f4ed]">

            {/* TABS */}
            <div className="grid grid-cols-2 h-9 border-b border-[#cfc1ad]">
              <button
                type="button"
                onClick={() => changeTab("signin")}
                className={`relative text-[9px] font-bold tracking-[0.16em] transition ${
                  activeTab === "signin"
                    ? "text-[#c77718]"
                    : "text-[#71685c] hover:text-[#171714]"
                }`}
              >
                SIGN IN

                {activeTab === "signin" && (
                  <span className="absolute bottom-0 left-10 right-10 h-[2px] bg-[#c77718]" />
                )}
              </button>

              <button
                type="button"
                onClick={() => changeTab("register")}
                className={`relative text-[9px] font-bold tracking-[0.16em] transition ${
                  activeTab === "register"
                    ? "text-[#c77718]"
                    : "text-[#71685c] hover:text-[#171714]"
                }`}
              >
                CREATE ACCOUNT

                {activeTab === "register" && (
                  <span className="absolute bottom-0 left-10 right-10 h-[2px] bg-[#c77718]" />
                )}
              </button>
            </div>

            {/* ================= SIGN IN ================= */}
            {activeTab === "signin" && (
              <form
                onSubmit={handleSignIn}
                className="px-5 sm:px-7 py-4"
              >
                {/* INTRO */}
                <div className="mb-3">
                  <h2 className="font-serif text-[22px] sm:text-[23px] leading-none">
                    Welcome Back.
                  </h2>

                  <p className="text-[11px] sm:text-[12px] text-[#746b60] mt-1.5">
                    Sign in to continue your shopping journey.
                  </p>
                </div>

                {/* EMAIL */}
                <div className="mb-2.5">
                  <label
                    htmlFor="signinEmail"
                    className="block text-[9px] font-bold tracking-[0.14em] mb-1.5"
                  >
                    EMAIL ADDRESS
                  </label>

                  <input
                    id="signinEmail"
                    type="email"
                    value={signInData.email}
                    onChange={(e) =>
                      setSignInData({
                        ...signInData,
                        email: e.target.value,
                      })
                    }
                    placeholder="you@example.com"
                    className="
                      w-full
                      h-9
                      border
                      border-[#c9bba7]
                      bg-transparent
                      px-3
                      text-[12px]
                      outline-none
                      focus:border-[#171714]
                      transition
                      placeholder:text-[#92877a]
                    "
                  />
                </div>

                {/* PASSWORD */}
                <div>
                  <label
                    htmlFor="signinPassword"
                    className="block text-[9px] font-bold tracking-[0.14em] mb-1.5"
                  >
                    PASSWORD
                  </label>

                  <div className="relative">
                    <input
                      id="signinPassword"
                      type={showPassword ? "text" : "password"}
                      value={signInData.password}
                      onChange={(e) =>
                        setSignInData({
                          ...signInData,
                          password: e.target.value,
                        })
                      }
                      placeholder="Minimum 6 characters"
                      className="
                        w-full
                        h-9
                        border
                        border-[#c9bba7]
                        bg-transparent
                        pl-3
                        pr-10
                        text-[12px]
                        outline-none
                        focus:border-[#171714]
                        transition
                        placeholder:text-[#92877a]
                      "
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((prev) => !prev)
                      }
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                      className="absolute right-0 top-0 w-9 h-9 flex items-center justify-center text-[#766d61] hover:text-[#171714] transition"
                    >
                      {showPassword ? (
                        <FiEyeOff size={14} />
                      ) : (
                        <FiEye size={14} />
                      )}
                    </button>
                  </div>
                </div>

                {/* ERROR */}
                {message && (
                  <p className="text-[10px] font-medium text-[#a64f2c] mt-1.5">
                    {message}
                  </p>
                )}

                {/* SIGN IN BUTTON */}
                <button
                  type="submit"
                  className="group w-full h-9 bg-[#171714] text-white mt-3 px-4 flex items-center justify-between hover:bg-[#c77b20] transition"
                >
                  <span className="text-[9px] font-bold tracking-[0.17em]">
                    SIGN IN
                  </span>

                  <FiArrowRight
                    size={12}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                {/* CREATE LINK */}
                <p className="text-center text-[10px] sm:text-[11px] text-[#70675d] mt-2">
                  New to Karon Plus?{" "}
                  <button
                    type="button"
                    onClick={() => changeTab("register")}
                    className="text-[#171714] font-semibold border-b border-[#171714] hover:text-[#c77718] hover:border-[#c77718] transition"
                  >
                    Create account
                  </button>
                </p>
              </form>
            )}

            {/* ================= REGISTER ================= */}
            {activeTab === "register" && (
              <form
                onSubmit={handleRegister}
                className="px-5 sm:px-7 py-3"
              >
                {/* INTRO */}
                <div className="mb-2.5">
                  <h2 className="font-serif text-[21px] sm:text-[22px] leading-none">
                    Create Account.
                  </h2>

                  <p className="text-[11px] text-[#746b60] mt-1.5">
                    Join Karon Plus and save your favourite pieces.
                  </p>
                </div>

                {/* NAME */}
                <div className="mb-2">
                  <label
                    htmlFor="registerName"
                    className="block text-[9px] font-bold tracking-[0.14em] mb-1"
                  >
                    FULL NAME
                  </label>

                  <input
                    id="registerName"
                    type="text"
                    value={registerData.name}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        name: e.target.value,
                      })
                    }
                    placeholder="Your name"
                    className="
                      w-full
                      h-8
                      border
                      border-[#c9bba7]
                      bg-transparent
                      px-3
                      text-[11px]
                      outline-none
                      focus:border-[#171714]
                      transition
                      placeholder:text-[#92877a]
                    "
                  />
                </div>

                {/* EMAIL */}
                <div className="mb-2">
                  <label
                    htmlFor="registerEmail"
                    className="block text-[9px] font-bold tracking-[0.14em] mb-1"
                  >
                    EMAIL ADDRESS
                  </label>

                  <input
                    id="registerEmail"
                    type="email"
                    value={registerData.email}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        email: e.target.value,
                      })
                    }
                    placeholder="you@example.com"
                    className="
                      w-full
                      h-8
                      border
                      border-[#c9bba7]
                      bg-transparent
                      px-3
                      text-[11px]
                      outline-none
                      focus:border-[#171714]
                      transition
                      placeholder:text-[#92877a]
                    "
                  />
                </div>

                {/* PASSWORD */}
                <div>
                  <label
                    htmlFor="registerPassword"
                    className="block text-[9px] font-bold tracking-[0.14em] mb-1"
                  >
                    PASSWORD
                  </label>

                  <div className="relative">
                    <input
                      id="registerPassword"
                      type={showPassword ? "text" : "password"}
                      value={registerData.password}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          password: e.target.value,
                        })
                      }
                      placeholder="Minimum 6 characters"
                      className="
                        w-full
                        h-8
                        border
                        border-[#c9bba7]
                        bg-transparent
                        pl-3
                        pr-9
                        text-[11px]
                        outline-none
                        focus:border-[#171714]
                        transition
                        placeholder:text-[#92877a]
                      "
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((prev) => !prev)
                      }
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                      className="absolute right-0 top-0 w-8 h-8 flex items-center justify-center text-[#766d61] hover:text-[#171714]"
                    >
                      {showPassword ? (
                        <FiEyeOff size={13} />
                      ) : (
                        <FiEye size={13} />
                      )}
                    </button>
                  </div>
                </div>

                {/* ERROR */}
                {message && (
                  <p className="text-[10px] font-medium text-[#a64f2c] mt-1">
                    {message}
                  </p>
                )}

                {/* CREATE BUTTON */}
                <button
                  type="submit"
                  className="group w-full h-8 bg-[#171714] text-white mt-2.5 px-4 flex items-center justify-between hover:bg-[#c77b20] transition"
                >
                  <span className="text-[9px] font-bold tracking-[0.16em]">
                    CREATE ACCOUNT
                  </span>

                  <FiArrowRight
                    size={11}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                {/* SIGN IN LINK */}
                <p className="text-center text-[10px] sm:text-[11px] text-[#70675d] mt-1.5">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => changeTab("signin")}
                    className="text-[#171714] font-semibold border-b border-[#171714] hover:text-[#c77718] hover:border-[#c77718]"
                  >
                    Sign in
                  </button>
                </p>
              </form>
            )}
          </div>

          {/* ================= BOTTOM LINKS ================= */}
          <div className="flex justify-center items-center gap-5 mt-2.5 text-[10px] text-[#776e63]">
            <Link
              to="/wishlist"
              className="hover:text-[#c77718] transition"
            >
              Saved Wishlist
            </Link>

            <span className="w-[3px] h-[3px] rounded-full bg-[#b9aa96]" />

            <Link
              to="/shop"
              className="hover:text-[#c77718] transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Account;