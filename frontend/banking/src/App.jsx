import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/Main';
import CreateAccount from './components/CreateAccount';
import AdminLogin from './components/Login';
import UserLogin from './components/Login';
import Dashboard from './components/dashboard';
import TransferPage from './components/transferpage';
//import LoanApplication from './components/loanapproval';
import TransactionHistory from './components/transhistory';
//import LoanApproval from './components/admin/LoanApproval';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/createaccount" element={<CreateAccount />} />
        <Route path="/admin/dashboard" element={<LoanApproval />} />

        <Route path="/user/login" element={<Login />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="/transfer" element={<TransferPage />} />
        <Route path="/loan" element={<LoanApplication />} />
        <Route path="/transhistory" element={<TransactionHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
