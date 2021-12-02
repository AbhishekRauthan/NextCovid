import { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  active: boolean;
  title: string;
  cases: string;
  total: string;
}

const InfoBox: FC<Props> = ({ active, cases, onClick, title, total, ...rest }) => {
  return (
    <div
      className={`text-center shadow bg-gray-100 border-2 p-2.5 border-transparent cursor-pointer ${
        active && "border-gray-600 shadow-lg"
      }`}
      onClick={onClick}
      {...rest}
    >
      <h1 className="text-2xl">{title}</h1>
      <p>{cases} today</p>
      <p>{total} total</p>
    </div>
  );
};

export default InfoBox;
