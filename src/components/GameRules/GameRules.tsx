import { FC } from "react";

const GameRules: FC = () => {
  return (
    <div>
      <div className=" fixed bg-blue-200 overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
        {" "}
        <p>the rules are simple you select six numbers from 1 to 36</p>
        If you can:
        <p> match 3 numbers you win 1.2 matic</p>
        <p>match 4 numbers you win 5 matic</p>
        <p>match 5 numbers you win 10 matic</p>
        <p>match 6 numbers you win prizepool you win the jackpot prize.</p>
      </div>
    </div>
  );
};

export default GameRules;
