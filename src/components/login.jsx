import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });
  
      if (response.data.success) { 
        console.log('Login successful:', response.data);
        localStorage.setItem('user', JSON.stringify(response.data.user)); 
        } else {
        setErrorMessage(response.data.message || 'Login failed');
      }
    } catch (error) {
      alert("Could not log in. Contact support")
    }
  };
  

  return (
      //   <div id="container" className="container">
      //   <div className="row">
      //     <div className="col align-items-center flex-col sign-up">
      //       <div className="form-wrapper align-items-center">
      //         <div className="form sign-up">
      //           <div className="input-group">
      //             <i className='bx bxs-user'></i>
      //             <input type="text" placeholder="Username" />
      //           </div>
      //           <div className="input-group">
      //             <i className='bx bx-mail-send'></i>
      //             <input type="email" placeholder="Email" />
      //           </div>
      //           <div className="input-group">
      //             <i className='bx bxs-lock-alt'></i>
      //             <input type="password" placeholder="Password" />
      //           </div>
      //           <div className="input-group">
      //             <i className='bx bxs-lock-alt'></i>
      //             <input type="password" placeholder="Confirm password" />
      //           </div>
      //           <button>
      //             Sign up
      //           </button>
      //           <p>
      //             <span>
      //               Already have an account?
      //             </span>
      //             <b onclick="toggle()" className="pointer">
      //               Sign in here
      //             </b>
      //           </p>
      //         </div>
      //       </div>
          
      //     </div>
      //     <div className="col align-items-center flex-col sign-in">
      //       <div className="form-wrapper align-items-center">
      //         <div className="form sign-in">
      //           <div className="input-group">
      //             <i className='bx bxs-user'></i>
      //             <input type="text" placeholder="Username" />
      //           </div>
      //           <div className="input-group">
      //             <i className='bx bxs-lock-alt'></i>
      //             <input type="password" placeholder="Password" />
      //           </div>
      //           <button>
      //             Sign in
      //           </button>
      //           <p>
      //             <b>
      //               Forgot password?
      //             </b>
      //           </p>
      //           <p>
      //             <span>
      //               Don't have an account?
      //             </span>
      //             <b onclick="toggle()" className="pointer">
      //               Sign up here
      //             </b>
      //           </p>
      //         </div>
      //       </div>
      //       <div className="form-wrapper">
        
      //       </div>
      //     </div>
      //   </div>
      //   <div className="row content-row">
      //     <div className="col align-items-center flex-col">
      //       <div className="text sign-in">
      //         <h2>
      //           Welcome
      //         </h2>
      
      //       </div>
      //       <div className="img sign-in">
        
      //       </div>
      //     </div>
      //     <div className="col align-items-center flex-col">
      //       <div className="img sign-up">
            
      //       </div>
      //       <div className="text sign-up">
      //         <h2>
      //           Join with us
      //         </h2>
      
      //       </div>
      //     </div>
      //   </div>
      // </div>

    <div className="login-container" style={{ height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="login-form-container" style={{ width: '300px' }}>
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username" className="login-label">
              Username:
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="login-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="login-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
