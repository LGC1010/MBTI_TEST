import { useNavigate } from 'react-router-dom';
import mockData from '../api/mock';
import { useGetResultQuery } from '../quries/useGetPostsQuery';

const mbtiDescriptions = mockData;

const Result = ({ userInfo }) => {
  const navigate = useNavigate();
  const { data } = useGetResultQuery();
  const userResult = data?.filter((result) => result.userId === userInfo.id);
  const result = userResult?.[userResult.length - 1];
  const description = mbtiDescriptions[result?.result] || 'MBTI 유형 설명을 찾을 수 없습니다.';

  return (
    <div className='font-bold rounded-lg p-6 mt-4 bg-white min-h-32 flex flex-col items-center justify-center'>
      <p className='text-2xl mb-8'>MBTI 결과 : ⭐{result?.result}⭐</p>
      <p>{description}</p>
      <button className='mt-6 w-48 p-2 text-white bg-[#3375f3]' onClick={() => navigate('/result/list')}>
        전체결과 보러가기
      </button>
    </div>
  );
};

export default Result;
