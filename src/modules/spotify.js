import * as registry from '/registry.js';
import * as rules from '/rules.js';

{
	const at = rules.AT_HOSTNAME("open.spotify.com");
	const filter = rules.EXCLUDE("context", "si");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				rules.FILTER_ENTRIES(url, filter);
			}
		}
	});
}
