import React, { Component } from 'react';
import { BlockchainErrorHandler } from '../utils/ErrorHandler';

class BlockchainErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to the console or send it to an error tracking service
    console.error(error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.error) {
      return <BlockchainErrorHandler error={this.state.error} />;
    }
    return this.props.children;
  }
}

export { BlockchainErrorBoundary };

