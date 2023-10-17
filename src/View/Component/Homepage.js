import { Button, Form, FormControl, FormGroup, FormLabel, } from 'react-bootstrap';
import BannerCarousel from "../Component/Banner";
import DefaultTemplate from "../Template/DefaultTemplate";
import { FaSearch } from "react-icons/fa";
import JobDetail from './job_details';
import JobListing from './job_listing';
import "../Assets/scss/stylingSon.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function HomePage() {
    return (
        <DefaultTemplate>

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
                <JobListing />
                {/* <RecruiterList /> */}
            </div>

        </DefaultTemplate >
    );
}
