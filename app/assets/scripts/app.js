/*
 * Namespace
 */

var sm   = sm || {};

sm.App = (function() {

	'use strict';

	var init = function(){

		// store needed selectors in variables
		this.$      = {};
		this.$.body = $('body');

		// init components
		sm.c.TestComponent.init();

		console.log("App init");

	};

	return {
		init:init
	};

})();

// init the app
sm.App.init();