var React = require('react');
var AppActions = require('../../actions/actions.js');

var AddToCart = React.createClass({

	handleClick: function(){
    AppActions.addItem(this.props.item);
	},

	render: function(){
		return (
			<button className="btn btn-sm btn-primary"
			        onClick={this.handleClick}>添加</button>
		);
	}

});

module.exports = AddToCart;	