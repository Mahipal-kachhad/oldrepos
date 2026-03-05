import { useEffect, useState } from "react";
import Menubar from "../navigation/Menubar";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import catag from "../../images/shop/category-2.svg";
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";
import { MdAddShoppingCart } from "react-icons/md";
import SimpleSlider from "./SimpleSlider";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addItems } from "../../redux/cartSlice";

const SingleProduct = () => {
  const dispatch = useDispatch()
  const [categoryList, setCategoryList] = useState([]);
  const [data, setdata] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategoryList(res.data))
      .catch((err) => console.log(err));

    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, [id]);

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

  const addToCart = () => {
    dispatch(addItems(data))
    toast.success(`Added ${data.title} to Cart`);
  };

  const printDate = (value) => {
    const date = new Date(value);
    const options = { month: "short", day: "numeric", year: "numeric" };
    const formatted = date.toLocaleDateString("en-US", options);
    return formatted.replace(",", ".");
  };

  return (
    <>
      <Menubar />
      <div className="mt-4">
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
            <div className="d-lg-flex single-product">
              <div className="border border-1 slider-bac rounded">
                <SimpleSlider data={data.images} />
              </div>
              <div className="px-4 mt-4 mt-lg-0">
                <span
                  className={`px-3 py-1 ${
                    data.availabilityStatus === "In Stock"
                      ? "bg-green"
                      : "bg-red"
                  }`}
                >
                  {data.availabilityStatus}
                </span>
                <h1 className="my-3">{data.title}</h1>
                <div className="py-2">
                  {printStars(data.rating)} ({data.rating}/5 Rating)
                </div>
                <div className="d-flex align-items-center py-3 gap-3">
                  <div>
                    <span
                      className="text-success prise-main "
                      style={{ fontWeight: "700" }}
                    >
                      ${calPrice(data.price, data.discountPercentage)}
                    </span>
                  </div>
                  <div>
                    <span className="d-block text-warning">
                      {data.discountPercentage}% Off
                    </span>
                    <span className="text-muted fs-4">
                      <del>${data.price}</del>
                    </span>
                  </div>
                </div>
                <p className="si-des">{data.description}</p>
                <div className="pt-3">
                  <button
                    className="px-3 py-2 rounded bg-success border-0"
                    onClick={() => addToCart()}
                  >
                    <span className="fs-2 pe-3 text-white">
                      <MdAddShoppingCart />
                    </span>
                    <span className="fs-4 text-white">Add To Cart</span>
                  </button>
                </div>
                <div className="p-4">
                  <Row>
                    <Col className="col-6">
                      <p className="fw-bold">
                        SKU : <span className="text-success">{data.sku}</span>
                      </p>
                    </Col>
                    <Col className="col-6">
                      <p className="fw-bold">
                        MFG :{" "}
                        <span className="text-success">
                          {printDate(data.meta?.createdAt)}
                        </span>
                      </p>
                    </Col>
                    <Col className="col-6">
                      <p className="fw-bold">
                        Tags :{" "}
                        <span className="text-success">
                          {data.tags?.map((name) => name + ", ")}
                        </span>
                      </p>
                    </Col>
                    <Col className="col-6">
                      <p className="fw-bold">
                        Warranty :{" "}
                        <span className="text-success">
                          {data.warrantyInformation}
                        </span>
                      </p>
                    </Col>
                    <Col className="col-6">
                      <p className="fw-bold">
                        Return Policy :{" "}
                        <span className="text-success">
                          {data.returnPolicy}
                        </span>
                      </p>
                    </Col>
                    <Col className="col-6">
                      <p className="fw-bold">
                        Stock :{" "}
                        <span className="text-success">{data.stock} Items</span>
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="border border-1 mt-4 rounded p-3">
              <h3>Reviews ({data.reviews?.length})</h3>

              {data.reviews?.map((val, idx) => {
                return (
                  <div
                    className="border border-1 rounded-3 my-3 p-2 d-flex w-75"
                    style={{ background: "var(---wp-green-xlite)" }}
                    key={idx}
                  >
                    <div>
                      <div className="rounded-pill w-fit p-1 m-1">
                        <img
                          src={require("../../images/review/user.jpg")}
                          alt="user"
                          className="user-image"
                        />
                      </div>
                      <p className="text-center mt-2 r-name">
                        {val.reviewerName}
                      </p>
                    </div>
                    <div className="w-100 px-3 py-2">
                      <div className="d-flex justify-content-between">
                        <p className="atr">
                          <span>{printStars(val.rating)}</span>
                        </p>
                        <p className="atr">
                          <span>{printDate(val.date)}</span>
                        </p>
                      </div>
                      <p className="atr">
                        Email : <span>{val.reviewerEmail}</span>
                      </p>
                      <p className="atr">
                        Comment : <span>"{val.comment}"</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleProduct;
