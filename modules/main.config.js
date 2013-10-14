require.config({
	paths: {
		// Essentials
		jquery:     '../assets/js/jquery',
		knockout:   '../assets/js/knockout',
		sammy:      '../assets/js/sammy',
		bootstrap:  '../assets/js/bootstrap',
		text:       '../assets/js/text',
		domReady:   '../assets/js/domReady'
	}, 
	shim: {
		'bootstrap': {
			deps: ['jquery']
		},
		'sammy': {
			deps: ['jquery']
		}
	}
});

require(['jquery', 'bootstrap', 'knockout', 'sammy', 'domReady!' ], 
		function ($, b, ko, Sammy) {
});