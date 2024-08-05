import React from "react";

const AnswerCard = ({ data, onClick }) => {
  return (
    <div
      className="border bg-gray-300 rounded-md"
      onClick={() => onClick(data)}
    >
      <img
        src={data.AnswerImageUrl}
        alt=""
        className="w-[300px] h-[400px] object-cover object-center"
      />
      <button className="bg-stone-700 text-white rounded-md px-4 py-2 border border-black m-4">
        Choose
      </button>
    </div>
  );
};

export default AnswerCard;
