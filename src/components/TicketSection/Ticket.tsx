import { FC } from "react";
import NumbersForm from "./NumbersForm";

const Ticket: FC = () => {

  return (
    <>
      <div className="flex flex-col w-[500px] h-[800px] border-x-[2rem] border-pink-200 bg-pink-100 items-center">

        <h1 className="text-4xl py-5">
          dLotto
        </h1>

        <p className="text-2xl text-center px-10">
          Some boring text which should be in monospace font
        </p>

        <NumbersForm />

      </div>
    </>
  )
}

export default Ticket;