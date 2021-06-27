import { FC } from "react";

interface Props {
  notTopItem?: boolean;
  text: string;
  imageSrc: string;
  imageAlt: string;
}

const Card: FC<Props> = ({ notTopItem, imageSrc, imageAlt, text }) => {
  return (
    <div
      className={`bg-gray-50 xs:w-3/4 shadow-2xl border-b-4 border-gray-800  ${
        notTopItem ? "xs:mt-8" : ""
      }`}
    >
      <img
        className="w-3/6 mx-auto xs:pt-2 xs:mt-2"
        src={imageSrc}
        alt={imageAlt}
      />
      <p className="xs:text-center xs:mt-4 xs:mx-3.5 xs:text-lg text-gray-800 xs:mb-6">
        {text}
      </p>
    </div>
  );
};

export default Card;
