var Hello = React.createClass({
  getInitialState: function(){
    return {greeting: 'Welcome', name: 'State'};
  },
  changeState: function(){
    var input = React.findDOMNode(this.refs.input);
    console.log(input.value);
    this.setState({name: input.value})
  },
  render: function(){
    return (
      <div>
        <input placeholder='Name' ref='input'/>
        <button onClick={this.changeState}>Greet</button>
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
