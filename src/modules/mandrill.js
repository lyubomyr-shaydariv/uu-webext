import * as registry from '/registry.js';
import * as rules from '/rules.js';

{
	const at = rules.AND(
		rules.AT_HOSTNAME("mandrillapp.com"),
		rules.AT_PATHNAME("/track/click/")
	);
	const pipeline = rules.PIPE(
		rules.MAP_EXTRACT_SEARCH_PARAMS(),
		rules.MAP_PROPERTY_AT("p"),
		rules.MAP_DECODE_BASE64(),
		rules.MAP_PARSE_JSON(),
		rules.MAP_PROPERTY_AT("p"),
		rules.MAP_PARSE_JSON(),
		rules.MAP_PROPERTY_AT("url"),
		rules.MAP_TO_URL()
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				try {
					return pipeline(url);
				} catch ( err ) {
					console.error(err);
					return rules.REDIRECT_CONFIRMATION_URL(url);
				}
			}
		}
	});
}
