import { useEffect } from "react";
import Glide from "@glidejs/glide";
function Infinite() {
  useEffect(() => {
    const slider = new Glide(".glide-06", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);
  return (
    <>
      {/*<!-- Component: Card Carousel --> */}
      <div className="my-10 glide-06 relative w-full lg:w-[1300px] overflow-hidden rounded bg-white shadow-xl shadow-slate-200 lg:mx-auto">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden gap-5 p-0 ">
            <li>
              <div className="bg-white p-5 rounded-2xl">
                <div className="flex flex-row gap-3 my-5 ">
                  <div>
                    <img
                      className="w-16 h-16 rounded-[50%]"
                      src="https://framerusercontent.com/images/LsJGvkbYbF1y4ifkFrjeNfRfzYM.jpg?scale-down-to=1024"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-xl text-black">Jane Lewis</p>
                    <p className="text-xl text-[#525B5B]">Marketing Director</p>
                  </div>
                </div>
                <p>
                  We approached Wize for an internal chatbot that is trained on
                  all of our sales data, and the results are amazing!
                </p>
                <div className="flex items-center gap-1 mt-3">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6 text-yellow-400"
                    >
                      <path d="M12 2c.317 0 .597.191.716.484L14.75 8h5.529a.75.75 0 01.65 1.1l-4.006 6.962 1.39 8.477a.75.75 0 01-.097.578.75.75 0 01-.651.363H9.135a.75.75 0 01-.652-1.112l1.39-8.476L7.62 9.101A.75.75 0 017 8h5.028l2.034-5.516A.75.75 0 0112 2zm0 2.445L10.76 7.805a.75.75 0 01-.574.395l-4.377.525 3.174 2.836a.75.75 0 01.24.743l-.748 4.558 3.907-6.81a.75.75 0 01.672-.402l4.868-.007-3.485-3.124a.75.75 0 01-.237-.742L12 4.445zm0 15.11l-3.573-2.859a.75.75 0 01-.196-1.053l2.568-3.553-3.388-.046a.75.75 0 01-.556-.256L5.43 9.882 9.372 10.5a.75.75 0 01.553.356l2.167 3.87 2.167-3.87a.75.75 0 01.553-.356l3.943-.622-3.247 4.486a.75.75 0 01-.192.167L12 19.554z" />
                    </svg>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className="bg-white p-5 rounded-2xl ">
                  <div className="flex flex-row gap-3 my-5">
                    <div>
                      <img
                        className="w-16 h-16 rounded-[50%]"
                        src="https://framerusercontent.com/images/LsJGvkbYbF1y4ifkFrjeNfRfzYM.jpg?scale-down-to=1024"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-xl text-black">Elish Lewis</p>
                      <p className="text-xl text-[#525B5B]">
                        Marketing Director
                      </p>
                    </div>
                  </div>
                  <p>
                    We approached Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Veniam necessitatibus corporis maiores
                    aspernatur commodi laudantium nobis ea dolorem voluptatem
                    neque. amazing!
                  </p>
                  <div className="flex items-center gap-1 mt-3">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6 text-yellow-400"
                      >
                        <path d="M12 2c.317 0 .597.191.716.484L14.75 8h5.529a.75.75 0 01.65 1.1l-4.006 6.962 1.39 8.477a.75.75 0 01-.097.578.75.75 0 01-.651.363H9.135a.75.75 0 01-.652-1.112l1.39-8.476L7.62 9.101A.75.75 0 017 8h5.028l2.034-5.516A.75.75 0 0112 2zm0 2.445L10.76 7.805a.75.75 0 01-.574.395l-4.377.525 3.174 2.836a.75.75 0 01.24.743l-.748 4.558 3.907-6.81a.75.75 0 01.672-.402l4.868-.007-3.485-3.124a.75.75 0 01-.237-.742L12 4.445zm0 15.11l-3.573-2.859a.75.75 0 01-.196-1.053l2.568-3.553-3.388-.046a.75.75 0 01-.556-.256L5.43 9.882 9.372 10.5a.75.75 0 01.553.356l2.167 3.87 2.167-3.87a.75.75 0 01.553-.356l3.943-.622-3.247 4.486a.75.75 0 01-.192.167L12 19.554z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className="bg-white p-5 rounded-2xl">
                  <div className="flex flex-row gap-3 my-5">
                    <div>
                      <img
                        className="w-16 h-16 rounded-[50%]"
                        src="https://framerusercontent.com/images/LsJGvkbYbF1y4ifkFrjeNfRfzYM.jpg?scale-down-to=1024"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-xl text-black">Onnie </p>
                      <p className="text-xl text-[#525B5B]">
                        Marketing Director
                      </p>
                    </div>
                  </div>
                  <p>
                    We approached Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Eaque dolore molestias perferendis earum
                    distinctio laudantium exercitationem nam facilis enim et?
                    pariatur. amazing!
                  </p>
                  <div className="flex items-center gap-1 mt-3">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6 text-yellow-400"
                      >
                        <path d="M12 2c.317 0 .597.191.716.484L14.75 8h5.529a.75.75 0 01.65 1.1l-4.006 6.962 1.39 8.477a.75.75 0 01-.097.578.75.75 0 01-.651.363H9.135a.75.75 0 01-.652-1.112l1.39-8.476L7.62 9.101A.75.75 0 017 8h5.028l2.034-5.516A.75.75 0 0112 2zm0 2.445L10.76 7.805a.75.75 0 01-.574.395l-4.377.525 3.174 2.836a.75.75 0 01.24.743l-.748 4.558 3.907-6.81a.75.75 0 01.672-.402l4.868-.007-3.485-3.124a.75.75 0 01-.237-.742L12 4.445zm0 15.11l-3.573-2.859a.75.75 0 01-.196-1.053l2.568-3.553-3.388-.046a.75.75 0 01-.556-.256L5.43 9.882 9.372 10.5a.75.75 0 01.553.356l2.167 3.87 2.167-3.87a.75.75 0 01.553-.356l3.943-.622-3.247 4.486a.75.75 0 01-.192.167L12 19.554z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className="bg-white p-5 rounded-2xl">
                  <div className="flex flex-row gap-3 my-5">
                    <div>
                      <img
                        className="w-16 h-16 rounded-[50%]"
                        src="https://framerusercontent.com/images/LsJGvkbYbF1y4ifkFrjeNfRfzYM.jpg?scale-down-to=1024"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-xl text-black">jane onnis </p>
                      <p className="text-xl text-[#525B5B]">
                        Marketing Director
                      </p>
                    </div>
                  </div>
                  <p>
                    We approached Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Eaque dolore molestias perferendis earum
                    distinctio laudantium exercitationem nam facilis enim et?
                    pariatur. amazing!
                  </p>
                  <div className="flex items-center gap-1 mt-3">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6 text-yellow-400"
                      >
                        <path d="M12 2c.317 0 .597.191.716.484L14.75 8h5.529a.75.75 0 01.65 1.1l-4.006 6.962 1.39 8.477a.75.75 0 01-.097.578.75.75 0 01-.651.363H9.135a.75.75 0 01-.652-1.112l1.39-8.476L7.62 9.101A.75.75 0 017 8h5.028l2.034-5.516A.75.75 0 0112 2zm0 2.445L10.76 7.805a.75.75 0 01-.574.395l-4.377.525 3.174 2.836a.75.75 0 01.24.743l-.748 4.558 3.907-6.81a.75.75 0 01.672-.402l4.868-.007-3.485-3.124a.75.75 0 01-.237-.742L12 4.445zm0 15.11l-3.573-2.859a.75.75 0 01-.196-1.053l2.568-3.553-3.388-.046a.75.75 0 01-.556-.256L5.43 9.882 9.372 10.5a.75.75 0 01.553.356l2.167 3.87 2.167-3.87a.75.75 0 01.553-.356l3.943-.622-3.247 4.486a.75.75 0 01-.192.167L12 19.554z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="absolute bottom-0 flex w-full items-center justify-center gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="group p-4"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
        </div>
      </div>
      {/*<!-- End Card Carousel --> */}

      <section className="flex flex-col lg:flex-row p-3 lg:justify-around">
        <div>
          <h1 className="inline-block p-2 rounded-2xl text-xl bg-white text-[#1A5EFF] font-semibold uppercase mt-3 mb-5 sm:mx-auto sm:text-center lg:text-left">
            process
          </h1>
          <p className="text-[#525B5B] lg:w-[300px]">
            Unleash the power of AI automation to transform routine processes,
            ensuring precision, 24/7 availability, and significant cost savings.
          </p>
          <button
            className="bg-[#1A5EFF] lg:py-2 text-white rounded-full 
               px-8 py-2 text-[15px] my-5 
             hover:bg-[#00008B] duration-500 "
          >
            Book Your Free Audit Call
          </button>
        </div>

        <div className="flex flex-col p-1 gap-3">
          <div className=" bg-white rounded-2xl p-3">
            <div>
              <h1 className="text-[#1A5EFF] text-[30px] mb-3">01</h1>
              <h1 className="mb-3 text-black text-[25px]">
                Book a discovery call
              </h1>
              <p className="mb-3 text-[#525B5B] text-[20px]">
                Book your free discovery call by clicking one of the buttons on
                this page.
              </p>
            </div>
            <div className="flex flex-row gap-4 hover:gap-2 duration-500 cursor-pointer">
              <div className="text-xl text-[#1A5EFF]">Learn more</div>
              <div className="text-2xl bg-[#E3E7FF] px-2 rounded-full justify-center text-[#1A5EFF]">
                →
              </div>
            </div>
          </div>

          <div className=" bg-white rounded-2xl p-3">
            <div>
              <h1 className="text-[#1A5EFF] text-[30px] mb-3">02</h1>
              <h1 className="mb-3 text-black text-[25px]">
                Get a personal growth strategy
              </h1>
              <p className="mb-3 text-[#525B5B] text-[20px]">
                On this call, we'll assess your business and start working on
                your personal growth strategy.
              </p>
            </div>
            <div className="flex flex-row gap-4 hover:gap-2 duration-500 cursor-pointer">
              <div className="text-xl text-[#1A5EFF]">Learn more</div>
              <div className="text-2xl bg-[#E3E7FF] px-2 rounded-full justify-center text-[#1A5EFF]">
                →
              </div>
            </div>
          </div>

          <div className=" bg-white rounded-2xl p-3">
            <div>
              <h1 className="text-[#1A5EFF] text-[30px] mb-3">03</h1>
              <h1 className="mb-3 text-black text-[25px]">Onboarding</h1>
              <p className="mb-3 text-[#525B5B] text-[20px]">
                After the strategy is complete, we will onboard you onto our
                softwares to ensure a smooth process.
              </p>
            </div>
            <div className="flex flex-row gap-4 hover:gap-2 duration-500 cursor-pointer">
              <div className="text-xl text-[#1A5EFF]">Learn more</div>
              <div className="text-2xl bg-[#E3E7FF] px-2 rounded-full justify-center text-[#1A5EFF]">
                →
              </div>
            </div>
          </div>

          <div className=" bg-white rounded-2xl p-3">
            <div>
              <h1 className="text-[#1A5EFF] text-[30px] mb-3">04</h1>
              <h1 className="mb-3 text-black text-[25px]">
                Implementation & results
              </h1>
              <p className="mb-3 text-[#525B5B] text-[20px]">
                And finally, we get to implementing the growth strategy and
                working to see results.
              </p>
            </div>
            <div className="flex flex-row gap-4 hover:gap-2 duration-500 cursor-pointer">
              <div className="text-xl text-[#1A5EFF]">Learn more</div>
              <div className="text-2xl bg-[#E3E7FF] px-2 rounded-full justify-center text-[#1A5EFF]">
                →
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Infinite;
