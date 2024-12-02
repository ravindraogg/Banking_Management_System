import { useState, useEffect } from "react";
import axios from "axios";
import "./TransactionHistory.css";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch transactions from API or sample data
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get("http://localhost:8080/api/transactions/transfer-history");
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transaction history:", error);
        // Fallback sample data for demo purposes
        setTransactions([
          {
            id: 1,
            date: "2024-11-20",
            beneficiaryIban: "DE89370400440532013000",
            beneficiaryName: "John Doe",
            beneficiaryEmail: "john.doe@example.com",
            amount: 150.0,
            purpose: "Salary Payment",
          },
          {
            id: 2,
            date: "2024-11-22",
            beneficiaryIban: "DE12500105170648489890",
            beneficiaryName: "Jane Smith",
            beneficiaryEmail: "jane.smith@example.com",
            amount: 80.0,
            purpose: "Utility Bill",
          },
        ]);
      }
    };

    fetchTransactions();
  }, []);

  // Filter transactions based on the search term
  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.beneficiaryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.beneficiaryIban.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.date.includes(searchTerm)
  );

  return (
    <div className="transaction-history">
      <h1>Transaction History</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search transactions by IBAN, Name, or Purpose..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Beneficiary IBAN</th>
            <th>Name</th>
            <th>Email</th>
            <th>Purpose</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.beneficiaryIban}</td>
                <td>{transaction.beneficiaryName}</td>
                <td>{transaction.beneficiaryEmail}</td>
                <td>{transaction.purpose}</td>
                <td>${transaction.amount.toFixed(2)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="no-data">No transactions found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
