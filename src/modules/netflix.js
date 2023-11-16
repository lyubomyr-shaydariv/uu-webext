import * as registry from '/registry.js';
import * as rules from '/rules.js';

{
	const at = rules.AT_DOMAIN("netflix.com");
	const filter = rules.EXCLUDE("tctx", "trackId");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				rules.FILTER_ENTRIES(url, filter);
			}
		}
	});
}
