import { useEffect, useState } from "react";
import questionsData from "./json/assessment.json";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function App() {
  const [questions, setQuestions] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  const onSubmit = () => {
    navigate("/questions");
  };

  return (
    <>
      <div className="flex flex-col gap-5 justify-center items-center w-[700px]">
        <div className="uppercase text-center">{questions.title}</div>
        <h1 className="text-center text-2xl">
          Công ty bạn trưởng thành như thế nào trong việc lắng nghe khách hàng?
        </h1>
        <form
          className="flex flex-col gap-5 w-full"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <input
            type="email"
            className="h-10 bg-white pl-4 text-black"
            placeholder="Địa chỉ email của bạn"
            {...register("email", {
              required: true,
            })}
          />
          {errors?.email?.type === "required" && (
            <div className="text-red-500 text-sm">Vui lòng điền email</div>
          )}
          <button type="submit" className="bg-[#1890ff] p-5">
            Bắt đầu
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
