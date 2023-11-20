import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AT_DOMAIN("linkedin.com");
	const excluding = __.EXCLUDING("eBP", "lgCta", "lgTemp", "lipi", "midSig", "midToken", "recommendedFlavor", "refId", "trackingId", "trk", "trkEmail");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				__.MUTATE_ENTRIES(url, excluding);
			}
		}
	});
}
{
	const at = __.AND(
		__.AT_DOMAIN("linkedin.com"),
		__.AT_PATHNAME("/safety/go")
	);
	const pipeline = __.PIPE(
		{
			onError: __.REDIRECT_CONFIRMATION_URL
		},
		__.MAP_EXTRACT_SEARCH_PARAMS(),
		__.MAP_PROPERTY_AT("url"),
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
