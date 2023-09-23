import FeaturedJob from "../../FeaturedJob/FeaturedJob";
import JobCategory from "../../JobCategory/JobCategory";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;