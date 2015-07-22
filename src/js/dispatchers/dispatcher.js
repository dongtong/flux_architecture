var Promise = require('es6-promise').Promise;
var Merge = require('react/lib/merge');

var _callbacks = [],
     _promises = [];

/*
* Add a promise to the queue of callback invocation promise
*	@params {function} callback: the store's registered callback function
* @params {object} payload: the data from the action
*/

var _addPromise = function(callback, payload){
  _promises.push(new Promise(function(resolve, reject){
    if(callback(payload)){
    	resolve(payload);
    }else{
    	reject(new Error('Dispatcher callback failed'));
    }
  }));
};

/**
*	Clear callback promises queue
*/
var _clearPromises = function(){
	_promises = [];
};

var Dispatcher = function(){};
Dispatcher.prototype = Merge(Dispatcher.prototype, {
	
	/**
	* Register a store's callback for action invocation
	* @params {function} callback: registered callback
	* @params {number} the index of the new registered callback
	*/
  register: function(callback) {
    _callbacks.push(callback);
    return _callbacks.length - 1;
  },

  /**
  * Dispatch
  * @params {object} payload: the date from the action
  */
  dispatch: function(payload) {
    _callbacks.forEach(function(callback){
      _addPromise(callback, payload);
    });
    Promise.all(_promises).then(_clearPromises);
  }
});

module.exports = Dispatcher;

