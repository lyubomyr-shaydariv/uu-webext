addRule((function() {
	return {
		redirect: function(url) {
			if ( url.hostname === "l.instagram.com" ) {
				return extractQueryPairAsUrl(url.searchParams, "u");
			}
		}
	};
})());
addRule((function() {
	const filter = createFilterByConstantKeys("igshid");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
