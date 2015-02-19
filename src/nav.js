var React = require('react');

var navigationConfig = [];

var Navigation = React.createClass({
  render: function () {
    return (
      <nav className="main-navigation">

      </nav>
    );
  }
});

React.render(<Navigation config={navigationConfig} />, document.body);
