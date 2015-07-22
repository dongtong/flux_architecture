var React = require('react');
var AppActions = require('../actions/actions.js');

var App = React.createClass({

	handleClick: function(){
    AppActions.addItem('add item...');
	},

	render: function(){
		return (
			<h1 onClick={this.handleClick}>My Flux App</h1>
		);
	}

});

module.exports = App;	