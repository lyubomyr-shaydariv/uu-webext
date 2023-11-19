import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AT_HOSTNAME_BY_REGEXP(/^(?:[^.]+\.)?ebay\.[^.]+$/);
	const filter = __.EXCLUDE("_from", "_trkparms", "_trksid", "amdata", "epid", "hash", "var");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				__.FILTER_ENTRIES(url, filter);
			}
		}
	});
}
