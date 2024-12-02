package Banking_management_backend.bank.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import Banking_management_backend.bank.model.Account;
import Banking_management_backend.bank.repository.AccountRepository;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    // Create new account
    public Account createAccount(Account account) {
        return accountRepository.save(account);
    }

    // Get account by ID
    public Account getAccountById(String accountId) {
        return accountRepository.findById(accountId).orElse(null);
    }

    // Update account details
    public Account updateAccount(Account account) {
        return accountRepository.save(account);
    }

    // Delete account
    public void deleteAccount(String accountId) {
        accountRepository.deleteById(accountId);
    }
}
