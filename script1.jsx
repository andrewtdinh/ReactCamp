var Hello = React.createClass({
  render: function(){
    var greetings = ['Hello', 'Hi', 'Welcome'];
    var names = ['Gerald', 'Dan', 'Trey', 'Andrew'];

    var hellos = names.map(function(name, i){
      return <h1>{greetings[i % greetings.length]} {name}</h1>
    });
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
