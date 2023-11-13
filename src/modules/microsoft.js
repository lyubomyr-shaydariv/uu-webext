addRule((function() {
	const filter = EXCLUDE("msclkid");
	return {
		redirect: function(url) {
			FILTER_ENTRIES(url, filter);
		}
	};
})());
