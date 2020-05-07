import React, { Component } from "react";
import "./App.css";

class App extends Component {
  handleClick = (e) => {
    // console.log("this is:", this);
    e.preventDefault();
    console.log("로그인 시도");
  };

  inputId = () => {
    console.log("사용자 아이디 입력중");
  };

  inputPw = () => {
    console.log("사용자 패스워드 입력중");
  };

  render() {
    return (
      <div>
        <h1>로그인</h1>
        <form>
          <label htmlFor="userId" className="userId">
            ID:
            <input
              type="text"
              placeholder="아이디를 입력하세요"
              id="userId"
              onChange={this.inputId}
            />
          </label>
          <label htmlFor="userPw" className="userPw">
            PASS:
            <input
              type="password"
              placeholder="패스워드를 입력하세요"
              id="userPw"
              onChange={this.inputPw}
            />
          </label>
          <button type="button" onClick={this.handleClick}>
            로그인하기
          </button>
        </form>
      </div>
    );
  }
}

export default App;
