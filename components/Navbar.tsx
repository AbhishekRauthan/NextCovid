import Link from "next/link"
import { FC, useState } from "react";

const Navbar: FC = () => {
  const [isClosed, setIsClosed] = useState(true);

  return (
    <header className="bg-gray-50 w-full shadow-2xl">
      <div className="flex md:flex-row z-10 justify-between items-center xs:p-3 sm:px-4 xs:relative md:container py-4">
        <div className="block border-2 border-transparent hover:border-gray-800 px-1 duration-200">
          <h1 className="xs:text-xl sm:text-3xl  capitalize font-bold font-source">
            <Link href="/">
              Covid-19 tracker
            </Link>
          </h1>
        </div>
        <div className="absolute xs:top-12 xs:right-1 sm:relative xs:flex xs:flex-col xs:items-end  xs:shadow-2xl">
          <nav
            className={`${isClosed ? "xs:hidden" : ""
              } flex xs:flex-col flex-row justify-evenly w-max xs:p-3 bg-gray-50`}
          >
            <li className="nav-item">
              <Link href="/about" >about covid</Link>
            </li>
            <li className="nav-item">
              <Link href="/map">
                goto map
              </Link>
            </li>
          </nav>
        </div>
        <span className="cursor-pointer sm:hidden" onClick={() => setIsClosed(!isClosed)}>
          <svg
            className={isClosed ? `xs:h-6 xs:w-6 sm:hidden` : "hidden"}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={isClosed ? `hidden` : "xs:h-6 xs:w-6 sm:hidden"}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>

      </div>
    </header>
  );
};

export default Navbar;
