import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });
  const [error, setError] = useState(""); // To store any error messages
  const [success, setSuccess] = useState(""); // To store success messages

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors
    setSuccess(""); // Clear any previous success messages

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const userId = 1; // Replace with dynamic user ID if necessary
      const response = await axios.put(`http://localhost:8080/update/${userId}`, formData);
      setSuccess("Profile updated successfully!");
      console.log(response.data);
    } catch (error) {
      setError("Failed to update profile. Please try again.");
      console.error("Error updating profile:", error);
    }
  };

  const fetchProfileData = async () => {
    try {
      const userId = 1; // Replace with dynamic user ID if necessary
      const response = await axios.get(`http://localhost:3001/get/${userId}`);
      if (response.data) {
        setFormData({
          firstName: response.data.firstName || "",
          lastName: response.data.lastName || "",
          email: response.data.email || "",
          phone: response.data.phone || "",
          address: response.data.address || "",
          city: response.data.city || "",
        });
      }
    } catch (error) {
      setError("Failed to fetch profile data. Please try again.");
      console.error("Error fetching profile data:", error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <div className="dashboard">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <img
            src="https://qashier.com/sg/wp-content/uploads/sites/12/2023/07/Qashierx2-icons-fault.png"
            alt="Logo"
            className="navbar-logo"
          />
          PLUTO
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/transfer">Transfer</Link>
          </li>

          <li>
            <Link to="/transhistory">Transaction History</Link>
          </li>
          <li>
            <Link to="/loan">Loan</Link>
          </li>
          <li>
            <Link to="/loanapproval">Loan Approval</Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <form onSubmit={handleSubmit} className="profile-form">
          <h2>Update Profile</h2>
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}

          <div className="input-grid">
            {/* First Name */}
            <div className="input-container">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter your first name"
                required
              />
            </div>

            {/* Last Name */}
            <div className="input-container">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter your last name"
                required
              />
            </div>

            {/* Email */}
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone */}
            <div className="input-container">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Address */}
            <div className="input-container">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your address"
                required
              />
            </div>

            {/* City */}
            <div className="input-container">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Enter your city"
                required
              />
            </div>
          </div>

          <div className="button-container">
            <button type="submit">Save Changes</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Dashboard;
