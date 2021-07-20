import Layout from "../components/Layout"
import AboutContainer from "../components/AboutSections"
import Button from "../components/Button"
import Head from 'next/head'

const About = () => {
  return (
    <>
    <Head>
      <title>About - Covid-19 Tracker</title>
    </Head>
    <Layout>
      <div className="max-w-screen-md mx-auto flex flex-col justify-center bg-gray-50 space-y-4 py-5 md:my-5">
        <h1 className="text-center text-2xl md:text-3xl text-gray-900 font-source font-semibold uppercase mt-5">About</h1>
        
        <AboutContainer title="Is this official?">
          No. This is an open source project created to spread information about Covid-19.
        </AboutContainer>

        <AboutContainer title="purpose of this tracker">
          Main purpose of this tracker is to provide users an upto date knowlegde of Covid-19 and related information like recovery rate, spread, about vaccines etc
        </AboutContainer>


        <AboutContainer title="about covid-19">
          COVID-19 is the disease caused by a new coronavirus called SARS-CoV-2.  WHO first learned of this new virus on 31 December 2019, following a report of a cluster of cases of ‘viral pneumonia’ in Wuhan, People’s Republic of China.
          The disease has since spread worldwide, leading to an ongoing pandemic.
          <br />
          <div className="mt-2">
            <Button secondary content="Click to learn More" link="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/coronavirus-disease-covid-19" />
          </div>
        </AboutContainer>
        
        <AboutContainer title="symtoms of covid">
          Symtoms of covid are variable, but often include fever, cough, headache, fatigue, breathing difficulties, and loss of smell and taste. Symptoms may begin one to fourteen days after exposure to the virus.
          <br />
          <div className="mt-2">
          <Button secondary content="Click to learn More" link="/meassures" />
          </div>
        </AboutContainer>
      </div>
    </Layout >
  </>
  )
}

export default About
