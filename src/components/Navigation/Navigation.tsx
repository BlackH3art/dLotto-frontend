import { FC, useContext, useEffect, useState } from "react";
import { ethers, BigNumber } from "ethers";

import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";

const Navigation: FC = () => {
  const { connectedAccount, connectWallet, signer } = useContext(AppContext);
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    async function getBalance() {
      try {
        if (!signer) {
          return;
        } else {
          if (!connectedAccount) {
            return;
          } else {
            let signerBalance = await signer.getBalance();
            setBalance(
              Number(ethers.utils.formatEther(BigNumber.from(signerBalance)))
            );
          }
        }
      } catch (error) {
        toast.error("Problem getting a signer. Try refresh.", {
          theme: "colored",
        });
      }
    }

    getBalance();
  }, [connectedAccount]);

  return (
    <div>
      <nav className=" flex justify-center bg-zinc-900 w-full  h-20 border-indigo-500 ">
        <div className="flex items-center w-3/4 justify-between ">
          <div className="font-mono">dLotto logo</div>

          {connectedAccount ? (
            <div className="flex items-center h-12 text-white font-semibold px-7 py-2 mt-4 mr-4 xl:mr-0">
              <p className="pr-10 text-lg">{balance.toFixed(6)} MATIC</p>
              <p className="">{`${connectedAccount.slice(0, 5)}...${connectedAccount.slice(connectedAccount.length - 4)}`}</p>
            </div>
          ) : (
            <button
              className="font-robotomono text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
              onClick={connectWallet}
            >
              Connect wallet
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
