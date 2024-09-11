import { useEffect, useState } from 'react';
import TestResultItem from './TestResultItem';
import { useGetMyQuery } from '../quries/useGetPostsQuery';

const TesResulttList = ({ result, onUpdate, onDelete }) => {
  const [userInfo, setUserInfo] = useState(null);
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

  return (
    <div className='h-h/45r w-screen text-center overflow-x-auto'>
      <h2 className='text-4xl mb-8'>전체 테스트 결과</h2>
      {result
        .filter((result) => result.visibility || result.userId === userInfo?.id)
        .map((list) => {
          return (
            <TestResultItem result={list} onDelete={onDelete} onUpdate={onUpdate} userInfo={userInfo} key={list.id} />
          );
        })}
    </div>
  );
};

export default TesResulttList;
