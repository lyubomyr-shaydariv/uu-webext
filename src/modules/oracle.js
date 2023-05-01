registerModule(function() {
	function filter(k, vs) {
		return k !== "elqTrack" && k !== "elqTrackId";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
