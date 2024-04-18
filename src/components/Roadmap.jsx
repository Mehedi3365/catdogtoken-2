import { Col, Container, Row } from "react-bootstrap";


const Roadmap = () => {
    return (
        <div className="roadmap">
        <div className="roadmap-wrap">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="roadmap-title">
                            <h1>CAT DOG TOKEN</h1>
                            <h2>Roadmap</h2>
                        </div>
                    </Col>
                </Row>
                <div className="row justify-content-center">
                    <Col xs={12} lg={10} xxl={8}>
                        <div className="roadmap-item">
                            <div className="roadmap-item-single  d-md-flex align-items-center ">
                                <div className="num">
                                    <h1>P.1</h1>
                                </div>
                                <ul>
                                    <li>Initial Business Plan</li>
                                    <li>Protocol Development, Website</li>
                                    <li>Whitepaper</li>
                                    <li>Marketing Phase 1</li>
                                    <li>Presale on Pinksale</li>
                                    <li>Listing on PancakeSwap</li>
                                </ul>
                            </div>
                            <div className="roadmap-item-single  d-md-flex align-items-center">
                                <div className="num">
                                    <h1>P.2</h1>
                                </div>
                                <ul>
                                    <li>CoinGecko & CoinMarketCap</li>
                                    <li>MEV Bot Deployment & Testing</li>
                                    <li>Marketing Phase 2</li>
                                    <li>Airdrop and Promotions</li>
                                    <li>Increase Social Media Presence</li>
                                </ul>
                            </div>
                            <div className="roadmap-item-single  d-md-flex align-items-center">
                                <div className="num">
                                    <h1>P.3</h1>
                                </div>
                                <ul>
                                    <li>CEX Exchange Listings</li>
                                    <li>MEV Bot Activation</li>
                                    <li>MEV Bot Revenue for HECT</li>
                                    <li>Marketing Phase 3</li>
                                    <li>Reach 5,000+ Holders</li>
                                    <li>Reach $25M+ Market Cap</li>
                                </ul>
                            </div>
                            <div className="roadmap-item-single  d-md-flex align-items-center">
                                <div className="num">
                                    <h1>P.4</h1>
                                </div>
                                <ul>
                                    <li>Marketing Phase 4</li>
                                    <li>Viral Spread of Love for HECT</li>
                                    <li>Reach 10,000+ Holders</li>
                                    <li>Reach $100M+ Market Cap</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </div>
            </Container>
        </div>
    </div>
    );
};

export default Roadmap;