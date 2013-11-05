require.config({
	paths: {
		// Essentials
		jquery:     '../assets/js/jquery',
		knockout:   '../assets/js/knockout',
		bootstrap:  '../assets/js/bootstrap',
		text:       '../assets/js/text',
		domReady:   '../assets/js/domReady'
	}, 
	shim: {
		'bootstrap': {
			deps: ['jquery']
		}
	}
});

require(['jquery', 'knockout', 'main.app', 'bootstrap', 'domReady!' ], 
		function ($, ko, MainApp) {
	var App = new MainApp();
	
	switch(App.getCurrentFile()) {
		case "": 
		case "index.html":
			require(['mainheader/app', 'menu/app', 'newscapa/app', 'sidecapa/app'], function (MainHeader, Menu, NewsCapa, SideCapa) {
				var header = new MainHeader('#logo');
				var menu   = new Menu('#menu');
				var news   = new NewsCapa('#main-left');
				var side   = new SideCapa('#main-right');
				
				App.applyBinding(menu);
				App.applyBinding(news);
			});
		break;
	}
});