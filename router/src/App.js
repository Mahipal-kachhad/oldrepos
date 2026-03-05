import Navebar from "./component/Navebar.js";
import About from "./component/About.js";
import Footer from "./component/Footer.js";
import Services from "./component/Services.js";
import Plans from "./component/Plans.js";
import Home from "./component/Home.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Post from "./component/blog/Post";
import PostList from "./component/blog/PostList";

function App() {
  return (
    <>
      <Navebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/blog" element={<PostList />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
