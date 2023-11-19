import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AND(
		__.AT_HOSTNAME("mandrillapp.com"),
		__.AT_PATHNAME("/track/click/")
	);
	const pipeline = __.PIPE(
		__.MAP_EXTRACT_SEARCH_PARAMS(),
		__.MAP_PROPERTY_AT("p"),
		__.MAP_DECODE_BASE64(),
		__.MAP_PARSE_JSON(),
		__.MAP_PROPERTY_AT("p"),
		__.MAP_PARSE_JSON(),
		__.MAP_PROPERTY_AT("url"),
		__.MAP_TO_URL()
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				try {
					return pipeline(url);
				} catch ( err ) {
					console.error(err);
					return __.REDIRECT_CONFIRMATION_URL(url);
				}
			}
		}
	});
}
