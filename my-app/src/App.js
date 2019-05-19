import React, {Component} from 'react';

import './App.css';


class App extends Component {

state = {
  users: []
}

componentDidMount() {
  fetch("https://randomuser.me/api/?results=5000")
  .then(res => res.json())
  .then(data => {

    this.setState ({
      users: data
    })
  
  });

}

render() {
  const users = this.state.users;

  return (
    <div>
        {users.map(user => 
          <ul>
            <li>{user.name.first}</li>
            <li>{user.name.last}</li>
            <li>{user.picture}</li>
          </ul>
        )}

    </div>
  )
}
}

export default App;
