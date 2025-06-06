import { Container, Row } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

function Navebar() {
  return (
    <Container>
      <Row className="nav-row">
        <nav className="d-flex justify-content-between align-items-center nav-h">
          <div className="nav-left">
            <i className="bi bi-x-diamond-fill me-2 fs-3"></i>
            <span className="fs-3">The cleanic</span>
          </div>
          <div className="nav-right d-flex wh-fit align-items-center">
            <div className="rounded-3 overflow-hidden">
              <i className="bi bi-list fs-3 px-2 py-1 menu-icon"></i>
            </div>
            <div className="list-unstyled gap-5 mb-0 menu-list">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/plans"}>Plans</Link>
              </li>
              <li>
                <Link to={"/services"}>Services</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <button className="border-0 rounded-pill px-4 py-2 bg-black text-white">
                Log In<i className="bi bi-person-circle ps-2"></i>
              </button>
              <button className="border-0 rounded-pill px-4 py-2 bg-black text-white">
                Book Now
              </button>
            </div>
          </div>
        </nav>
      </Row>
    </Container>
  );
}

export default Navebar;
