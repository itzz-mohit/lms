import React,{useState} from "react";
import { coursesList } from "../../utils/coursesMockData";
import CoursesCards from "../Cards/CoursesCards";
import Banner from "../Banner/Banner";
import { SmallCard } from "../Cards/SmallCard";

const Dashboard = () => {
  const [data, setdata] = useState("")

  const handleSearchDashboard = (implementSearch) =>{
    setdata(implementSearch)
  }
  return (
    <div className="mx-8">
      <Banner implementSearch={handleSearchDashboard} />
      <div className="flex flex-wrap">
        <SmallCard />
        <SmallCard />
      </div>
      <div className="text-2xl text-gray-400 ms-4 mt-7">Active Courses</div>
      <div>{data}</div>

      <div className="flex flex-wrap ">
        {coursesList.map((course, index) => (
          <CoursesCards key={{ index }} value={course} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
