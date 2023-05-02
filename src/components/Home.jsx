export const Home = () => {
  return (
    <div className="ContentWrapper">
      <h2 className="ContentHeader">Web3 DApp</h2>
      <h3> Welcome, have a look around</h3>
      <p className="ContentText">
        {" "}
        This is a Web 3 DApp (Decentralized Application connected to a
        blockchain protocol) that is meant to simulate a web3 application for
        minting, staking, and earling tokens in a Web3 test environment{" "}
      </p>
      <section>
        <h3>This project</h3>
        <p className="ContentText">
          This project isn't planned to be anything other than a tested set of
          smart contracts and a front end that is meant to provide a web
          interface to interact with these deployed contracts. That being said,
          I would name this project: Optimuhs' Thanks! I do not make money from
          this but I thank those who have stopped by and interacted with this
          DApp.
        </p>
      </section>
      <section>
        <h3>Minting</h3>
        <p className="ContentText">
          {" "}
          On this section of the DApp you are able to mint an ERC721 token,
          otherwise known as an NFT, for 0.001 Goerli ETH on the Goerli Testnet
          using Goerli ETH. If you do not have any Goerli ETH then you can get
          some using the{" "}
          <a href="https://goerlifaucet.com/">Alchemy Goerli ETH Faucet</a>
        </p>
      </section>
      <section>
        <h3>Staking</h3>
        <p className="ContentText">
          Staking is a process that involves a user, a token, and a smart
          contract designed for staking. In staking a user locks their token
          into the contract for a period of time and receives a reward token for
          their participation. In this case, the pseudo-staking ecosystem will
          not have a time lock, meaning that users can stake and unstake
          whenever but they must stake a token for 1 day to receive 1 token.
          <br />
          <br />
          ** Note the reward token and NFT will not have any value and are for
          demonstration and testing purposes.
        </p>
      </section>
    </div>
  );
};
