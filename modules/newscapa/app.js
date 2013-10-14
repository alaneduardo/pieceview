define(['jquery', 'knockout', 'sammy', 'text!newscapa/index.html'],
		function ($, ko, Sammy, template) {
	
     return function (el) {
		var self = this;
		
		self.el = el;
		
		self.destaque = ko.observable({
			titulo: 'Modificação na tabela da Copa Piaui 2013',
			subtitulo: 'FFP divulga modificação na tabela',
			url: '/noticias/2013-10-08/modificacao-na-tabela-da-copa-piaui-2013.html'
		});
		
		self.sidenews = ko.observable({
			destaque: {
				categoria: 'Estadual',
				titulo: 'Modificação na tabela da Copa Piaui 2013',
				subtitulo: 'FFP divulga modificação na tabela',
				url: '/noticias/2013-10-08/modificacao-na-tabela-da-copa-piaui-2013.html'
			},
			direita: {
				categoria: 'Estadual',
				img: "http://futbase.net/admin/noticias/imagens/1375220347_Flamengo-PI.jpg",
				titulo: 'Modificação na tabela da Copa Piaui 2013',
				subtitulo: 'FFP divulga modificação na tabela',
				url: '/noticias/2013-10-08/modificacao-na-tabela-da-copa-piaui-2013.html'
			},
			esquerda: {
				categoria: 'Estadual',
				img: "http://futbase.net/admin/noticias/imagens/1375220347_Flamengo-PI.jpg",
				titulo: 'Modificação na tabela da Copa Piaui 2013',
				subtitulo: 'FFP divulga modificação na tabela',
				url: '/noticias/2013-10-08/modificacao-na-tabela-da-copa-piaui-2013.html'
			}
		});
		
		self.bottomnews = ko.observable({
			centro: {
				categoria: 'Estadual',
				titulo: 'Modificação na tabela da Copa Piaui 2013',
				subtitulo: 'FFP divulga modificação na tabela',
				url: '/noticias/2013-10-08/modificacao-na-tabela-da-copa-piaui-2013.html'
			},
			direita: {
				categoria: 'Estadual',
				titulo: 'Modificação na tabela da Copa Piaui 2013',
				subtitulo: 'FFP divulga modificação na tabela',
				url: '/noticias/2013-10-08/modificacao-na-tabela-da-copa-piaui-2013.html'
			},
			esquerda: {
				categoria: 'Estadual',				
				titulo: 'Modificação na tabela da Copa Piaui 2013',
				subtitulo: 'FFP divulga modificação na tabela',
				url: '/noticias/2013-10-08/modificacao-na-tabela-da-copa-piaui-2013.html'
			}
		});
		
		self.goToLink = function (data) {
			location.href = data.url;
		}

		$(self.el).html(template);
	};
});