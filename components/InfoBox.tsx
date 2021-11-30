import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  active: boolean;
  title: string;
  cases: string;
}

const InfoBox: FC<Props> = ({ active, cases, onClick, title }) => {
  return (
    <div
      className={`shadow bg-gray-100 border-2 border-transparent cursor-pointer ${
        active && " border-gray-600 shadow-lg"
      }`}
      onClick={onClick}
    >
      <h1 className="text-2xl">{title}</h1>
      <p>{cases}</p>
    </div>
  );
};

export default InfoBox;
