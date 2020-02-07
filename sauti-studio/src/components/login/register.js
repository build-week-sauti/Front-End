import React from "react";
import loginImg from "../../login.svg";


export class Register extends React.Component {
  

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}><br />
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="africa img"/>
          </div>


          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>


            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>


        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Register;