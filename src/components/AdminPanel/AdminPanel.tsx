import { FC, useContext } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../../context/AppContext";

const AdminPanel: FC = () => {

  const { contractSigner } = useContext(AppContext);

  const startLottery = async () => {
    try {
      
      const txHash = await contractSigner?.startLottery();
      await txHash.wait();

      toast.success("Lottery started", { theme: "colored" });
    } catch (error) {

      console.log(error);
      toast.error("Error with starting lottery", { theme: "colored" });
    }
  }

  const resetGame = async () => {
    try {
      
      const txHash = await contractSigner?.resetGame();
      await txHash.wait();

      toast.success("Game restarted", { theme: "colored" });
    } catch (error) {

      console.log(error);
      toast.error("Error with reseting", { theme: "colored" });
    }
  }

  return (
    <>
      <section className="w-full flex justify-center bg-gray-200 h-32">
        <div className="flex items-center">
          <button 
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={startLottery}
          >
            Start lottery
          </button>

          <button 
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={resetGame}
          >
            Reset
          </button>
        </div>
      </section>
    </>
  )
}

export default AdminPanel;