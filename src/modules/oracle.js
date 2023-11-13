addRule((function() {
	const filter = EXCLUDE("elqTrack", "elqTrackId");
	return {
		redirect: function(url) {
			FILTER_ENTRIES(url, filter);
		}
	};
})());
addRule((function() {
	const filter = EXCLUDE("assetId", "assetType", "campaignId", "recipientId", "siteId");
	return {
		redirect: function(url) {
			FILTER_ENTRIES(url, filter);
		}
	};
})());
