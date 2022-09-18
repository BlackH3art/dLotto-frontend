import { FC, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";

import { AppContext } from "../../context/AppContext";
import NumbersForm from "./NumbersForm";

const Ticket: FC = () => {

  const { contractProvider } = useContext(AppContext);
  const [prizePool, setPrizePool] = useState<string>('');

  const getPrizePool = async () => {
    try {
      
      const prizeHexObject = await contractProvider?.prizePool();
      const prize = ethers.utils.formatEther(prizeHexObject._hex)
      
      setPrizePool(prize);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPrizePool();
  }, [])


  return (
    <>
      <div className=" flex flex-col w-[500px] h-[800px]  rounded-md border-x-[2rem] border-zinc-900 bg-zinc-900 items-center">
        <h1 className=" text-4xl py-5 text-white">dLotto</h1>

        <p className="text-2xl text-center font-robotomono px-10 text-white">
          Buy ticket for chance to win prize pool of total: 
        </p>
        <p className="text-4xl text-yellow-400 text-center font-robotomono px-10 text-white pt-4">
          {prizePool} MATIC
        </p>

        <NumbersForm />
      </div>
    </>
  );
};

export default Ticket;
