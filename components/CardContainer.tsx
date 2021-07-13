import { FC } from "react";

const CardContainer: FC = ({ children }) => {
  return (
    <div className="bg-white">
      <div className="container sm:mx-auto pb-10">
        <h1 className="text-center font-source capitalize mb-8 text-gray-900 text-4xl sm:pt-8 lg:text-5xl">
          Why this Tracker
        </h1>
        <div className="flex flex-col md:flex-row  sm:justify-center items-start lg:items-stretch">{children}</div>
      </div>
    </div>
  );
};

export default CardContainer;
