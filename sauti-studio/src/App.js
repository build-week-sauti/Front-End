import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./utils/PrivateRoute";

import LoginForm from "./componentReactTwo/loginForm";
import RegisterForm from "./componentReactTwo/registerForm";
import Dashboard from "./componentReactTwo/dashboard";

function App() {
  const [isloggedIn, setIsLoggedIn] = useState(window.localStorage.getItem('token'));

  console.log('Logged in', isloggedIn);
  return (
    <div>
      <Route exact path="/" component={LoginForm} />
      <Route exact path="/register" component={RegisterForm} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </div>
  )
}

export default App;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLogginActive: true
//     };
//   }

//   componentDidMount() {
//     //Add .right by default
//     this.rightSide.classList.add("right");
//   }

//   changeState() {
//     const { isLogginActive } = this.state;

//     if (isLogginActive) {
//       this.rightSide.classList.remove("right");
//       this.rightSide.classList.add("left");
//     } else {
//       this.rightSide.classList.remove("left");
//       this.rightSide.classList.add("right");
//     }
//     this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
//   }

//   render() {
//     const { isLogginActive } = this.state;
//     const current = isLogginActive ? "Register" : "Login";
//     const currentActive = isLogginActive ? "login" : "register";
//     return (
//       <div className="App">
//         <div className="login">
//           <div className="container" ref={ref => (this.container = ref)}>
//             {isLogginActive && (
//               <Login containerRef={ref => (this.current = ref)} />
//             )}
//             {!isLogginActive && (
//               <Register containerRef={ref => (this.current = ref)} />
//             )}
//           </div>
//           <RightSide
//             current={current}
//             currentActive={currentActive}
//             containerRef={ref => (this.rightSide = ref)}
//             onClick={this.changeState.bind(this)}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// const RightSide = props => {
//   return (
//     <div
//       className="right-side"
//       ref={props.containerRef}
//       onClick={props.onClick}
//     >
//       <div className="inner-container">
//         <div className="text">{props.current}</div>
//       </div>
//     </div>
//   );
// };

// export default App;