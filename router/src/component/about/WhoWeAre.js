import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

function WhoWeAre() {
  return (
   <Container>
     <Row className="pt-5">
      <Col className="col-12 col-md-6 col-lg-5">
        <img className="w-100 rounded-2" src={require("../../images/whoweare/image.jpg")}/>
      </Col>
      <Col className="col-12 col-md-6 col-lg-5">
        <div className="d-flex flex-column justify-content-center h-100 align-items-start ps-2">
        <h1 className="text-head">Who We Are</h1>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It's
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I'm a great place for you to
          tell a story and let your users know a little more about you.
        </p>
        </div>
      </Col>
    </Row>
   </Container>
  );
}

export default WhoWeAre;
