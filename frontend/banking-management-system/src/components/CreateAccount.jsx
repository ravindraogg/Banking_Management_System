
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './CreateAccount.css';

function CreateAccount() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/register', { name, email, password });
      console.log(response.data);
      window.location.href = '/login';
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      {/* Portal Heading Section */}
      <div className="portal-heading">
        <h1>PAYMENT PORTAL</h1>
        <p>Secure your transactions with ease. Sign up today and manage your finances effortlessly!</p>
      </div>

      {/* Registration Form Section */}
      <div className="create-account">
        <section>
          <h1>USER REGISTRATION</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="name@company.com"
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="••••••••"
                required
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </section>
      </div>
    </div>
  );
}

export default CreateAccount;
