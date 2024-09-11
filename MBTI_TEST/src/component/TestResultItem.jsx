import mockData from '../api/mock';
import { deleteTestResult, updateTestResultVisibility } from '../api/TestResult';

const mbtiDescriptions = mockData;

const TestResultItem = ({ result, userInfo, onUpdate, onDelete }) => {
  const formattedDate = new Date(result.date).toLocaleString();
  const isOwner = result.userId === userInfo?.id;
  const description = mbtiDescriptions[result.result] || 'MBTI 유형 설명을 찾을 수 없습니다.';

  const handleUpdate = async () => {
    const newVisibility = !result.visibility;
    try {
      await updateTestResultVisibility(result.id, newVisibility);
      onUpdate();
      alert('성공');
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTestResult(result.id);
      onDelete();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='flex item-center justify-center'>
      <div className='font-bold bg-white p-6 rounded-2xl w-w/500 min-w-96 mb-5'>
        <h4 className='mb-4'>닉네임 : {`"${result.nickname}"`}</h4>
        <p className='mb-4'>결과 : {result.result}⭐</p>
        <p className='mb-4'>내용 : {description}</p>
        <span>작성일 : {formattedDate}</span>
        {isOwner && (
          <div className='mt-4'>
            <button className='w-32 p-2 mr-3 text-white bg-[#3375f3]' onClick={handleUpdate}>
              {result.visibility ? '비공개로 전환' : '공개로 전환'}
            </button>
            <button className='w-32 p-2 text-white bg-[#fb393d]' onClick={handleDelete}>
              삭제
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestResultItem;
