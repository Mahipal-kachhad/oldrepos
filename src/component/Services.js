import { Col, Container, Row } from "react-bootstrap";

function Services() {
  let servicesData = [
    {
      name: "Deep Cleaning",
      dis: "Thorough cleaning in every nook and cranny of your home.",
      prise: "$100",
      image: "ser1.jpg",
    },
    {
      name: "Furniture Cleaning",
      dis: "Ensuring your furniture is refreshed, sanitized, and looks as good as new.",
      prise: "$150",
      image: "ser2.jpg",
    },
    {
      name: "Kitchen Cleaning",
      dis: "Leaving your kitchen spotless and hygienic.",
      prise: "$200",
      image: "ser3.jpg",
    },
    {
      name: "Move In/ Move Out",
      dis: "Hassle-free cleaning for a smooth transition.",
      prise: "$300",
      image: "ser4.jpg",
    },
    {
      name: "Laundry",
      dis: "Washing, folding and ironing, providing you with neatly pressed clothes.",
      prise: "$5 per LB",
      image: "ser5.jpg",
    },
    {
      name: "Window Cleaning",
      dis: "Crystal-clear results, enhancing natural light and a sparkling view.",
      prise: "$100",
      image: "ser6.jpg",
    },
    {
      name: "Office Cleaning",
      dis: "Tailored to maintain a clean workspace, promoting a productive environment.",
      prise: "$300",
      image: "ser7.jpg",
    },
  ];

  return (
    <Container>
      <Row>
        <h1 className="text-center text-head">Our Services</h1>
        <p className="text-center fs-4">What can we clean for your today</p>
      </Row>
      {servicesData.map((val, idx) => {
        return (
          <Row className="py-5 px-1 services-row" key={idx}>
            <Col className="col-12 col-lg-8">
              <div className="d-block d-lg-flex">
              <div className="services-image">
                <img
                  className="w-100"
                  src={require(`../images/abouthero/${val.image}`)}
                  alt=""
                />
              </div>
              <div className="ps-3 pt-4">
                <h3>{val.name}</h3>
                <p className="">{val.dis}</p>
              </div>
              </div>
            </Col>
            <Col className="col-12 col-lg-4 ">
              <div className="d-flex justify-content-between align-items-center services-col p-4">
                <p className="my-auto">{val.prise}</p>
                <button className="bg-black text-white px-5 py-2 border-0 rounded-pill">
                  Book a Cleaner
                </button>
              </div>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
}

export default Services;
