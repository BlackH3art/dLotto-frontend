import { FC } from "react";

const GameRules: FC = () => {
  return (
    <div>
      the rules are simple you select six numbers from 1 to 36. <br />
      If you can:
      <br /> match 3 numbers you win 1.2 matic
      <br />
      match 4 numbers you win 5 matic
      <br />
      match 5 numbers you win 10 matic
      <br />
      match 6 numbers you win prizepool you win the jackpot prize.
    </div>
  );
};

export default GameRules;
