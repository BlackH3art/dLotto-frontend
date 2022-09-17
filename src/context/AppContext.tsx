import { createContext } from 'react';
import { ethers } from 'ethers';

import { contractAddress } from '../constants/constants';
import contractABI from '../constants/lotteryABI.json';

import { AppContextInterface } from '../interfaces/AppContextInterface';

// @ts-ignore
const { ethereum } = window;

export const AppContext = createContext<AppContextInterface>({

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
  const collectionContract = new ethers.Contract(contractAddress, contractABI, signer);

  return collectionContract;
}