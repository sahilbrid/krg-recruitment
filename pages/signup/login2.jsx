import { useState } from 'react';
import './login.css';
import Loginimg from './assets/login-10.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login2() {
  const [role, setRole] = useState(""); // State to store the selected role
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
    // console.log('Form submitted')
    if (values.password !== values.confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    try {
      // Send POST request to backend to save email and password
      const response = await axios.post('https://98aahkbf28.ap-south-1.awsapprunner.com/register', {email: values.email, password: values.password});
      console.log(values.email, values.password)
      console.log(response.data);
      window.alert("Account created successfully. Please proceed to registration.");
      document.getElementById('login-link').click();
      // history.push('/registration');
    } catch (error) {
      console.error('Error creating account:', error);
      if (error.code == 'ERR_BAD_RESPONSE'){
        alert("Account already exists!")
      }
      else {
        alert("Error creating account. Please try again.");
    }
    }
  }

  return (
    <>
      <div className="main_loginpage_company">
        <div className="heroimg_loginpage_company">
          <img className='heroimg2_loginpage_company' src={Loginimg} alt="" />
        </div>
        <div className="form-container_loginpage_company">
          <form onSubmit={handleSubmit} className='sign-up-form'>
            <div className="form-group_loginpage_company">
              <label htmlFor="email2">Email:</label>
              <input type="email" id="email2" name="email" value={values.email} onChange={handleChange} required />
            </div>

            {/* <div className="form-group_loginpage_company">
              <label htmlFor="role2">Role:</label>
              <select id="role2" name="role" value={role} onChange={(e) => setRole(e.target.value)} required>
                <option value="">Select Role</option>
                <option value="Company">Company</option>
                <option value="Consultant">Consultant</option>
              </select>
            </div> */}

            <div className="form-group_loginpage_company">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" value={values.password} onChange={handleChange} required />
            </div>

            <div className="form-group_loginpage_company">
              {/* <label htmlFor="passwordc">Confirm Password:</label>
              <input type="password" id="passwordc" name="passwordc" value={values.confirmPassword} onChange={handleChange} /> */}
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input type="password" id="confirmPassword" name="confirmPassword" value={values.confirmPassword} onChange={handleChange} required />
            </div>

            {/* <div className="form-group_loginpage_company">
              <label htmlFor="location2">Confirm Password</label>
              <input type="password" id="location2" name="location" required />
            </div> */}

            {/* <div className="form-group_loginpage_company">
              <label htmlFor="document2">Don't have an account? <Link to='/login' ><p>Login Now!</p></Link></label>
              
            </div> */}

            <div className="form-group_loginpage_company row">
              <div className="col-12 text-center">
                  <label htmlFor="document2">Don't have an account?</label>
                  <Link to='/login' className="form-group_loginpage_company">
                    <p className='signup-text'>Login Now!</p>
                  </Link>
              </div>
            </div>

            <div className="form-group_loginpage_company">
              <button type="submit">Create Account</button>
              <Link to="/register" style={{ display: 'none' }} id="login-link"></Link>
            </div>
          </form>
        </div>
      </div>
      <div className="footer_loginpage_company">
        {/* <div className="footer-links_loginpage_company">
          <Link to='/aboutus'>About Us</Link>
          <a href="#terms-and-conditions">Terms and Conditions</a>
          <a href="#privacy-policy">Privacy Policy</a>
          <a href="#faq">FAQ</a>
          <Link to='/contactus'>Contact Us</Link>
        </div> */}
      </div>
    </>
  )
}

export default Login2;
