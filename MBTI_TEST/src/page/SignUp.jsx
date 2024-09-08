import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentBox from '../layout/ContentBox';
import axios from 'axios';

const SignUp = () => {
  const [id, setId] = useState('');
  const [password, setPassWord] = useState('');
  const [nickname, setName] = useState('');

  const navigate = useNavigate();

  const handleId = (e) => {
    setId(e.target.value);
  };
  const handlePassWord = (e) => {
    setPassWord(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleJoin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://moneyfulpublicpolicy.co.kr/register', { id, password, nickname });
      const data = response.data;
      if (data.success) {
        navigate('/login');
        console.log(data.success);
      } else {
        alert('회원가입에 실패했습니다');
      }
    } catch (error) {
      console.log(error);
      alert('회원가입에 실패했습니다');
    }
  };

  return (
    <ContentBox>
      <form onSubmit={handleJoin}>
        <input type='text' value={id} placeholder='아이디' onChange={handleId} />
        <input type='password' value={password} placeholder='비밀번호' onChange={handlePassWord} />
        <input type='text' value={nickname} placeholder='닉네임' onChange={handleName} />
        <button type='submit'>회원가입</button>
      </form>
    </ContentBox>
  );
};

export default SignUp;
