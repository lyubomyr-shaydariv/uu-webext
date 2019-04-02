registerModule(function() {
	return {
		redirect: function(url) {
			url.searchParams.delete("fbclid");
		}
	};
});
