import { useState } from "react";
import "./loan.css";

const LoanApplication = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [purpose, setPurpose] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Loan Application Submitted:
      Amount: ${loanAmount}
      Term: ${loanTerm} months
      Purpose: ${purpose}`);
    setLoanAmount("");
    setLoanTerm("");
    setPurpose("");
  };

  return (
    <div className="loan-application">
      <h1>Loan Application</h1>
      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="loanAmount">Loan Amount</label>
            <input
              type="number"
              id="loanAmount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              placeholder="Enter the loan amount"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="loanTerm">Loan Term (months)</label>
            <input
              type="number"
              id="loanTerm"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              placeholder="Enter the loan term in months"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="purpose">Purpose</label>
            <input
              type="text"
              id="purpose"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              placeholder="Enter the purpose of the loan"
              required
            />
           
<div className="progress-bar">
  <div className="progress" style={{ width: "25%" }}></div>
</div>

          </div>
          <button type="submit" className="submit-button">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default LoanApplication;
