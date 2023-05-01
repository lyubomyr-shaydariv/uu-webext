registerModule(function() {
	function filter(k, v) {
		return k !== "vero_conv" && k !== "vero_id";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
