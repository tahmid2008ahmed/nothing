import { useState } from "react";

function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <>
      <div className="flex justify-center">
        <h1 className="mx-auto inline-block p-2 py-3 my-10 rounded-2xl text-xl bg-white text-[#1A5EFF] font-semibold text-center uppercase">
          Pricing
        </h1>
      </div>

      <h1 className="text-[35px] text-center">Plans to Fit Your Business</h1>
      <div
        className="mx-auto flex items-center justify-center w-80 bg-gray-200 rounded-full px-1 my-5"
        style={{ maxWidth: "200px" }}
      >
        <span
          className={`cursor-pointer flex-grow text-center ${
            isMonthly ? "text-blue-500" : "text-gray-500"
          }`}
          onClick={handleToggle}
        >
          Monthly
        </span>
        <div className="w-1 bg-gray-400"></div>
        <span
          className={`cursor-pointer flex-grow text-center ${
            !isMonthly ? "text-blue-500" : "text-gray-500"
          }`}
          onClick={handleToggle}
        >
          Yearly
        </span>
      </div>

      <div className="text-[#525B5B] p-1 grid lg:grid-cols-3 md:grid-cols-2 md:mx-0 mx-auto grid-cols-1 ">
        <div className="bg-white p-1 sm:mx-auto  w-[320px] rounded-2xl mb-10 ">
          <div className="bg-[#F6F6F7] p-5 rounded-2xl">
            <h1 className="text-[25px]">Hobby</h1>
            <h1 className="text-[70px]">$199/m</h1>
            <p className="text-[20px] text-black">Price breakdown here</p>
            <button
              className="bg-[#1A5EFF] lg:py-2 text-white rounded-full 
               px-8 py-2 text-[15px] my-5 w-full
             hover:bg-[#00008B] duration-500 "
            >
              Get Started
            </button>
          </div>

          <div>
            <div
              className="flex
            "
            >
              <img
                className="w-16 h-16"
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTE3jzAdvRlQzlfzwdgrx-lCByqANtaUhv74JzqqpsBG8q_QCER"
                alt=""
              />
              <h1 className="mt-4 text-xl">Feature here</h1>
            </div>
            <div
              className="flex mt-[-20px]
            "
            >
              <img
                className="w-16 h-16 "
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTE3jzAdvRlQzlfzwdgrx-lCByqANtaUhv74JzqqpsBG8q_QCER"
                alt=""
              />
              <h1 className="mt-4 text-xl">Feature here</h1>
            </div>
            <div
              className="flex mt-[-20px]
            "
            >
              <img
                className="w-16 h-16"
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTE3jzAdvRlQzlfzwdgrx-lCByqANtaUhv74JzqqpsBG8q_QCER"
                alt=""
              />
              <h1 className="mt-4 text-xl">Feature here</h1>
            </div>
            <div
              className="flex mt-[-20px]
            "
            >
              <img
                className="w-16 h-16"
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTE3jzAdvRlQzlfzwdgrx-lCByqANtaUhv74JzqqpsBG8q_QCER"
                alt=""
              />
              <h1 className="mt-4 text-xl">Feature here</h1>
            </div>
            <div>
              {/*<!-- Component: Basic accordion --> */}
              <section className="bg-[#F6F6F7] w-full divide-y rounded-2xl divide-slate-200 ">
                <details className="p-4 group" open>
                  <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                    Optional add-ons
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-labelledby="title-ac01 desc-ac01"
                    >
                      <title id="title-ac01">Open icon</title>
                      <desc id="desc-ac01">
                        icon that represents the state of the summary
                      </desc>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </summary>
                  <p className="mt-4 text-[#525B5B] ">
                    <p>Placeholder -$400/yr</p>
                    <p>Placeholder -$400/yr</p>
                    <p>Placeholder -$400/yr</p>
                  </p>
                </details>
              </section>
              {/*<!-- End Basic accordion --> */}
            </div>
          </div>
        </div>

        <div className="bg-white p-1 sm:mx-auto w-[320px] rounded-2xl mb-10">
          <div className="bg-[#F6F6F7] p-5 rounded-2xl">
            <h1 className="text-[25px]">Pro</h1>
            <h1 className="text-[70px]">$599/m</h1>
            <p className="text-[20px] text-black">Price breakdown here</p>
            <button
              className="bg-[#1A5EFF] lg:py-2 text-white rounded-full 
               px-8 py-2 text-[15px] my-5 w-full
             hover:bg-[#00008B] duration-500 "
            >
              Get Started
            </button>
          </div>

          <div>
            <div
              className="flex
            "
            >
              <img
                className="w-16 h-16"
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTE3jzAdvRlQzlfzwdgrx-lCByqANtaUhv74JzqqpsBG8q_QCER"
                alt=""
              />
              <h1 className="mt-4 text-xl">Feature here</h1>
            </div>
            <div
              className="flex mt-[-20px]
            "
            >
              <img
                className="w-16 h-16 "
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTE3jzAdvRlQzlfzwdgrx-lCByqANtaUhv74JzqqpsBG8q_QCER"
                alt=""
              />
              <h1 className="mt-4 text-xl">Feature here</h1>
            </div>
            <div
              className="flex mt-[-20px]
            "
            >
              <img
                className="w-16 h-16"
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTE3jzAdvRlQzlfzwdgrx-lCByqANtaUhv74JzqqpsBG8q_QCER"
                alt=""
              />
              <h1 className="mt-4 text-xl">Feature here</h1>
            </div>
            <div
              className="flex mt-[-20px]
            "
            >
              <img
                className="w-16 h-16"
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTE3jzAdvRlQzlfzwdgrx-lCByqANtaUhv74JzqqpsBG8q_QCER"
                alt=""
              />
              <h1 className="mt-4 text-xl">Feature here</h1>
            </div>
            <div>
              {/*<!-- Component: Basic accordion --> */}
              <section className="bg-[#F6F6F7] w-full divide-y rounded-2xl divide-slate-200 ">
                <details className="p-4 group" open>
                  <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                    Optional add-ons
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-labelledby="title-ac01 desc-ac01"
                    >
                      <title id="title-ac01">Open icon</title>
                      <desc id="desc-ac01">
                        icon that represents the state of the summary
                      </desc>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </summary>
                  <p className="mt-4 text-[#525B5B] ">
                    <p>Placeholder -$400/yr</p>
                    <p>Placeholder -$400/yr</p>
                    <p>Placeholder -$400/yr</p>
                  </p>
                </details>
              </section>
              {/*<!-- End Basic accordion --> */}
            </div>
          </div>
        </div>

        <div className="bg-white p-1 sm:mx-auto w-[320px] rounded-2xl mb-10">
          <div className="bg-[#F6F6F7] p-5 rounded-2xl">
            <h1 className="text-[25px]">Premium</h1>
            <h1 className="text-[70px]">$499/m</h1>
            <p className="text-[20px] text-black">Price breakdown here</p>
            <button
              className="bg-[#1A5EFF] lg:py-2 text-white rounded-full 
               px-8 py-2 text-[15px] my-5 w-full
             hover:bg-[#00008B] duration-500 "
            >
              Get Started
            </button>
          </div>

          <div>
            <div
              className="flex
            "
            >
              <img
                className="w-16 h-16"
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTE3jzAdvRlQzlfzwdgrx-lCByqANtaUhv74JzqqpsBG8q_QCER"
                alt=""
              />
              <h1 className="mt-4 text-xl">Feature here</h1>
            </div>
            <div
              className="flex mt-[-20px]
            "
            >
              <img
                className="w-16 h-16 "
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTE3jzAdvRlQzlfzwdgrx-lCByqANtaUhv74JzqqpsBG8q_QCER"
                alt=""
              />
              <h1 className="mt-4 text-xl">Feature here</h1>
            </div>
            <div
              className="flex mt-[-20px]
            "
            >
              <img
                className="w-16 h-16"
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTE3jzAdvRlQzlfzwdgrx-lCByqANtaUhv74JzqqpsBG8q_QCER"
                alt=""
              />
              <h1 className="mt-4 text-xl">Feature here</h1>
            </div>
            <div
              className="flex mt-[-20px]
            "
            >
              <img
                className="w-16 h-16"
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTE3jzAdvRlQzlfzwdgrx-lCByqANtaUhv74JzqqpsBG8q_QCER"
                alt=""
              />
              <h1 className="mt-4 text-xl">Feature here</h1>
            </div>
            <div>
              {/*<!-- Component: Basic accordion --> */}
              <section className="bg-[#F6F6F7] w-full divide-y rounded-2xl divide-slate-200 ">
                <details className="p-4 group" open>
                  <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                    Optional add-ons
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-labelledby="title-ac01 desc-ac01"
                    >
                      <title id="title-ac01">Open icon</title>
                      <desc id="desc-ac01">
                        icon that represents the state of the summary
                      </desc>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </summary>
                  <p className="mt-4 text-[#525B5B] ">
                    <p>Placeholder -$400/yr</p>
                    <p>Placeholder -$400/yr</p>
                    <p>Placeholder -$400/yr</p>
                  </p>
                </details>
              </section>
              {/*<!-- End Basic accordion --> */}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <h1 className="mx-auto inline-block p-2 py-3 my-10 rounded-2xl text-xl bg-white text-[#1A5EFF] font-semibold text-center uppercase">
          faq
        </h1>
      </div>

      <div className="text-center mb-10 text-[30px] font-semibold">
        You’ve got questions, we’ve got
        <span className="text-[#1A5EFF]"> answers</span>
      </div>

      <section className="mb-10 max-w-[1100px] mx-auto">
        {/*<!-- Component: Basic accordion --> */}
        <section className="w-full divide-y rounded divide-slate-200 ">
          <details className="p-4 group" open>
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              How can I tell if using AI is the right solution for my problem?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac01 desc-ac01"
              >
                <title id="title-ac01">Open icon</title>
                <desc id="desc-ac01">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-slate-500">
              Figuring out which process to enhance using AI can be tricky for
              business people. If you have a business problem where you feel
              that the solution might be hidden in data and can not be solved
              with simple rules, AI could be the answer. To define an AI use
              case, you will need the help of an AI team, the person who knows
              the most about the issue (the problem owner), and technical
              specialists who understand how to deal with the problem in the
              technical world.
            </p>
          </details>
          <details className="p-4 group">
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              How long does an AI solution take to implement
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac02 desc-ac02"
              >
                <title id="title-ac02">Open icon</title>
                <desc id="desc-ac02">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-slate-500">
              Using AI involves a series of steps: collecting data, labeling it,
              developing and training the model, testing and evaluating it, and
              finally deploying the solution. At the beginning, data collection
              and labeling take 20-50% of the time (higher % for smaller or
              standard projects). The rest of the time is spent on model
              development, testing, and deployment, which depends on how unique
              the problem is, the performance level required, and the complexity
              of deployment. AI projects can last anywhere from 3 months to
              several years, depending on the size and collaboration needed.
            </p>
          </details>
          <details className="p-4 group">
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              Will we need to make changes in our teams?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac03 desc-ac03"
              >
                <title id="title-ac03">Open icon</title>
                <desc id="desc-ac03">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-slate-500">
              No, you do not have to fire employees. AI and automation are only
              there to help humans to be able to focus on the most important
              tasks by automating time-consuming and repetitive tasks. In the
              long run, process automation will make your teams happier and
              improves their performance. All you need to do is sit back, let
              the automation run the repetitive tasks, and focus on strategic
              tasks that only humans can do. With our experience running AI
              projects, we know how frustrating it is for company teams to
              integrate innovative AI &amp; automation solutions into their
              daily routines. With our approach, we not only implement an
              automation solution but also help you to realize the Future of
              Work with all the freedom that it brings.
            </p>
          </details>
        </section>
        {/*<!-- End Basic accordion --> */}
      </section>
    </>
  );
}

export default Pricing;
