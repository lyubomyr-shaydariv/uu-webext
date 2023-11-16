import * as registry from '/registry.js';
import * as rules from '/rules.js';

{
	const at = rules.AT_DOMAIN("twitter.com");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
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
	});
}
{
	const at = rules.AT_DOMAIN("twitter.com");
	const filter = rules.AND(
		rules.EXCLUDE("cxt", "s", "t"),
		rules.EXCLUDE_BY_STARTS_WITH("ref_")
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				rules.FILTER_ENTRIES(url, filter);
			}
		}
	});
}
{
	const filter = rules.EXCLUDE("twclid");
	registry.addRule({
		redirect: (url) => {
			rules.FILTER_ENTRIES(url, filter);
		}
	});
}
