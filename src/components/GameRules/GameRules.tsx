import { FC, useState } from "react";

const GameRules: FC = () => {

  return (
    <div className="w-full flex justify-center bg-gray-200 pt-10">
        <div className="w-3/5 flex flex-col items-center py-10 justify-center border-2 border-red-400 drop-shadow-2xl py-4 px-3 bg-gray-50 rounded bg-gray-800 font-mono">
          <p className="text-white">
            the rules are simple you select 6 numbers from 1 to 36 If you can:
          </p>

          <div className="">
            <p className="text-white"> match 3 numbers you win 1.2 matic</p>
            <p className="text-white">match 4 numbers you win 5 matic</p>
            <p className="text-white">match 5 numbers you win 10 matic</p>
            <p className="text-white">
              match 6 numbers you win prizepool you win the jackpot prize
            </p>
          </div>
        </div>
    </div>
  );
};

export default GameRules;
