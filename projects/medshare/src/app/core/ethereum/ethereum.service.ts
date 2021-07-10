import { Injectable } from '@angular/core';
import { BigNumber, ethers, Wallet } from 'ethers';

import { environment as env } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EthereumService {
  private PROVIDER_URL = env.PROVIDER_URL;

  private wallet: Wallet;
  private mnemonic: string[];
  private address: string;
  private balance: BigNumber;
  private testWords: { word: string; index: number }[];

  // If you don't specify a //url//, Ethers connects to the default
  // (i.e. ``http:/\/localhost:8545``)
  // Ethers connect to RPC (e.g. Infura)
  private provider = new ethers.providers.JsonRpcProvider(this.PROVIDER_URL);

  // The provider also allows signing transactions to
  // send ether and pay to change state within the blockchain.
  // For this, we need the account signer...
  private signer;

  constructor() {}

  async createWallet() {
    this.wallet = Wallet.createRandom();
    this.mnemonic = this.wallet.mnemonic.phrase.split(' ');
    this.address = this.wallet.address;
    // Get the balance of an account (by address or ENS name, if supported by network)
    // { BigNumber: "2337132817842795605" }
    this.balance = await this.provider.getBalance(this.address);
  }

  /** Generate a random Mnemonic with the right entropy */
  getRandomMnemonic() {
    return this.mnemonic;
  }

  getWalletAddress() {
    return this.address;
  }

  getWalletBalance(formatted: boolean) {
    return formatted
      ? this.balance
      : // Often you need to format the output to something more user-friendly,
        // such as in ether (instead of wei)
        ethers.utils.formatEther(this.balance);
    // '2.337132817842795605'
  }

  /** Get a private key and encrypt it with a password */
  async encryptPrivatekey(password: string) {
    const keystore = await this.wallet.encrypt(password);
    localStorage.setItem('keystore', keystore);
  }

  getSigner(address: string) {
    return this.provider.getSigner(address);
  }
}
