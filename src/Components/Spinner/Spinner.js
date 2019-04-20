import React, { Component } from 'react';
import './spinner.scss';

export default class Spinner extends Component {

  constructor(props) {
    super(props);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }

  forceUpdateHandler() {
    this.reset();
  }

  reset() {
    if (this.timer) {
      clearInterval(this.timer);
    }

    this.start = this.setStartPosition();

    this.setState({
      position: this.start,
      timeRemaining: this.props.timer
    });

    this.timer = setInterval(() => {
      this.tick();
    }, 100);
  }

  state = {
    position: 0,
    lastPosition: null
  };
  static iconHeight = 120;
  multiplier = Math.floor(Math.random() * (4 - 1) + 2.5);

  start = this.setStartPosition();
  speed = Spinner.iconHeight * this.multiplier;

  setStartPosition() {
    return Math.floor(Math.random() * 9) * Spinner.iconHeight * -1;
  }

  moveBackground() {
    // console.log(Math.floor(((this.state.position - this.speed )/ Spinner.iconHeight)/9));
    this.setState({
      position: this.state.position - this.speed,
      timeRemaining: this.state.timeRemaining - 100
    });
  }

  getSymbolFromPosition() {
    const totalSymbols = 9;
    const maxPosition = Spinner.iconHeight * (totalSymbols) * -1;
    let moved = (this.props.timer / 100) * this.multiplier;
    let startPosition = this.start;
    let currentPosition = startPosition;

    for (let i = 0; i < moved; i++) {
      currentPosition -= Spinner.iconHeight;

      if (currentPosition <= maxPosition) {
        currentPosition = 0;
      }
    }

    let result = currentPosition / Spinner.iconHeight
    console.log(result === '9');
    result = (result === 9) ? 0 : result;
    this.props.onFinish(-result);
    this.setState({
      position: result * Spinner.iconHeight + Spinner.iconHeight
    });
  }

  tick() {
    if (this.state.timeRemaining <= 0) {
      clearInterval(this.timer);
      this.getSymbolFromPosition();
    } else {
      this.moveBackground();
    }
  }

  componentDidMount() {
    clearInterval(this.timer);

    this.setState({
      position: this.start,
      timeRemaining: this.props.timer
    });

    // this.timer = setInterval(() => {
    //   this.tick();
    // }, 100);
  }


    render() {
        let { position } = this.state;
        return (
          <div
            className="bandit__spinner spinner"
            style={{ backgroundPosition: "0px " + position + "px" }}
          >
          </div>
        );
    }
}