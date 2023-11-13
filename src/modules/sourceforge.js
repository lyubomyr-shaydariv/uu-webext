addRule((function() {
	const at = AT_DOMAIN("sourceforge.net");
	const filter = EXCLUDE("position", "source");
	return {
		redirect: function(url) {
			if ( at(url) ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
