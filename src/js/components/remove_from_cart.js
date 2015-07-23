var React = require('react');
var AppActions = require('../actions/actions.js');

var RemoveFromCart = React.createClass({

	handleClick: function(){
    AppActions.removeItem(this.props.index);
	},

	render: function(){
		return (
			<button className="btn btn-sm btn-danger"
			        onClick={this.handleClick}>移除</button>
		);
	}

});

module.exports = RemoveFromCart;	