import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
            <div className="px-40"><Header></Header></div>
            <div className="my-12 px-40">
                <Outlet></Outlet>
            </div>
            <div><Footer></Footer></div>
        </div>
    );
};

export default Root;