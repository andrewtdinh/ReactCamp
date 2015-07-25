

var DeleteLine = React.createClass({
  render: function(){
    return(
      <button>Delete</button>
    )
  }
});

var Form = React.createClass({
  handleSubmit: function(event){
    event.preventDefault();
    event.stopPropagation();
    this.props.greet({name: this.refs.name2greet.value, email: this.refs.email2greet.value});
    this.refs.name2greet.value = '';
    this.refs.email2greet.value = '';
  },
  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder='Name' ref='name2greet' required/>
        <input type='email' placeholder='Email' ref='email2greet' required/>
        <button type='submit'>Greet</button>
      </form>
    );
  }
});

var ListOfGreetings = React.createClass({
  componentDidMount: function(){
    console.log('Mounted');
  },
  componentWillMount: function(){
    console.log('Will mount now...');
  },
  componentWillUnmount: function(){
    console.log('Going to unmount now...');
  },
  logToConsole: function(){
    console.log('Clicked');
  },
  render: function(){
    var usersLIs = this.props.users.map(function(user, i){
      return (
        <div>
          <OneUserGreeting user={user} key={i} />
          <DeleteLine />
        </div>
      )
    });
    return (
      <div>
        <ul>
          {usersLIs}
        </ul>
      </div>
    );
  }
});

var App = React.createClass({
  getInitialState: function(){
    return {users: []};
  },
  greet: function(user){
    this.setState({
      users: this.state.users.concat(user)
    });
  },
  render: function(){
    return (
      <div>
        <Form greet={this.greet} />
        <hr />
        <ListOfGreetings users={this.state.users}/>
      </div>
    )
  }
})

React.render(
  <App />,
  document.getElementById('root')
);
