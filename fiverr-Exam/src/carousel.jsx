import { useEffect } from "react";
import Glide from "@glidejs/glide"; // Make sure to import Glide or define it if it's a custom library

function Carousel() {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 3,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 3,
        },
        640: {
          perView: 2,
          gap: 4,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <div className="text-center text-[#6C6E6E] my-5 text-xl">
        <h1>TRUSTED BY 40+ WORLDWIDE CLIENTS</h1>
      </div>
      {/*<!-- Component: Testimonial carousel --> */}
      <div className="glide-09 relative w-full lg:w-[1100px] mx-auto text-center overflow-hidden">
        {/* <!-- Slides --> */}
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] my-10 [will-change: transform] relative flex p-0">
            <li>
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQBAZxkFD_TtGC-NVv3rADNG8K1uUC-LPLLs94tlcXMnY4krToI"
                className="m-auto h-12 w-22"
              />
            </li>
            <li>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCM8zWMUggTZboTeIGTqBwWkW-0FdieYMJi9Vd7dHLID9T9PPb"
                className="m-auto h-12 w-35"
              />
            </li>
            <li>
              <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRP7s9-6NFVG3WK26Y2xlmY4SRRmBs-CHaAXuytxBeY5lhuk2y-"
                className="m-auto h-12 w-55"
              />
            </li>
            <li>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeEZVs2IEnbHVwxjGw4hITpfcovgTXV_V5xkJL7HftpYWjqdNk"
                className="m-auto h-10 w-55"
              />
            </li>
          </ul>
        </div>
      </div>
      {/*<!-- End Testimonial carousel --> */}
    </>
  );
}
export default Carousel;
