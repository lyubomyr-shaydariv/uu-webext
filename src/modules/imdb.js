import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AT_DOMAIN("imdb.com");
	const filter = __.AND(
		__.EXCLUDE("ref_"),
		__.EXCLUDE_BY_STARTS_WITH("pf_rd_")
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				__.FILTER_ENTRIES(url, filter);
			}
		}
	});
}
