//The items list page
var React = require('react');
var Header = require('./header/header.js');

var List = React.createClass({
	render: function(){
		return (
		  <div className='container'>
		    <Header />
		    {this.props.children}
		  </div>
		);
	}
});

module.exports = List;