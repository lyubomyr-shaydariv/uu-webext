addRule((function() {
	const at = AT_DOMAIN("reddit.com");
	const filter = EXCLUDE("$3p", "$deep_link", "$original_link", "_branch_match_id", "correlation_id", "ref_campaign", "ref_source");
	return {
		redirect: function(url) {
			if ( at(url) ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
addRule((function() {
	const at = AT_HOSTNAME("out.reddit.com");
	return {
		redirect: function(url) {
			if ( at(url) && /^\/[^/]+$/.test(url.pathname) ) {
				return REDIRECT_FROM_SEARCH_PARAMS(url, "url");
			}
		}
	};
})());
