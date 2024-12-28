import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      ballPosition: { left: "0px" },
    };
    this.renderBallOrButton = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleArrowRight = this.handleArrowRight.bind(this); // Bind the method
  }

  buttonClickHandler() {
    this.setState({ renderBall: true });
  }

  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return <button className="start" onClick={this.buttonClickHandler}>Start</button>;
    }
  }

  handleArrowRight(e) {
    if (e.key === "ArrowRight" || e.keyCode === 39) {
      // Extract the current left position and calculate the new position
      const currentLeft = parseInt(this.state.ballPosition.left);
    //   const curr=currentLeft.slice(0,currentLeft.length-2)
    //   console.log(curr);
    console.log(currentLeft);
      const newLeft = currentLeft + 5;
      console.log(newLeft);
      
      this.setState({
        ballPosition: { left: `${newLeft}px` },
      });
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleArrowRight); // Add keydown listener
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleArrowRight); // Cleanup the listener
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
