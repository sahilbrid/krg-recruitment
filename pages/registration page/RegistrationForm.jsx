import React, { useState } from 'react';
import './RegistrationForm.css'; 
import { Link } from 'react-router-dom';
import axios from 'axios'

const RegistrationForm = () => {
  const [values, setValues] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    residentialCity: '',
    residentialAddress: '',
    personalEmail: '',
    workEmail: '',
    mobileNumber: '',
    whatsappNumber: '',
    education: '',
    professionalMembership: '',
    membershipNumber: '',
    currentJobDesignation: ''
  })

  const handleChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("Form values:", values);
    // axios.post('http://localhost:5000/registration', values)
    // .then(res => {
    //   console.log('Registered Successfully')
    //   window.alert('Registered Successfully!')
    //   document.getElementById('login-link').click();
    //   // history.push('/login')
    // })
    // .catch(err => console.log(err))

    // console.log(values);

    try {
      // Send POST request to backend to save registration data
      const response = await axios.post('https://kvnca3jyip.ap-south-1.awsapprunner.com/registration', values);
      console.log(response.data);
      window.alert("Registered Successfully!");
      document.getElementById('login-link').click();
    } catch (error) {
      console.error('Error saving registration data:', error);
      alert("Error saving registration data. Please try again.");
    }

    // Perform any additional logic here, such as form validation or API submission
    // For now, just log the form data
    // console.log({
    //   firstName,
    //   middleName,
    //   lastName,
    //   residentialCity,
    //   residentialAddress,
    //   personalEmail,
    //   workEmail,
    //   mobileNumber,
    //   whatsappNumber,
    //   education,
    //   professionalMembership,
    //   membershipNumber,
    //   currentJobDesignation,
    //   resume,
    // });
  };

  return (
    <div className="container_registrationpage">
      <h1 className="text-3xl_registrationpage font-semibold_registrationpage">Registration Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Personal Info */}
        <div className="form-group_registrationpage">
          <label className='required' htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name='firstName' onChange={handleChange} required/>
        </div>
        <div className="form-group_registrationpage">
          <label className='required' htmlFor="middleName">Middle Name:</label>
          <input type="text" id="middleName" name='middleName' onChange={handleChange} required/>
        </div>
        <div className="form-group_registrationpage">
          <label className='required' htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name='lastName' onChange={handleChange} required/>
        </div>

        {/* Residential Info */}
        <div className="form-group_registrationpage">
          <label className='required' htmlFor="residentialCity">Residential City:</label>
          <input type="text" id="residentialCity" name='residentialCity' onChange={handleChange} required/>
        </div>
        <div className="form-group_registrationpage">
          <label className='required' htmlFor="residentialAddress">Residential Address:</label>
          <textarea id="residentialAddress" name='residentialAddress' onChange={handleChange} required/>
        </div>

        {/* Contact Info */}
        <div className="form-group_registrationpage">
          <label className='required' htmlFor="personalEmail">Personal Email:</label>
          <input type="email" id="personalEmail" name='personalEmail' onChange={handleChange} required/>
        </div>
        <div className="form-group_registrationpage">
          <label className='required' htmlFor="workEmail">Work Email:</label>
          <input type="email" id="workEmail" name='workEmail' onChange={handleChange} required/>
        </div>
        <div className="form-group_registrationpage">
          <label className='required' htmlFor="mobileNumber">Mobile Phone Number:</label>
          <input type="tel" id="mobileNumber" name='mobileNumber' onChange={handleChange} required/>
        </div>
        <div className="form-group_registrationpage">
          <label className='required' htmlFor="whatsappNumber">WhatsApp Number:</label>
          <input type="tel" id="whatsappNumber" name='whatsappNumber' onChange={handleChange} required/>
        </div>

        {/* Professional Info */}
        <div className="form-group_registrationpage">
          <label className='required' htmlFor="education">Education:</label>
          <input type="text" id="education" name='education' onChange={handleChange} required/>
        </div>
        <div className="form-group_registrationpage">
          <label className='required' htmlFor="professionalMembership">Membership of Professional Body:</label>
          <input type="text" id="professionalMembership" name='professionalMembership' onChange={handleChange} required/>
        </div>
        <div className="form-group_registrationpage">
          <label htmlFor="membershipNumber">Membership Number:</label>
          <input type="text" id="membershipNumber" name='membershipNumber' onChange={handleChange}/>
        </div>
        <div className="form-group_registrationpage">
          <label className='required' htmlFor="currentJobDesignation">Current Job Designation:</label>
          <input type="text" id="currentJobDesignation" name='currentJobDesignation' onChange={handleChange} required/>
        </div>

        {/* Resume Upload */}
        {/* <div className="form-group_registrationpage">
          <label htmlFor="resume">Upload Resume:</label>
          <input type="file" id="resume" onChange={(e) => setResume(e.target.files[0])} />
        </div> */}

        {/* Submit Button */}
        <button type="submit" className="create-account-btn_registrationpage">
        Submit
        </button>

        <Link to="/login" style={{ display: 'none' }} id="login-link"></Link>
        {/* <button type="submit" className="create-account-btn_registrationpage">
        <a href="/login">Submit</a>
        </button> */}
        {/* <Link to='/login'><button type="submit" className="create-account-btn_registrationpage">
          Submit
        </button></Link> */}
      </form>
    </div>
  );
};

export default RegistrationForm;
