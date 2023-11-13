addRule((function() {
	const at = AT_HOSTNAME_BY_REGEXP(/^(?:[^.]+\.)?yahoo\.[^.]+$/);
	const filter = EXCLUDE("guccounter");
	return {
		redirect: function(url) {
			if ( at(url) ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
addRule((function() {
	const filter = EXCLUDE("soc_src", "soc_trk");
	return {
		redirect: function(url) {
			FILTER_ENTRIES(url, filter);
		}
	};
})());
