var Hello = React.createClass({
  render: function(){
    var greetings = ['Hello', 'Hi', 'Welcome'];
    var names = ['Gerald', 'Dan', 'Trey', 'Andrew'];

    var hellos = [];

    for(var i = 0; i < names.length; i++){
      hellos.push(<h1 key={i}>{greetings[i % greetings.length]} {names[i]}</h1>);
    }
    
    return (
      <div>
        {hellos}
      </div>
    );
  }
});

React.render(
  <Hello />,
  document.getElementById('root')
);
