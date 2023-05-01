addRule((function() {
	function filter(k, vs) {
		return k !== "ml_subscriber" && k !== "ml_subscriber_hash";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
