import { Col, Container, Row } from "react-bootstrap";

const WhyChooseUs = () => {
  return (
    <Container>
      <Row className="py-5">
        <Col className="col-12 col-lg-4">
          <div className="overflow-hidden">
            <img
              className="w-100 rounded-3"
              src={require("../../images/home/whyChooseUs.jpg")}
            />
          </div>
        </Col>
        <Col className="px-5 py-3 col-12 col-lg-8">
          <h2 className="text-head">Why Choose The Cleanic</h2>
          <Row>
            <Col className="col-12 col-lg-6">
              <div>
                <h4 className="custom-weight pb-1">
                  {" "}
                  <i className="pe-1 bi why-icon bi-x-diamond"></i> Qualified Team
                </h4>
                <p className="pb-2 ps-4 ms-2">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It's easy.
                </p>
              </div>
              <div>
                <h4 className="custom-weight pb-1">
                  {" "}
                  <i className="pe-1 bi why-icon bi-x-diamond"></i> Same Day Availability
                </h4>
                <p className="pb-2 ps-4 ms-2">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It's easy.
                </p>
              </div>
            </Col>
            <Col className="col-12 col-lg-6">
              <div>
                <h4 className="custom-weight pb-1">
                  {" "}
                  <i className="pe-1 bi why-icon bi-x-diamond"></i>Outstanding Support
                </h4>
                <p className="pb-2 ps-4 ms-2">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It's easy.
                </p>
              </div>
              <div>
                <h4 className="custom-weight pb-1">
                  {" "}
                  <i className="pe-1 bi why-icon bi-x-diamond"></i> Eco-Friendly
                  Materials
                </h4>
                <p className="pb-2 ps-4 ms-2">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It's easy.
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
