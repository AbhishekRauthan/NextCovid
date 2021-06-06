import { FC, useState } from "react";

const Navbar: FC = () => {
  const [isClosed, setIsClosed] = useState(true);

  return (
    <header className="bg-gray-50 ">
      <div className="container mx-auto flex w-full justify-between items-start xs:px-3 xs:py-3 shadow-2xl">
        <h1 className="xs:text-xl sm:text-3xl capitalize font-bold font-source">
          Covid 19 tracker
        </h1>
        <span className="cursor-pointer" onClick={() => setIsClosed(!isClosed)}>
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
      <div className="absolute right-0 sm:relative flex flex-col items-end  xs:shadow-2xl">
        <nav
          className={`${
            isClosed ? "xs:hidden" : ""
          } flex xs:flex-col flex-row justify-evenly w-max xs:p-3 bg-gray-50`}
        >
          <li className="nav-item">about this tracker</li>
          <li className="nav-item">measures to take</li>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
