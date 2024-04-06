import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import '../../css/RecommendedJobs.css';
import JobBox from '../../components/landingpage/JobBox'; // Import the JobBox component

const RecommendedJobs = () => {
  return (
    <>
      <div className="jobbox_recommended-container">
        <div className="jobbox_rectangle-18">
          <div className="jobbox_rectangle-17"></div>
        </div>
        <div className="jobbox_recommended-jobs">Recommended jobs</div>
      </div>
      <div className="jobbox_box_class">
        <div className='jobbox_jobtabs_homepage'>
          <Link to="/companypage"> {/* Wrap JobBox with Link */}
            <JobBox
              jobTitle="Web Designer"
              salary="3 - 15 L.P.A"
              location="Mumbai"
              description="Exciting opportunity for a skilled web developer. Apply now!"
              imagePath="image-20.png"
              className="web-developer-box"
            />
          </Link>
          <Link to="/companypage"> {/* Wrap JobBox with Link */}
            <JobBox
              jobTitle="Web Designer"
              salary="3 - 15 L.P.A"
              location="Mumbai"
              description="Exciting opportunity for a skilled web developer. Apply now!"
              imagePath="image-20.png"
              className="web-developer-box"
            />
          </Link>
        </div>

        <div className='jobbox_jobtabs_homepage'>
          <Link to="/companypage"> {/* Wrap JobBox with Link */}
            <JobBox
              jobTitle="Web Designer"
              salary="3 - 15 L.P.A"
              location="Mumbai"
              description="Exciting opportunity for a skilled web developer. Apply now!"
              imagePath="image-20.png"
              className="web-developer-box"
            />
          </Link>
          <Link to="/companypage"> {/* Wrap JobBox with Link */}
            <JobBox
              jobTitle="Web Designer"
              salary="3 - 15 L.P.A"
              location="Mumbai"
              description="Exciting opportunity for a skilled web developer. Apply now!"
              imagePath="image-20.png"
              className="web-developer-box"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default RecommendedJobs;