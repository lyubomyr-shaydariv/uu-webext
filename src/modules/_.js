addRule((function() {
	function filter(k, vs) {
		return k !== "c_id" && k !== "campaign_id" && k !== "cmpid" && k !== "mbid" && k !== "ncid" && k !== "rb_clickid";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
