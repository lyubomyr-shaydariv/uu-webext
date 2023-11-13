addRule((function() {
	const filter = EXCLUDE("oly_anon_id", "oly_enc_id");
	return {
		redirect: function(url) {
			FILTER_ENTRIES(url, filter);
		}
	};
})());
