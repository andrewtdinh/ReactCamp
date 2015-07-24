var Hello = React.createClass({
  getInitialState: function(){
    return {count: 0};
  },
  changeCount: function(){
    console.log(this.refs.name2greet.value);
    this.setState(
      {count: (this.state.count + 1)}
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
  render: function(){
    return (
      <div>
        <button onClick={this.changeCount}>this.state.count</button>
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
