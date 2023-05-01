registerModule(function() {
	return {
		redirect: function(url) {
			if ( (url.hostname === "www.facebook.com" || url.hostname === "facebook.com") && url.pathname === "/l.php" ) {
				return extractQueryPairAsUrl(url.searchParams, "u");
			}
		}
	};
});
registerModule(function() {
	function filter(k, v) {
		return k !== "hrc" && k !== "refsrc";
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "www.facebook.com" || url.hostname === "facebook.com" ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
});
registerModule(function() {
	function filter(k, v) {
		return k !== "fbclid" && k !== "fb_action_ids" && k !== "fb_action_types" && k !== "fb_ref" && k !== "fb_source";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
