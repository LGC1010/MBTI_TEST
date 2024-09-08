import { useNavigate } from 'react-router-dom';
import ContentBox from '../layout/ContentBox';

const Main = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      navigate('/login');
    } else {
      navigate('/join');
    }
  };
  return (
    <ContentBox>
      <h2>메인페이지</h2>
      <button onClick={handleClick}>Go MY Page</button>
    </ContentBox>
  );
};

export default Main;
