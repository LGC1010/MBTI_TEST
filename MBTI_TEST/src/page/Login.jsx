import React, { useContext, useState } from 'react';
import ContentBox from '../layout/ContentBox';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [Id, setId] = useState('');
  const [PassWord, setPassWord] = useState('');
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
      const response = await axios.post('https://moneyfulpublicpolicy.co.kr/login', { Id, PassWord });
      const data = response.data;
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
        <input value={Id} type='text' onChange={handleId} placeholder='ID' />
        <input value={PassWord} type='password' onChange={handlePassWord} placeholder='PSW' />
        <button type='submit'>로그인</button>
      </form>
    </ContentBox>
  );
};

export default Login;
