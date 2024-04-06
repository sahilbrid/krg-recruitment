// JobBox.jsx
import React from 'react';
import image30 from '../../rupee.jpg';
import image20 from '../../jobimg.jpg';


const JobBox = ({ jobTitle, salary, location, description, imagePath }) => {
  return (
    <div className="jobbox_box">
      <div className="jobbox_frame-6">
      <img className="jobbox_image-2" src={image20} alt="Job" />
        <div className="jobbox_line-3"></div>
        <div className="jobbox_text-scale">
          <div className="jobbox_5">{jobTitle}</div>
        </div>
        <div className="jobbox_text-scale2">
          <div className={"jobbox_66"}>{salary}</div>
        </div>
        
        <div className="jobbox_text-scale3">
          <div className="jobbox_6 jobbox_77">{location}</div>
        </div>
        <div className="jobbox_frame-7">
          <div className="jobbox_text-scale4">
            <div className="jobbox_6">{description}</div>
          </div>
        </div>
        <img className="jobbox_image-33" src={image30} alt="Random" />
        <div className="jobbox_rectangle-28"></div>
      </div>
    </div>
  );
};

export default JobBox;
