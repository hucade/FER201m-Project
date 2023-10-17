import Footer from "../Component/Footer";
import Header from "../Component/Header";
import "../Assets/scss/Footer.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function DefaultTemplate({ children }) {
    return (
        <div>
            <Header />
            <div className="row" style={{ minHeight: "650px" }}>
                {children}
            </div>

            <Footer />
        </div>
    );
}
