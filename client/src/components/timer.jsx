import React from 'react';
import numeral from 'numeral';

class Timer extends React.Component{
  constructor(props){
    super(props)
    this.state = {secondsRemaining:  0, nextUpdate: this.props.nextUpdateTime}
  }

  tick(){
    var counter = this.state.secondsRemaining - 1;
    if(counter >= 0){
      this.setState({secondsRemaining: counter});
    } else{
      clearInterval(this.interval);
    }
  }

  componentDidMount(){
    //this.setState({nextUpdate: this.props.nextUpdateTime});
console.log('--------nextUpdate: ', this.state.nextUpdate);
console.log('--------Date.now(): ', Date.now());
    let milliseconds = this.state.nextUpdate - Date.now();
console.log('------milliseconds :', milliseconds);
    let seconds = (milliseconds / 1000);
console.log('------seconds :', seconds);
    this.setState({secondsRemaining: seconds});
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render(){
console.log('-------this.props: ', this.props);
    let time = this.state.secondsRemaining;

    return(
      <p className="productinfo">Time Remaining: {numeral(time).format('00:00:00')}
      </p>
    )
  }
}

export default Timer
