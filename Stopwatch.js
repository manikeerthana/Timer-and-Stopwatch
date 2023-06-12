import React from "react";
import './Styles.css'

class Stopwatch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      }
      this.startstopwatch = this.startstopwatch.bind(this);
      this.stopstopwatch = this.stopstopwatch.bind(this);
      this.resetstopwatch = this.resetstopwatch.bind(this);
    }
    // starts the timer
    startstopwatch() {
      this.timerInterval = setInterval(() => {
        let milliseconds = this.state.milliseconds + 1;
        let seconds = this.state.seconds;
        let minutes = this.state.minutes;
        if (milliseconds === 100) {
          milliseconds = 0;
          seconds = seconds + 1;
        }
        if (seconds === 60) {
          seconds = 0;
          minutes = minutes + 1;
        }
        this.setState({
          minutes: minutes,
          seconds: seconds,
          milliseconds: milliseconds
        })
      }, 10);
    }
    //stops the timer
    stopstopwatch() {
      clearInterval(this.timerInterval);
    }
    //resets the timer
    resetstopwatch() {
      this.setState({
        minutes: 0,
        seconds: 0,
        milliseconds: 0
      });
    }
    render() {
      return (
        <div className="container_stopwatch">
          <h2>Stop watch</h2>
          <div id="countdown">
            {this.state.minutes} : {this.state.seconds} : {this.state.milliseconds}</div>
          <div id="buttons">
            <a  className="btn" onClick={this.startstopwatch}>Start </a>
            <a  className="btn" onClick={this.stopstopwatch}>Stop </a>
            <a  className="btn" onClick={this.resetstopwatch}>Reset </a>
          </div>
        </div>
      );
    }
  }

export default Stopwatch;

