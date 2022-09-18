import { ChangeEvent, FC, useState, ChangeEventHandler } from "react";
import NumberButton from "./NumberButton";

const NumbersForm: FC = () => {
  const rangeArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  ];

  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  const handleChange: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    let val = Number(e.target.value);

    if (selectedNumbers.includes(val)) {
      setSelectedNumbers((prev) => prev.filter((item) => item !== val));
      return;
    }
    if (selectedNumbers.length === 6) return;

    setSelectedNumbers((prev) => [...prev, val]);
  };

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
          <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Buy ticket
          </button>
        </div>
      </form>
    </>
  );
};

export default NumbersForm;
