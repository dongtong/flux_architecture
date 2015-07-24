//The cart info in page header
var React = require('react');
var Link = require('react-router-component').Link;

var CartInfo = React.createClass({
	render: function(){
		return (
		  <div>
		    <Link
		      href='/cart'
		      className='btn btn-info'>
		      购物车: 数量 / 价格
		    </Link>
		  </div>
		);
	}
});

module.exports = CartInfo;