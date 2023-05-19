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
        <h3>Things to consider</h3>
        <p>
          There is a limit on how many of these tokens a user can mint per
          wallet. In this case{" "}
          <strong>
            a user can mint up to 3 tokens per wallet as long as the current
            mint supply is less than 10,000 tokens.{" "}
          </strong>
          . If you receive an error when trying to mint, please take this into
          consideration.
        </p>
        <p>
          In addition, please ensure you have enough GoETH (Goerli Ether) so
          that you can mint the token (any amount above 0), and so you can pay
          for the transaction gas fee. The signing prompt will let you know how
          much the transaction will cost if you are able to process it.
        </p>
      </section>
      <br />
      <MintButton />
    </div>
  );
};
