import * as registry from '/registry.js';
import * as rules from '/rules.js';

{
	const at = rules.AT_DOMAIN("caseking.de");
	const filter = rules.EXCLUDE("campaign", "sPartner");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				rules.FILTER_ENTRIES(url, filter);
			}
		}
	});
}
