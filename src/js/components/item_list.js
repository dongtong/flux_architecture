var React = require('react');
var Store = require('../stores/stores.js');
var AddToCart = require('../components/add_to_cart.js');

//private methods
function _getItemList() {
  return {items: Store.getItemList()};
}

var ItemList = React.createClass({

	getInitialState: function(){
    return _getItemList();
	},

	render: function(){
	  var items = this.state.items.map(function(item, index){
      return (
      	<tr>
      	  <td>{item.title}</td>
      	  <td>{item.cost}</td>
      	  <td><AddToCart item={item} /></td>
      	</tr>
      );
	  });

	  return (
	    <table className="table table-hover">
        {items}
	    </table>
	  );
	}

});

module.exports = ItemList;	