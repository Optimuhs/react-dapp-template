import { MintButton } from "./MintButton";
export const Minting = () => {
  return (
    <div className="ContentWrapper">
      <h2>Minting</h2>
      <section>
        <h3>What is minting?</h3>
        <p className="ContentText">
          Mint-ing is a transactional command that is called on our NFT (ERC721)
          smart contract that allows us to generate a token and send it to your
          wallet after clicking the "Mint 1 token" button. This will cost 0.0001
          GoETH (Goerli Ether) + the gas fee for the test network. In some cases
          minting will be free, however there will be cases involving a fee.
          That will depend on the project you are minting from.
        </p>

        <h3>The Transaction</h3>
        <p>
          <strong>
            A transaction is only possible when a wallet is connected and it has
            enough GoETH to process the transaction.
          </strong>{" "}
          Once you process a transaction you will be able to view your
          transaction status in real time using the Etherscan Blockchain
          explorer. You can view it for your specific transaction in your wallet
          upon opening it and clicking on the transaction for this DApp. If
          there is an error you will be given an error in your wallet.
        </p>
      </section>
      <br />
      <MintButton />
    </div>
  );
};
