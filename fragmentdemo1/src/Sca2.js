import React, { Component } from "react";

export default class Sca2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        "java",
        "java Script",
        "Mern Stack",
        "Oracle",
        "C",
        "C++",
        "Python",
      ],
    };
  }
  render() {
    return (
      <>
        <h1>Ravi</h1>
        <p>Rakmdkjen</p>
        <h2>Courses Offered</h2>
        {this.state.courses.map((courseName, index) => {
          return (
            <React.Fragment key={index}>
              <p>{courseName}</p>
            </React.Fragment>
          );
        })}
      </>
    );
  }
}
