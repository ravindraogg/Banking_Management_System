// App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccount from './components/CreateAccount';
import Login from './components/login';
import TransferPage from './components/transfer'; // Import your transfer page
//import TransactionHistory from './components/transahistory'; // Import other pages
import LoanPage from './components/loan';
import LoanApprovalPage from './components/loanapproval';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/transfer" element={<TransferPage />} />
        <Route path="/transhistory" element={<TransactionHistory />} />
        <Route path="/loan" element={<LoanPage />} />
        <Route path="/loanapproval" element={<LoanApprovalPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App; 