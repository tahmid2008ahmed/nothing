import { Link } from "react-router-dom";
function Hadar() {
  return (
    <>
      <section className="slide-top mb-10">
        <div className=" text-focus-in text-[#202b38]">
          <h1 className="header-h1 pt-12 pb-5 m-auto text-center font-semibold lg:w-[900px] lg:text-[60px] md:text-[50px] md:w-[650px] sm:text-[40px] sm:w-[500px] xs:text-[50px] xs:w-[200px] xs:font-bold ">
            Save time & <span className="text-[#1A5EFF]">work smarter </span>
            with AI Automation
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
              <Link to="/contact">Book Your Free Audit Call</Link>
            </button>
          </div>
        </div>

        <div className="text-focus-in hover:text-[#1A5EFF] cursor-pointer hover:gap-3 flex mt-3 gap-6 justify-center duration-500">
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
      </section>
    </>
  );
}

export default Hadar;
