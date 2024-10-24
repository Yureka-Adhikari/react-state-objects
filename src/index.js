import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
class Student extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Yureka Adhikari",
      grade: 8,
      favorite_colour: "Purple",
      favorite_sub: "English",
    };
  }

  render() {
    return (
      <div>
        <h1> Student Details </h1>
        <p> My name is {this.state.name} </p>
        <p> I am in grade {this.state.grade} </p>
        <p> My favourite colour is {this.state.favorite_colour} </p>
        <p> My favourite subject is {this.state.favorite_sub} </p>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Student />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
