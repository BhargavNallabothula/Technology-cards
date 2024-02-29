// Write your code here
import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1>
          The Button has been clicked <span className="value">{count}</span>{' '}
          times
        </h1>
        <p>Click the button to increase the count!</p>
        <button onClick={this.onIncrement} className="btn btn-primary">
          click me
        </button>
      </div>
    )
  }
}
export default ClickCounter
