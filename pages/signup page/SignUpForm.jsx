import React, { useState } from 'react';
import RegistrationForm from '../registration page/RegistrationForm.jsx';
import { Link } from 'react-router-dom';
import './SignUpForm.css';
import axios from 'axios';

const SignUpForm = () => {
  // const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value})
  }

  const handleSubmit = async (e) => {
    // Check if passwords match
    // if (password !== confirmPassword) {
    //   alert("Passwords do not match. Please try again.");
    //   return;
    // }
    e.preventDefault()
    console.log('Form submitted')
    if (values.password !== values.confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    try {
      // Send POST request to backend to save email and password
      const response = await axios.post('http://localhost:5000/register', {email: values.email, password: values.password});
      console.log(values.email, values.password)
      console.log(response.data);
      window.alert("Account created successfully. Please proceed to registration.");
      document.getElementById('login-link').click();
      // history.push('/registration');
    } catch (error) {
      console.error('Error creating account:', error);
      alert("Error creating account. Please try again.");
    }
  
    // Attempt to create the account
    // const accountCreated = createAccount();
  
    // Show the RegistrationForm modal only if the account creation was successful
    // if (accountCreated) {
    //   // setShowRegistrationForm(true);
    //   alert("Account created successfully. Please proceed to login.");
    // }
  };

  // const handleCloseRegistrationForm = () => {
  //   // Close the RegistrationForm modal
  //   setShowRegistrationForm(false);
  // };

  // const createAccount = () => {
  //   // Rest of the code for checking password strength and creating the account
  //   const isStrongPassword = checkPasswordStrength(password);
  
  //   if (!isStrongPassword) {
  //     alert("Weak password. Please ensure your password meets the criteria.");
  //     return false; // Return false to indicate account creation failure
  //   }
  //   return true; // Return true to indicate successful account creation
  // };

  // const checkPasswordStrength = (password) => {
  //   const uppercaseRegex = /[A-Z]/;
  //   const lowercaseRegex = /[a-z]/;
  //   const numericRegex = /[0-9]/;
  //   const specialCharRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/;
  //   const minLength = 8;

  //   const hasUppercase = uppercaseRegex.test(password);
  //   const hasLowercase = lowercaseRegex.test(password);
  //   const hasNumeric = numericRegex.test(password);
  //   const hasSpecialChar = specialCharRegex.test(password);
  //   const hasMinLength = password.length >= minLength;

  //   const strengthScore = [
  //     hasUppercase,
  //     hasLowercase,
  //     hasNumeric,
  //     hasSpecialChar,
  //     hasMinLength,
  //   ].filter(Boolean).length;

  //   const strengthText = getStrengthText(strengthScore);
  //   alert(`Password strength: ${strengthText}`);

  //   return strengthScore === 5;
  // };

  // const getStrengthText = (score) => {
  //   switch (score) {
  //     case 0:
  //       return "Very Weak";
  //     case 1:
  //       return "Weak";
  //     case 2:
  //       return "Moderate";
  //     case 3:
  //       return "Strong";
  //     case 4:
  //       return "Very Strong";
  //     default:
  //       return "";
  //   }
  // };

  // const signUpWithGmail = () => {
  //   alert("Signing up with Gmail...");
  // };

  // const signUpWithApple = () => {
  //   alert("Signing up with Apple ID...");
  // };

  return ( 
    <div className="container_signup">
      <form className="my-4" onSubmit={handleSubmit}>
        <div className="form-group_signup">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={values.email} onChange={handleChange} />
        </div>
        <div className="form-group_signup">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={values.password} onChange={handleChange} />
        </div>
        <div className="form-group_signup">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={values.confirmPassword} onChange={handleChange} />
        </div>
        <button type="submit" className="create-account-btn_signup">
          Create Account
        </button>
        <Link to="/register" style={{ display: 'none' }} id="login-link"></Link>
        <div className="form-group_signup">
          <label htmlFor="email">Already have an account? <Link to='/login' className="text-blue-500">Login</Link></label>
        </div>
      </form>
     
    </div>
  );
};

export default SignUpForm;
