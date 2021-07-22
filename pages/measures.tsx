import Head from 'next/head'
import Layout from '../components/Layout'
import AboutContainer from '../components/AboutContainer'

const Measures = () => {
  return (
    <>
      <Head>
        <title>Measures - Covid-19 Tracker</title>
      </Head>
      <Layout>
        <AboutContainer title="Measures"></AboutContainer>
      </Layout>
    </>
  )
}

export default Measures
