import { Col, Container, Row } from "react-bootstrap";
import about from "../assets/img/about-img.png"
const About = () => {
    return (
        <div className="about">
        <Container>
            <Row>
                <Col md={5} xl={4} className=" text-center">
                    <h1 className="mb-3">About <span className="d-xl-none">CAT token</span></h1>
                    <div className="about-img">
                        <img src={about} alt=""/>
                    </div>
                </Col>
                <Col md={7} xl={8} >
                    <div className="line"></div>
                    <div className="about-content d-flex align-items-center">
                        <Col md={12} xl={6} className=" text-center text-xl-start">
                            <p>Welcome to the Cat Dog website, where we celebrate the unique bond between felines and canines! Our platform is dedicated to showcasing the wonderful harmony that exists between cats and dogs, despite their differences. Whether
                                you &apos;re a cat lover, a dog enthusiast,
                            </p>
                            <a href="#" className="primary-btn">How It Works</a>
                        </Col>
                        <Col md={6} className=" d-none d-xl-block">
                            <h1>CAT token</h1>
                        </Col>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default About;