import { FC, useState } from "react";
import LuckyNumber from "../LuckyNumber/LuckyNumber";


const Main: FC = () => {

  const [luckyNumbers, setLuckyNumbers] = useState<number[]>([5, 17, 13, 22, 8, 32]);

  return (
    <>
      <section className="w-full border-2 border-red-500 flex justify-center">

        <div className="flex flex-col w-3/5 border-2 border-blue-500">

          <h1 className="text-5xl py-10">
            This weeks lucky numbers:
          </h1>

          <div className="flex pb-5">
            {luckyNumbers.map((item, index) => (
              <LuckyNumber
                item={item}
                key={index}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default Main;