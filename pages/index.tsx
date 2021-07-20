import Layout from "../components/Layout";
import Hero from "../components/Hero";
import CardContainer from "../components/CardContainer";
import Card from "../components/Card";
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>Covid-19 Tracker</title>
    </Head>
    <Layout>
      <Hero />
      <CardContainer>
        <Card
          imageSrc="world_map.svg"
          imageAlt="World Map"
          text="Have a World view of the cases and recovery of covid-19. Select a country for if you want to and see the trend of cases. Also learn about international travel"
        />

        <Card
          imageSrc="wash_hands.svg"
          imageAlt="Countering Covid"
          text="Have a detailed plan for countering Covid 19"
          notTopItem
        />

        <Card
          imageSrc="medical_research.svg"
          imageAlt="Medical Research"
          text="Have a detailed look on available vaccines and research done for covid 19"
          notTopItem
        />
      </CardContainer>
    </Layout>
  </>
  );
}
