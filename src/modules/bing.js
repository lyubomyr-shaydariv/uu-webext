registerModule(function() {
	function filter(k, vs) {
		return k !== "cvid" && k !== "form" && k !== "pq" && k !== "qs" && k !== "sc" && k !== "sk" && k !== "sp";
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "bing.com" || url.hostname === "www.bing.com" ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
});
