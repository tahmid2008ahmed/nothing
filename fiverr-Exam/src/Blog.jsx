import Footer from "./Footer";

function Blog() {
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
        <div className="flex justify-center">
          <h1 className=" inline-block p-2 rounded-2xl text-xl bg-white text-[#1A5EFF] font-semibold uppercase mt-1 mb-2">
            blog
          </h1>
        </div>
        <h1 className="header-h1 pt-8 pb-5 m-auto text-center font-semibold lg:w-[900px] lg:text-[60px] md:text-[50px] md:w-[650px] sm:text-[40px] sm:w-[500px] xs:text-[50px] xs:w-[200px] xs:font-bold ">
          AI Automation Insights
        </h1>
        <p
          className=" text-[#202b38] m-auto text-center lg:w-[550px] lg:text-xl
             md:text-[16px] md:w-[450px] text[5px] w-[400px]"
        >
          We help you automate your workflows, automate repetitive tasks, and
          elevate your business.
        </p>
      </section>

      <section
        className="grid sm:grid-cols-1 gap-0 lg:w-[1300px] mx-auto md:grid-cols-2 md:w-full sm:w-full
      lg:grid-cols-3"
      >
        <div className="rounded-2xl flex flex-col p-4">
          <img
            className="rounded-2xl"
            src="https://framerusercontent.com/images/a9kszqtjLOJmcyP3UlNViQxIhAI.jpg?scale-down-to=1024"
            alt=""
          />
          <div className="flex flex-row justify-between">
            <h1 className="mt-2 inline-block p-2 rounded-2xl text-xl bg-white text-[#1A5EFF] font-semibold uppercase mb-2">
              category
            </h1>
            <h1 className="mt-4">Apr 8, 2022</h1>
          </div>
          <h1 className="text-[20px]">
            Starting and Growing a Career in Web Design
          </h1>
          <h1 className="text-[#202b38]">Author name</h1>
        </div>

        <div className="rounded-2xl flex flex-col p-4">
          <img
            className="rounded-2xl h-[38%]"
            src="https://framerusercontent.com/images/vY8JHhzceEyIzNbNxrClkr4tOg.jpg?scale-down-to=2048"
            alt=""
          />
          <div className="flex flex-row justify-between">
            <h1 className="mt-2 inline-block p-2 rounded-2xl text-xl bg-white text-[#1A5EFF] font-semibold uppercase mb-2">
              category
            </h1>
            <h1 className="mt-4">Mar 15, 2022</h1>
          </div>
          <h1 className="text-[20px]">
            Create a Landing Page That Performs Great
          </h1>
          <h1 className="text-[#202b38]">Author name</h1>
        </div>

        <div className="mb-[0px] mt-[-350px] rounded-2xl md:my-[-350px] lg:my-0 flex flex-col p-4">
          <img
            className="rounded-2xl max-w-450px"
            src="https://framerusercontent.com/images/3kIUUl5ua43g4Am9nyWtviswMqg.jpg?scale-down-to=1024"
            alt=""
          />
          <div className="flex flex-row justify-between">
            <h1 className="mt-2 inline-block p-2 rounded-2xl text-xl bg-white text-[#1A5EFF] font-semibold uppercase mb-2">
              category
            </h1>
            <h1 className="mt-4">Feb 28, 2022</h1>
          </div>
          <h1 className="text-[20px]">
            How Can Designers Prepare for the Future?{" "}
          </h1>
          <h1 className="text-[#202b38]">Author name</h1>
        </div>

        <div className="lg:mt-[-270px] rounded-2xl lg:my-0 md:my-[-350px] flex flex-col p-4">
          <img
            className="rounded-2xl h-[44%] "
            src="https://framerusercontent.com/images/RNjUzAmnTiZfbA4yyviRdsdDM.jpg?scale-down-to=1024"
            alt=""
          />
          <div className="flex flex-row justify-between">
            <h1 className="mt-2 inline-block p-2 rounded-2xl text-xl bg-white text-[#1A5EFF] font-semibold uppercase mb-2">
              category
            </h1>
            <h1 className="mt-4">Feb 6, 2022</h1>
          </div>
          <h1 className="text-[20px]">
            Building a Navigation Component with Variables
          </h1>
          <h1 className="text-[#202b38]">Author name</h1>
        </div>

        <div className="rounded-2xl mt-[-280px]  lg:mt-[-270px] md:my-[100px] flex flex-col p-4">
          <img
            className="rounded-2xl max-w-450px"
            src="https://framerusercontent.com/images/iRNwzqgPeq8VauJVBKPvu1sAhVM.jpg?scale-down-to=1024"
            alt=""
          />
          <div className="flex flex-row justify-between">
            <h1 className="mt-2 inline-block p-2 rounded-2xl text-xl bg-white text-[#1A5EFF] font-semibold uppercase mb-2">
              category
            </h1>
            <h1 className="mt-4">Jan 12, 2022</h1>
          </div>
          <h1 className="text-[20px]">
            How to Create an Effective Design Portfolio
          </h1>
          <h1 className="text-[#202b38]">Author name</h1>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Blog;
