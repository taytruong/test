import { useEffect, useState } from "react";
import questionsData from "../json/assessment.json";
import { useNavigate } from "react-router-dom";

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    setQuestions(questionsData.questions);
  }, []);

  const handleBack = () => {
    if (currentQuestionIndex <= 0) {
      navigate("/");
    } else {
      const newIndex = currentQuestionIndex - 1; 
      setCurrentQuestionIndex(newIndex);
    }
  };
  const handleNext = () => {
    if (currentQuestionIndex >= questions.length - 1) {
      navigate("/result", { state: { score } });
    } else {
      const newIndex = currentQuestionIndex + 1; 
      setCurrentQuestionIndex(newIndex);
    }
  };
  const handleSelect = (item, id) => {
    setScore((score) => score + item);
    setSelectedOptions((prev) => ({ ...prev, [currentQuestionIndex]: id }));
  };


  return (
    <div className="flex justify-center items-center text-center flex-col w-[600px] gap-5">
      {questions?.length > 0 && (
        <div className="flex flex-col gap-5 justify-center items-center">
          <h1 className="text-xl leading-normal">
            {questions[currentQuestionIndex].title}
          </h1>
          {questions[currentQuestionIndex].options.map((item) => (
            <div
              key={item.id}
              className={`p-5 border border-white w-[500px] hover:text-[#1890ff] hover:border-[#1890ff] cursor-pointer ${
                selectedOptions[currentQuestionIndex] === item.id
                  ? "text-[#1890ff] font-bold border border-blue-500"
                  : ""
              }`}
              onClick={() => handleSelect(item.score, item.id)}
            >
              <p className="text-center">{item.text}</p>
            </div>
          ))}
        </div>
      )}
      <div className="flex gap-5 justify-between w-[500px]">
        <button className="p-5 bg-white text-blue-400" onClick={handleBack}>
          Quay lại
        </button>
        <button className="p-5 bg-blue-400" onClick={handleNext}>
          Tiếp theo
        </button>
      </div>
    </div>
  );
};

export default Questions;
