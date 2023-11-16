import * as registry from '/registry.js';
import * as rules from '/rules.js';

{
	const at = rules.AT_HOSTNAME("mandrillapp.com");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) && url.pathname.startsWith("/track/click/") ) {
				try {
					return new URL(JSON.parse(JSON.parse(atob(url.searchParams.get("p"))).p).url);
				} catch ( ignored ) {
					return rules.REDIRECT_CONFIRMATION_URL(url);
				}
			}
		}
	});
}
