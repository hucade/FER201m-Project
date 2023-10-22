import "../Assets/scss/stylingSon.scss"
import BannerImg from "../Assets/h1_hero.jpg"
import Anh1 from "../Assets/anh1.jpg"
import { Carousel } from "react-bootstrap";
export default function BannerCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img style={{ width: "100%" }} src={BannerImg} />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ width: "100%", height: "100%" }} src={Anh1} />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        // <div className="Banner">
        //     <img style={{ width: "100%" }} src={BannerImg} />
        // </div>
    );

}