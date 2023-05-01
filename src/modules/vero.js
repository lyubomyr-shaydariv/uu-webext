addRule((function() {
	function filter(k, vs) {
		return k !== "vero_conv" && k !== "vero_id";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
