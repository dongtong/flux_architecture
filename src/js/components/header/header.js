//Page header
var React = require('react');
var CartInfo = require('./cart_info.js');

var Header = React.createClass({
	render: function(){
		return (
		  <div className='row'>
		    <div className='row-sm-6'>
		      <h1>商品列表</h1>
		    </div>
		    <div className='col-sm-2 col-sm-push-10'>
		      <br/>
		      <CartInfo />
		    </div>
		  </div>
		);
	}
});

module.exports = Header;