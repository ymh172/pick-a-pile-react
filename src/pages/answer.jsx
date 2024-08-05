import React, { useState } from "react";
import { useParams } from "react-router-dom";
import answers from "../answers";
import questions from "../questions";
import AnswerCard from "../components/AnswerCard";

const Answer = () => {
  const { questionId } = useParams();

  const possibleAnswers = answers.filter(
    (data) => data.QuestionId === parseInt(questionId)
  );
  const currentQuestion = questions.find(
    (el) => el.QuestionId === parseInt(questionId)
  );

  const [chooseAnswer, setChooseAnswer] = useState("");

  const handleCardClick = (answerData) => {
    setChooseAnswer(answerData.AnswerDesp);
  };

  return (
    <div className="xl:max-w-[1300px] min-h-screen mx-auto p-10 bg-slate-400">
      <div className="">
        <div className="grid grid-cols-12 mb-14">
          <div className="col-span-12">
            <h1 className="text-3xl font-bold leading-[50px]">
              {currentQuestion.QuestionName}
            </h1>
            <p className="leading-[40px]">{currentQuestion.QuestionDesp}</p>
          </div>
        </div>
        <div>
          <div className="grid xl:grid-cols-4 gap-3">
            {possibleAnswers.map((el) => (
              <AnswerCard
                key={el.AnswerId}
                data={el}
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div>
      </div>
      {chooseAnswer && (
        <div className="mt-10 p-5 bg-white rounded-md shadow-lg">
          <h2 className="text-2xl font-bold">Selected Pile</h2>
          <p className="mt-4">{chooseAnswer}</p>
        </div>
      )}
    </div>
  );
};

export default Answer;
