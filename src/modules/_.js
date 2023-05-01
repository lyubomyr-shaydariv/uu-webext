registerModule(function() {
	function filter(k, v) {
		return k !== "c_id" && k !== "campaign_id" && k !== "cmpid" && k !== "mbid" && k !== "ncid" && k !== "rb_clickid";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
