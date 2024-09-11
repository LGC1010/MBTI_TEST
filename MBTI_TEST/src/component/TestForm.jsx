import { useState } from 'react';
import { questions } from '../data/questions';

const TestForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };
  return (
    <form className='h-h/45r w-screen text-center overflow-x-auto' onSubmit={handleSubmit}>
      {questions.map((list, index) => {
        return (
          <div className='min-h-32 flex flex-col items-center' key={list.id}>
            <p className='text-2xl'>{list.question}</p>
            {list.options.map((option, i) => {
              return (
                <label
                  key={i}
                  className='bg-white border border-solid border-slate-400 rounded-md p-4 w-96 inline-flex mt-3 mb-3'
                >
                  <input
                    type='radio'
                    name={`question-${index}`}
                    value={option}
                    checked={answers[index] === option}
                    onChange={() => handleChange(index, option)}
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 mr-1'
                  />
                  <span>{option}</span>
                </label>
              );
            })}
          </div>
        );
      })}
      <button className='bg-white w-40 h-10 mt-5' type='submit'>
        결과 확인하기
      </button>
    </form>
  );
};

export default TestForm;
