import { FC } from "react";
import NumbersForm from "./NumbersForm";

const Ticket: FC = () => {
  return (
    <>
      <div className=" flex flex-col w-[500px] h-[800px]  rounded-md border-x-[2rem] border-zinc-900 bg-zinc-900 items-center">
        <h1 className=" text-4xl py-5 text-white">dLotto</h1>

        <p className="text-2xl text-center font-robotomono px-10 text-white">
          Some boring text which should be in monospace font
        </p>

        <NumbersForm />
      </div>
    </>
  );
};

export default Ticket;
