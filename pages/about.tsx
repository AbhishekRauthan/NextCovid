import Layout from "../components/Layout"
import AboutContainer from "../components/AboutContainer"
import Button from "../components/Button"

const About = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col justify-center bg-gray-50 space-y-4 py-5">
        <h1 className="text-center text-2xl text-gray-900 font-medium uppercase mt-5">About</h1>
        <AboutContainer title="purpose of this tracker">
          Main reason for this tracker is to provide users an upto date knowlegde of Covid 19 and related information like recovery rate, spread, about vaccines etc
        </AboutContainer>

        <AboutContainer title="about covid-19">
          COVID-19 is the disease caused by a new coronavirus called SARS-CoV-2.  WHO first learned of this new virus on 31 December 2019, following a report of a cluster of cases of ‘viral pneumonia’ in Wuhan, People’s Republic of China.
          <br />
          <Button secondary content="Learn More" link="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/coronavirus-disease-covid-19" />
        </AboutContainer>
      </div>
    </Layout >
  )
}

export default About
