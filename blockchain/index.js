const Block = require("./block");
const { cryptoHash } = require("./../util");
const { MINING_REWARD, REWARD_INPUT } = require("../config");
const Transaction = require("./../wallet/transaction");
const Wallet = require("../wallet");

class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock({ data }) {
    const newBlock = Block.mineBlock({
      lastBlock: this.chain[this.chain.length - 1],
      data,
    });
    this.chain.push(newBlock);
  }

  static isValidChain(chain) {
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis()))
      return false;

    for (let i = 1; i < chain.length; i++) {
      const block = chain[i];
      const actualLastHash = chain[i - 1].hash;
      const lastDifficulty = chain[i - 1].difficulty;

      const { timestamp, lastHash, hash, data, difficulty, nonce } = block;

      if (lastHash !== actualLastHash) return false;
      if (Math.abs(lastDifficulty - difficulty) > 1) return false;

      if (hash !== cryptoHash(timestamp, lastHash, data, difficulty, nonce))
        return false;
    }
    return true;
  }

  replaceChain(chain, onSuccess) {
    if (chain.length <= this.chain.length) {
      console.error("The incoming chain must be longer");
      return;
    }
    if (!Blockchain.isValidChain(chain)) {
      console.error("The incoming chain must be valid");
      return;
    }
    if (onSuccess) onSuccess();
    console.log("Replacing chain with: ", chain);
    this.chain = chain;
  }

  validTransactionData({ chain }) {
    for (let i = 1; i < chain.length; i++) {
      const block = chain[i];
      let rewardTransactionCount = 0;

      for (let transaction of block.data) {
        if (transaction.input.address === REWARD_INPUT.address) {
          rewardTransactionCount += 1;
          if (rewardTransactionCount > 1) {
            console.error("Miner reward exceed limit");
            return false;
          }
          if (Object.values(transaction.outputMap)[0] !== MINING_REWARD) {
            console.error("Miner reward is invalid");
            return false;
          }
        } else {
          if (!Transaction.validTransaction(transaction)) {
            console.error("invalid transaction");
            return false;
          }
        }
      }
    }

    return true;
  }
}

module.exports = Blockchain;
