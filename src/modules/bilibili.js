addRule((function() {
	function filter(k, vs) {
		return k !== "callback";
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "bilibili.com" || url.hostname.endsWith(".bilibili.com") ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());