addRule((function() {
	function filter(k, vs) {
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
})());
addRule((function() {
	function filter(k, vs) {
		return k !== "yclid" && k !== "_openstat";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
