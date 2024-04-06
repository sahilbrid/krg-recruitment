import React from 'react';
import '../../css/Domain.css';


const  DomainSection= () => {
    return (
      <>
      <div className="jobbox_recommended-container">
        <div className="jobbox_rectangle-18">
          <div className="jobbox_rectangle-17"></div>
        </div>
        <div className="jobbox_recommended-jobs">Domains</div>
      </div>

      <div className='dSection'>
    <button className='dButton'>Developer</button>
    <button className='dButton'>Banking</button>
    <button className='dButton'>Start Up</button>
    <button className='dButton'>Supply Chain</button>
    <button className='dButton'>Data Analyst</button>
    <button className='dButton'>Project Management</button>
    <button className='dButton'>Free Lancer</button>
    <button className='dButton'>Marketing</button>
    <button className='dButton'>Data Science</button>
    <button className='dButton'>Finance</button>
    <button className='dButton'>Engineer</button>
  </div>
      </>
    );
  };
  
  export default DomainSection;