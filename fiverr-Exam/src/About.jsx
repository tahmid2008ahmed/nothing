import Footer from "./Footer";

function About() {
  return (
    <>
      <div
        className="tracking-in-expand-fwd-top"
        style={{
          backgroundImage: `url("https://framerusercontent.com/images/BByKiThYR6TZVIEQlbwxH7IWUwY.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="tracking-in-expand-fwd-top flex justify-center">
          <h1 className=" inline-block p-2 rounded-2xl text-xl bg-white text-[#1A5EFF] font-semibold uppercase mt-3 mb-5 sm:mx-auto sm:text-center lg:text-left">
            about
          </h1>
        </div>
        <div className=" text-[#202b38]">
          <h1 className="header-h1 pt-8 pb-5 m-auto text-center font-semibold lg:w-[1000px] lg:text-[50px] md:text-[50px] md:w-[650px] sm:text-[40px] sm:w-[500px] xs:text-[50px] xs:w-[200px] xs:font-bold ">
            Share your <span className="text-[#1A5EFF]">mission </span>& company
            info
          </h1>

          <p
            className="m-auto text-center lg:w-[550px] lg:text-xl
             md:text-[16px] md:w-[450px] text[5px] w-[400px]"
          >
            We help you automate your workflows, automate repetitive tasks, and
            elevate your business.
          </p>

          <br />

          <div className="flex justify-center">
            <button
              className="bg-[#1A5EFF] lg:py-2 text-white rounded-full 
              px-8 py-2 text-[15px]
            hover:bg-[#00008B] duration-500 "
            >
              Book Your Free Audit Call
            </button>
          </div>
        </div>
      </div>
      <div className="hover:text-[#1A5EFF] cursor-pointer hover:gap-3 flex mt-3 gap-6 justify-center duration-500">
        <div>
          <div className="my-7 flex justify-center items-center avatar-group -space-x-6 rtl:space-x-reverse">
            <div className="avatar">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/sFJggTzla8eMLg8n1AbKDQlyulU.jpg"
                  className="w-full h-full object-cover"
                  alt="Avatar"
                />
              </div>
            </div>
            <div className="avatar">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/JhbGle453RWF0QjzZnSxbtxRBiA.jpg"
                  className="w-full h-full object-cover"
                  alt="Avatar"
                />
              </div>
            </div>
            <div className="avatar">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/hCsV8dkBKP9VEaaIlJr8Bk89bX4.jpg"
                  className="w-full h-full object-cover"
                  alt="Avatar"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-xl mt-6">
          <h1>200+ happy clients!</h1>
          <p className="text-[#597878]">Join them now →</p>
        </div>
      </div>

      <div>
        <img
          className="w-screen p-8 h-500px lg:h-[600px] rounded-[60px] lg:w-[1100px] lg:mx-auto"
          src="https://framerusercontent.com/images/Qo8S7gC1F1xofpCIdufDgpGYA.jpg?scale-down-to=2048"
          alt=""
        />
      </div>

      <section
        className="flex flex-col gap-4 lg:gap-0 lg:flex-row 
      lg:w-[1300px] lg:mx-auto mb-10"
      >
        <div className="tracking-in-expand-fwd-top">
          <div className="ml-10">
            <h1 className="inline-block p-2 rounded-2xl text-xl bg-white text-[#1A5EFF] font-semibold uppercase mt-3 mb-5 ">
              services
            </h1>
          </div>
          <h1 className="header-h1 pt-8 pb-5 font-semibold lg:w-[500px] lg:text-[45px] md:text-[50px] md:w-[650px] sm:text-[40px] sm:w-[500px] xs:text-[50px] xs:w-[200px] xs:font-bold ml-10">
            Workflows with our AI automation{" "}
            <span className="text-[#1A5EFF]">expertise </span>
          </h1>
          <div className="">
            <button
              className="bg-[#1A5EFF] lg:py-2 text-white rounded-full 
              px-8 py-2 text-[15px] ml-10
            hover:bg-[#00008B] duration-500 "
            >
              Book Your Free Audit Call
            </button>
          </div>
        </div>
        <div>
          <p className="tracking-in-expand-fwd-top text-[#597878] ml-10 lg:mt-[120px] text-[20px]">
            AI automation stands as the cornerstone of modern business
            evolution, leveraging artificial intelligence to revolutionize
            operational efficiency. Through intelligent algorithms and machine
            learning, organizations can reduce manual effort, minimize errors,
            and gain an unparalleled level of streamlined productivity. Beyond
            operational enhancements, AI automation offers a competitive
            advantage by ensuring 24/7 availability and providing data-driven
            insights for strategic decision-making. This transformative
            technology empowers businesses to thrive in a dynamic market,
            fostering adaptability and scalability while ushering in an era of
            unprecedented efficiency and agility.
          </p>
        </div>
      </section>

      <div>
        <div className="flex justify-center">
          <h1 className=" inline-block p-2 rounded-2xl text-xl bg-white text-[#1A5EFF] font-semibold uppercase mt-3 mb-5 sm:mx-auto sm:text-center lg:text-left">
            value
          </h1>
        </div>
        <h1 className="header-h1 pt-8 pb-5 m-auto text-center font-semibold lg:w-[700px] lg:text-[50px] md:text-[50px] md:w-[650px] sm:text-[40px] sm:w-[500px] xs:text-[50px] xs:w-[200px] xs:font-bold ">
          {" "}
          <span className="text-[#1A5EFF]">AI-powered </span>automation services
        </h1>
      </div>

      <section className="py-10 grid grid-cols-1 lg:grid-cols-3 gap-4 max-mx-5 lg:w-[1100px]  lg:mx-auto">
        <div className="gap-2 bg-white rounded-2xl flex flex-col w-[80%] mx-auto p-5">
          <img
            className="w-12 mx-auto h-12"
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSp2wCFASekQN_rEA96qBO5bn0o8C8dLBJlpiGzTBZc6F7TSxi0"
            alt=""
          />
          <h1 className="text-center text-black text-[23px]">
            Innovation First
          </h1>
          <p className="text-center text-[15px] text-[#597878]">
            Leading with AI-driven innovation for state-of-the-art automation
            solutions.
          </p>
        </div>

        <div className="gap-2 bg-white rounded-2xl flex flex-col w-[80%] mx-auto p-5">
          <img
            className="w-12 mx-auto h-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPGwbRpaVjk3ssZxBU4BGRyjDKam24tmFLXjfgwFrCblhAyYq"
            alt=""
          />
          <h1 className="text-center text-black text-[23px]">
            Precision Excellence
          </h1>
          <p className="text-center text-[15px] text-[#597878]">
            Delivering flawless accuracy through advanced AI technology.
          </p>
        </div>

        <div className="gap-2 bg-white rounded-2xl flex flex-col w-[80%] mx-auto p-5">
          <img
            className="w-12 mx-auto h-12"
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSo7K1e93ICuzz2lPPBPED__bMgJ3-TIpsCC9kRHpviM50aQ6nA"
            alt=""
          />
          <h1 className="text-center text-black text-[23px]">
            Client-Centric Approach
          </h1>
          <p className="text-center text-[15px] text-[#597878]">
            Client-Centric Approach
          </p>
        </div>
      </section>

      <section
        className=" max-w-[1100px] flex flex-col gap-4 lg:gap-0 lg:flex-row lg:w-[1300px]
        lg:mx-auto mb-10 lg:justify-between"
      >
        <div className="mx-10">
          <img
            className="rounded-2xl h-[700px] w-full"
            src="https://framerusercontent.com/images/lygJ8DsOtazpzWofIyzXhtSh4.jpg?scale-down-to=2048"
            alt=""
          />
        </div>

        <div className=" lg:max-w-[40%]">
          <h1 className="ml-10 inline-block p-2 rounded-2xl text-xl bg-white text-[#1A5EFF] font-semibold uppercase mt-3 mb-5 sm:text-center lg:text-left">
            content block
          </h1>
          <div className=" text-[#202b38]">
            <h1 className="header-h1 pt-8 pb-5 ml-10 font-semibold lg:w-[400px] lg:text-[35px] md:text-[45px] md:w-[650px] sm:text-[40px] sm:w-[500px] xs:text-[50px] xs:w-[200px] xs:font-bold ">
              AI-driven analytics for smarter decision-making
            </h1>

            <p
              className=" lg:w-[400px] lg:text-xl ml-10
             md:text-[16px] md:w-[450px] text[5px] w-[400px]"
            >
              AI automation redefines efficiency: minimize manual efforts,
              enhance precision, and stay ahead in a rapidly evolving market
              with advanced, adaptable solutions.
            </p>

            <br />
            <button
              className="bg-[#1A5EFF] ml-10 lg:py-2 text-white rounded-full 
              px-8 py-2 text-[15px]
            hover:bg-[#00008B] duration-500 "
            >
              Book Your Free Audit Call
            </button>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <h1 className=" inline-block p-2 rounded-2xl text-xl bg-white text-[#1A5EFF] font-semibold uppercase mt-3 mb-5 sm:mx-auto sm:text-center lg:text-left">
          our team
        </h1>
      </div>
      <br />
      <h2 className="md:text-[20px] lg:text-[30px] text-[20px] text-black text-center">
        Meet the team
      </h2>

      <section className="m-5 gap-10 grid grid-cols-1 lg:grid-cols-3 lg:w-[1300px] lg:mx-auto">
        <div>
          <img
            className="rounded-2xl bg-[#1A5EFF]"
            src="https://framerusercontent.com/images/DHBXpIMPYz718HQSmC8EuNdMWs.png?scale-down-to=2048"
            alt=""
          />
          <h1 className="text-[25px]">Person name</h1>
          <h1 className="text-[20px]">Position</h1>
        </div>

        <div>
          <img
            className="rounded-2xl bg-[#1A5EFF]"
            src="https://framerusercontent.com/images/2OWiRS4gF7YRyMgkUmDFQZ3zU7w.png?scale-down-to=2048"
            alt=""
          />
          <h1 className="text-[25px]">Person name</h1>
          <h1 className="text-[20px]">Position</h1>
        </div>

        <div>
          <img
            className="rounded-2xl bg-[#1A5EFF] "
            src="https://framerusercontent.com/images/A4CUgQu98tZzIZAVJTP9cQpWyo.png?scale-down-to=2048"
            alt=""
          />
          <h1 className="text-[25px]">Person name</h1>
          <h1 className="text-[20px]">Position</h1>
        </div>
      </section>

      <section className="AboutUp mb-10 ml-5 flex flex-col lg:flex-row lg:w-[1400px] lg:mx-auto lg:justify-around">
        <div className="">
          <img
            className="p-10 rounded-[50px] max-w-[95%] sm:mx-auto lg:mx-0"
            src="https://framerusercontent.com/images/GE1vHAv9NlgFtmyw1WPO1Fsrw28.jpg?scale-down-to=2048"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-3">
          <div className="mt-5 lg:mt-0">
            <div>
              <h1 className="inline-block p-2 rounded-2xl text-xl bg-white text-[#1A5EFF] font-semibold uppercase mt-3 mb-5 sm:mx-auto sm:text-center lg:text-left">
                content block
              </h1>
            </div>
            <div>
              <h1 className="text-[30px] font-semibold mb-4">
                Harnessing AI for business success
              </h1>
            </div>
            <div className="flex md:flex-col lg:flex-row sm:flex-col border rounded-xl p-3 lg:justify-between hover:bg-[#1A5EFF] duration-500 hover:text-white">
              <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSZ5jHK605iVhXzqBvytvLiysyZwS_hBGSz29s4o6lI5FX4BViU"
                alt=""
                className="w-12 h-12 mr-5 my-auto"
              />
              <h1 className="text-2xl pt-1 pr-2">
                Boost efficiency and cut costs with AI-powered automation
              </h1>
              <div className="text-black border-black rounded-[50%] my-auto">
                →
              </div>
            </div>
          </div>

          <div className="mt-5 lg:mt-0">
            <div className="flex md:flex-col lg:flex-row sm:flex-col border rounded-xl p-3 lg:justify-between hover:bg-[#1A5EFF] duration-500 hover:text-white">
              <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSZ5jHK605iVhXzqBvytvLiysyZwS_hBGSz29s4o6lI5FX4BViU"
                alt=""
                className="w-12 h-12 mr-5 my-auto"
              />
              <h1 className="text-2xl pt-1 pr-2">
                Optimize operations, minimize error and save resources
              </h1>
              <div className="text-black border-black rounded-[50%] my-auto">
                →
              </div>
            </div>
          </div>
          <div>
            <p className="text-xl p-2 text-[#525B5B]">
              “Couldn’t be happier with the work the guys from XYZ Agency did
              for us. Made sales 10x more efficient.”
            </p>
            <div className="flex flex-row gap-3">
              <div>
                <img
                  className="w-16 h-16 rounded-[50%]"
                  src="https://framerusercontent.com/images/G3MEsoXQjALKfj8Ya1mIWgFMuc.jpg?scale-down-to=1024"
                  alt=""
                />
              </div>
              <div>
                <p className="text-black">William James</p>
                <p className="text-xl p-2 text-[#525B5B]">CEO, XYZ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <h1 className=" inline-block p-2 rounded-2xl text-xl bg-white text-[#1A5EFF] font-semibold uppercase mt-3 mb-5 sm:mx-auto sm:text-center lg:text-left">
          faq
        </h1>
      </div>

      <h1 className="header-h1 pt-8 pb-5 my-5 m-auto text-center font-semibold lg:w-[900px] lg:text-[60px] md:text-[50px] md:w-[650px] sm:text-[40px] sm:w-[600px] xs:text-[50px] xs:w-[200px] xs:font-bold ">
        You’ve got questions, we’ve got{" "}
        <span className="text-[#1A5EFF]">answers</span>
      </h1>

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

export default About;
