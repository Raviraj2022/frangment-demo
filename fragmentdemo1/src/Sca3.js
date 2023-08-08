import React, { Component } from "react";
import { v4 } from "uuid";
export default class Sca3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        { name: "java", id: v4() },
        { name: "java Script", id: v4() },
        { name: "Mern Stack", id: v4() },
        { name: "Oracle", id: v4() },
        { name: "C", id: v4() },
        { name: "C++", id: v4() },
        { name: "Python", id: v4() },
      ],
    };
  }
  render() {
    return (
      <>
        <h1>Ravi</h1>
        <p>Rakmdkjen</p>
        <h2>Courses Offered</h2>
        {this.state.courses.map((course) => {
          return (
            <React.Fragment key={course.id}>
              <p>{course.name}</p>
            </React.Fragment>
          );
        })}
      </>
    );
  }
}
