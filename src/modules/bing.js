import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AT_DOMAIN("bing.com");
	const filter = __.EXCLUDE("cvid", "form", "pq", "qs", "qp", "sc", "sk", "sp");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				__.FILTER_ENTRIES(url, filter);
			}
		}
	});
}
