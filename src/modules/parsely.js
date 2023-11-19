import * as registry from '/registry.js';
import * as __ from '/rules.js';

// isn't it too wide?
if ( false ) {
	const filter = __.EXCLUDE("Campaign");
	registry.addRule({
		redirect: (url) => {
				__.FILTER_ENTRIES(url, filter);
		}
	});
}
