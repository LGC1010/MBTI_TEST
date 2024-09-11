import { useEffect, useState } from 'react';
import { useUpdateMutation } from '../quries/useGetPostsQuery';
import { useGetMyQuery } from '../quries/useGetPostsQuery';
import ContentBox from '../layout/ContentBox';

const Mypage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [newNickname, setNewNickname] = useState('');

  const token = localStorage.getItem('accessToken');

  const { data } = useGetMyQuery({
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  useEffect(() => {
    if (data) {
      setUserInfo(data);
    }
  }, [data]);

  const formData = new FormData();
  formData.append('nickname', newNickname);
  const { mutate } = useUpdateMutation();

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <ContentBox>
      <div className='h-screen/90 flex justify-center items-center'>
        <div className='rounded-3xl min-h-96 bg-rounded-3xl bg-white pt-12 pb-12 w-w/500 flex flex-col align items-center justify-center'>
          <h2 className='text-4xl mb-4'>프로필</h2>
          <p className='text-xl mb-2'>ID: {userInfo.id}</p>
          <p className='text-xl mb-4'>Nickname: {userInfo.nickname}</p>
          <form
            className='text-center flex flex-col items-center'
            onSubmit={(e) => {
              e.preventDefault();
              mutate({
                formData,
                userData: {
                  headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                  }
                }
              });
            }}
          >
            <input
              className='w-50 mb-4 border-slate-400 py-2 px-2 border pd-2'
              type='text'
              placeholder='닉네임 입력'
              value={newNickname}
              onChange={(e) => {
                setNewNickname(e.target.value);
              }}
            />
            <button className='inline-block w-40 mb-4 text-white bg-[#9cbfdb] py-3 px-4 border pd-2' type='submit'>
              닉네임 수정하기
            </button>
          </form>
        </div>
      </div>
    </ContentBox>
  );
};

export default Mypage;
