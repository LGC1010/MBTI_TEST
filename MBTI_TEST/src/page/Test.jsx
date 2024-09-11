import { createTestResult } from '../api/TestResult';
import { useEffect, useState } from 'react';
import { useGetMyQuery } from '../quries/useGetPostsQuery';
import ContentBox from '../layout/ContentBox';
import mbtiCalculator from '../utils/mbtiCalculator';
import TestForm from '../component/TestForm';
import Result from '../component/Result';

const Test = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [isfenDing, setFending] = useState(false);
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

  const handleTestSubmit = async (answers) => {
    const result = mbtiCalculator(answers);
    const resultData = {
      userId: userInfo.id,
      nickname: userInfo.nickname,
      result,
      answers,
      date: new Date().toISOString(),
      visibility: true
    };
    await createTestResult(resultData);
    setFending(true);
  };
  return (
    <ContentBox>
      <div className='flex justify-center items-center flex-col'>
        {!isfenDing ? (
          <>
            <h2 className='text-6xl mb-6'>MBTI 테스트</h2>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <h2 className='text-6xl mb-6'>테스트 결과</h2>
            <Result userInfo={userInfo} />
          </>
        )}
      </div>
    </ContentBox>
  );
};

export default Test;
