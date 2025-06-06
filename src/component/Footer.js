import { Row, Col, Container } from "react-bootstrap";

function Footer() {
  return (
    <div id="footer-div">
      <Container className="footer-container">
        <Row className="footer p-5">
          <Col className="col-12 col-md-6 col-lg-3">
            <div className="nav-left">
              <i className="bi bi-x-diamond-fill me-2 fs-3"></i>
              <span className="fs-3">The cleanic</span>
            </div>
            <button className="rounded-pill bg-black px-3 py-2 text-white border-0 mt-5">
              Book Now
            </button>
          </Col>
          <Col className="col-12 col-md-6 col-lg-3">
            <h6 className="pb-3 pt-3 fs-5">Legal</h6>
            <p>
              <a href="#">Privacy Policy</a>
            </p>
            <p>
              <a href="#">Terms And Condition</a>
            </p>
            <p>
              <a href="#">Refund Policy</a>
            </p>
          </Col>
          <Col className="col-12 col-md-6 col-lg-3">
            <h6 className="pb-3 pt-3 fs-5">Operating Hours</h6>
            <p>Mon - Fri: 8am - 8pm </p>
            <p>Saturday: 9am - 7pm</p>
            <p>Sunday: 9am - 8pm</p>

            <p>Follow us for cleaning tips</p>
            <i className="px-2 fs-4 bi bi-instagram"></i>
            <i className="px-2 fs-4 bi bi-facebook"></i>
            <i className="px-2 fs-4 bi bi-youtube"></i>
            <i className="px-2 fs-4 bi bi-tiktok"></i>
          </Col>
          <Col className="col-12 col-md-6 col-lg-3">
            <h6 className="pb-3 pt-3 fs-5">Contact</h6>
            <p>
              The cleanic 500 Terry Francine Street San Francisco, CA 94158
              123-456-7890
            </p>
            <button
              className="bg-transparent border-0 p-0"
              onClick={() =>
                (window.location.href = "mailto:hello@cleanic.com")
              }
            >
              info@mysite.com
            </button>
          </Col>
        </Row>
        <Row className="copyright">
          <p className="text-center pt-3">© 2035 by The Cleanic.</p>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
