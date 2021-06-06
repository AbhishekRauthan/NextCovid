import { FC } from "react"

const Footer:FC = () => {
  return (
    <footer className="bg-gray-700 rounded-tl-3xl rounded-br-3xl mt-5 z-10">
      <div className="container mx-auto grid xs:grid-cols-1 xs:py-10">
        <h1 className="xs:text-xl font-source font-bold text-gray-50 text-center">Covid 19 Tracker</h1>
      </div>
    </footer>
  )
}

export default Footer
