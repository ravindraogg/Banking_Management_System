// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// import './Login.css';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3001/login', { email, password });
//       console.log(response.data);
//       window.location.href = '/home';
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <section>
//         <div>
//           <h1>Login</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 id="email"
//                 placeholder="name@company.com"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 id="password"
//                 placeholder="••••••••"
//                 required
//               />
//             </div>
//             <button type="submit">Login</button>
//           </form>
//           <p>
//             Dont have an account?{' '}
//             <Link to="/">Create an account</Link>
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


import './Login.css';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Hook for navigating programmatically

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Send login request to the backend
//       const response = await axios.post('http://localhost:8080/user/login', { email, password });

//       console.log(response.data);  // Log the response for debugging

//       // Assuming the response contains the 'user' object with the user details
//       const { message, user } = response.data;

//       if (message === 'Login successful') {
//         // Store the user data in local storage or state
//         localStorage.setItem('user', JSON.stringify(user)); // Store user data in localStorage (or state management)

//         // Navigate to the appropriate dashboard based on user role or default to home
//         navigate('/user/dashboard'); // Redirect to user dashboard (adjust route as needed)
//       } else {
//         alert('Login failed: ' + response.data.error); // Alert for failed login
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Login failed');
//     }
//   };

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/user/login', { email, password });
//       const { message, user } = response.data;

//       if (message === 'Login successful') {
//         localStorage.setItem('user', JSON.stringify(user));
//         navigate('/user/dashboard');
//       } else {
//         alert('Login failed: ' + response.data.error);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Login failed');
//     }
//   };
//   return (
//     <div className="login-container">
//       <section>
//         <div>
//           <h1>Login</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 id="email"
//                 placeholder="name@company.com"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 id="password"
//                 placeholder="••••••••"
//                 required
//               />
//             </div>
//             <button type="submit">Login</button>
//           </form>
//           <p>
//             Dont have an account?{' '}
//             <Link to="/admin/createaccount">Create an account</Link>
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', {
        email,
        password
      });
      localStorage.setItem('token', response.data.token); // Ensure the token is correctly saved
      window.location.href = '/admin/dashboard'; // Redirect to dashboard after login
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
