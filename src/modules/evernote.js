import * as registry from '/registry.js';
import * as rules from '/rules.js';

{
	const at = rules.AND(
		rules.AT_HOSTNAME("www.evernote.com"),
		rules.AT_PATHNAME("/OutboundRedirect.action")
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				return rules.REDIRECT_FROM_SEARCH_PARAMS(url, "dest");
			}
		}
	});
}
