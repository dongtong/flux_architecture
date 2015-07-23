var AppDispatcher = require('../dispatchers/app-dispatcher.js');
var Constants = require('../constants/constants.js');
var merge = require('merge');
var EventEmitter = require('events').EventEmitter; //from node lib

var changeEvent = Constants.EVENTS.CHANGE_EVENT;

// Dummy data
// These data should request from server side
var _itemList = [];
for(var i = 1; i <= 9; i++) {
  _itemList.push({
    'id': 'product' + i,
    'title': 'Product #' + i,
    'summary': 'This is awesome product #' + i,
    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, commodi.',
    'img': '/assets/product.png',
    'cost': i
  });
}

var _cartItems = [];

function _removeItem(index) {
	_cartItems[index].inCart = false;
	_cartItems.splice(index, 1);
}

function _increaseNum(index) {
  _cartItems[index].count++;
}

function _decreaseNum(index) {
	if(_cartItems[index].count - 1) {
		_cartItems[index].count--;
	}else{
		_removeItem(index);
	}
}

function _addItem(item) {
	if(!item.inCart) {
		item['count'] = 1;
		item['inCart'] = true;
		_cartItems.push(item);
	}else{
		_cartItems.forEach(function(cartItem, index){
      if(cartItem.id == item.id) {
      	_increaseNum(index);
      }
		});
	}
}

var AppStore = merge(EventEmitter.prototype, {
  emitChange: function(){
    this.emit(changeEvent);
  },

  addChangeEventListener: function (callback) {
    this.on(changeEvent, callback);
  },

  removeChangeEventListener: function (callback) {
  	this.removeListener(changeEvent, callback);
  },

  getCartItems: function(){
  	return _cartItems;
  },

  getItemList: function() {
  	return _itemList;
  },

  dispatcherIndex:AppDispatcher.register(function(payload){
    var action = payload.action;
    switch(action.actionType) {
    	case Constants.ADD_ITEM:
    	  _addItem(payload.action.item);
    	  break;
    	case Constants.REMOVE_ITEM:
    	  _removeItem(payload.action.index);
    	  break;
    	case Constants.INCREASE_NUM:
    	  _increaseNum(payload.action.index);
    	  break;
    	case Constants.DECREASE_NUM:
    	  _decreaseNum(payload.action.index);
    	  break;
    }
    AppStore.emitChange();

    return true;
  })

});

module.exports = AppStore;