
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// import './CreateAccount.css';

// function CreateAccount() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3001/register', { name, email, password });
//       console.log(response.data);
//       window.location.href = '/login';
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="container">
//       {/* Portal Heading Section */}
//       <div className="portal-heading">
//         <h1>PAYMENT PORTAL</h1>
//         <p>Secure your transactions with ease. Sign up today and manage your finances effortlessly!</p>
//       </div>

//       {/* Registration Form Section */}
//       <div className="create-account">
//         <section>
//           <h1>USER REGISTRATION</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="input-container">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 id="name"
//                 placeholder="Enter your name"
//                 required
//               />
//             </div>
//             <div className="input-container">
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
//             <div className="input-container">
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
//             <button type="submit">Sign Up</button>
//           </form>
//           <p>
//             Already have an account? <Link to="/login">Login here</Link>
//           </p>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default CreateAccount;
import { useState } from 'react';
import axios from 'axios';
import './CreateAccount.css';

function CreateAccount() {
    const [accountId, setAccountId] = useState('');
    const [accountType, setAccountType] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [balance, setBalance] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate balance to be a positive number
        if (isNaN(balance) || balance <= 0) {
            alert('Balance must be a positive number.');
            return;
        }

        try {
            // Sending data to backend for account creation
            const response = await axios.post('http://localhost:8080/api/admin/create-account', { 
                accountId, 
                accountType, 
                username, 
                password, 
                balance 
            });
            console.log(response.data);
            window.location.href = '/admin/dashboard'; // Redirect after successful creation
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error creating the account');
        }
    };

    return (
        <div className="container">
            <div className="portal-heading">
                <h1>Pluto Banking</h1>
                <p>Secure your transactions with ease. Sign up today and manage your finances effortlessly!</p>
            </div>

            <div className="create-account">
                <section>
                    <h1>USER REGISTRATION</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <label htmlFor="accountId">Account ID</label>
                            <input
                                type="text"
                                value={accountId}
                                onChange={(e) => setAccountId(e.target.value)}
                                id="accountId"
                                placeholder="Auto-generated (leave empty)"
                                disabled
                            />
                        </div>
                        
                        <div className="input-container">
                            <label htmlFor="accountType">Account Type</label>
                            <select
                                value={accountType}
                                onChange={(e) => setAccountType(e.target.value)}
                                id="accountType"
                                required
                            >
                                <option value="">Select Account Type</option>
                                <option value="Savings">Savings</option>
                                <option value="Current">Current</option>
                            </select>
                        </div>

                        <div className="input-container">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                id="username"
                                placeholder="Enter your username"
                                required
                            />
                        </div>

                        <div className="input-container">
                            <label htmlFor="password">Create Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <div className="input-container">
                            <label htmlFor="balance">Balance</label>
                            <input
                                type="number"
                                value={balance}
                                onChange={(e) => setBalance(e.target.value)}
                                id="balance"
                                placeholder="Enter initial balance"
                                required
                                min="0"
                            />
                        </div>

                        <button type="submit">Sign Up</button>
                    </form>

                    <p>
                        Already have an account? <Link to="/admin/login">Login here</Link>
                    </p>
                </section>
            </div>
        </div>
    );
}

export default CreateAccount;
