addRule((function() {
	const filter = createFilterByConstantKeys("elqTrack", "elqTrackId");
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
