import { useState } from "react";

import './transfer.css';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Transfer Data Submitted: ", formData);
    // API call logic to process the transfer
  };

  return (
    <div className="transfer-page">
      <header>
        <h1>Transfer Money</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
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
        <div>
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
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
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
        <div>
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
        <div>
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
        <button type="submit">Submit Transfer</button>
      </form>
    </div>
  );
};

export default TransferPage;
