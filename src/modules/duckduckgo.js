addRule((function() {
	const at = AND(
		AT_HOSTNAME("duckduckgo.com"),
		AT_PATHNAME("/l/")
	);
	return {
		redirect: function(url) {
			if ( at(url) ) {
				return REDIRECT_FROM_SEARCH_PARAMS(url, "uddg");
			}
		}
	};
})());
