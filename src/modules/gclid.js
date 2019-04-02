registerModule(function() {
	return {
		redirect: function(url) {
			url.searchParams.delete("gclid");
		}
	};
});
