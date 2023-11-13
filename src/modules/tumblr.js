addRule((function() {
	const at = AND(
		AT_HOSTNAME("t.umblr.com"),
		AT_PATHNAME("/redirect")
	);
	return {
		redirect: function(url) {
			if ( at(url) ) {
				return REDIRECT_FROM_SEARCH_PARAMS(url, "z");
			}
		}
	};
})());
