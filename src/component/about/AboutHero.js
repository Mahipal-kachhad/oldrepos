import { Col, Container, Row } from "react-bootstrap";

function AboutHero() {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="text-center text-head pt-4">About Us</h2>
          <p className="text-center py-2">
            Our story is a passion for <br />
            clean homes and happy clients
          </p>
          <video
            className="w-100 rounded-3"
            src={require('../../images/abouthero/file.mp4')}
            muted
            autoPlay
            loop
          ></video>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutHero;
