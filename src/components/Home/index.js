// Write your code here
import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Logout from '../Logout'
import Login from '../Login'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickBtn = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="background">
        <div className="container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout logout={this.onClickBtn} />
          ) : (
            <Login login={this.onClickBtn} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
