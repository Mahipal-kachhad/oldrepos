import { Col, Container, Row } from "react-bootstrap";

function HowItWorks() {
  return (
    <div className="how-it-main">
      <Container>
        <h2 className="text-center text-white text-head pt-4">How It Works</h2>
        <Row>
          <div className="d-flex align-items-top gap-4 justify-content-between my-5 howitworks">
            <div className="mx-auto">
              <div className="how-icon-div mx-auto">
                <i className="bi bi-droplet"></i>
              </div>
              <p className="text-white fs-5 text-center">
                Choose your desired cleaning service
              </p>
            </div>
            <div className="mx-auto">
              <i className="my-auto custom-weight how-arrow bi bi-arrow-right"></i>
            </div>
            <div className="">
              <div className="how-icon-div mx-auto">
                <i className="bi bi-bag-dash"></i>
              </div>
              <p className="text-white fs-5 text-center">
                Use the Cleanic App for laundry pickup
              </p>
            </div>
            <div className="mx-auto">
              <i className="my-auto custom-weight how-arrow bi bi-arrow-right"></i>
            </div>
            <div className="">
              <div className="how-icon-div mx-auto">
                <i className="bi bi-key"></i>
              </div>
              <p className="text-white fs-5 text-center">
                Leave us the keys and we'll take care of the rest
              </p>
            </div>
            
              <div className="mx-auto">
                <i className="my-auto custom-weight how-arrow bi bi-arrow-right"></i>
              </div>
            
            <div className="">
              <div className="how-icon-div mx-auto">
                <i className="bi bi-house-check"></i>
              </div>
              <p className="text-white fs-5 text-center">
                Welcome back to your home clean home!
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default HowItWorks;
