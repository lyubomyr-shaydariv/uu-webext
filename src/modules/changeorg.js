registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "guest" && k !== "recruited_by_id" && k !== "recruiter" && k !== "short_display_name" && k !== "source_location";
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "change.org" || url.hostname === "www.change.org" ) {
				url.search = removeSearchPair(url.search, isSafeKeyPair);
				url.hash = removeHashPair(url.hash, isSafeKeyPair);
			}
		}
	};
});
