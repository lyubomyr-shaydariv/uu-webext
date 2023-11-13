addRule((function() {
	const filter = AND(
		EXCLUDE("ref_"),
		EXCLUDE_BY_STARTS_WITH("pf_rd_")
	);
	return {
		redirect: function(url) {
			if ( url.hostname === "imdb.com" || url.hostname.endsWith(".imdb.com") ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());
