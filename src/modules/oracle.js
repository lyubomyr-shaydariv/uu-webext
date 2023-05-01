registerModule(function() {
	function filter(k, v) {
		return k !== "elqTrack" && k !== "elqTrackId";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
