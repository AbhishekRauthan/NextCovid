const Hero = () => {
  return (
    <div className="xs:w-72 w-10/12 md:w-11/12 lg:w-9/12 md:h-5/6 lg:h-4/6 mx-auto my-6 lg:my-8">
      <div className="my-auto shadow-2xl text-center bg-white flex xs:p-5 xs:flex-col-reverse xs:my-5 mx-auto">
        <div className="flex flex-col sm:my-10 sm:w-1/2 md:my-auto md:pb-9">
          <h1 className="text-3xl md:text-4xl lg:text-5xl capitalize  font-source text-gray-900 xs:pt-4">
            Covid 19 tracker
          </h1>
          <p className="xs:text-md md:text-lg lg:text-xl text-gray-700 xs:pt-2 sm:mt-3 font-roboto">
            Learn how to defend yourself from Covid 19, it's rate of spread, countries affected and much more.
          </p>
          <div className="md:pt-6 md:flex flex-col md:flex-row md:justify-center hidden">
            <button
              className=" md:mr-6 bg-gray-800 hover:bg-gray-700 focus:bg-gray-700  md:px-5 md:py-3 rounded-full text-gray-50 hover:text-white focus:text-white shadow-lg hover:shadow-2xl transform hover:-translate-y-3 delay-150 duration-300 ease-in-out"
            >Go to Map
            </button>
            <button
              className="border-b-2 border-transparent md:px-2 hover:border-black hover:shadow-lg transform hover:-translate-y-3 duration-300 ease-in-out "
            >Learn about Covid &rarr;
            </button>
          </div>
        </div>
        <div className="sm:w-1/2">
          <img className="inline xs:h-40 w-full  bg-gray-50" src="hero_header.svg" alt="svg to show medical professionals" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
