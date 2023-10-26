addRule((function() {
	const filter = createFilterByConstantKeys("ml_subscriber", "ml_subscriber_hash");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
