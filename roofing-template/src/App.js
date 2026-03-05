import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Card from "./component/Card.js";
import { Container, Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

function App() {
  return (
    <Container fluid className="px-0">
      <Row className="hero-bac p-3 mx-auto">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <img className="logo" src={require("./images/logo.svg").default} />
            <h4 className="fs-6">Headings</h4>
          </div>

          <div className="d-lg-none">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <i className="bi bi-list fs-1"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">About</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Services</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Project</Dropdown.Item>
                <Dropdown.Item>
                  <button className="rounded-3 border-0 bg-black text-white px-4 py-2">
                    Get Quote
                  </button>
                </Dropdown.Item>
                <Dropdown.Item>
                  <button className="rounded-3 border border-0 bg-success text-white px-3 py-2">
                    12345 67890
                  </button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="d-none d-lg-flex gap-5 justify-content-between align-items-center">
            <ul className="list-unstyled d-flex gap-5 text-bold my-auto">
              <li>About</li>
              <li>Services</li>
              <li>Project</li>
            </ul>
            <div className="d-flex gap-4 ">
              <button className="rounded-3 border border-0 bg-black text-white px-4 py-2">
                Get Quote
              </button>
              <button className="rounded-3 border border-0 bg-success text-white px-3 py-2">
                12345 67890
              </button>
            </div>
          </div>
        </div>
        <Row className="mt-5">
          <h1 style={{ fontSize: "9vw" }}>
            Quality Roofing <br /> Solutions
          </h1>
          <h3 style={{ fontSize: "3vw" }}>
            Durable, Reliable, and Professional
          </h3>
        </Row>
        <Row className="">
          <Col className="d-none d-lg-block">
            <div className="wh-fit bg-success text-white p-3 rounded-3 text-center">
              <div>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <span>(10)</span>
              </div>
              <p className="fs-1 p-0 m-0">345</p>
              <p className="p-0 m-0">REVIEWS</p>
            </div>
          </Col>
          <Col className="mt-3">
            <div className="w-forms">
              <form className="bg-white rounded-3 p-4">
                <h1>Get a Quote</h1>
                <div className="d-flex justify-content-between py-3">
                  <div className="w-45">
                    <label className="pb-2 d-block">First Name *</label>
                    <input
                      className="w-100 rounded-3 border border-1 border-black p-1"
                      type="text"
                    />
                  </div>
                  <div className="w-45">
                    <label className="pb-2 d-block">Last Name *</label>
                    <input
                      className="w-100 rounded-3 border border-1 border-black p-1"
                      type="text"
                    />
                  </div>
                </div>
                <div className=" py-3">
                  <label className="pb-2 d-block">Email *</label>
                  <input
                    className="w-100 rounded-3 border border-1 border-black p-1"
                    type="Email"
                  />
                </div>
                <div className=" py-3">
                  <label className="pb-2 d-block">Number *</label>
                  <input
                    className="w-100 rounded-3 border border-1 border-black p-1"
                    type="number"
                  />
                </div>
                <div className=" py-3">
                  <button className="border border-0 rounded-3 bg-black text-white px-3 py-1 w-100">
                    Get a Free Quote
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Row>
      <Row>
        <Col className="mt-5 p-5 col-12 col-md-8">
          <h1 className="mb-4">About</h1>
          <h4 className="fs-5 mb-3">Our Mission</h4>
          <p className="fs-4 ">
            Heading Roofs is committed to providing top-tier roofing services to
            both residential and commercial customers. With years of experience
            in the industry, our skilled team delivers exceptional results that
            stand the test of time.
          </p>
        </Col>
      </Row>
      <Row className="bg-white p-4">
        <Col className="col-12 col-md-4 col-lg-6 px-2">
          <p>
            Our team of experienced professionals is dedicated to delivering
            high-quality results that exceed your expectations. We are committed
            to providing reliable and efficient services that enhance the
            durability and aesthetics of your property.
          </p>
        </Col>
        <Col className="col-12 col-md-8 col-lg-6 px-2">
          <div className="overflow-hidden rounded-3">
            <img src={require('./images/roof.jpg')} alt="" />
          </div>
        </Col>
      </Row>
      <Row className="p-3">
        <h1 className="pb-3">Services</h1>
        <h4 className="pb-4 fs-5">Our Roofing Services</h4>
        <Card/>
      </Row>
    </Container>
  );
}

export default App;
