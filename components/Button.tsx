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
      <div className="relative">
        <button className="text-gray-800 text-lg font-roboto font-bold hover:translate-x-5 delay-150 duration-300 ease-in-out peer">
          <Link href={link}>
            {content}
          </Link>
          &rarr;
        </button>
        <span className="absolute left-0 top-0 h-full w-1 peer-hover:bg-gray-800 delay-150 duration-300 ease-in-out rounded-full"/>
      </div>
    )
  } else {
    return (
      <button
        className="bg-gray-800 text-gray-50 rounded-full px-3.5 py-2.5 shadow-xl hover:text-white hover:-translate-y-5 hover:shadow-2xl delay-150 duration-500 ease-in-out"
      >
        <Link href={link}>
          {content}
        </Link>
      </button>
    )
  }
}

export default Button
