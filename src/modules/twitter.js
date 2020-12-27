registerModule(function() {
	const dataRx = /twitterurl=(https?.*?\/\d+)/gm;
	return {
		redirect: function(url) {
			if ( url.hostname === "twitter.com" || url.hostname === "www.twitter.com" ) {
				const rawRefUrl = url.searchParams.get("ref_url");
				if ( rawRefUrl ) {
					const refUrl = new URL(rawRefUrl);
					const rawType = refUrl.searchParams.get("type");
					if ( rawType ) {
						const exec = dataRx.exec(rawType);
						if ( exec ) {
							const tweetUrl = exec[1].replace("3A", ":");
							return new URL(tweetUrl);
						}
					}
				}
			}
		}
	};
});
