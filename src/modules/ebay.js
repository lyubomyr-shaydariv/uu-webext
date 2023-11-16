import * as registry from '/registry.js';
import * as rules from '/rules.js';

{
	const at = rules.AT_HOSTNAME_BY_REGEXP(/^(?:[^.]+\.)?ebay\.[^.]+$/);
	const filter = rules.EXCLUDE("_from", "_trkparms", "_trksid", "amdata", "epid", "hash", "var");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				rules.FILTER_ENTRIES(url, filter);
			}
		}
	});
}
