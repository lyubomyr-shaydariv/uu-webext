registerModule(function() {
	function filter(k, v) {
		return k !== "lr" && k !== "redircnt";
	}
	const domainRx = /^(?:[^.]+\.)?yandex\.[^.]+$/;
	return {
		redirect: function(url) {
			if ( domainRx.test(url.hostname) ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
});
registerModule(function() {
	function filter(k, v) {
		return k !== "yclid" && k !== "_openstat";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
