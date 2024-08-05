import React from "react";
import { useParams } from "react-router-dom";
import answers from "../answers";
import questions from "../questions";

const Answer = () => {
  const { questionId } = useParams();

  const possibleAnswers = answers.filter(
    (data) => data.QuestionId === parseInt(questionId)
  );
  const currentQuestion = questions.find(
    (el) => el.QuestionId === parseInt(questionId)
  );
  console.log(currentQuestion);

  return (
    <div>
      <div className="xl:max-w-[1300px]  mx-auto p-10 bg-slate-400">
        <div className="grid grid-cols-6">
          <img src="" className="col-span-2" alt="" />
          <div className="col-span-4">
            <h1></h1>
            <p></p>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Answer;
