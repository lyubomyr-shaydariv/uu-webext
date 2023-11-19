import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AND(
		__.AT_HOSTNAME("www.evernote.com"),
		__.AT_PATHNAME("/OutboundRedirect.action")
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				return __.REDIRECT_FROM_SEARCH_PARAMS(url, "dest");
			}
		}
	});
}
