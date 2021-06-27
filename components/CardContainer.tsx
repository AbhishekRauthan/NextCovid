import { FC } from "react";

const CardContainer: FC = ({ children }) => {
  return (
    <div className="bg-white">
      <div className="container xs:py-10">
        <h1 className="text-center font-source capitalize xs:mb-8 text-gray-900 xs:text-4xl">
          Why this Tracker
        </h1>
        <div className="flex xs:flex-col items-center">{children}</div>
      </div>
    </div>
  );
};

export default CardContainer;
