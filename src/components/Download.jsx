import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Download = () => {
  const social = [
    {
      icon: <FaLinkedinIn />,
      name: 'linkedin',
      url: '',
    },
    {
      icon: <FaDiscord />,
      name: 'discord',
      url: '',
    },
    {
      icon: <FaTelegramPlane />,
      name: 'telegram',
      url: '',
    },
  ]
  return (
    <div className="download">
      <Container>
        <div className="download-wrapper">
          <Row>
            <Col xs={12} md={6} lg={7} className="d-flex align-items-center">
              <div className="download-wrapper-title">
                <h2>Download the white paper</h2>
              </div>
            </Col>
            <Col xs={12} md={6} lg={5} className="">
              <div className="download-wrapper-content d-flex justify-content-center align-items-center  ">
                <div>
                  <p>
                    I can generate a relevant paragraph based on that
                    information. Please provide some details, and I'll do my
                    best to assist you!
                  </p>
                  <button className="btn">Download</button>
                </div>
              </div>
            </Col>
          </Row>
          <div className="download-wrapper-social d-flex justify-content-center gap-5 ">
            {social.map((item, index) => (
              <a href={item.url} target="_blank" className="image" key={index}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Download;
