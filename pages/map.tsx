import Head from "next/head";
import Layout from "@components/Layout";
import CovidMap from "@components/CovidMap";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { sortData } from "@utils/index";
import axios from "axios";
import { WorldWideData, CountryDetails, CountryData } from "@interface/MapData";
import { MapDataProp } from "@interface/PropType";
import "leaflet/dist/leaflet.css";
import numeral from "numeral";

const Map = ({
  worldWideData,
  allCountriesDetails,
  allCountries,
  sortedCountries,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Map - Covid-19 Tracker</title>
      </Head>
      <Layout>
        <div className="h-[100vh] max-w-8xl grid grid-cols-6 mx-auto">
          <CovidMap
            worldWideData={worldWideData}
            allCountriesDetails={allCountriesDetails}
            allCountries={allCountries}
          />
          <div className="col-span-2 bg-gray-100">
            <div className=" flex flex-col m-5 border-2 border-gray-800">
              <h1 className="capitalize text-center font-roboto text-2xl">
                Live Cases By country
              </h1>
              <div className="overflow-scroll mt-5 text-gray-800 h-[400px] ">
                {sortedCountries.map((country) => (
                  <tr
                    key={country.country}
                    className="flex justify-between mx-5 odd:bg-gray-300 "
                  >
                    <td>{country.country}</td>
                    <td>
                      <strong>{numeral(country.cases).format("0,0")}</strong>
                    </td>
                  </tr>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<MapDataProp> = async () => {
  const allCountriesData = await axios.get<WorldWideData>(
    "https://disease.sh/v3/covid-19/all"
  );
  const allCountries = await axios.get<CountryData[]>(
    "https://disease.sh/v3/covid-19/countries"
  );
  const countries: CountryDetails[] = allCountries.data.map((country) => ({
    name: country.country,
    value: country.countryInfo.iso2,
  }));

  const sortedCountries = sortData(allCountries.data);
  return {
    props: {
      worldWideData: allCountriesData.data,
      allCountriesDetails: countries,
      allCountries: allCountries.data,
      sortedCountries,
    },
  };
};
export default Map;
