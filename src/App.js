import React, { Component } from "react"
import "./styles.css"
import students from "./students"
import Student from "./components/Student"

class App extends Component {
  render() {
    const output = students.map((student, index) => (
      <Student key={index} student={student} />
    ))
    return <ul>{output}</ul>
  }
}

export default App
