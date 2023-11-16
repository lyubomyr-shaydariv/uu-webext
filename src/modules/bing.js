import * as registry from '/registry.js';
import * as rules from '/rules.js';

{
	const at = rules.AT_DOMAIN("bing.com");
	const filter = rules.EXCLUDE("cvid", "form", "pq", "qs", "qp", "sc", "sk", "sp");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				rules.FILTER_ENTRIES(url, filter);
			}
		}
	});
}
