var React = require('react');
var Store = require('../../stores/stores.js');
var RemoveFromCart = require('./remove_from_cart.js');
var IncreaseCount = require('./increase_count.js');
var DecreaseCount = require('./decrease_count.js');

//private methods
function _getCartItems() {
  return {items: Store.getCartItems()};
}

var Cart = React.createClass({

	getInitialState: function(){
    return _getCartItems();
	},

	componentWillMount: function() {
    Store.addChangeEventListener(this._onChange);
	},

  componentWillUnmount: function(){
    Store.removeChangeEventListener(this._onChange);
  },

  _onChange: function(){
    this.setState(_getCartItems());
  },

	render: function(){
    console.log('cart....')
		var totalPrice = 0;
	  var items = this.state.items.map(function(item, index){
	  	var itemTotalPrice = item.cost * item.count;
	  	totalPrice += itemTotalPrice;

      return (
      	<tr>
      	  <td><RemoveFromCart index={index}/></td>
      	  <td>{item.title}</td>
      	  <td>{item.count}</td>
      	  <td>
      	    <IncreaseCount index={index} />
      	    <DecreaseCount index={index} />
      	  </td>
      	  <td>${itemTotalPrice}</td>
      	</tr>
      );
	  });

	  return (
	    <table className="table table-hover">
        <thead>
          <tr>
            <th></th>
            <th>名称</th>
            <th>数量</th>
            <th></th>
            <th>小计</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" className="text-right">总计:</td>
            <td>${totalPrice}</td>
          </tr>
        </tfoot>
	    </table>
	  );
	}

});

module.exports = Cart;	