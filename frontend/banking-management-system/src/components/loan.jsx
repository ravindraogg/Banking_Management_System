import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      console.log(response.data);
      window.location.href = '/home';
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-container">
      <section>
        <div>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
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
            <div className="form-group">
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
            <button type="submit">Login</button>
          </form>
          <p>
            Dont have an account?{' '}
            <Link to="/">Create an account</Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Login;
