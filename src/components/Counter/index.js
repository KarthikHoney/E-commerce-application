import {Component} from 'react'

class Counter extends Component {
  state={count:0}

  onIncrement=()=>{
    this.setState(prev=>({prev.count+1}))
  }

  onDecrement=()=>{
    this.setState(prev=>({prev.count-1}))
  }

  render() {
    const {count} =this.state
    return (
      <div>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        <div>0</div>
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
      </div>
    )
  }
}

export default Counter
