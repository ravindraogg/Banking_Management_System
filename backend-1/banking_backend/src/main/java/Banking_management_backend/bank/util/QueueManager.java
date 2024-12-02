package Banking_management_backend.bank.util;

import Banking_management_backend.bank.model.Transaction;

import java.util.LinkedList;
import java.util.Queue;

public class QueueManager {

    private Queue<Transaction> transactionQueue;

    public QueueManager() {
        transactionQueue = new LinkedList<>();
    }

    // Add transaction to queue
    public void addTransactionToQueue(Transaction transaction) {
        transactionQueue.add(transaction);
    }

    // Get the next transaction from the queue
    public Transaction getNextTransaction() {
        return transactionQueue.poll();
    }
}
