import { useState } from "react";

function Header() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const toggleMenu = () => setIsToggleOpen(!isToggleOpen);

  return (
    <section
      className="slide-top pt-4 pb-7"
      style={{
        backgroundImage: `url("https://framerusercontent.com/images/BByKiThYR6TZVIEQlbwxH7IWUwY.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header className="text-[#202b38] color-[#F6F6F7] ">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            <div>
              <img
                src="https://framerusercontent.com/images/WvIxk2OsDPSdCdejZp7vMsFKbs.svg"
                alt=""
                className="flex justify-centers mt-5"
              />
            </div>
            <div>
              <ul
                className={`left-0 h-[300px] z-[-1] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-2 pt-12 font-medium transition-[opacity,visibility] duration-500 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 rounded-xl lg:pt-0 lg:opacity-100 ${
                  isToggleOpen
                    ? "visible opacity-100 backdrop-blur-sm"
                    : "invisible opacity-0"
                }`}
              >
                <li className="flex items-stretch">
                  <a
                    role="menuitem"
                    aria-current="page"
                    aria-haspopup="false"
                    className="flex items-center gap-2 py-4  transition-colors duration-300 text-[#202B38] hover:text-[#1A5EFF] focus:text-[#1A5EFF] focus:outline-none focus-visible:outline-none lg:px-8"
                    href="javascript:void(0)"
                    onClick={toggleMenu}
                  >
                    Home
                  </a>
                </li>
                <li className="flex items-stretch">
                  <a
                    role="menuitem"
                    aria-current="page"
                    aria-haspopup="false"
                    className="flex items-center gap-2 py-4  transition-colors duration-300 text-[#202B38] hover:text-[#1A5EFF] focus:text-[#1A5EFF] focus:outline-none focus-visible:outline-none lg:px-8"
                    href="javascript:void(0)"
                    onClick={toggleMenu}
                  >
                    About us
                  </a>
                </li>
                <li className="flex items-stretch">
                  <a
                    role="menuitem"
                    aria-haspopup="false"
                    className="flex items-center gap-2 py-4 transition-colors duration-300 text-[#202B38] hover:text-[#1A5EFF] focus:text-[#1A5EFF] focus:outline-none focus-visible:outline-none lg:px-8"
                    href="javascript:void(0)"
                    onClick={toggleMenu}
                  >
                    Blog
                  </a>
                </li>
                <li className="flex mt-6 items-stretch">
                  <button
                    className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-[#1A5EFF] px-5 text-sm font-medium tracking-wide text-white shadow-md  shadow-emerald-200 transition hover:shadow-sm hover:shadow-emerald-200 hover:bg-[#00008B] focus:shadow-sm  focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none lg:px-8 duration-500"
                    onClick={toggleMenu}
                  >
                    <span>Get Started</span>
                  </button>
                </li>
              </ul>
            </div>
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                  : ""
              }`}
              onClick={toggleMenu}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute h-a top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
          </nav>
        </div>
      </header>
    </section>
  );
}

export default Header;
