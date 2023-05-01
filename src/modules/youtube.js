registerModule(function() {
	function filter(k, vs) {
		return k !== "feature" && k !== "kw";
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "youtube.com" || url.hostname.endsWith(".youtube.com") ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
});
registerModule(function() {
	return {
		redirect: function(url) {
			if ( (url.hostname === "youtube.com" || url.hostname.endsWith(".youtube.com")) && url.pathname === "/redirect" ) {
				return extractQueryPairAsUrl(url.searchParams, "q");
			}
		}
	};
});
