import { useState } from "react";
import PropTypes from "prop-types";

const LoanApproval = ({ applications, setApprovedLoans }) => {
  const [localApprovedLoans, setLocalApprovedLoans] = useState([]); // Tracks locally approved loans

  const approveLoan = (application) => {
    const updatedLoans = [...localApprovedLoans, application];
    setLocalApprovedLoans(updatedLoans); // Update local state
    setApprovedLoans(updatedLoans); // Update parent state
  };

  return (
    <div>
      <h2>Loan Approval</h2>
      {applications.length > 0 ? (
        applications.map((app, index) => (
          <div key={index} style={{ marginBottom: "10px", border: "1px solid #ccc", padding: "10px" }}>
            <p>
              <strong>Amount:</strong> {app.loanAmount} <br />
              <strong>Term:</strong> {app.loanTerm} months <br />
              <strong>Purpose:</strong> {app.purpose}
            </p>
            <button onClick={() => approveLoan(app)}>Approve</button>
          </div>
        ))
      ) : (
        <p>No loan applications available for approval.</p>
      )}
    </div>
  );
};

LoanApproval.propTypes = {
  applications: PropTypes.arrayOf(
    PropTypes.shape({
      loanAmount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      loanTerm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      purpose: PropTypes.string.isRequired,
    })
  ).isRequired,
  setApprovedLoans: PropTypes.func.isRequired,
};

export default LoanApproval;
