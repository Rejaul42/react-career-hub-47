import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className=" text-center">
            <p className="text-4xl font-bold text-center">Opps!!</p>
            <button className="text-center text-2xl px-6 mt-8 py-4 bg-blue-700 font-semibold text-white rounded-lg"><Link to='/'>Go to Home</Link></button>
        </div>
    );
};

export default ErrorPage;