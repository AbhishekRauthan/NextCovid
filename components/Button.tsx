import Link from "next/link";
import { FC } from "react";

interface Props {
  link: string;
  content: string;
  secondary?: boolean;
}


const Button: FC<Props> = ({ content, link, secondary }) => {
  if (secondary) {
    return (
      <button className="text-gray-800 text-lg font-roboto font-bold  border-gray-600 md:border-transparent border-l-4 md:hover:border-gray-800 transform hover:translate-x-5 transition delay-150 duration-300 ease-in-out ">
        <Link href={link}>
          {content}
        </Link>
        &rarr;
      </button>
    )
  } else {
    return (
      <button
        className="bg-gray-800 text-gray-50 rounded-full px-3.5 py-2.5 hover:bg-gray-600 hover:text-white"
      >
        <Link href={`/${link}`}>
          {content}
        </Link>
      </button>
    )
  }
}

export default Button
