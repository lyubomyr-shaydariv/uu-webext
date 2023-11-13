addRule((function() {
	return {
		redirect: function(url) {
			if ( (url.hostname === "facebook.com" || url.hostname.endsWith("facebook.com")) && url.pathname === "/l.php" ) {
				return extractQueryPairAsUrl(url.searchParams, "u");
			}
		}
	};
})());
addRule((function() {
	const filter = EXCLUDE("hrc", "refsrc");
	return {
		redirect: function(url) {
			if ( url.hostname === "facebook.com" || url.hostname.endsWith("facebook.com") ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
addRule((function() {
	const filter = EXCLUDE("fbclid", "fb_action_ids", "fb_action_types", "fb_ref", "fb_source");
	return {
		redirect: function(url) {
			FILTER_ENTRIES(url, filter);
		}
	};
})());
