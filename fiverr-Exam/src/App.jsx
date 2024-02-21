import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home"; // Importing Home component
import Video from "./Video";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          {/* Define your specific routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<Video />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          {/* Handle 404, Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      {/* All other components */}
    </>
  );
}

export default App;
