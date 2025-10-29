import { Component, useState } from "react";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <div className="h-screen bg-slate-800 text-white flex items-center justify-center flex-col">
      <p className="py-8">I' parent component</p>
      <ErrorBoundary
        fallback={<p className="text-red-400">Something went wrong</p>}
      >
        <MyComp />
      </ErrorBoundary>
    </div>
  );
}

function MyComp() {
  lskdnslkfdn;
  return <h1>I'm My component</h1>;
}

// class ErrorBoundaryComp extends Component {
//   constructor(props) {
//     super();
//     this.props = props;
//     this.state = { errorOccured: false };
//   }

//   componentDidCatch() {
//     this.setState({ errorOccured: true });
//   }

//   render() {
//     return (
//       <>
//         {this.state.errorOccured ? (
//           <h1 className="text-red-500">Something went wrong</h1>
//         ) : (
//           <>{this.props.children}</>
//         )}
//       </>
//     );
//   }
// }

export default App;
