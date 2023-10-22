import { Button, Form, FormControl, FormGroup, FormLabel, } from 'react-bootstrap';
import BannerCarousel from "../Component/Banner";
import DefaultTemplate from "../Template/DefaultTemplate";
import { FaSearch } from "react-icons/fa";
import "../Assets/scss/stylingSon.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function HomePage() {
    return (

            <div className="container-fluid">
                <div className="row Banner">
                    <BannerCarousel />

                </div>
                <dib className="row searchBar">
                    <form>
                        <input placeholder="Search Jobs" />
                        <button type="submit"><FaSearch /></button>
                    </form>
                </dib>
                {/* <RecruiterList /> */}
            </div>

    );
}
