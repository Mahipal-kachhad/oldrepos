import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo/logo.svg";
import { useState } from "react";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { FaCodeCompare, FaRegHeart } from "react-icons/fa6";
import { MdOutlineAccountCircle } from "react-icons/md";
import { LuHeadset } from "react-icons/lu";
import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";

const Menubar = () => {
  const cartCount = useSelector((state) => state.cart.items.length);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleKey = (e) => {
    if (e.key === "Enter" && search !== "") {
      navigate(`/products/search?q=${search}`);
    }
  };

  const handleClick = () => {
    if (search !== "") {
      navigate(`/products/search?q=${search}`);
    }
  };

  let navData = [
    { name: "Deals", icon: "bi-fire", link: "/deals" },
    { name: "Home", icon: null, link: "/", hasDropdown: true },
    { name: "About", icon: null, link: "/about" },
    { name: "Shop", icon: null, link: "/products", hasDropdown: true },
    { name: "Blog", icon: null, link: "/blog", hasDropdown: true },
    { name: "Pages", icon: null, link: "/pages", hasDropdown: true },
    { name: "Contact", icon: null, link: "/contact" },
  ];

  return (
    <div>
      <div className="nav">
        <div className="d-flex gap-5 align-items-center">
          <img src={logo} alt="logo" className="logo" />
          <div className="position-relative d-none d-xl-block">
            <input
              className="search-input"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKey}
            />
            <IoSearch className="search-icon" onClick={handleClick} />
          </div>
        </div>
        <div className="menu-back">
          <TiThMenu className="d-xxl-none menu-icon me-3" />
          <div className="menu align-items-center p-2 gap-4">
            <div className="position-relative d-xxl-none">
              <input
                className="search-input mobile"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKey}
              />
              <IoSearch className="search-icon" onClick={handleClick} />
            </div>
            <div className="menu-list gap-4 align-items-center d-flex">
              <Link to={"/pages/compare"}>
                <div className="d-flex align-items-baseline">
                  <FaCodeCompare className="fs-4 me-1" />
                  <span>Compare</span>
                </div>
              </Link>
              <Link to={"/pages/wishlist"}>
                <div className="d-flex align-items-baseline">
                  <FaRegHeart className="fs-4 me-1" />
                  <span>Wishlist</span>
                </div>
              </Link>
              <Link to={"/pages/cart"}>
                <div className="d-flex align-items-baseline position-relative me-2">
                  <IoCartOutline className="fs-4 me-1" />
                  <span>Cart</span>
                  <span id="count">{cartCount}</span>
                </div>
              </Link>
              <Link to={"/pages/account"}>
                <div className="d-flex align-items-baseline">
                  <MdOutlineAccountCircle className="fs-4 me-1" />
                  <span>Account</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex py-1 px-2 border-bottom border-1 justify-content-between">
        <div className="d-flex align-items-center justify-content-between ">
          <div>
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="px-4 py-2"
              >
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to={"./mega-menu"}>
                  Mega menu
                </Dropdown.Item>
                <Dropdown.Item as={Link} to={"/vendors"}>
                  Vendors
                </Dropdown.Item>
                <Dropdown.Item as={Link} to={"/vendors-policy"}>
                  Vendor's Policy
                </Dropdown.Item>
                {navData.map((val, idx) => {
                  return (
                    <Dropdown.Item
                      key={idx}
                      className="d-block d-xxl-none"
                      as={Link}
                      to={val.link}
                    >
                      {val.name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="d-none gap-4 ps-5 d-xxl-flex">
            {navData.map((val, idx) => {
              return (
                <div key={idx}>
                  <Link className="nav-items" to={val.link}>
                    {val.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="d-none align-items-center d-sm-flex">
          <div>
            <LuHeadset className="call me-2" />
          </div>
          <div>
            <p className="fs-2 m-0 me-2 p-0 number">1900-800</p>
            <p className="m-0 p-0 ">24/7-Support center</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
