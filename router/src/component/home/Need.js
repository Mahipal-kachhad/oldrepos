import { Col, Container, Row } from "react-bootstrap";

function Need() {
  let needData = [
    {
      title: "Move In/Move Out",
      img: "need1.jpg",
    },
    {
      title: "Move In/Move Out",
      img: "need2.jpg",
    },
    {
      title: "Move In/Move Out",
      img: "need3.jpg",
    },
  ];


  return (
    <div className="bg-blue py-5">
      <Container>
        <h1 className="text-head text-white text-center">
          For Anything You Need
        </h1>
        <h4 className="text-white text-center">Our stellar services</h4>
        <Row>
          {needData.map((val, idx) => {
            return (
              <Col key={idx} className="col-12 col-md-4 p-4">
                <div className="position-relative rounded-3 overflow-hidden">
                    <img className="w-100 need-image" src={require(`../../images/home/${val.img}`)} alt="" />
                  <h3 className=" text-white need position-absolute">{val.title}</h3>
                </div>
              </Col>
            );
          })}
        </Row>
        <button className="d-block mx-auto mt-4 px-5 py-3 bg-white text-black rounded-pill border-0">See All Services</button>
      </Container>
    </div>
  );
}

export default Need;
