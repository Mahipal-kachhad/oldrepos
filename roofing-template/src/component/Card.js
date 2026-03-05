import { Row, Col } from "react-bootstrap";

function Card() {
  let data = [
    {
      hd: "Roof Installation",
      pr: "Describe your service here. What makes it great? Use short catchy text to tell people what you offer",
      img: "card1.jpg",
    },
    {
      hd: "Roof Repair",
      pr: "Describe your service here. What makes it great? Use short catchy text to tell people what you offer",
      img: "card2.jpg",
    },
    {
      hd: "Solar Panels Installation",
      pr: "Describe your service here. What makes it great? Use short catchy text to tell people what you offer",
      img: "card3.jpg",
    },
    {
      hd: "Gutter Installation",
      pr: "Describe your service here. What makes it great? Use short catchy text to tell people what you offer",
      img: "card4.jpg",
    },
  ];
  return (
    <div>
      {data.map((val, index) => {
        return (
          <Row
            className="rounded-3 my-5 overflow-hidden bg-white h-custom px-0"
            key={index}
          >
            <Col className="overflow-hidden col-12 col-md-6">
              <img src={require(`../images/${val.img}`)} />
            </Col>
            <Col className="p-5 col-12 col-md-6">
              <h1>{val.hd}</h1>
              <p>{val.pr}</p>
              <button className="border border-0 rounded-3 bg-black text-white py-2 px-3">
                Book Now
              </button>
            </Col>
          </Row>
        );
      })}
    </div>
  );
}

export default Card;
