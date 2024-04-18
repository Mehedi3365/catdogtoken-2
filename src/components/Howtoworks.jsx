
import { Col, Container, Row } from "react-bootstrap";
import howtoworksimg from "../assets/img/howtowoprks.png"
const Howtoworks = () => {
  return (
    <div className="howtoworks">
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <div className="howtoworks-content">
              <div className="howtoworks-content-title">
                <h2 className="title1">how it</h2>
                <h2 className="title2">Works</h2>
              </div>
              <p>Introducing CAT DOG TOKEN – the newest addition to the crypto world that brings together the best of both feline and canine enthusiasts! Our token embodies the spirit of unity and harmony, reflecting the timeless bond shared between cats and dogs.</p>
            </div>
          </Col>
          <Col xs={12} lg={6} className="d-flex align-items-center">
            <div className="image">
              <img src={howtoworksimg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Howtoworks;