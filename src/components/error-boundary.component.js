import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oooops. That is not good</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
// import React, { useState } from 'react';

// const ErrorBoundary =({children}) => {
//   const [hasError, setHasError] = useState(false);

//   componentDidCatch(error, info) { // was no hook to grab a catch (error)
//     setHasError( true );
//   }

//   render() {
//     if (hasError) {
//       return <h1>Oooops. That is not good</h1>;
//     }
//     return children;
//   }
// }

// export default ErrorBoundary;
