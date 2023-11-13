addRule((function() {
	const filter = createFilterByConstantKeys("lr", "redircnt");
	return {
		redirect: function(url) {
			if ( /^(?:[^.]+\.)?yandex\.[^.]+$/.test(url.hostname) ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());
addRule((function() {
	const filter = createFilterByConstantKeys("yclid", "_openstat");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
