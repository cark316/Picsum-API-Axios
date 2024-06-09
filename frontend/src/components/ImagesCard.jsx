import React from "react";

const ImagesCard = (props) => {
  return (
    <div className="flex flex-col items-center rounded-xl overflow-clip bg-slate-300">
      <div>{props.image}</div>
      <h1 className="p-2 font-bold">Card Name</h1>
      <p className="p-2 font-thin">This is a description</p>
    </div>
  );
};

export default ImagesCard;
