define(['jquery', 'knockout', 'sammy', 'text!menu/index.html'],
		function ($, ko, Sammy, template) {
	
     return function (el) {
		var self = this;
		
		self.el = el;
		
		self.menuData = ko.observable([
		    { label: 'Home', url: 'index.html'},
		    { label: 'Federação', url: 'federacao.html'},
		    { label: 'Parceiros', url: 'parceiros.html'},
		    { label: 'Mídia', url: 'midia.html'},
		    { label: 'Notícias', url: 'noticias.html'},
		    { label: 'Calendário', url: 'calendario.html'},
		    { label: 'Competições', url: 'competicoes.html'},
		    { label: 'Arbitragem', url: 'arbitragem.html'},
		    { label: 'TJD', url: 'tjd.html'},
		    { label: 'Registro', url: 'registro.html'},
		    { label: 'Contato', url: 'contato.html'}
		]);
		
		self.goToLink = function (data) {
			location.href = data.url;
		}

		$(self.el).html(template);
	};
});