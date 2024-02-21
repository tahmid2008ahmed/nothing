import Hadar from "./hadar";
import Carousel from "./carousel";
import Hero from "./Hero";
import Infinite from "./Infinite";
import Pricing from "./Pricing";
import Footer from "./Footer";
import Video from "./Video";

function Home() {
  return (
    <>
      <Hadar />
      <Video />
      <Carousel />
      <Hero />
      <Infinite />
      <Pricing />
      <Footer />
    </>
  );
}

export default Home;
