import { FC } from "react"

interface Props {
  item: number;
}

const LuckyNumber: FC<Props> = ({ item }) => {

  return (
    <>
      <div className="h-28 w-20 border-2 border-blue-400 flex items-center justify-center mx-5">
        <p className="text-4xl">
          {item}
        </p>
      </div>
    </>
  )
}

export default LuckyNumber;