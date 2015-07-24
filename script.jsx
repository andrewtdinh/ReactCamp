var OneUserGreeting = React.createClass({
  render: function(){
    return <li>Hello {this.props.name}</li>
  }
});

var Line = React.createClass({
  render: function(){
    return <hr />;
  }
});

var Form = React.createClass({
  render: function(){
    return (
      <form>
        <input placeholder='Name' ref='name2greet'/>
        <button onClick={this.greet}>Greet</button>
      </form>
    );
  }
});

var ListOfGreetings = React.createClass({
  getInitialState: function(){
    return {users: []};
  },
  greet: function(){
    this.setState({
      users: this.state.users.concat(this.refs.name2greet.value)
    }, function() {
        this.refs.name2greet.value = '';
      }
    );
  },
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
    var usersLIs = this.state.users.map(function(name, i){
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
  render: function(){
    return (
      <div>
        <Form />
        <Line />
        <ListOfGreetings />
      </div>
    )
  }
})

React.render(
  <App />,
  document.getElementById('root')
);
