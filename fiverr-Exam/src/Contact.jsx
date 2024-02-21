import Footer from "./Footer";

function Contact() {
  return (
    <>
      <section
        style={{
          backgroundImage: `url("https://framerusercontent.com/images/BByKiThYR6TZVIEQlbwxH7IWUwY.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section
          className="flex gap-4 flex-col lg:flex-row lg:justify-between lg:w-[1300px]
        lg:mx-auto"
        >
          <div>
            <div>
              <h1 className="ml-5 inline-block p-2 rounded-2xl text-xl bg-white text-[#1A5EFF] font-semibold uppercase mt-1 mb-1">
                contact
              </h1>

              <h1 className="ml-5 header-h1 pt-8 pb-5 font-semibold lg:w-[900px] lg:text-[50px] md:text-[50px] md:w-[650px] sm:text-[40px] sm:w-[500px] xs:text-[50px] xs:w-[200px] xs:font-bold ">
                Get in Touch
              </h1>
              <p
                className="ml-5 text-[#202b38] lg:w-[550px] lg:text-xl
             md:text-[16px] md:w-[450px] text[5px] mb-4 w-[400px]"
              >
                We help you automate your workflows, automate repetitive tasks,
                and elevate your business.
              </p>
            </div>
            <div className="flex gap-5">
              <img
                className=" ml-5 w-8 h-9"
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQsZuI0SRUi8GHufUpOE0AE6n9xD2KQjxb261GmE_v5XNh07Dds"
                alt=""
              />
              <h1 className="text-xl mt-[-4px]">Our office</h1>
            </div>
            <p className="text-[#202b38] ml-[70px] mb-5  w-[300px]">
              1875 NewTown Ave 10th Floor, AW, Washington, District of America
            </p>

            <div className="flex gap-5">
              <img
                className=" ml-4 w-10 h-9"
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSk9QYvgMbZCx6rjmlX251VKYgZlNOh9Unm7HXvFU89ZQHtASL4"
                alt=""
              />
              <h1 className="text-xl mt-[-4px]">Our office</h1>
            </div>
            <p className="text-[#202b38] ml-[70px] mt-2 w-[300px]">
              1875 NewTown Ave 10th Floor, AW, Washington, District of America
            </p>
          </div>

          <div className="ml-5 bg-white w-[90%] my-10 rounded-2xl p-10">
            <img
              className="mb-5"
              src="https://framerusercontent.com/images/WvIxk2OsDPSdCdejZp7vMsFKbs.svg"
              alt=""
            />
            <input
              type="text"
              required
              placeholder="Name"
              className="w-full my-2 border-black p-2 rounded-2xl"
            />
            <input
              type="email"
              required
              placeholder="Email"
              className="w-full my-2 p-2 border-black rounded-2xl"
            />
            <input
              type="text"
              required
              placeholder="Message"
              className="w-full p-2 border-black rounded-2xl h-[100px]"
            />
            <button className="rounded-2xl p-2 text-white bg-blue-600 hover:bg-blue-400 w-full my-4 duration-500">
              Submit
            </button>
          </div>
        </section>
      </section>

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

      <Footer />
    </>
  );
}

export default Contact;
