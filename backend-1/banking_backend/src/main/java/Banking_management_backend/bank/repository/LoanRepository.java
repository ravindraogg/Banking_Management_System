package Banking_management_backend.bank.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import Banking_management_backend.bank.model.Loan;

public interface LoanRepository extends MongoRepository<Loan, String> {
    // Custom queries can be added if needed
}
