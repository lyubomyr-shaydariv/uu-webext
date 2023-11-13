addRule((function() {
	const at = AT_DOMAIN("imdb.com");
	const filter = AND(
		EXCLUDE("ref_"),
		EXCLUDE_BY_STARTS_WITH("pf_rd_")
	);
	return {
		redirect: function(url) {
			if ( at(url) ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
