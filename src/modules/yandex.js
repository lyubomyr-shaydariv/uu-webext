addRule((function() {
	const filter = createFilterByConstantKeys("lr", "redircnt");
	const domainRx = /^(?:[^.]+\.)?yandex\.[^.]+$/;
	return {
		redirect: function(url) {
			if ( domainRx.test(url.hostname) ) {
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
