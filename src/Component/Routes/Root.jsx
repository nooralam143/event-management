import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../Header/Navbar";
import Footer from "../../Footer/Footer";


const Root = () => {
    const navigation = useNavigate();
    return (
        <div>
            <Navbar></Navbar>
            {
                navigation.state === "loading" ?
                    <span className="loading loading-spinner loading-lg"></span> :
                    <Outlet></Outlet>
            }

            <Footer></Footer>
        </div>
    );
};

export default Root;