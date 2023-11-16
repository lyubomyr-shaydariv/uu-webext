import * as registry from '/registry.js';
import * as rules from '/rules.js';

{
	const at = rules.AT_DOMAIN("imdb.com");
	const filter = rules.AND(
		rules.EXCLUDE("ref_"),
		rules.EXCLUDE_BY_STARTS_WITH("pf_rd_")
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				rules.FILTER_ENTRIES(url, filter);
			}
		}
	});
}
