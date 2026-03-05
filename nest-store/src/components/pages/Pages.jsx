import { Route, Routes } from "react-router-dom";
import Menubar from "../navigation/Menubar";
import About from "./About";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Account from "./Account";
import Compare from "./Compare";

const Pages = () => {
  return (
    <>
    <Menubar/>
    <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/compare" element={<Compare/>}/>
    </Routes>
    </>

  );
};

export default Pages;
