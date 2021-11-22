import Head from "next/head";
import Layout from "@components/Layout";
import CovidMap from "@components/CovidMap";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import axios from "axios";
import { AllCountriesData } from "@interface/MapData";

type Props = {
  data: AllCountriesData;
};

const Map = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Map - Covid-19 Tracker</title>
      </Head>
      <Layout>
        <div className="h-[100vh] max-w-8xl bg-red-200 grid grid-cols-6 mx-auto">
          <CovidMap data={data} />
          <div className="col-span-2 bg-blue-600"></div>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await axios.get<AllCountriesData>(
    "https://disease.sh/v3/covid-19/all"
  );
  return {
    props: {
      data: res.data,
    },
  };
};
export default Map;
