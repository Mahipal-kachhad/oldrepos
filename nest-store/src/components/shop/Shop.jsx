import Menubar from "../navigation/Menubar";
import cata from "../../images/shop/category-1.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";
import { BsCartPlus } from "react-icons/bs";
import { Col, Row } from "react-bootstrap";
import catag from "../../images/shop/category-2.svg";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addItems } from "../../redux/cartSlice";

const Shop = () => {
  const dispatch = useDispatch()
  const [categoryList, setCategoryList] = useState([]);
  const { category } = useParams();
  const [data, setData] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategoryList(res.data))
      .catch((err) => console.log(err));

    if (category === undefined) {
      axios
        .get(`https://dummyjson.com/products`)
        .then((res) => setData(res.data.products))
        .catch((err) => console.log(err));
    } else if (category === "search" && query) {
      axios
        .get(`https://dummyjson.com/products/search?q=${query}`)
        .then((res) => setData(res.data.products))
        .catch((err) => console.log(err));
    } else {
      axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => setData(res.data.products))
        .catch((err) => console.log(err));
    }
  }, [category, query]);

  const printStars = (rating) => {
    const full = Math.floor(rating) + (rating % 1 > 0.75 ? 1 : 0);
    const half = rating % 1 >= 0.25 && rating % 1 <= 0.75;
    const empty = 5 - full - (half ? 1 : 0);
    const stars = [];

    for (let i = 1; i <= full; i++)
      stars.push(<TiStarFullOutline key={`full-${i}`} className="star" />);

    if (half) stars.push(<TiStarHalfOutline key={"half"} className="star" />);

    for (let i = 1; i <= empty; i++)
      stars.push(<TiStarOutline key={`empty-${i}`} className="star" />);

    return stars;
  };

  const calPrice = (price, discount) => {
    const ans = price * (1 - discount / 100);
    return ans.toFixed(2);
  };

  const addToCart = (val) => {
    dispatch(addItems(val))
    toast.success(`Added ${val.title} to Cart`);
  };

  return (
    <>
      <Menubar />
      <div className="px-2 pt-3">
        <div className="d-flex align-items-center mb-4">
          <img
            src={cata}
            style={{ height: "45px" }}
            className="me-3"
            alt="catagory"
          />
          <h1 style={{ fontWeight: "800" }}>Producs</h1>
        </div>
        <div className="d-flex gap-4">
          <div className="sidebar d-none d-md-block">
            <div className="p-3 rounded-3 border border-1">
              <h3 style={{ fontWeight: "700" }} className="mb-4">
                Catagory
              </h3>
              <Link
                className="border border-1 px-3 py-2 mb-2 rounded d-flex justify-content-between align-items-center"
                to={`/products`}
              >
                <p className="fs-6 m-0 p-0" style={{ fontWeight: "600" }}>
                  All Products
                </p>
                <img style={{ height: "35px" }} src={catag} alt="catagory" />
              </Link>
              {categoryList.map((val, idx) => {
                return (
                  <Link
                    className="border border-1 px-3 py-2 mb-2 rounded d-flex justify-content-between align-items-center"
                    key={idx}
                    to={`/products/${val.slug}`}
                  >
                    <p className="fs-6 m-0 p-0" style={{ fontWeight: "600" }}>
                      {val.name.charAt(0).toUpperCase() + val.name.slice(1)}
                    </p>
                    <img
                      style={{ height: "35px" }}
                      src={catag}
                      alt="catagory"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="products">
            <div>
              <Row>
                {data.map((val, idx) => {
                  return (
                    <Col
                      key={idx}
                      className="col-12 col-xxl-3 col-lg-4 col-sm-6 mb-4"
                    >
                      <div className="border border-1 mx-2 rounded-3 overflow-hidden h-100">
                        <div>
                          <img className="w-100" src={val.thumbnail} alt="" />
                        </div>
                        <div className="p-3">
                          <p
                            className="text-muted py-0 my-0"
                            style={{ fontWeight: "500" }}
                          >
                            {val.tags[1]}
                          </p>
                          <Link to={`/product/${val.id}`}>
                            <h5>{val.title}</h5>
                          </Link>
                          <div className="d-flex align-items-center">
                            {printStars(val.rating || 0)}{" "}
                            <span className="text-muted ps-1">
                              ({val.rating}/5)
                            </span>
                          </div>
                          <p>
                            By{" "}
                            <span
                              className="text-success"
                              style={{ fontWeight: "600" }}
                            >
                              {val.brand}
                            </span>
                          </p>
                          <div className="d-flex align-items-center justify-content-between px-3">
                            <div>
                              <p
                                className="text-success fs-4 p-0 m-0"
                                style={{ fontWeight: "600" }}
                              >
                                ${calPrice(val.price, val.discountPercentage)}
                              </p>
                              <p className="mx-auto my-0">
                                <del>${val.price}</del>
                              </p>
                            </div>
                            <button
                              className="px-3 py-2 rounded border-0 bg-success text-bg-success"
                              onClick={() => addToCart(val)}
                            >
                              <BsCartPlus style={{ fontSize: "23px" }} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
