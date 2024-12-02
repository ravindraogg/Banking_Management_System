import  { useState } from "react";
import LoanApplication from "./LoanApplication";
import LoanApproval from "./loan";
import TransactionHistory from "./TransactionHistory";

const LoanSystem = () => {
  const [applications, setApplications] = useState([]); // Tracks loan applications
  const [approvedLoans, setApprovedLoans] = useState([]); // Tracks approved loans

  const addApplication = (application) => {
    setApplications([...applications, application]);
  };

  return (
    <div>
      <h1>Loan Management System</h1>
      <LoanApplication addApplication={addApplication} />
      <LoanApproval
        applications={applications}
        setApprovedLoans={setApprovedLoans}
      />
      <TransactionHistory approvedLoans={approvedLoans || []} />
    </div>
  );
};

export default LoanSystem;
