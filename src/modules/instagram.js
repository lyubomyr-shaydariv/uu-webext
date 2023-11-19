import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AT_HOSTNAME("l.instagram.com");
	const pipeline = __.PIPE(
		{
			onError: __.REDIRECT_CONFIRMATION_URL
		},
		__.MAP_EXTRACT_SEARCH_PARAMS(),
		__.MAP_PROPERTY_AT("u"),
		__.MAP_TO_URL()
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				return pipeline(url);
			}
		}
	});
}
{
	const filter = __.EXCLUDE("igshid");
	registry.addRule({
		redirect: (url) => {
			__.FILTER_ENTRIES(url, filter);
		}
	});
}
