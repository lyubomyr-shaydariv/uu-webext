addRule((function() {
	function filter(k, vs) {
		return k !== "oly_anon_id" && k !== "oly_enc_id";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
