var AppDispatcher = require('../dispatchers/app-dispatcher.js');
var Constants = require('../constants/constants.js');
var merge = require('merge');
var EventEmitter = require('events').EventEmitter; //from node lib

var changeEvent = Constants.EVENTS.CHANGE_EVENT;

var _itemList = [
  {id: 1, title: 'Item #1', cost: 10},
  {id: 2, title: 'Item #2', cost: 20},
  {id: 3, title: 'Item #3', cost: 30}
];

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