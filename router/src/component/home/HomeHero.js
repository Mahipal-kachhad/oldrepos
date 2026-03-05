import { Col, Container, Row } from "react-bootstrap";
import HomeForm from "./HomeForm";

function HomeHero() {
  return (
    <div className="home-hero py-5 px-4 mx-auto">
      <Container>
        <Row className="py-5">
          <Col className="col-12 col-xxl-6">
            <div className="text-white">
              <h1 className="text-head">Remarkably Cleaner. <br /> Amazingly Simpler.</h1>
              <p className="fs-4 pb-3">
                Providing spotless cleaning services for busy people since 2035.
                Always on time, always smiling.
              </p>
              <button className="rounded-pill px-5 py-3 bg-white text-black border-0">Book Now</button>
            </div>
          </Col>
        </Row>
        <HomeForm/>
      </Container>
    </div>
  );
}

export default HomeHero;
