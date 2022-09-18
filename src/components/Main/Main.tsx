import { FC, useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import LuckyNumber from "../LuckyNumber/LuckyNumber";

const Main: FC = () => {
  const { contractProvider } = useContext(AppContext);
  const [luckyNumbers, setLuckyNumbers] = useState<number[]>([
    0, 0, 0, 0, 0, 0,
  ]);

  const getLuckyNumberFromBlockchain = async () => {
    setLuckyNumbers([
      await contractProvider?.winningArray(0),
      await contractProvider?.winningArray(1),
      await contractProvider?.winningArray(2),
      await contractProvider?.winningArray(3),
      await contractProvider?.winningArray(4),
      await contractProvider?.winningArray(5),
    ]);
  };

  useEffect(() => {
    getLuckyNumberFromBlockchain();
  }, []);

  return (
    <>
      <section className="bg-neutral-200 w-full  flex justify-center scroll-smooth hover:scroll-auto">
        <div className="flex flex-col items-center w-3/5 border-2 ">
          <h1 className="text-5xl py-10 font-robotomono justify-center bg-neutral-200">
            This weeks lucky numbers:
          </h1>

          <div className="flex pb-5">
            {luckyNumbers.map((item, index) => (
              <LuckyNumber item={item} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
