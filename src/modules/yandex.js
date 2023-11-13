addRule((function() {
	const filter = EXCLUDE("lr", "redircnt");
	return {
		redirect: function(url) {
			if ( /^(?:[^.]+\.)?yandex\.[^.]+$/.test(url.hostname) ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
addRule((function() {
	const filter = EXCLUDE("yclid", "_openstat");
	return {
		redirect: function(url) {
			FILTER_ENTRIES(url, filter);
		}
	};
})());
