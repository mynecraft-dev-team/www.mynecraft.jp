import React from "react";

export default function Card({ title = "hoge", description = "" }) {
  return (
    <div className="border-solid border-2 rounded-md shadow-sm   mt-5 w-1/2 min-h-560 px-5 py-2">
      <span className="border-solid border-b-2 border-l-4 pl-2 w-64 block text-2xl">
        {title}
      </span>
      <p>{description}</p>
    </div>
  );
}
