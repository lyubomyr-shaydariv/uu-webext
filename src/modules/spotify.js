registerModule(function() {
	function filter(k, v) {
		return k !== "context" && k !== "si";
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "open.spotify.com" ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
});
