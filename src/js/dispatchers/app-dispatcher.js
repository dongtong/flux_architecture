var Dispatcher = require('./dispatcher.js');
var Merge = require('react/lib/merge');

var AppDispatcher = Merge(Dispatcher.prototype, {
	handleViewAction: function(action){
		this.dispatch({
			source: 'VIEW_ACTION',
			action: action
		});
	}
});

module.exports = AppDispatcher;