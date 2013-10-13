define(['jquery', 'knockout'], function ($, ko) {
	return function () {
		var self = this;
		
		self.applyBinding = function (obj) {
			ko.applyBindings(obj, $(obj.el)[0]);
		}
	};
});