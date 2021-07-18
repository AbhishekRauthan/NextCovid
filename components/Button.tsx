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
      <button className="border-b-2 text-gray-800 border-transparent md:px-2 hover:border-black hover:shadow-lg transform hover:-translate-y-3 duration-300 ease-in-out">
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
