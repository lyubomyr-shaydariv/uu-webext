registerModule(function() {
	function filter(k, v) {
		return k !== "ml_subscriber" && k !== "ml_subscriber_hash";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
