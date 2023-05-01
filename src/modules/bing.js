addRule((function() {
	function filter(k, vs) {
		return k !== "cvid" && k !== "form" && k !== "pq" && k !== "qs" && k !== "sc" && k !== "sk" && k !== "sp";
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "bing.com" || url.hostname.endsWith(".bing.com") ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());
