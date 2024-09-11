import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import ContentBox from '../layout/ContentBox';
import styled from 'styled-components';

const SyLayout = styled.div`
  background: #9cbfdb;
  height: 100vh;
  overflow: hidden;
`;
const Header = ({ children }) => {
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
    <SyLayout>
      <header>
        <ContentBox>
          <div className='p-8 flex justify-between'>
            <h1>
              <Link to={'/'}>HOME</Link>
            </h1>
            <nav>
              {isAuthenticated ? (
                <div>
                  <button className='pl-4' onClick={() => navigate('/mypage')}>
                    프로필
                  </button>
                  <button className='pl-4' onClick={() => navigate('/test')}>
                    테스트
                  </button>
                  <button className='pl-4' onClick={() => navigate('/result/list')}>
                    결과 보기
                  </button>
                  <button className='pl-4' onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              ) : (
                <div>
                  <Link to='/login' className='pl-4'>
                    Login
                  </Link>
                  <Link to='/signup' className='pl-4'>
                    Signup
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </ContentBox>
      </header>
      <main>{children}</main>
    </SyLayout>
  );
};

export default Header;
