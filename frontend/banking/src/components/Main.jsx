import { useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate('/user/login');
  };

  const handleAdminClick = () => {
    navigate('/admin/login');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Pluto</h1>
      <button onClick={handleUserClick} style={{ margin: '10px', padding: '10px 20px' }}>
        User
      </button>
      <button onClick={handleAdminClick} style={{ margin: '10px', padding: '10px 20px' }}>
        Admin
      </button>
    </div>
  );
}

export default MainPage;
