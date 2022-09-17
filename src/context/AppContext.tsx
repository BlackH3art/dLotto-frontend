import { createContext, FC, ReactNode, useState } from 'react';
import { ethers } from 'ethers';
import { toast } from "react-toastify";

import { contractAddress } from '../constants/constants';
import contractABI from '../constants/lotteryABI.json';

import { AppContextInterface } from '../interfaces/AppContextInterface';

// @ts-ignore
const { ethereum } = window;

export const AppContext = createContext<AppContextInterface>({
  connectedAccount: '',
  connectWallet: () => {},
});


const getSigner = () => {

  if(!ethereum) {
    console.warn('No Metamask detected');
    return null;
  }

  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();

  return signer;
}

const getContractSigner = () => {
  const signer = getSigner();

  if(!signer) {
    console.warn('There\'s no signer');
    return null;
  }
  const lotteryContract = new ethers.Contract(contractAddress, contractABI, signer);

  return lotteryContract;
}


interface Props {
  children: ReactNode;
}

const AppContextProvider: FC<Props> = ({ children }) => {

  const contractSigner = getContractSigner();

  const [connectedAccount, setConnectedAcount] = useState<string>('');


  const connectWallet = async () => {
    
    try {
      
      // if no metamask then prompt an error toast
      if(!ethereum) {
        toast.error("You need MetaMask. Please visit: https://metamask.io/", { theme: "colored" }); 
        
        
        // if network different than mumbai, then prompt an error toast
      } else if(parseInt(await ethereum.request({ method: 'eth_chainId' }), 16) !== 80001) {
        toast.error("Change network to: Polygon mainnet", { theme: "colored" }); 
        
        
        // everything is good - connect wallet
      } else {
        try {
          const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
          setConnectedAcount(accounts[0]);
        } catch (error) {
          toast.error("Requesting your account failed", { theme: "colored" }); 
        }
        
      }
    } catch (error) {
      toast.error("Unexpected error while connecting wallet", { theme: "colored" }); 
    }

  }
  return (
    <>
      <AppContext.Provider value={{
        connectedAccount,
        connectWallet
      }}>
        {children}
      </AppContext.Provider>
    </>
  )
}


export default AppContextProvider;