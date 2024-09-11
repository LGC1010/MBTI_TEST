import { useNavigate } from 'react-router-dom';
import ContentBox from '../layout/ContentBox';

const Main = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem('accessToken');
  const handleClick = () => {
    if (token) {
      navigate('/login');
    } else {
      alert('로그인을 해주세요!');
      navigate('/signup');
    }
  };
  const handleResultNavigate = () => {
    if (token) {
      navigate('/result/list');
    } else {
      alert('로그인을 해주세요!');
      navigate('/login');
    }
  };
  return (
    <ContentBox>
      <div className='flex h-screen/90 items-center'>
        <div className='pl-6 text-lg'>
          <span className='text-6xl'>무료</span>
          <p className='text-9xl mt-2.5'>MBTI 검사</p>
          <ul className='text-2xl mt-8 mb-8'>
            <li>1. 총 소요시간은 9분 내외 입니다.</li>
            <li className='mt-4'>2. 엠비티아이 최신 검사 와 정식검사 를 무료 로 제공합니다.</li>
          </ul>
          <button className='w-60 h-12 b bg-white rounded-3xl' onClick={() => navigate('/test')}>
            MBTI 테스트 하러가기
          </button>
          <button className='w-60 ml-8 h-12 b bg-white rounded-3xl' onClick={handleClick}>
            Go MY Page
          </button>
          <button className='w-60 ml-8 h-12 b bg-white rounded-3xl' onClick={handleResultNavigate}>
            결과보러가기
          </button>
        </div>
      </div>
    </ContentBox>
  );
};

export default Main;
