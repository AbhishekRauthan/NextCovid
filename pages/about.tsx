import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col justify-center bg-gray-50">
        <div className=" my-5 text-left">
          <h1 className="text-2xl font-roboto capitalize text-gray-800 border-b-2 border-gray-800  inline-block">About this tracker</h1>
        </div>
      </div>
    </Layout>
  )
}

export default About
