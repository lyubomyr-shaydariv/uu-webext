registerModule(function() {
	function filter(k, vs) {
		return k !== "msclkid";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
