import { FC } from "react";

interface Props {
  num: number;
  handler: (e: any) => void;
  active: boolean;
}

const NumberButton: FC<Props> = ({ num, handler, active }) => {

  return (
    <>
      <input 
        className={`${active ? "border-4 border-blue-600" : "border"} p-4 w-10 h-10 border-gray-400 mx-2 my-1`}
        type="button"
        value={num}
        name={num.toString()}
        onClick={handler}
      />
    </>
  )
}

export default NumberButton;