// import { useState } from "react";
// import axios from 'axios';
// import "./TransferPage.css";

// const TransferPage = () => {
//   const [formData, setFormData] = useState({
//     beneficiaryIban: "",
//     amount: "",
//     date: "",
//     purpose: "",
//     beneficiaryName: "",
//     beneficiaryEmail: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Send the form data to the backend API (Replace with your actual backend URL)
//       const response = await axios.post('http://localhost:5000/api/transfers', formData);
//       console.log('Transfer Success:', response.data);
//       alert("Transfer submitted successfully!");
//     } catch (error) {
//       console.error('Error during transfer submission:', error);
//       alert("Error submitting transfer.");
//     }
//   };

//   return (
//     <div className="transfer-page">
//       <div className="page-header">
//         <h1>Transfer Money</h1>
//       </div>

//       <div className="form-container">
//         <h2>Transfer Details</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-grid">
//             <div className="form-group">
//               <label htmlFor="beneficiaryIban">Beneficiary IBAN</label>
//               <input
//                 type="text"
//                 name="beneficiaryIban"
//                 value={formData.beneficiaryIban}
//                 onChange={handleInputChange}
//                 placeholder="Enter Beneficiary IBAN"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="amount">Amount</label>
//               <input
//                 type="number"
//                 name="amount"
//                 value={formData.amount}
//                 onChange={handleInputChange}
//                 placeholder="Enter Amount"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="date">Date</label>
//               <input
//                 type="date"
//                 name="date"
//                 value={formData.date}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="purpose">Transfer Purpose</label>
//               <input
//                 type="text"
//                 name="purpose"
//                 value={formData.purpose}
//                 onChange={handleInputChange}
//                 placeholder="Enter Transfer Purpose"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="beneficiaryName">Beneficiary Name</label>
//               <input
//                 type="text"
//                 name="beneficiaryName"
//                 value={formData.beneficiaryName}
//                 onChange={handleInputChange}
//                 placeholder="Enter Beneficiary Name"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="beneficiaryEmail">Beneficiary Email</label>
//               <input
//                 type="email"
//                 name="beneficiaryEmail"
//                 value={formData.beneficiaryEmail}
//                 onChange={handleInputChange}
//                 placeholder="Enter Beneficiary Email"
//                 required
//               />
//             </div>
//           </div>
//           <button type="submit" className="submit-btn">Submit Transfer</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default TransferPage;

import { useState } from "react";
import axios from "axios";
import "./TransferPage.css";

const TransferPage = () => {
  const [formData, setFormData] = useState({
    beneficiaryIban: "",
    amount: "",
    date: "",
    purpose: "",
    beneficiaryName: "",
    beneficiaryEmail: "",
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
    console.log("Form Data Submitted: ", formData); // Log form data
    try {
      const response = await axios.post("http://localhost:8080/api/transfers", formData);
      console.log("Transfer Success:", response.data);
      alert("Transfer submitted successfully!");
    } catch (error) {
      console.error("Error during transfer submission:", error);
      alert("Error submitting transfer.");
    }
  };

  return (
    <div className="transfer-page">
      <div className="main-heading">
        <h1>Transfer Money</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="beneficiaryIban">Beneficiary IBAN</label>
              <input
                type="text"
                name="beneficiaryIban"
                value={formData.beneficiaryIban}
                onChange={handleInputChange}
                placeholder="Enter Beneficiary IBAN"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                placeholder="Enter Amount"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="purpose">Transfer Purpose</label>
              <input
                type="text"
                name="purpose"
                value={formData.purpose}
                onChange={handleInputChange}
                placeholder="Enter Transfer Purpose"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="beneficiaryName">Beneficiary Name</label>
              <input
                type="text"
                name="beneficiaryName"
                value={formData.beneficiaryName}
                onChange={handleInputChange}
                placeholder="Enter Beneficiary Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="beneficiaryEmail">Beneficiary Email</label>
              <input
                type="email"
                name="beneficiaryEmail"
                value={formData.beneficiaryEmail}
                onChange={handleInputChange}
                placeholder="Enter Beneficiary Email"
                required
              />
            </div>
          </div>
          <button type="submit" className="submit-btn">Submit Transfer</button>
        </form>
      </div>
    </div>
  );
};

export default TransferPage;
