import React, { useState, useEffect } from "react";
import { coursesList } from "../../utils/coursesMockData";
import CoursesCards from "../Cards/CoursesCards";
import Banner from "../Banner/Banner";
import { SmallCard } from "../Cards/SmallCard";

const Dashboard = () => {
  const [filteredCourse, setfilteredCourse] = useState([]);
  const [coursesData, setcoursesData] = useState(coursesList);

  useEffect(() => {
    setfilteredCourse(coursesData);
  }, []);

  const handleSearch = (container) => {
    const filtered = coursesData.filter((course) =>
      course.title.toLowerCase().includes(container.toLowerCase())
    );

    setfilteredCourse(filtered);
  };
  return (
    <div className="mx-8">
      <Banner container={handleSearch} />
      <div className="flex flex-wrap">
        <SmallCard />
        <SmallCard />
      </div>
      <div className="text-2xl text-gray-400 ms-4 mt-7">Active Courses</div>

      <div className="flex flex-wrap "> 
        {filteredCourse.map((course, index) => (
          <CoursesCards key={{ index }} value={course} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
