import { FC } from "react"

interface Props {
  title: string;
}

const AboutContainer: FC<Props> = ({ title, children }) => {
  return (
    <div className="ml-3 mr-5 text-left">
      <h1
        className="text-xl font-roboto capitalize text-gray-800 border-b-2 border-gray-800  inline-block">
        {title}
      </h1>
      <p
        className="mt-2.5 text-gray-700 font-medium text-lg leading-5">
        {children}
      </p>
    </div>
  )
}

export default AboutContainer
