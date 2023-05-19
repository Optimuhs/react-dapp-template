import { useLocation } from "react-router-dom";

export const Results = () => {
  const location = useLocation();

  // Access the props from the location state
  let res;
  const [prop1] = location.state || {};
  if (`${prop1.prop1}`.includes("Error")) {
    res = prop1.prop1.slice(0, 13);
  } else {
    res = prop1.prop1.status;
  }
  const message = (
    <>
      Thank you for using this DApp, you can see your token in your account
      after connecting your wallet
      <br />
      <a href="https://testnets.opensea.io">here.</a>
    </>
  );
  return (
    <div className="ContentWrapper">
      <h1>
        {res === 1 || res ? "Transaction Error" : "Processing transaction"}
      </h1>
      <p>
        {res
          ? "An error has occurred please check your wallet / transaction and try again."
          : message}
      </p>
      <p>
        As a reminder please ensure you have not minted more than the limit, the
        supply is not maxed out, and ensure you have enough GoETH for the
        transaction.
      </p>
    </div>
  );
};
