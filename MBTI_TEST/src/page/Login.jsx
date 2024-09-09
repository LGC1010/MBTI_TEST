import { useContext, useState } from 'react';
import ContentBox from '../layout/ContentBox';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { logins } from '../api/Auth';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassWord] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleId = (e) => {
    setId(e.target.value);
  };
  const handlePassWord = (e) => {
    setPassWord(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await logins({ id, password });
      if (data.success) {
        login(data.accessToken);
        navigate('/mypage');
      } else {
        alert('로그인에 실패했습니다');
      }
    } catch (error) {
      console.log(error);
      alert('로그인 에러 재확인 부탁드립니다');
    }
  };

  return (
    <ContentBox>
      <form onSubmit={handleSubmit}>
        <input value={id} type='text' onChange={handleId} placeholder='ID' />
        <input value={password} type='password' onChange={handlePassWord} placeholder='PSW' />
        <button type='submit'>로그인</button>
      </form>
    </ContentBox>
  );
};

export default Login;
