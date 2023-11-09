addRule((function() {
	const filter = createFilterByConstantKeys("$3p", "$deep_link", "$original_link", "_branch_match_id", "correlation_id", "ref_campaign", "ref_source");
	return {
		redirect: function(url) {
			if ( url.hostname === "reddit.com" || url.hostname.endsWith(".reddit.com") ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());
addRule((function() {
	return {
		redirect: function(url) {
			if ( (url.hostname === "out.reddit.com") && /^\/[^/]+$/.test(url.pathname) ) {
				return extractQueryPairAsUrl(url.searchParams, "url");
			}
		}
	};
})());
