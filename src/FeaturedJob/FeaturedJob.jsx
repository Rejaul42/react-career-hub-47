import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJob = () => {
    const [jobs, setJobs] = useState([]);
    const [data, setData] = useState(4);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);
    return (
        <div>
            <div className="text-center">
            <h2 className="text-5xl font-semibold">Job Category List: {jobs.length}</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className=" grid grid-cols-2 gap-8 mt-8">
                {
                    jobs.slice(0, data).map(job => <Job job={job} key={job.id}></Job>)
                }
            </div>
            <div className={data === jobs.length ? 'hidden' : ''}>
            <button className="btn btn-primary mt-8 " 
            onClick={() =>setData(jobs.length)}>Show All</button>
            </div>
        </div>
    );
};

export default FeaturedJob;