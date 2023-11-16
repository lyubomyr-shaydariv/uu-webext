import * as registry from '/registry.js';
import * as rules from '/rules.js';

// isn't it too wide?
if ( false ) {
	const filter = rules.EXCLUDE("Campaign");
	registry.addRule({
		redirect: (url) => {
				rules.FILTER_ENTRIES(url, filter);
		}
	});
}
