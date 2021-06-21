const Hero = () => {
  return (
    <div className="xs:w-72 shadow-2xl xs:text-center bg-white flex xs:p-5 xs:flex-col-reverse xs:my-5 mx-auto">
      <div className="flex flex-col ">
        <h1 className="xs:text-3xl capitalize font-source text-gray-900 xs:pt-4">
          Covid 19 tracker
        </h1>

        <p className="xs:text-md text-gray-700 xs:pt-2 font-roboto">
          Learn how to defend yourself from Covid 19, it's rate of spread, countries affected and much more.
        </p>
      </div>

      <div>
        <img className="inline xs:h-40 xs:w-full bg-gray-50" src="hero_header.svg" alt="svg to show medical professionals" />
      </div>
    </div>
  );
};

export default Hero;
