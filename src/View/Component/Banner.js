
import "../Assets/scss/stylingSon.scss"
import BannerImg from "../Assets/h1_hero.jpg"
export default function BannerCarousel() {

    return (
        <div className="Banner Col-12">
            <img style={{ width: "100%" }} src={BannerImg} />
        </div>
    );

}