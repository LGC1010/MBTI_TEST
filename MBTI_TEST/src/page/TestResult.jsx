import { useEffect, useState } from 'react';
import ContentBox from '../layout/ContentBox';
import { getTestResult } from '../api/TestResult';
import TesResulttList from '../component/TesResulttList';
const TestResult = () => {
  const [result, setResult] = useState([]);

  const userMbti = async () => {
    const response = await getTestResult();
    setResult(response);
  };

  useEffect(() => {
    userMbti();
  }, []);
  const handleDelete = () => {
    userMbti();
  };
  const handleUpdate = () => {
    userMbti();
  };

  return (
    <ContentBox>
      <TesResulttList onDelete={handleDelete} onUpdate={handleUpdate} result={result} />
    </ContentBox>
  );
};

export default TestResult;
