import { ethers } from "ethers";

export interface AppContextInterface {
  connectedAccount: string;
  connectWallet: () => void;
  signer: null | ethers.providers.JsonRpcSigner;
  contractSigner: null | ethers.Contract;
}