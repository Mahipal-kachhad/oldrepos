import { Col, Container, Row } from "react-bootstrap";

function HappyClient() {
  let clientData = [
    {
      tital: "I'm addicted to the Cleanic!",
      dis: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
      name: "Jane Deirs, AR",
    },
    {
      tital: "My flat looks like a boutique hotel",
      dis: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
      name: "Eric Laguardia, CA",
    },
    {
      tital: "Soft perfection",
      dis: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
      name: "Lena Rogel, RI",
    },
    {
      tital: "I'm obsessed",
      dis: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
      name: "Jean McDermott, CT",
    },
  ];

  return (
    <Container>
      <Row className="py-5">
        <h1 className="py-4">Shiny Happy Clients</h1>
        {clientData.map((val, idx) => {
          return (
            <Col key={idx} className="col-12 col-md-6 col-lg-4 col-xxl-3">
              <div className="best-plan p-5 fix-height-review my-3">
                <div className="">
                  <i className=" pe-1 bi bi-star-fill"></i>
                  <i className=" pe-1 bi bi-star-fill"></i>
                  <i className=" pe-1 bi bi-star-fill"></i>
                  <i className=" pe-1 bi bi-star-fill"></i>
                  <i className=" pe-1 bi bi-star-fill"></i>
                </div>
                <h3 className="custom-weight py-3">"{val.tital}"</h3>
                <p>"{val.dis}"</p>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default HappyClient;
