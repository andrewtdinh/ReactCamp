var OneUserGreeting = React.createClass({
  render: function(){
    return <li>Hello {this.props.name}</li>
  }
});

var Form = React.createClass({
  handleSubmit: function(event){
    event.preventDefault();
    event.stopPropagation();
    this.props.greet(this.refs.name2greet);
  },
  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder='Name' ref='name2greet' required/>
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
    var usersLIs = this.props.users.map(function(name, i){
      return <OneUserGreeting name={name} key={i} />;
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
  greet: function(nameInput){
    this.setState({
      users: this.state.users.concat(nameInput.value)
    }, function() {
        nameInput.value = '';
      }
    );
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
