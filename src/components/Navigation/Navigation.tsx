import { FC } from "react";

const Navigation: FC = () => {
  return (
    <div>
      <nav className="flex justify-center bg-zinc-900 w-full  h-20 border-indigo-500">
        <div className="flex items-center w-3/4 justify-between ">
          <div className="">dLotto logo</div>

          <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
            Connect wallet
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
