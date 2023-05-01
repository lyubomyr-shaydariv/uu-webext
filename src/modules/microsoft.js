registerModule(function() {
	function filter(k, v) {
		return k !== "msclkid";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
