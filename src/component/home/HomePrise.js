import { Container, Row, Col } from "react-bootstrap";

function HomePrise() {
  let homePlanData = [
    {
      name: "The Bi-Monthly Plan",
      prise: "280",
      ben1: "General cleaning every other week",
      ben2: "Bathroom & kitchen sanitization",
      ben3: "Basic laundry assistance (on request)",
      ben4: "Supplies provided by the cleaner",
      ben5: "Light surface disinfecting",
      best: true,
    },
  ];

  return (
    <div style={{ backgroundColor: "#4C5B5C" }} className="py-5">
      <Container>
        <Row className="">
          <Col className="col-12 col-lg-7 col-xl-5">
            <div className="d-flex flex-column justify-content-center h-100 py-5">
              <h2 className="text-white text-head">Our Plans & Special Discounts</h2>
              <p className="text-white fs-5 pb-3">
                I'm a paragraph. Click here to add your own text and edit me.
                It's easy. I'm a paragraph. Click here to add your own text and
                edit me. It's easy.
              </p>
              <button className="bg-white py-3 px-4 rounded-pill border-0 wh-fit">
                Choose Your Plan
              </button>
             </div>
          </Col>
          <Col className="d-none d-xl-block col-xl-3"></Col>
          {homePlanData.map((val, idx) => {
            return (
              <Col className="col-12 col-lg-5 col-xl-4 py-5">
                <div className="border-1 border border-0 bg-white rounded-3 mb-5 position-relative">
                  <span
                    className={`best-tag px-2 py-1 bg-black text-white wh-fit ${
                      val.best == false ? "d-none" : ""
                    } position-absolute rounded-2`}
                  >
                    Best Value
                  </span>
                  <div
                    className={`plan-divider ${
                      val.best == true ? "best-plan" : ""
                    } pt-4 rounded-top`}
                  >
                    <h5 className="text-center">{val.name}</h5>
                    <p className="text-center fs-1">
                      <span className="wh-fit fs-6 mx-2">$</span>
                      {val.prise}
                    </p>
                    <p className="text-center">Every Month</p>
                    <button className="rounded-pill border-0 bg-black px-plan-button my-4 text-white mx-auto d-block">
                      Select
                    </button>
                  </div>
                  <div className="py-2">
                    <p className="text-center py-2">
                      <i class="bi bi-arrow-right me-2"> </i>
                      {val.ben1}
                    </p>
                    <p className="text-center py-2">
                      <i class="bi bi-arrow-right me-2"> </i>
                      {val.ben2}
                    </p>
                    <p className="text-center py-2">
                      <i class="bi bi-arrow-right me-2"> </i>
                      {val.ben3}
                    </p>
                    <p className="text-center py-2">
                      <i class="bi bi-arrow-right me-2"> </i>
                      {val.ben4}
                    </p>
                    <p className="text-center py-2">
                      <i class="bi bi-arrow-right me-2"> </i>
                      {val.ben5}
                    </p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default HomePrise;
