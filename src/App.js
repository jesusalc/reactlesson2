const React = require('react')


class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = this.makeDefaults()


  }


  makeDefaults() {
    return {
      email: '',
      password: ''
    }
  }

  send() {
    fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    })
  }

  render() {
    return  <form>
      <input placeholder="email" />
      <input type="password" />
      <button onClick={this.send} >Send</button>
    </form>
    
  }
}

module.exports = App