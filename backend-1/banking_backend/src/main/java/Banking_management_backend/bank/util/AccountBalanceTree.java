package Banking_management_backend.bank.util;

import Banking_management_backend.bank.model.Account;

import java.util.TreeSet;

public class AccountBalanceTree {

    private TreeSet<Account> accounts;

    public AccountBalanceTree() {
        this.accounts = new TreeSet<>((a1, a2) -> Double.compare(a1.getBalance(), a2.getBalance()));
    }

    // Add account to tree
    public void addAccount(Account account) {
        accounts.add(account);
    }

    // Get all accounts sorted by balance
    public TreeSet<Account> getSortedAccounts() {
        return accounts;
    }
}
