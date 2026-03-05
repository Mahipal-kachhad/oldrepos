import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import SingleProduct from "./components/shop/SingleProduct";
import Pages from "./components/pages/Pages";
import SimpleSlider from "./components/shop/SimpleSlider";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="px-3">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Shop />} />
        <Route path="/products" element={<Shop />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/pages/*" element={<Pages />} />
        <Route path="/simpleSlider" element={<SimpleSlider />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        style={{ marginTop: "70px" }}
      />
    </div>
  );
}

export default App;
