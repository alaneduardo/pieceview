define(['jquery', 'knockout', 'sammy', 'text!menu/index.html'],
		function ($, ko, Sammy, template) {
	$('#menu').html(template);
	
     return function (el) {
		var self = this;
		
		self.el = el;
		
		self.menuData = ko.observable([
		    { label: 'Home', url: '#home'},
		    { label: 'Federação', url: '#federacao'},
		    { label: 'Parceiros', url: '#parceiros'},
		    { label: 'Mídia', url: '#midia'},
		    { label: 'Notícias', url: '#noticias'},
		    { label: 'Calendário', url: '#calendario'},
		    { label: 'Competições', url: '#competicoes'},
		    { label: 'Arbitragem', url: '#arbitragem'},
		    { label: 'TJD', url: '#tjd'},
		    { label: 'Registro', url: '#registro'},
		    { label: 'Contato', url: '#contato'}
		]);
		
		self.goToLink = function (data) {
			location.hash = data.url;
		}
		

		
		Sammy(function() {
			this.get('#home', function () {
				alert('home');
			});
			this.get('#parceiros', function () {
				alert('hello');
			});
	    }).run();
	};
});