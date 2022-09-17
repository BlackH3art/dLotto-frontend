import { FC } from "react";

const Navigation: FC = () => {

  return (
    <>
      <nav className="flex justify-center w-full border-2 border-red-300 h-20">

        <div className="flex items-center w-3/4 border-2 border-blue-300">
          <div className="border-2 border-red-300">
            dLotto logo
          </div>

          <button>
            Connect wallet
          </button>
        </div>

      </nav>
    </>
  )
}

export default Navigation;