import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AT_DOMAIN("bing.com");
	const excluding = __.EXCLUDING("cvid", "form", "pq", "qs", "qp", "sc", "sk", "sp");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				__.FILTER_ENTRIES(url, excluding);
			}
		}
	});
}
