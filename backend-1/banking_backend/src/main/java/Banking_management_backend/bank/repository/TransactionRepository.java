package Banking_management_backend.bank.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import Banking_management_backend.bank.model.Transaction;

public interface TransactionRepository extends MongoRepository<Transaction, String> {
    // Custom queries can be added if needed
}
