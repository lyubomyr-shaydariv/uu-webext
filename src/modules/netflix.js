import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AT_DOMAIN("netflix.com");
	const excluding = __.EXCLUDING("tctx", "trackId");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				__.MUTATE_ENTRIES(url, excluding);
			}
		}
	});
}
