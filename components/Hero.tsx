import Link from "next/link";
import Button from "@components/Button";

const Hero = () => {
  return (
    <div className="xs:w-72 w-10/12 md:w-11/12 lg:h-full lg:w-9/12 mx-auto my-10">
      <div className="shadow-2xl text-center bg-white flex xs:p-5  xs:flex-col-reverse lg:h-2/5 xs:my-5 mx-auto">
        <div className="flex flex-col sm:my-10 sm:w-1/2 md:my-auto md:pb-9">
          <h1 className="text-3xl sm:pt-8 md:text-4xl lg:text-5xl capitalize  font-source text-gray-900 xs:pt-4">
            Covid 19 tracker
          </h1>
          <p className="xs:text-md md:text-lg lg:text-xl text-gray-700 xs:pt-2 sm:mt-3 font-roboto">
            Learn how to defend yourself from Covid 19, it's rate of spread,
            countries affected and much more.
          </p>
          <div className="md:mt-6 md:flex md:flex-row md:items-center md:justify-center hidden space-x-5">
            <Button variant="primary">
              <Link href="/map">Goto map</Link>
            </Button>
            <Button variant="secondary">
              <Link href="/about">Learn more about covid</Link>
            </Button>
          </div>
        </div>
        <div className="sm:w-1/2">
          <img
            className="inline xs:h-40 text-center w-full bg-gray-50"
            src="hero_header.svg"
            alt="svg to show medical professionals"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
