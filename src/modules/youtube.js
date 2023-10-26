addRule((function() {
	const filter = createFilterByConstantKeys("feature", "kw");
	return {
		redirect: function(url) {
			if ( url.hostname === "youtube.com" || url.hostname.endsWith(".youtube.com") ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());
addRule((function() {
	return {
		redirect: function(url) {
			if ( (url.hostname === "youtube.com" || url.hostname.endsWith(".youtube.com")) && url.pathname === "/redirect" ) {
				return extractQueryPairAsUrl(url.searchParams, "q");
			}
		}
	};
})());
