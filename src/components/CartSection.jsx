import React from "react";
import Cart from "./Cart";
import questions from "../questions";
import answers from "../answers";

const CartSection = () => {
  const questionData = questions;
  const answerData = answers;

  return (
    <div className="xl:max-w-[1300px]  mx-auto p-10 bg-slate-400">
      <h1 className="text-3xl font-bold text-center mb-4">Pick A Pile</h1>
      <div className="grid grid-cols-3 gap-5">
        {questionData.map((question) => (
          <Cart key={question.QuestionId} data={question} />
        ))}
      </div>
    </div>
  );
};

export default CartSection;
