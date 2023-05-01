registerModule(function() {
	function filter(k, v) {
		return k !== "callback";
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "bilibili.com" || url.hostname === "www.bilibili.com" ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
});
