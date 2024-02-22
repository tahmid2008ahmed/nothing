import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <section
        className="scale-in-center h-[600px] max-w-[1100px] mx-auto p-3 rounded-2xl text-white my-15 bg-[#202B38] relative"
        style={{
          backgroundImage:
            "url(https://framerusercontent.com/images/JZuLriJ7TC7r3vitihu47GM.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-center">
          <h1 className="inline-block my-10 p-2 text-center rounded-2xl text-xl bg-[#1A5EFF] text-white font-semibold uppercase">
            Testimonials
          </h1>
        </div>
        <h1 className="mb-4 text-center text-[30px]">
          Ready to <span className="text-[#1A5EFF]">Get Started?</span>
        </h1>
        <p className="text-center max-w-[500px] mx-auto">
          Experience the future of business operations with AI
          automation—increased speed, accuracy, and adaptability, driving
          overall productivity gains.
        </p>

        <div className="flex justify-center">
          <button
            className="bg-[#1A5EFF] lg:py-2 text-white rounded-full 
               px-8 py-2 text-[15px] my-10
             hover:bg-[#202B38] duration-500 "
          >
            <Link to="/contact">Book Your Free Audit Call</Link>
          </button>
        </div>

        <div>
          <img
            src="https://framerusercontent.com/images/33ctg4SZtD9gAAbetHuuLUj6TE.png"
            alt=""
            className="flex mx-auto pt-[45px] w-[100px]"
          />
          <p className="text-center pt-3">
            Build a powerful agency site with Framer
          </p>
        </div>

        <div className="flex mt-10 mx-auto w-[300px] justify-around pb-[50px]">
          <a className="hover:text-[#1A5EFF] duration-500 focus:text-[#1A5EFF]">
            <Link to="/about">About</Link>
          </a>
          <a
            className="hover:text-[#1A5EFF] duration-500 focus:text-[#1A5EF]"
            href=""
          >
            <Link to="/contact">Contact</Link>
          </a>
          <a
            className="hover:text-[#1A5EFF] duration-500 focus:text-[#1A5EF]"
            href=""
          >
            <Link to="/blog">Blog</Link>
          </a>
        </div>
      </section>
      <p className="my-3 ml-[25%]">© Mont Limited 2023. All rights reserved.</p>
    </>
  );
}

export default Footer;
