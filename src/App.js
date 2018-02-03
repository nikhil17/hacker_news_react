import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const list = [
    {
      title: 'React',
      url: 'https://facebook.github.io/react/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://github.com/reactjs/redux',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
];

const users = [
    { 
      objectID: 0,
      name: 'Nikhil',
      last_name: 'Karajgikar'
    },
    { 
      objectID: 1,
      name: 'Paneerselvam',
      last_name: 'Karajgikar'
    },
    { 
      objectID: 2,
      name: 'Varun person',
      last_name: 'Maudgalya'
    },
]

const paneer = 'selvam'



class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      list,
      users,
      jonjo: paneer,
    };


    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id){
    function isNotID(item){
      return item.objectID != id;
    }
    const updated_list = this.state.list.filter(isNotID)
    this.setState({list: updated_list})
  }
  
  render() {
    let helloWorld = "Welcome to the Road to learn React";
    
    return (
      <div className="App">
        {this.state.list.map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title+ " "} </a>
              <br/>
            </span>

            <span>{item.author}</span>
            <br/>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button"> Dismiss </button>
            </span>


          </div>
        )}
        <div className="Users">
          {this.state.users.map(user =>
            <div key={user.objectID}>
              <span>
                {user.name}
              </span>
              <br/>
            </div>
            )}
        </div>
      </div>
      
    );
  }
}

export default App;
