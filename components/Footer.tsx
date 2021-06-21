import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-700">
      <div className="container mx-auto grid xs:grid-cols-1 xs:py-10 text-gray-50   xs:text-center">
        <h1 className="xs:text-xl font-source font-bold">Covid 19 Tracker</h1>
        <ul className="flex xs:flex-col xs:my-4 xs:align-middle">
          <li className="footer-link">Map</li>
          <li className="footer-link xs:mt-3">About this tracker</li>
          <li className="footer-link xs:mt-3">Measures to Take</li>
        </ul>
        <p className="xs:text-sm xs:mt-2 text-gray-300">this site is for educational purpose only <br/> Created by Abhishek</p>
      </div>
    </footer>
  );
};

export default Footer;
