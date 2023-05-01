addRule((function() {
	function filter(k, vs) {
		return k !== "elqTrack" && k !== "elqTrackId";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
addRule((function() {
	const keysToRemove = ["assetId", "assetType", "campaignId", "recipientId", "siteId"];
	return {
		redirect: function(url) {
			cleanAllSearchAndHashPairs(url, [...keysToRemove]);
		}
	};
})());
