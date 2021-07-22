import Layout from '../components/Layout'
import Head from 'next/head'

const Error = () => {
  return (
    <>
      <Head>
        <title>Page not found - Covid-19 Tracker</title>
      </Head>
      <Layout>
        <div className="grid place-content-center md:h-[86vh]">
          <div className="mx-auto my-11 bg-white py-10 md:py-14 px-5 md:px-8 w-2/3 md:w-[90%]  text-center shadow-xl flex flex-col md:flex-row md:flex-wrap md:justify-center md:items-center">
            <h1
              className="text-3xl font-light font-source border-b-2 border-gray-500 pb-2 md:border-none md:text-7xl">
              404 Error
            </h1>
            <span className="md:h-12 md:w-0.5 md:mx-5 md:bg-gray-800"></span>
            <h3
              className="capitalize pt-2 text-2xl md:text-4xl font-roboto font-extralight">
              Page not Found
            </h3>
            <p
              className="mt-3 leading-6 md:leading-10 text-xl md:text-2xl font-light md:font-normal">
              Either something went wrong or the Page you requested doesn't exists
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Error
