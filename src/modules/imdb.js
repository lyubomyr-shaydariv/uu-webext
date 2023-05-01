registerModule(function() {
	function filter(k, vs) {
		return k !== "ref_" && !k.startsWith("pf_rd_");
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "imdb.com" || url.hostname.endsWith(".imdb.com") ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
});
