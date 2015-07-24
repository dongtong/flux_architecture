var React = require('react');
var ItemList = require('./category/item_list.js');
var Cart = require('./cart/cart.js');
var Router = require('react-router-component');
var ItemDetail = require('./product/item_detail.js');
var List = require('./list.js');

//React Router
var Locations = Router.Locations;
var  Location = Router.Location;

var App = React.createClass({

	render: function(){
		return (
			<List>
			  <Locations>
			    <Location path='/' handler={ItemList} />
			    <Location path='/cart' handler={Cart} />
			    <Location path='/items/:item' handler={ItemDetail} />
			  </Locations>
			</List>
		);
	}

});

module.exports = App;	