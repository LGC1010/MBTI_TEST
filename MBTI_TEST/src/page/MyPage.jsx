import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { getUserProfile, updateProfile } from '../api/Auth';

const Mypage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [newNickname, setNewNickname] = useState('');
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    if (!isAuthenticated) {
      alert('로그인이 필요합니다.');
      navigate('/login');
    } else {
      const fetchUserInfo = async () => {
        try {
          const response = await getUserProfile({
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setUserInfo(response);
        } catch (error) {
          console.error('에러');
        }
      };
      fetchUserInfo();
    }
  }, [isAuthenticated, navigate]);

  const handleNicknameChange = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('nickname', newNickname);
      const response = await updateProfile(formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.success) {
        setUserInfo((prevState) => ({
          ...prevState,
          nickname: response.nickname
        }));
        alert('닉네임이 변경되었습니다.');
        setNewNickname('');
      } else {
        alert('닉네임 변경에 실패했습니다.');
      }
    } catch (error) {
      console.error('Failed to update nickname:', error);
      alert('닉네임 변경에 실패했습니다.');
    }
  };

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>My Page</h2>
      <p>ID: {userInfo.id}</p>
      <p>Nickname: {userInfo.nickname}</p>
      <form onSubmit={handleNicknameChange}>
        <input
          type='text'
          placeholder='닉네임 입력'
          value={newNickname}
          onChange={(e) => {
            setNewNickname(e.target.value);
          }}
        />
        <button type='submit'>닉네임 수정하기</button>
      </form>
    </div>
  );
};

export default Mypage;
