import { Container, Row, Col } from "react-bootstrap";

function Forms() {
  return (
    <div className="form-bac">
      <Container>
        <Row>
          <Col className="col-12 col-md-8 col-lg-6 mx-auto m-5">
            <div className="bg-white p-3 rounded-3">
              <h1 className="text-center py-2">Work With Us</h1>
              <p className="text-center py-2">
                Join our team for a fulfilling <br />
                and rewarding career.
              </p>
              <form>
                <div className="d-flex justify-content-between">
                  <div className="w-50 pe-2">
                    <label className="d-block pb-2" htmlFor="Name">
                      First Name*
                    </label>
                    <input
                      className="w-100 p-2 border border-1 border-black rounded-3"
                      type="text"
                    />
                  </div>
                  <div className="w-50 ps-2">
                    <label className="d-block pb-2" htmlFor="Name">
                      Last Name*
                    </label>
                    <input
                      className="w-100 p-2 border border-1 border-black rounded-3"
                      type="text"
                    />
                  </div>
                </div>
                <div className="py-4">
                  <label className="d-block pb-2" htmlFor="Email">
                    Email*
                  </label>
                  <input
                    className="w-100 p-2 border border-1 border-black rounded-3"
                    type="email"
                  />
                </div>
                <div className="d-flex justify-content-between pb-4">
                  <div className="w-50 pe-2">
                    <label className="d-block pb-2" htmlFor="number">
                      Number*
                    </label>
                    <input
                      className="w-100 p-2 border border-1 border-black rounded-3"
                      type="text"
                    />
                  </div>
                  <div className="w-50 ps-2">
                    <label className="d-block pb-2" htmlFor="Position">
                      Position*
                    </label>
                    <input
                      className="w-100 p-2 border border-1 border-black rounded-3"
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <label className="d-block pb-2" htmlFor="Address">
                    Tell Us More...
                  </label>
                  <textarea
                    rows={4}
                    className="w-100 p-2 border border-1 border-black rounded-3 no-resize"
                    name="Address"
                    id="address"
                  ></textarea>
                </div>
                <button className="py-2 px-5 border-0 rounded-pill bg-black text-white d-block mx-auto mt-3 ">
                  Apply Now
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Forms;
