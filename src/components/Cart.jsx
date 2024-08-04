import React from "react";
import answers from "../answers";

const Cart = ({ data }) => {
  const answerData = answers;

  const filterData = answerData.filter(
    (el) => data.QuestionId === el.QuestionId
  );
  const imgPath = filterData[0].AnswerImageUrl;
  console.log(imgPath);

  return (
    <div className="bg-gray-300 p-6 flex flex-col  border border-black gap-5 rounded-md">
      <img
        src={imgPath}
        className="w-[200px] h-[200px] object-cover object-center "
        alt=""
      />
      <h2 className="text-xl font-bold line-clamp-2">{data.QuestionName}</h2>
      <p className="line-clamp-2 mt-auto ">{data.QuestionDesp}</p>
      <button className="px-2 py-2 border bg-gray-500 text-white border-black text-start w-[100px] rounded-md">
        Read More
      </button>
    </div>
  );
};

export default Cart;
