import React from 'react';

const BlockchainErrorHandler = ({ error }) => {
  // Handle specific blockchain errors
  if (error.code === 'INVALID_NONCE') {
    return <div>Nonce is invalid. Please try again.</div>;
  }
  if (error.code === 'INSUFFICIENT_FUNDS') {
    return <div>Insufficient funds. Please deposit more funds and try again.</div>;
  }

  // Handle generic blockchain errors
  if (error.message.includes('gas price')) {
    return <div>Gas price is too high. Please try again later.</div>;
  }
  if (error.message.includes('execution reverted')) {
    return <div>Transaction execution reverted. Please try again.</div>;
  }

  // Handle other errors
  return <div>Something went wrong. Please try again later.</div>;
};

export { BlockchainErrorHandler };

