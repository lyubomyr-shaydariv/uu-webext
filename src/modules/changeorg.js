registerModule(function() {
	function filter(k, vs) {
		return k !== "guest" && k !== "recruited_by_id" && k !== "recruiter" && k !== "short_display_name" && k !== "source_location";
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "change.org" || url.hostname.endsWith(".change.org") ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
});
