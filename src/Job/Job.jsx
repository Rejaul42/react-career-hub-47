import { GrLocation } from "react-icons/gr";
import { AiOutlineDollar } from "react-icons/ai";
const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p className="text-left text-2xl">{company_name}</p>
                <div className="my-4">
                    <div>
                    <button className="px-6 py-2 font-bold text-xl border rounded border-blue-500 text-blue-600 mr-4">{remote_or_onsite}</button>
                    <button className="px-6 py-2 font-bold text-xl border rounded border-blue-500 text-blue-600 mr-4">{job_type}</button>
                    </div>
                    <div className=" mt-4 flex justify-between font-semibold text-xl">
                        <p className="flex gap-2"><GrLocation className="text-2xl"></GrLocation>{location}</p>
                        <p className="flex gap-2"><AiOutlineDollar className="text-2xl"></AiOutlineDollar>Salary: {salary}</p>
                    </div>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;