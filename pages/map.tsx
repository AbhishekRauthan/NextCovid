import Head from "next/head";
import Layout from "@components/Layout";
import CovidMap from "@components/CovidMap";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import axios from "axios";
import {
  AllCountriesData,
  CountryDetails,
  CountryData,
} from "@interface/MapData";
import { MapDataProp } from "@interface/PropType";

const Map = ({
  allCountriesData,
  allCountries,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Map - Covid-19 Tracker</title>
      </Head>
      <Layout>
        <div className="h-[100vh] max-w-8xl grid grid-cols-6 mx-auto">
          <CovidMap
            allCountriesData={allCountriesData}
            allCountries={allCountries}
          />
          <div className="col-span-2 bg-blue-600"></div>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<MapDataProp> = async () => {
  const allCountriesData = await axios.get<AllCountriesData>(
    "https://disease.sh/v3/covid-19/all"
  );
  const allCountriesDataDump = await axios.get<CountryData[]>(
    "https://disease.sh/v3/covid-19/countries"
  );
  const countries: CountryDetails[] = allCountriesDataDump.data.map(
    (country) => ({
      name: country.country,
      value: country.countryInfo.iso2,
    })
  );
  return {
    props: {
      allCountriesData: allCountriesData.data,
      allCountries: countries,
    },
  };
};
export default Map;
