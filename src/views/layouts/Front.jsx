import {Outlet} from "react-router-dom";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";

const Front = () => {
    return (
        <section>
            <Header />
            <Outlet />
            <Footer />
        </section>
    );
};

export default Front;