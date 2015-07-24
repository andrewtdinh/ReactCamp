var Hello = React.createClass({
  getInitialState: function(){
    return {greeting: 'Welcome', name: 'State'};
  },
  greet: function(){
    console.log(this.refs.name2greet.value);
    this.setState(
      {greeting: 'Hello', name: this.refs.name2greet.value},
      function() {
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
    return (
      <div>
        <input placeholder='Name' ref='name2greet'/>
        <button onClick={this.greet}>Greet</button>
        {this.state.greeting} {this.state.name}
      </div>
    );
  }
});

var App = React.createClass({
  render: function(){
    return (
      <div>
        <Hello />
      </div>
    )
  }
})

React.render(
  <App />,
  document.getElementById('root')
);
