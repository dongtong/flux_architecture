var React = require('react');
var AppActions = require('../../actions/actions.js');

var IncreaseCount = React.createClass({

	handleClick: function(){
    AppActions.increaseNum(this.props.index);
	},

	render: function(){
		return (
			<button className="btn btn-sm btn-success"
			        onClick={this.handleClick}>+</button>
		);
	}

});

module.exports = IncreaseCount;	