import * as registry from '/registry.js';
import * as rules from '/rules.js';

{
	const at = rules.AND(
		rules.AT_HOSTNAME("mandrillapp.com"),
		rules.AT_PATHNAME("/track/click/")
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				try {
					return new URL(JSON.parse(JSON.parse(atob(url.searchParams.get("p"))).p).url);
				} catch ( ignored ) {
					return rules.REDIRECT_CONFIRMATION_URL(url);
				}
			}
		}
	});
}
