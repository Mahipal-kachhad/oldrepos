import { Col, Container, Row } from "react-bootstrap";

function Featured() {
  let feData = [
    {
      img: "fe1.jpg",
    },
    {
      img: "fe2.jpg",
    },
    {
      img: "fe3.jpg",
    },
    {
      img: "fe4.jpg",
    },
    {
      img: "fe5.jpg",
    },
  ];

  return (
    <Container>
      <Row className="best-plan my-5 py-4">
        <h2 className="text-head text-center">Featured In</h2>
        {feData.map((val, idx) => {
          return (
            <Col>
              <div className="my-2 wh-fit">
                <img src={require(`../../images/home/${val.img}`)} />
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Featured;
