import React, { Component } from "react"

class Student extends Component {
  state = {
    color: "black",
    message: ""
  }
  handleClick = () => {
    this.setState({
      color: "red",
      message:
        "I am the mighty " + this.props.student + ", How dare you touch me!!?"
    })
  }

  handleRightClick = () => {
    this.setState({
      color: "blue",
      message: "Stop. Poking. Around!!"
    })
  }
  handleDoubleClick = () => {
    this.setState({
      color: "green",
      message: "STOP IT!!!"
    })
    setTimeout(() => {
      this.setState({
        color: "black",
        message: ""
      })
    }, 1000)
  }
  render() {
    return (
      <>
        <li
          onDoubleClick={this.handleDoubleClick}
          onContextMenu={this.handleRightClick}
          onClick={this.handleClick}
          style={{ color: this.state.color }}
        >
          {this.props.student}
        </li>
        <p>{this.state.message}</p>
      </>
    )
  }
}

export default Student
