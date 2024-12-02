package Banking_management_backend.bank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import Banking_management_backend.bank.model.Transaction;
import Banking_management_backend.bank.service.TransactionService;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    // Record a new transaction
    @PostMapping
    public Transaction recordTransaction(@RequestBody Transaction transaction) {
        return transactionService.recordTransaction(transaction);
    }

    // Get transaction by ID
    @GetMapping("/{transactionId}")
    public Transaction getTransaction(@PathVariable String transactionId) {
        return transactionService.getTransactionById(transactionId);
    }
}
