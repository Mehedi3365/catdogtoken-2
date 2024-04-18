import { Col, Container, Row } from "react-bootstrap";
import card from "../assets/img/cardimg.png";

const OurTeams = () => {
  const team = [
    {
      img: card,
      name: 'Cat Dog Token',
      des: 'Managing Director',
    },
    {
      img: card,
      name: 'Cat Dog Token',
      des: 'Managing Director',
    },
    {
      img: card,
      name: 'Cat Dog Token',
      des: 'Managing Director',
    },
    {
      img: card,
      name: 'Cat Dog Token',
      des: 'Managing Director',
    },
    {
      img: card,
      name: 'Cat Dog Token',
      des: 'Managing Director',
    },
    {
      img: card,
      name: 'Cat Dog Token',
      des: 'Managing Director',
    },
    {
      img: card,
      name: 'Cat Dog Token',
      des: 'Managing Director',
    },
    {
      img: card,
      name: 'Cat Dog Token',
      des: 'Managing Director',
    },
  ]
  return (
    <div className="ourteams">
      <Container>
        <div className="ourteams-title">
          <h2 className="title1 fw-normal">OUR TEAM MEMBERS</h2>
          <h2 className="title2 fw-normal text-end">MEET OUR TEAM!</h2>
        </div>
        <Row>
          {team.map((item, index) => (
            <Col xs={12} md={6} lg={3} key={index}>
              <div className="ourteams-card-content mt-4">
                <div className="image d-flex justify-content-center mx-auto">
                  <img src={item.img} alt="" />
                </div>
                <h2 className="text-white fw-normal">{item.name}</h2>
                <p className="text-white fw-normal">{item.des}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OurTeams;
