import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AT_DOMAIN("caseking.de");
	const filter = __.EXCLUDE("campaign", "sPartner");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				__.FILTER_ENTRIES(url, filter);
			}
		}
	});
}
