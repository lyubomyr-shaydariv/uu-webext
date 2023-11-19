import * as registry from '/registry.js';
import * as __ from '/rules.js';

// isn't it too wide?
if ( false ) {
	const excluding = __.EXCLUDING("Campaign");
	registry.addRule({
		redirect: (url) => {
			__.FILTER_ENTRIES(url, excluding);
		}
	});
}
