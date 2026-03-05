import { Col, Row } from "react-bootstrap";

function HomeForm() {
  return (
    <div className="home-form p-4">
      <h1 className="fs-2 text-center py-2">Get a Free Estimate</h1>
      <h4 className="text-center pb-3">Contact Us</h4>
      <Row className="text-center">
        <Col className="col-12 col-lg-4">
          <div>
            <label className="d-block pt-3 pb-1">First Name*</label>
            <input
              className="border border-1 border-black w-100 rounded-3 bg-transparent p-2 outline-none"
              type="text"
            />
          </div>
        </Col>
        <Col className="col-12 col-lg-4">
          <div>
            <label className="d-block pt-3 pb-1">Last Name*</label>
            <input
              className="border border-1 border-black w-100 rounded-3 bg-transparent p-2 outline-none"
              type="text"
            />
          </div>
        </Col>
        <Col className="col-12 col-lg-4">
          <div>
            <label className="d-block pt-3 pb-1">Phone Number*</label>
            <input
              className="border border-1 border-black w-100 rounded-3 bg-transparent p-2 outline-none"
              type="number"
            />
          </div>
        </Col>
        <Col className="col-12 col-lg-4">
          <div>
            <label className="d-block pt-3 pb-1">Email*</label>
            <input
              className="border border-1 border-black w-100 rounded-3 bg-transparent p-2 outline-none"
              type="email"
            />
          </div>
        </Col>
        <Col className="col-12 col-lg-4">
          <div>
            <label className="d-block pt-3 pb-1">Address*</label>
            <input
              className="border border-1 border-black w-100 rounded-3 bg-transparent p-2 outline-none"
              type="text"
            />
          </div>
        </Col>
        <Col className="col-12 col-lg-4">
          <div>
            <label className="d-block pt-3 pb-1">City*</label>
            <input
              className="border border-1 border-black w-100 rounded-3 bg-transparent p-2 outline-none"
              type="text"
            />
          </div>
        </Col>
        <Col className="col-12 col-lg-4">
          <div>
            <label className="d-block pt-3 pb-1">Number Of Rooms*</label>
            <select className="border border-1 border-black  w-100 rounded-3 bg-transparent p-2 outline-none">
              <option value="" hidden></option>
              <option value="2">2 bedroom</option>
              <option value="3">3 bedroom</option>
              <option value="4">4 bedroom</option>
            </select>
          </div>
        </Col>
        <Col className="col-12 col-lg-4">
          <div>
            <label className="d-block pt-3 pb-1">Select Services*</label>
            <select name="" id="" className="border border-1 w-100  border-black rounded-3 bg-transparent p-2 outline-none">
              <option value="" hidden></option>
              <option value="">Deep Clening</option>
              <option value="">Laundry</option>
              <option value="">Moving In/Out</option>
            </select>
          </div>
        </Col>
      </Row>
      <button className="rounded-pill px-5 py-3 bg-black text-white d-block mx-auto mt-5">Get A Quote</button>
    </div>
  );
}

export default HomeForm;
