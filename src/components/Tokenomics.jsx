import { Col, Container, Row } from "react-bootstrap";
import tokenomics from "../assets/img/tokenomics-img.png"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const Tokenomics = () => {
    const tokenData = [
        {
            title: 'Pancake Swap Liquidity',
            percent: '45',
            color:'#FFFFFF',
        },
        {
            title: 'Presale',
            percent: '45',
            color:'#742BFB',
        },
        {
            title: 'Presale Bonus',
            percent: '10',
            color:'#FF26A5',
        },
    ];
    const data = {
        labels: tokenData.map((item) => item.title),
        datasets: [
          {
            label: '# of Votes',
            data: tokenData.map((item) => item.percent),
            backgroundColor: tokenData.map((item) => item.color),
            borderColor: tokenData.map((item) => item.color),
            borderWidth: 1,
            hoverOffset: 4,
          },
        ],
      };
    
      const options = {
        cutoutPercentage: 100,
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
            displayColors: false,
          }
        },
      }
    return (
    <div className="tokenomics">
        <div className="tokenomics-wrap">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="tokenomics-title">
                            <h1 className="text-uppercase">Hectic turkey</h1>
                            <h2 className="text-uppercase">tokenomics</h2>
                            <p> With CAT DOG TOKEN, investors and pet lovers alike can join a community that celebrates diversity and mutual respect. As we pave the way for a brighter future in the blockchain space, we invite you to be a part of this exciting
                                journey. </p>
                        </div>
                    </Col>
                </Row>
                <Row className=" align-items-center justify-content-center">
                    <Col xs={12} md={11} lg={4}>
                        <div className="tokenomics-content">
                            <div className="tokenomics-content-item">
                                <h3>Token Name</h3>
                                <p>Hectic Turkey</p>
                            </div>
                            <div className="tokenomics-content-item">
                                <h3>NETWORK</h3>
                                <p>Binance Smart Chain (BEP - 20)</p>
                            </div>
                            <div className="tokenomics-content-item">
                                <h3>TOKEN SYMBOL</h3>
                                <p>HECT</p>
                            </div>
                            <div className="tokenomics-content-item">
                                <h3>LISTING ON PANCAKESWAP</h3>
                                <p>4,400,000,000,000 HECT</p>
                            </div>
                            <div className="tokenomics-content-item">
                                <h3>TOTAL SUPPLY</h3>
                                <p>8,800,000,000,000 HECT</p>
                            </div>
                            <div className="tokenomics-content-item">
                                <h3>LIQUIDITY LOCKED</h3>
                                <p>100%</p>
                            </div>
                            <div className="tokenomics-content-item">
                                <h3>LIQUIDITY LOCKUP TIME</h3>
                                <p>24 Months</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={8} className=" d-flex flex-wrap align-items-center justify-content-center">
                        <Col xs={10} md={7} lg={8}>
                            <div className="tokenomics-img text-center">
                                {/* <img src={tokenomics} alt=""/> */}
                                <Doughnut data={data} options={options} />
                            </div>
                        </Col>
                        <Col xs={10} md={5} lg={4} className=" d-flex align-items-center justify-content-center justify-content-md-end">
                            <div className="tokenomics-percent">
                                {tokenData.map((item,index) => (                                    
                                    <div className="tokenomics-percent-single" style={{backgroundColor: item.color}} key={index}>
                                        <span>{item.percent}%</span>
                                        <h4>{item.title}</h4>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
    );
};

export default Tokenomics;