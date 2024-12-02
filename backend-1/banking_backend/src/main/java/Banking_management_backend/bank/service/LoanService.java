package Banking_management_backend.bank.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import Banking_management_backend.bank.model.Loan;
import Banking_management_backend.bank.repository.LoanRepository;

@Service
public class LoanService {

    @Autowired
    private LoanRepository loanRepository;

    // Apply for a loan
    public Loan applyLoan(Loan loan) {
        return loanRepository.save(loan);
    }

    // Get loan by ID
    public Loan getLoanById(String loanId) {
        return loanRepository.findById(loanId).orElse(null);
    }

    // Approve or Reject loan
    public Loan updateLoanStatus(String loanId, String status) {
        Loan loan = loanRepository.findById(loanId).orElse(null);
        if (loan != null) {
            loan.setLoanStatus(status);
            return loanRepository.save(loan);
        }
        return null;
    }
}
