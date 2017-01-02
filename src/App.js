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

  handleChange(event) {
    this.setState({value: event.target.value});
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
      <input placeholder="email" value={this.state.value} onChange={this.handleChange} />
      <input type="password" value={this.state.value} onChange={this.handleChange} />
      
      <button onClick={this.send} >Send</button>
    </form>
    
  }
}

module.exports = App