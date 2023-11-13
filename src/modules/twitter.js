addRule((function() {
	return {
		redirect: function(url) {
			if ( url.hostname === "twitter.com" || url.hostname.endsWith(".twitter.com") ) {
				const rawRefUrl = url.searchParams.get("ref_url");
				if ( rawRefUrl ) {
					const refUrl = new URL(rawRefUrl);
					const rawType = refUrl.searchParams.get("type");
					if ( rawType ) {
						const exec = /twitterurl=(https?.*?\/\d+)/gm.exec(rawType);
						if ( exec ) {
							const tweetUrl = exec[1].replace("3A", ":");
							return new URL(tweetUrl);
						}
					}
				}
			}
		}
	};
})());
addRule((function() {
	function filter(k, vs) {
		return k !== "cxt" && k !== "s" && k !== "t" && !k.startsWith("ref_");
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "twitter.com" || url.hostname.endsWith(".twitter.com") ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());
addRule((function() {
	const filter = EXCLUDE("twclid");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
