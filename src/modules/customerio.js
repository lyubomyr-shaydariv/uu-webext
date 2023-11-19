import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AT_HOSTNAME("e.customeriomail.com");
	const pipeline = __.PIPE(
		__.MAP_EXTRACT_PATHNAME(),
		__.MAP_PARSE_REGEXP(/^\/e\/c\/(.*)/),
		__.MAP_ELEMENT_AT(1),
		__.MAP_DECODE_BASE64(),
		__.MAP_PARSE_JSON(),
		__.MAP_PROPERTY_AT("href"),
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
