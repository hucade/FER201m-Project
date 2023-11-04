import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import BannerCarousel from "../Component/Banner";
import DefaultTemplate from "../Template/DefaultTemplate";
import { FaSearch, FaPenAlt, FaDesktop, FaNewspaper, FaMobileAlt, FaHouzz, FaMicrochip, FaLaptopHouse, FaRegHandPaper } from "react-icons/fa";
import "../Assets/scss/stylingSon.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from "../Assets/cv_bg.jpg"
import Header from './Header';
export default function HomePage() {

    const containerStyle = {
        backgroundImage: backgroundImage,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        paddingTop: '90px',
        paddingBottom: '120px',
    };
    return (<>
        <Header></Header>
        <Container>
            <div className="container-fluid">
                <Row className="row Banner">
                    <BannerCarousel />
                </Row>
                <Row className="row searchBar">
                    <Form>
                        <Form.Group>
                            <input placeholder="Search Jobs" />
                            <button type="submit"><FaSearch /></button>
                        </Form.Group>
                    </Form>
                </Row>

                <div className="our-services section-pad-t30">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="section-tittle text-center">
                                    <h2 style={{ marginBottom: '50px' }}>Browse Top Categories</h2>
                                </div>
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center m-3">
                            <Col xl={3} lg={3} md={4} sm={6}>
                                <div className="single-services text-center mb-30">
                                    <div className="services-ion">
                                        <span><FaPenAlt size='5rem' /></span>
                                    </div>
                                    <div className="services-cap">
                                        <h5><a href="./JobListing">Design & Creative</a></h5>
                                        <span>(653)</span>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6}>
                                <div className="single-services text-center mb-30">
                                    <div className="services-ion">
                                        <span><FaDesktop size='5rem' /></span>
                                    </div>
                                    <div className="services-cap">
                                        <h5><a href="./JobListing">Design & Development</a></h5>
                                        <span>(658)</span>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6}>
                                <div className="single-services text-center mb-30">
                                    <div className="services-ion">
                                        <span><FaNewspaper size='5rem' /></span>
                                    </div>
                                    <div className="services-cap">
                                        <h5><a href="./JobListing">Sales & Marketing</a></h5>
                                        <span>(658)</span>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6}>
                                <div className="single-services text-center mb-30">
                                    <div className="services-ion">
                                        <span><FaMobileAlt size='5rem' /></span>
                                    </div>
                                    <div className="services-cap">
                                        <h5><a href="./JobListing">Mobile Application</a></h5>
                                        <span>(658)</span>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6}>
                                <div className="single-services text-center mb-30">
                                    <div className="services-ion">
                                        <span><FaHouzz size='5rem' /></span>
                                    </div>
                                    <div className="services-cap">
                                        <h5><a href="./JobListing">Construction</a></h5>
                                        <span>(658)</span>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6}>
                                <div className="single-services text-center mb-30">
                                    <div className="services-ion">
                                        <span><FaMicrochip size='5rem' /></span>
                                    </div>
                                    <div className="services-cap">
                                        <h5><a href="./JobListing">Information Technology</a></h5>
                                        <span>(658)</span>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6}>
                                <div className="single-services text-center mb-30">
                                    <div className="services-ion">
                                        <span><FaLaptopHouse size='5rem' /></span>
                                    </div>
                                    <div className="services-cap">
                                        <h5><a href="./JobListing">Real Estate</a></h5>
                                        <span>(658)</span>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={3} md={4} sm={6}>
                                <div className="single-services text-center mb-30">
                                    <div className="services-ion">
                                        <span><FaRegHandPaper size='5rem' /></span>
                                    </div>
                                    <div className="services-cap">
                                        <h5><a href="./JobListing">Content Writer</a></h5>
                                        <span>(658)</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <div className="browse-btn2 text-center mt-50">
                                    <a href="./JobListing" className="border-btn2">Browse All Sectors</a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="online-cv cv-bg section-overly" style={containerStyle}>
                <Container>
                    <Row className="justify-content-center">
                        <Col xl={10}>
                            <div className="cv-caption text-center">
                                <p className="pera2">Make a Difference with Your Online Resume!</p>
                                <Button href="./applyjob" className="border-btn2 border-btn4">Upload your cv</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="online-cv cv-bg section-overly" style={containerStyle}>
                <Container>
                    <Row className="justify-content-center">
                        <Col xl={10}>
                            <div className="cv-caption text-center">
                                <p className="pera2">Make a Difference with Your Online Resume!</p>
                                <Button href="./postjob" className="border-btn2 border-btn4">Post A Job</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    </>
    );
}
