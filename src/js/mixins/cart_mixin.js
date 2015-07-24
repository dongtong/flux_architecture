var React = require('react');
var Store = require('../stores/stores.js');

var CartMixin = function(callback) {
	return {
    getInitialState: function(){
      return callback();
	  },

	  componentWillMount: function() {
      Store.addChangeEventListener(this._onChange);
	  },

    componentWillUnmount: function(){
      Store.removeChangeEventListener(this._onChange);
    },

    _onChange: function(){
      this.setState(callback());
    }
	};
}

module.exports = CartMixin;
