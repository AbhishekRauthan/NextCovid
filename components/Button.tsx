import { ButtonHTMLAttributes, forwardRef } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant, children, ...rest }, ref) => {
    if (variant === "secondary") {
      return (
        <div className="relative">
          <button
            className="text-gray-800 text-lg md:text-xl font-roboto font-bold md:hover:translate-x-5 md:delay-150 md:duration-300 md:ease-in-out peer border-l-4 md:border-none pl-3 md:pl-0 border-gray-800"
            ref={ref}
            {...rest}
          >
            {children}
            &rarr;
          </button>
          <span className="absolute left-0 top-0 h-full w-1 peer-hover:bg-gray-800 delay-150 duration-300 ease-in-out rounded-full hidden md:inline-block" />
        </div>
      );
    } else {
      return (
        <button
          className="bg-gray-800 text-gray-50 rounded-full px-3.5 py-2.5 shadow-xl hover:text-white hover:-translate-y-5 hover:shadow-2xl delay-150 duration-500 ease-in-out"
          ref={ref}
          {...rest}
        >
          {children}
        </button>
      );
    }
  }
);

export default Button;
