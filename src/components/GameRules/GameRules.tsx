import { FC, useState } from "react";

const GameRules: FC = () => {
  const [show, toggleShow] = useState(true);
  return (
    <div className="fixed">
      <button
        className="animate-bounce drop-shadow-2xl font-robotomono text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
        onClick={() => toggleShow(!show)}
      >
        {show ? "Hide" : "Show"}
      </button>
      {show && (
        <div className="fixed drop-shadow-2xl overflow-hidden bg-zinc-900 overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 font-mono">
          <p className="text-white">
            the rules are simple you select 6 numbers from 1 to 36 If you can:
          </p>

          <p className="text-white"> match 3 numbers you win 1.2 matic</p>
          <p className="text-white">match 4 numbers you win 5 matic</p>
          <p className="text-white">match 5 numbers you win 10 matic</p>
          <p className="text-white">
            match 6 numbers you win prizepool you win the jackpot prize
          </p>
        </div>
      )}
    </div>
  );
};

export default GameRules;
