import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-700">
      <div className="container py-10 text-gray-50 text-center">
        <h1 className="text-xl sm:text-3xl md:text-4xl font-source font-bold">
          Covid-19 Tracker
        </h1>
        <ul className="flex flex-col md:flex-row items-center md:items-baseline md:justify-evenly text-center md:max-w-4xl md:mx-auto my-4 space-y-3 md:space-y-0">
          <li className="footer-link">
            <Link href="/map">covid map</Link>
          </li>
          <li className="footer-link">
            <Link href="/about">About Covid</Link>
          </li>
        </ul>
        <p className="text-sm md:text-lg lg:text-xl mt-2 md:pt-5 text-gray-200">
          this site is for educational purpose only <br /> Created by Abhishek
        </p>
      </div>
    </footer>
  );
};

export default Footer;
