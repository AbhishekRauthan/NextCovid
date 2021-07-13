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
      className={`bg-gray-50 w-2/4 md:mx-3.5 shadow-2xl border-b-4 border-gray-800 mx-auto ${
        notTopItem ? "mt-8 md:mt-0" : ""
      }`}
    >
      <img
        className="w-3/6 h-3/4 lg:h-1/2 sm:mb-5 mx-auto xs:pt-2 xs:mt-2"
        src={imageSrc}
        alt={imageAlt}
      />
      <p className="block text-center text-lg lg:text-xl text-gray-800 mb-6">
        {text}
      </p>
    </div>
  );
};

export default Card;
