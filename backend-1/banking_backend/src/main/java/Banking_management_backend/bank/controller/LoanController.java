package Banking_management_backend.bank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import Banking_management_backend.bank.model.Loan;
import Banking_management_backend.bank.service.LoanService;

@RestController
@RequestMapping("/api/loans")
public class LoanController {

    @Autowired
    private LoanService loanService;

    // Apply for a new loan
    @PostMapping
    public Loan applyLoan(@RequestBody Loan loan) {
        return loanService.applyLoan(loan);
    }

    // Get loan by ID
    @GetMapping("/{loanId}")
    public Loan getLoan(@PathVariable String loanId) {
        return loanService.getLoanById(loanId);
    }

    // Update loan status (approve/reject)
    @PutMapping("/{loanId}")
    public Loan updateLoanStatus(@PathVariable String loanId, @RequestParam String status) {
        return loanService.updateLoanStatus(loanId, status);
    }
}
