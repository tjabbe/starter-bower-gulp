var sm.c  = sm.c || {};

sm.c.TestComponent = (function() {
	'use strict';

	var init = function() {

		// store needed selectors in variables
		this.$ = {};
		this.$.body = $('body');

		this.testFunction();

	};

	var testFunction = function() {
		console.log('Test component loaded');
	};

	return {
		init:init,
		testFunction:testFunction
	};

})();