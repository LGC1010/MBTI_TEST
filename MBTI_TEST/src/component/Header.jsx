import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import ContentBox from '../layout/ContentBox';

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    const confirmLogout = window.confirm('정말로 로그아웃 하시겠습니까?');
    if (confirmLogout) {
      logout();
      navigate('/');
    }
  };

  return (
    <div>
      <ContentBox>
        <header className='flex justify-between'>
          <h1>
            <Link to={'/'}>HOME</Link>
          </h1>
          <nav>
            {isAuthenticated ? (
              <div>
                <button onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <div>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
              </div>
            )}
          </nav>
        </header>
      </ContentBox>
    </div>
  );
};

export default Header;
