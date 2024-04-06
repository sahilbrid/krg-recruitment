import { useState } from 'react';
import './login.css';
import Loginimg from './assets/login-10.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login2() {
  // const [role, setRole] = useState(""); // State to store the selected role
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email: email,
        password: password
      });
      
      console.log(response.data); // Handle successful login
      // Redirect user or perform other actions upon successful login
      window.alert("Login Successfull!")
      document.getElementById('login-link').click();
    } catch (error) {
      console.error('Error logging in:', error.response.data.error);
      alert("Invalid Email or Password!")
      // Display error message to the user
    }
  };

  return (
    <>
      <div className="main_loginpage_company">
        <div className="heroimg_loginpage_company">
          <img className='heroimg2_loginpage_company' src={Loginimg} alt="" />
        </div>
        <div className="form-container_loginpage_company">
          {/* <form action="process_form.php" method="post" encType="multipart/form-data"> */}
          <form onSubmit={handleLogin} className='login-form'>
            <div className="form-group_loginpage_company">
              <label htmlFor="email2">Email:</label>
              <input type="email" id="email2" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
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
              <label htmlFor="email2">Password:</label>
              <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>

            {/* <div className="form-group_loginpage_company">
              <label htmlFor="location2">Confirm Password</label>
              <input type="password" id="location2" name="location" required />
            </div> */}

            {/* <div className="form-group_loginpage_company">
              <label htmlFor="document2">Don't have an account? <Link to='/signuppage' className="form-group_loginpage_company" ><p className='signup-text'>Signup Now!</p></Link></label>
              
            </div> */}

            <div className="form-group_loginpage_company row">
              <div className="col-12 text-center">
                  <label htmlFor="document2">Don't have an account?</label>
                  <Link to='/signuppage' className="form-group_loginpage_company">
                    <p className='signup-text'>Signup Now!</p>
                  </Link>
              </div>
            </div>



            <div className="form-group_loginpage_company">
              {/* <Link to='/'><button type="submit">Submit</button></Link> */}
              <button type='submit'>Login</button>
              <Link to="/" style={{ display: 'none' }} id="login-link"></Link>
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
