import { Injectable } from '@angular/core';
import { ethers, Wallet } from 'ethers';

@Injectable({
  providedIn: 'root'
})
export class EthereumService {
  private wallet: Wallet;
  private mnemonic: string[];
  private address: string;
  private testWords: { word: string, index: number }[];

  // If you don't specify a //url//, Ethers connects to the default 
  // (i.e. ``http:/\/localhost:8545``)
  // Ethers connect to RPC (e.g. Infura)
  private provider = new ethers.providers.JsonRpcProvider('https://rinkeby.infura.io/v3/56c131f094834fe6866a48256734f0ec');

  // The provider also allows signing transactions to
  // send ether and pay to change state within the blockchain.
  // For this, we need the account signer...
  private signer;

  constructor() { }

  public createWallet() {
    this.wallet = Wallet.createRandom();
  }

  /** Generate a random Mnemonic with the right entropy */
  public getRandomMnemonic() {
    return this.mnemonic = this.wallet.mnemonic.phrase.split(' ');
  }

  public getWalletAddress() {
    return this.wallet.address;
  }

  /** Get a private key and encrypt it with a password */
  public async encryptPrivatekey(password: string) {
    const keystore = await this.wallet.encrypt(password);
    localStorage.setItem('keystore', keystore);
    this.address = this.wallet.address;
  }

  public getSigner(address: string) {
    return this.provider.getSigner(address);
  }

  async getBalance(address: string, formatted: boolean) {
    // Get the balance of an account (by address or ENS name, if supported by network)
    // { BigNumber: "2337132817842795605" }
    const balance = await this.provider.getBalance(address)

    return formatted ? balance :
      // Often you need to format the output to something more user-friendly,
      // such as in ether (instead of wei)
      ethers.utils.formatEther(balance);
    // '2.337132817842795605'
  };
}
