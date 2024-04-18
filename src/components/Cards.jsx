import { Col, Container, Row } from "react-bootstrap";
import cardimg from "../assets/img/card-img.png";

const Cards = () => {
  return (
    <div className="cards">
      <Container >
        <div className="cards-wrapper">
          <Row className="g-0">
            <Col xs={12} md={6} lg={3}>
              <div className="cards-content mb-2">
                <h2 className="title">EverLasting Burning</h2>
                <p>
                  Every Buy-Back transaction will automatically send the
                  purchased $HECT tokens to the Null Dead Address forever. These
                  continuous crypto burning events decrease
                </p>
                <div className="d-flex justify-content-end ">
                  <div className="image">
                    <img src={cardimg} alt="" />
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className="cards-content mb-2 active">
                <h2 className="title">AUTOMATED BUY BACK</h2>
                <p>
                On each and every buy/sell transaction of Hectic Turkey token, 1.5% is converted to $BNB and stored in the HABB (Hectic Automatic Buy-Back) contract. Each time the HABB has accrued 5 $BNB, an automatic trigger will Buy-Back $HECTat the current crypto market rate
                </p>
                <div className="d-flex justify-content-end ">
                  <div className="image">
                    <img src={cardimg} alt="" />
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className="cards-content mb-2">
                <h2 className="title">Slippage (Tax)</h2>
                <p>
                BUY / SELL <br /> Marketing & Dev: 1.0% / 1.0% Buy Back & Burn: 1.5% / 1.5% Total Slippage 2.5% / 2.5%
                </p>
                <div className="d-flex justify-content-end ">
                  <div className="image">
                    <img src={cardimg} alt="" />
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className="cards-content mb-2">
                <h2 className="title">Liquidity Locked</h2>
                <p>
                100% of initial liquidity will be automatically locked on Pinklock for 24 months with available crypto re-lock extension.
                </p>
                <div className="d-flex justify-content-end ">
                  <div className="image">
                    <img src={cardimg} alt="" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Cards;
