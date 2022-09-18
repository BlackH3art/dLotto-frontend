import { ChangeEvent, FC, useState, ChangeEventHandler, FormEventHandler, FormEvent, useContext } from "react";
import { ethers } from "ethers";

import { AppContext } from "../../context/AppContext";

import NumberButton from "./NumberButton";
import { toast } from "react-toastify";

const NumbersForm: FC = () => {
  const rangeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const { contractSigner } = useContext(AppContext);

  const handleChange: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let val = Number(e.target.value);

    if (selectedNumbers.includes(val)) {
      setSelectedNumbers((prev) => prev.filter((item) => item !== val));
      return;
    }
    if (selectedNumbers.length === 6) return;

    setSelectedNumbers((prev) => [...prev, val]);
  };

  const handleSubmit: FormEventHandler = async (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    try {

      if(selectedNumbers.length === 6) {

        const txHash = await contractSigner?.buyTicket(
          selectedNumbers[0],
          selectedNumbers[1],
          selectedNumbers[2],
          selectedNumbers[3],
          selectedNumbers[4],
          selectedNumbers[5],
          { value: ethers.utils.parseEther("0.01")._hex }
        );

        await txHash.wait();

        setSelectedNumbers([]);
        toast.success("Ticket sent to lottery! You can buy another one", { theme: "colored" });

      } else {
        toast.error("You need to select 6 numbers", { theme: "colored" });
      }

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { theme: "colored" });
    }

  }

  return (
    <>
      <div className="flex flex-col py-2 my-4 w-4/5 border-dashed border-y-4 border-black items-center">
        <p className="text-white">Your numbers:</p>
        <div className="flex">
          {selectedNumbers.map((item, index) => (
            <div className="px-4" key={index}>
              <p className="text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <form>
        {rangeArray.map((item, index) => (
          <NumberButton
            key={index}
            num={item}
            handler={handleChange}
            active={selectedNumbers.includes(item)}
          />
        ))}

        <div className="flex justify-center">
          <h2 className="py-4 text-3xl text-white font font-robotomono">
            Ticket price: 1 MATIC
          </h2>
        </div>

        <div className="flex justify-center pt-10">
          <button 
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={handleSubmit}
          >
            Buy ticket
          </button>
        </div>
      </form>
    </>
  );
};

export default NumbersForm;
