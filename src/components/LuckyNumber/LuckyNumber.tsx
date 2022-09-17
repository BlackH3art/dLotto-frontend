import { FC } from "react";

interface Props {
  item: number;
}

const LuckyNumber: FC<Props> = ({ item }) => {
  return (
    <div className="justify-center">
      <div className="h-28 w-28 border-2 ml-5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
        <p className="text-4xl pt-5">{item}</p>
      </div>
    </div>
  );
};

export default LuckyNumber;
