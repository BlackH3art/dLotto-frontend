import { FC } from "react";

interface Props {
  num: number;
  handler: (e: any) => void;
  active: boolean;
}

const NumberButton: FC<Props> = ({ num, handler, active }) => {
  return (
    <>
      <input
        className={`${
          active
            ? "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            : "border"
        } p-4 w-10 h-10 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
        type="button"
        value={num}
        name={num.toString()}
        onClick={handler}
      />
    </>
  );
};

export default NumberButton;
