import { FC } from "react"

interface Props {
  title: string;
}

const AboutContainer: FC<Props> = ({ title, children }) => {
  return (
    <div className="max-w-screen-md flex flex-col justify-center bg-gray-50 space-y-4 py-5 sm:my-10 sm:mx-10 md:mx-auto">
      <h1 className="text-center text-2xl md:text-3xl text-gray-900 font-source font-semibold uppercase mt-5">{title}</h1>
      {children}
    </div>
  )
}

export default AboutContainer;
