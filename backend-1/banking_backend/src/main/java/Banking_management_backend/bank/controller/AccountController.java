package Banking_management_backend.bank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import Banking_management_backend.bank.model.Account;
import Banking_management_backend.bank.service.AccountService;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {

    @Autowired
    private AccountService accountService;

    // Create a new account
    @PostMapping("/api/admin/create-account")
    public Account createAccount(@RequestBody Account account) {
        return accountService.createAccount(account);
    }

    // Get account by ID
    @GetMapping("/{accountId}")
    public Account getAccount(@PathVariable String accountId) {
        return accountService.getAccountById(accountId);
    }

    // Update account
    @PutMapping("/update/{accountId}")
    public Account updateAccount(@PathVariable String accountId, @RequestBody Account account) {
        account.setAccountId(accountId);
        return accountService.updateAccount(account);
    }

    // Delete account
    @DeleteMapping("/{accountId}")
    public void deleteAccount(@PathVariable String accountId) {
        accountService.deleteAccount(accountId);
    }
}
