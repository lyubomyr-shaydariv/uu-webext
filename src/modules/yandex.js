registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "lr" && k !== "redircnt";
	}
	const domainRx = /^(?:[^.]+\.)?yandex\.[^.]+$/;
	return {
		redirect: function(url) {
			if ( domainRx.test(url.hostname) ) {
				url.search = removeSearchPair(url.search, isSafeKeyPair);
				url.hash = removeHashPair(url.hash, isSafeKeyPair);
			}
		}
	};
});
registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "yclid" && k !== "_openstat";
	};
	return {
		redirect: function(url) {
			url.search = removeSearchPair(url.search, isSafeKeyPair);
			url.hash = removeHashPair(url.hash, isSafeKeyPair);
		}
	};
});
