import * as registry from '/registry.js';
import * as rules from '/rules.js';

{
	const at = rules.AT_HOSTNAME("e.customeriomail.com");
	const pipeline = rules.PIPE(
		rules.MAP_EXTRACT_PATHNAME(),
		rules.MAP_PARSE_REGEXP(/^\/e\/c\/(.*)/),
		rules.MAP_ELEMENT_AT(1),
		rules.MAP_DECODE_BASE64(),
		rules.MAP_PARSE_JSON(),
		rules.MAP_PROPERTY_AT("href"),
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
