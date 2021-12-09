import Head from "next/head";
import CovidMap from "@components/CovidMap";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { sortData } from "@utils/index";
import Loading from "@components/Loading";
import dynamic from "next/dynamic";
import axios from "axios";
import {
  WorldWideData,
  CountryDetails,
  CountryData,
  HistoricData,
} from "@interface/MapData";
import { CasesType, MapPageProp } from "@interface/PropType";
import "leaflet/dist/leaflet.css";
import numeral from "numeral";
import { useState } from "react";

const LineGraph = dynamic(() => import("@components/LineGraph"), {
  loading: () => (
    <div className="flex justify-center items-center mt-3">
      <Loading />
    </div>
  ),
  ssr: false,
});

const Map = ({
  worldWideData,
  allCountriesDetails,
  allCountries,
  sortedCountries,
  historicData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [caseType, setCasesType] = useState<CasesType>("cases");

  return (
    <>
      <Head>
        <title>Map - Covid-19 Tracker</title>
      </Head>
      <>
        <div className="max-w-8xl grid grid-cols-1 lg:grid-cols-6 mx-auto">
          <CovidMap
            worldWideData={worldWideData}
            allCountriesDetails={allCountriesDetails}
            allCountries={allCountries}
            casesType={caseType}
            setCasesType={setCasesType}
          />
          <div className="lg:col-span-2 bg-gray-100">
            <div className=" flex flex-col mx-5 mt-5 border-2 border-gray-800">
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
            <LineGraph casesType={caseType} historicData={historicData} />
          </div>
        </div>
      </>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<MapPageProp> = async () => {
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
  const historicalData = await axios.get<HistoricData>(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=120"
  );

  const sortedCountries = sortData(allCountries.data);

  return {
    props: {
      worldWideData: allCountriesData.data,
      allCountriesDetails: countries,
      allCountries: allCountries.data,
      sortedCountries,
      historicData: historicalData.data,
    },
  };
};
export default Map;
