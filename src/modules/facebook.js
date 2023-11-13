addRule((function() {
	const at = AND(
		AT_DOMAIN("facebook.com"),
		AT_PATHNAME("/l.php")
	);
	return {
		redirect: function(url) {
			if ( at(url) ) {
				return REDIRECT_FROM_SEARCH_PARAMS(url, "u");
			}
		}
	};
})());
addRule((function() {
	const at = AT_DOMAIN("facebook.com");
	const filter = EXCLUDE("hrc", "refsrc");
	return {
		redirect: function(url) {
			if ( at(url) ) {
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
