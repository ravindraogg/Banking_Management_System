package Banking_management_backend.bank.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import Banking_management_backend.bank.model.Account;

public interface AccountRepository extends MongoRepository<Account, String> {
    // Custom queries can be added if needed
}
