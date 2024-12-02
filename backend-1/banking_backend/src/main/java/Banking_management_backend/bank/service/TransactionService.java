package Banking_management_backend.bank.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import Banking_management_backend.bank.model.Transaction;
import Banking_management_backend.bank.repository.TransactionRepository;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    // Record a new transaction
    public Transaction recordTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    // Get transaction by ID
    public Transaction getTransactionById(String transactionId) {
        return transactionRepository.findById(transactionId).orElse(null);
    }
}
