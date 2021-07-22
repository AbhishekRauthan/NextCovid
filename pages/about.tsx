import Layout from "../components/Layout"
import AboutSection from "../components/AboutSections"
import Button from "../components/Button"
import Head from 'next/head'

const About = () => {
  return (
    <>
      <Head>
        <title>About - Covid-19 Tracker</title>
      </Head>
      <Layout>
        <div className="max-w-screen-md flex flex-col justify-center bg-gray-50 space-y-4 py-5 sm:my-10 sm:mx-10 md:mx-auto">
          <h1 className="text-center text-2xl md:text-3xl text-gray-900 font-source font-semibold uppercase mt-5">About</h1>

          <AboutSection title="Is this official?">
            No. This is an open source project created to spread information about Covid-19.
          </AboutSection>

          <AboutSection title="purpose of this tracker">
            Main purpose of this tracker is to provide users an upto date knowlegde of Covid-19 and related information like recovery rate, spread, about vaccines etc
          </AboutSection>


          <AboutSection title="about covid-19">
            COVID-19 is the disease caused by a new coronavirus called SARS-CoV-2.  WHO first learned of this new virus on 31 December 2019, following a report of a cluster of cases of ‘viral pneumonia’ in Wuhan, People’s Republic of China.
            The disease has since spread worldwide, leading to an ongoing pandemic.
            <br />
            <div className="mt-2">
              <Button secondary content="Click to learn More" link="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/coronavirus-disease-covid-19" />
            </div>
          </AboutSection>

          <AboutSection title="symtoms of covid">
            Symtoms of covid are variable, but often include fever, cough, headache, fatigue, breathing difficulties, and loss of smell and taste. Symptoms may begin one to fourteen days after exposure to the virus.
            <br />
            <div className="mt-2">
              <Button secondary content="Click to learn More" link="/meassures" />
            </div>
          </AboutSection>

          <AboutSection title="Protection against covid">
            Stay safe by taking some simple precautions, such as physical distancing, wearing a mask, especially when distancing cannot be maintained, keeping rooms well ventilated, avoiding crowds and close contact, regularly cleaning your hands, and coughing into a bent elbow or tissue. Check local advice where you live and work.
            <br />
            <div className="mt-2">
              <Button secondary content="Click to learn More" link="/meassures" />
            </div>
          </AboutSection>
        </div>
      </Layout >
    </>
  )
}

export default About
