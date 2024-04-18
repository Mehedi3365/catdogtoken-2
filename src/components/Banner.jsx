import { Col, Container, Row } from "react-bootstrap";
import bannerimg from '../assets/img/banner-img.png';
import bannercard1 from '../assets/img/banner-card-icon-1.svg';
import bannercard2 from '../assets/img/banner-card-icon-2.svg';
import bannercard3 from '../assets/img/banner-card-icon-3.svg';

import { useEffect, useState } from "react";


const Banner = () => {
    const endDate = "2024-06-18";
    const calculateTimeLeft = () => {
        const difference = +new Date(endDate) - +new Date();
        let timeLeft;
        if (difference > 0) {
            timeLeft = [
                {
                    title: 'days',
                    time: Math.floor(difference / (1000 * 60 * 60 * 24))
                },
                {
                    title: 'hours',
                    time: Math.floor((difference / (1000 * 60 * 60)) % 24)
                },
                {
                    title: 'Min',
                    time: Math.floor((difference / 1000 / 60) % 60)
                },
                {
                    title: 'Sec',
                    time: Math.floor((difference / 1000) % 60)
                },
            ]
        }
        return timeLeft;
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
    });
    return (
        <div className="banner">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="banner-wrap d-flex flex-wrap justify-content-center">
                            <Col xs={12} xxl={10}>
                                <div className="banner-content position-relative z-1 text-center">
                                    <h1 className="text-uppercase ">cat dog TOKEN</h1>
                                    <p>Welcome to the Cat Dog website, where we celebrate the unique bond between felines and canines! Our platform is dedicated to showcasing the wonderful harmony that exists between cats and dogs.</p>
                                    <a href="#" className="btn primary-btn">Learn More</a>
                                </div>
                            </Col>
                            <Col md={6} xxl={6} className=" d-flex align-items-start">
                                <div className="banner-img">
                                    <img src={bannerimg} alt=""/>
                                </div>
                            </Col>
                            <Col md={8} xxl={6} className=" d-flex justify-content-center justify-content-xxl-end align-items-start">
                                <div className="banner-card">
                                    <h2 className="text-center">cat dog TOKEN launches on day Last chance to buy!</h2>
                                    <div className="banner-card-date d-flex justify-content-center align-items-center">
                                        {timeLeft.map((time, index) => (
                                            <div className="banner-card-date-single" key={index}>
                                                <svg width="56" height="56" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M56.1516 28.285C56.1516 43.3942 43.8289 55.6477 28.6219 55.6477C13.4148 55.6477 1.09216 43.3942 1.09216 28.285C1.09216 13.1759 13.4148 0.922363 28.6219 0.922363C43.8289 0.922363 56.1516 13.1759 56.1516 28.285Z"
                                                        stroke="white" />
                                                    <mask id="path-2-inside-1_1_3037" fill="white">
                                                        <path
                                                            d="M27.9625 0.330245C33.229 0.217052 38.4214 1.58048 42.9464 4.26478C47.4714 6.94908 51.1466 10.846 53.5521 15.5104C55.9577 20.1748 56.9966 25.4185 56.5501 30.6426C56.1037 35.8668 54.1899 40.8605 51.0274 45.0536C47.8649 49.2466 43.5812 52.4697 38.6657 54.3548C33.7502 56.2399 28.401 56.7109 23.2293 55.7141C18.0576 54.7172 13.2719 52.2926 9.4189 48.7174C5.56588 45.1421 2.80091 40.5603 1.43986 35.4954L2.5861 35.1902C3.88965 40.0412 6.53779 44.4294 10.228 47.8536C13.9182 51.2778 18.5017 53.5999 23.4549 54.5547C28.4081 55.5094 33.5312 55.0583 38.2391 53.2528C42.9469 51.4474 47.0496 48.3604 50.0785 44.3446C53.1073 40.3287 54.9403 35.5459 55.3678 30.5426C55.7954 25.5392 54.8004 20.517 52.4965 16.0497C50.1926 11.5824 46.6727 7.85009 42.3389 5.27921C38.0051 2.70832 33.0321 1.4025 27.9881 1.51091L27.9625 0.330245Z" />
                                                    </mask>
                                                    <path
                                                        d="M27.9625 0.330245C33.229 0.217052 38.4214 1.58048 42.9464 4.26478C47.4714 6.94908 51.1466 10.846 53.5521 15.5104C55.9577 20.1748 56.9966 25.4185 56.5501 30.6426C56.1037 35.8668 54.1899 40.8605 51.0274 45.0536C47.8649 49.2466 43.5812 52.4697 38.6657 54.3548C33.7502 56.2399 28.401 56.7109 23.2293 55.7141C18.0576 54.7172 13.2719 52.2926 9.4189 48.7174C5.56588 45.1421 2.80091 40.5603 1.43986 35.4954L2.5861 35.1902C3.88965 40.0412 6.53779 44.4294 10.228 47.8536C13.9182 51.2778 18.5017 53.5999 23.4549 54.5547C28.4081 55.5094 33.5312 55.0583 38.2391 53.2528C42.9469 51.4474 47.0496 48.3604 50.0785 44.3446C53.1073 40.3287 54.9403 35.5459 55.3678 30.5426C55.7954 25.5392 54.8004 20.517 52.4965 16.0497C50.1926 11.5824 46.6727 7.85009 42.3389 5.27921C38.0051 2.70832 33.0321 1.4025 27.9881 1.51091L27.9625 0.330245Z"
                                                        stroke="#73F7E0" strokeWidth="2" mask="url(#path-2-inside-1_1_3037)" />
                                                </svg>
                                                <div>
                                                    <span>{time.time}</span>
                                                    <p className="text-capitalize">{time.title}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* {timerComponents.length ? timerComponents : <h1 className='display-3 text-center mb-0 w-100 text-danger'>Time&apos;s up!</h1>} */}
                                    <div className="banner-card-content text-center">
                                        <h3>Till DOGE20 claim and launch</h3>
                                        <p className="opacity-75">Over $10M raised!</p>
                                        <p className="d-flex align-items-center">Your purchased DOGE20 = <span>&nbsp;
                                            0&nbsp;&nbsp;</span>
                                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.99996 18.4499C14.6023 18.4499 18.3333 14.7189 18.3333 10.1165C18.3333 5.51416 14.6023 1.7832 9.99996 1.7832C5.39759 1.7832 1.66663 5.51416 1.66663 10.1165C1.66663 14.7189 5.39759 18.4499 9.99996 18.4499Z"
                                                    stroke="white" strokeWidth="1.2" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                                <path d="M10 13.45V10.1167" stroke="white" strokeWidth="1.2"
                                                    strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10 6.7832H10.0083" stroke="white" strokeWidth="1.2"
                                                    strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </p>
                                        <p className="d-flex align-items-center">Your stakeable DOGE20 =<span>&nbsp;
                                            0&nbsp;&nbsp;</span>
                                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.99996 18.4499C14.6023 18.4499 18.3333 14.7189 18.3333 10.1165C18.3333 5.51416 14.6023 1.7832 9.99996 1.7832C5.39759 1.7832 1.66663 5.51416 1.66663 10.1165C1.66663 14.7189 5.39759 18.4499 9.99996 18.4499Z"
                                                    stroke="white" strokeWidth="1.2" strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                                <path d="M10 13.45V10.1167" stroke="white" strokeWidth="1.2"
                                                    strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10 6.7832H10.0083" stroke="white" strokeWidth="1.2"
                                                    strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </p>
                                        <h4>1 DOGE20 = <span>$0.00022</span></h4>
                                    </div>
                                    <div className="banner-card-btn d-flex align-items-center justify-content-center">
                                        <button className="card-btn ">
                                            <img src={bannercard1} alt="" />
                                            <span>ETH</span>
                                        </button>
                                        <button className="card-btn ">
                                            <img src={bannercard2} alt="" />
                                            <span>USDT</span>
                                        </button>
                                        <button className="card-btn ">
                                            <img src={bannercard3} alt="" />
                                            <span>FIAT</span>
                                        </button>
                                    </div>
                                    <div className="banner-card-input">
                                        <div className="title d-flex justify-content-between">
                                            <p>Pay with ETH</p>
                                            <p>Max</p>
                                        </div>
                                        <div className="input-wrap">
                                            <input type="text" defaultValue="0" placeholder="0" />
                                            <div className="input-wrap-btn">
                                                <img src={bannercard1} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="submit-btn">
                                        <p>Receive <span>DOGE20</span></p>
                                        <a href="#" className="primary-btn d-block text-center">Buy Now</a>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;