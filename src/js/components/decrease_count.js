var React = require('react');
var AppActions = require('../actions/actions.js');

var DecreaseCount = React.createClass({

	handleClick: function(){
    AppActions.decreaseNum(this.props.index);
	},

	render: function(){
		return (
			<button className="btn btn-sm btn-default"
			        onClick={this.handleClick}>-</button>
		);
	}

});

module.exports = DecreaseCount;	