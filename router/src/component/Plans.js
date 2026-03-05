import { Col, Container, Row } from "react-bootstrap";

function Plans() {
  let plansData = [
    {
      name: "The Weekly Plan",
      prise: "480",
      ben1: "Thorough cleaning once a week",
      ben2: "Includes deep cleaning of kitchen and bathrooms",
      ben3: "Dusting & vacuuming of all rooms",
      ben4: "Trash removal and bin sanitization",
      ben5: "Eco-friendly cleaning products included",
      best: false,
    },
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
    {
      name: "The Office Plan",
      prise: "960",
      ben1: "Daily or alternate day office cleaning",
      ben2: "Glass and desk cleaning services",
      ben3: "Vacuuming and floor polishing",
      ben4: "Common area sanitization (restrooms, pantry)",
      ben5: "Trash removal and recycling services",
      best: false,
    },
  ];

  return (
    <Container>
      <Row>
        <div className="pb-5">
          <h1 className="text-head text-center">Our Plans</h1>
          <p className="fs-4 text-center">
            Elevate your living with our cleaning subscription plan.
          </p>
        </div>
        {plansData.map((val, idx) => {
          return (
            <Col className="col-12 col-lg-4">
              <div className="border-1 border border-black rounded-3 mb-5 position-relative">
                <span
                  className={`best-tag px-2 py-1 bg-black text-white wh-fit rounded-2 ${
                    val.best == false ? "d-none" : ""
                  } position-absolute`}
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
  );
}

export default Plans;
