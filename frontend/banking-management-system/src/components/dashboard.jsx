import { useState, useEffect } from "react";
import axios from "axios";
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:3001/update/1", formData); // Replace with actual user ID
      console.log(response.data);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const fetchProfileData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/get"); // Endpoint to get profile info
      console.log(response.data);
    } catch (error) {
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
        <div className="navbar-brand">Payment Portal</div>
        <ul className="navbar-links">
          <li><a href="./transfer">Transfer</a></li>
          <li><a href="./transhistory">Transaction History</a></li>
          <li><a href="./loan">Loan</a></li>
          <li><a href="./loanapproval">Loan Approval</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="main-content">
  <form onSubmit={handleSubmit} className="profile-form">
    <h2>Update Profile</h2>
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

    {/* Save Button */}
    <div className="button-container">
      <button type="submit">Save Changes</button>
    </div>
  </form>
</main>

    </div>
  );
};

export default Dashboard;
