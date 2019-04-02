(function() {

	modules.push({
		redirect: function(url) {
			url.searchParams.delete("gclid");
		}
	});

})();
