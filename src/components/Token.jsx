import { Col, Container, Row } from "react-bootstrap";
import token from "../assets/img/token-img.png";
// import token from "../assets/img/token.png";

const Token = () => {
  const tokenlist = [
    {
      title: "Network",
      desc: "Binnace Smart Chain (BEP-20)",
    },
    {
      title: "Total Supply",
      desc: "8,800,000,000,000 HECT",
    },
    {
      title: "Presale On Pinksale",
      desc: "4,400,000,000,000 HECT",
    },
    {
      title: "Pancakeswap Liquidity  ",
      desc: "4,400,000,000,000 HECT",
    },
    {
      title: "Contract Address",
      desc: "TBA",
    },
    {
      title: "Decimals",
      desc: "18",
    },
  ];
  const tokenlist2 = [
    {
      title: "Soft Cap",
      desc: "Binnace Smart Chain (BEP-20)",
    },
    {
      title: "Hard Cap",
      desc: "8,800,000,000,000 HECT",
    },
    {
      title: "Presale Rate = 1 BNB",
      desc: "4,400,000,000,000 HECT",
    },
    {
      title: "Initial Market Cap",
      desc: "4,400,000,000,000 HECT",
    },
    {
      title: "Unsold Tokens  ",
      desc: "TBA",
    },
  ];
  return (
    <div className="token">
      <Container>
        <div className="token-title ">
          <h2 className="title1">CAT DOG TOKEN</h2>
          <h2 className="text-end title2 ">how to buy</h2>
        </div>
        <Row>
          <Col xs={12} md={6} lg={3}>
            {tokenlist.map((item, idx) => (
              <div key={idx} className="token-list">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className="token-img">
              <div className="image">
                <img src={token} alt="" />
              </div>
                <div className="bg-blur">
                  <p className="text-center ">dog cat token</p>
                </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            {tokenlist2.map((item, idx) => (
              <div key={idx} className="token-list">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Token;
