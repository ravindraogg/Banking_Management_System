package Banking_management_backend.bank.service;

import Banking_management_backend.bank.model.Transaction;
import Banking_management_backend.bank.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@Service
public class ConcurrentTransactionHandler {

    @Autowired
    private TransactionRepository transactionRepository;

    private final ExecutorService executorService;

    public ConcurrentTransactionHandler() {
        // Creating a thread pool to handle concurrent transactions
        this.executorService = Executors.newFixedThreadPool(10);  // Pool of 10 threads
    }

    // Method to process a transaction in a separate thread
    public void processTransaction(Transaction transaction) {
        executorService.submit(() -> {
            // Logic to process the transaction (this could be any complex logic)
            try {
                System.out.println("Processing transaction: " + transaction.getTransactionId());
                // Save the transaction to the database
                transactionRepository.save(transaction);
                // Simulate processing time
                Thread.sleep(1000); // Simulate transaction delay
                System.out.println("Transaction processed: " + transaction.getTransactionId());
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });
    }

    // Shutdown the executor service when the application shuts down
    public void shutdown() {
        executorService.shutdown();
    }
}
