var Constants =  require('../constants/constants.js');
var AppDispatcher = require('../dispatchers/app-dispatcher.js');

var AppAction = {

	addItem: function(item) {
    AppDispatcher.handleViewAction({
    	actionType: Constants.ADD_ITEM,
    	item: item
    });
	},

	removeItem: function(index){
    AppDispatcher.handleViewAction({
    	actionType: Constants.REMOVE_ITEM,
    	index: index
    });
	},

	increaseNum: function(index){
    AppDispatcher.handleViewAction({
    	actionType: Constants.INCREASE_NUM,
    	index: index
    });
	},

	decreaseNum: function(index){
		AppDispatcher.handleViewAction({
    	actionType: Constants.DECREASE_NUM,
    	index: index
    });
	}
};

module.exports = AppAction;