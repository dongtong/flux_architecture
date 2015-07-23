var React = require('react');
var ItemList = require('../components/item_list.js');
var Cart = require('../components/cart.js');

var App = React.createClass({

	render: function(){
		return (
			<div>
			  <h1>商品列表</h1>
			  <ItemList />
			  <br/>
			  <h1>购物车</h1>
			  <Cart />
			</div>
		);
	}

});

module.exports = App;	