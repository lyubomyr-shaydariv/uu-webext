addRule((function() {
	const filter = createFilterByConstantKeys("c_id", "campaign_id", "cmpid", "mbid", "ncid", "rb_clickid");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
