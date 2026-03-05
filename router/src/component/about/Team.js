import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

function Team() {
  let data = [
    {
      image: "card1.jpg",
      name: "Roni Lavine",
      role: "CEO",
      about:
        "This is your Team Member description. Use this space to write a brief description of this person’s role and responsibilities, or add a short bio.",
    },
    {
      image: "card2.jpg",
      name: "Shonad Evian",
      role: "CTO",
      about:
        "This is your Team Member description. Use this space to write a brief description of this person’s role and responsibilities, or add a short bio.",
    },
    {
      image: "card3.jpg",
      name: "Yul Mclean",
      role: "Cleaner",
      about:
        "This is your Team Member description. Use this space to write a brief description of this person’s role and responsibilities, or add a short bio.",
    },
    {
      image: "card4.jpg",
      name: "Jade Leno",
      role: "Cleaner",
      about:
        "This is your Team Member description. Use this space to write a brief description of this person’s role and responsibilities, or add a short bio.",
    },
    {
      image: "card5.jpg",
      name: "Lewis Baraka",
      role: "CTO",
      about:
        "This is your Team Member description. Use this space to write a brief description of this person’s role and responsibilities, or add a short bio.",
    },
    {
      image: "card6.jpg",
      name: "Coral Tyde",
      role: "CTO",
      about:
        "This is your Team Member description. Use this space to write a brief description of this person’s role and responsibilities, or add a short bio.",
    },
  ];

  return (
    <Container>
      <Row>
        <h1 className="text-center py-4 text-head">Our Stellar Team</h1>
        {data.map((val, idx) => {
          return (
            <Col className="col-12 col-md-6 col-lg-4 mb-4" key={idx}>
              <div
                style={{ backgroundColor: "#FFF9AF" }}
                className="rounded-3 overflow-hidden"
              >
                <div className="team-div">
                  <img
                    className="w-100"
                    src={require(`../../images/team/${val.image}`)}
                    alt=""
                  />
                </div>
                <h2 className="px-4 mt-2">{val.name}</h2>
                <h5 className="px-4 mt-2">{val.role}</h5>
                <p className="px-4 mt-2">{val.about}</p>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Team;
