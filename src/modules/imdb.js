import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AT_DOMAIN("imdb.com");
	const excluding = __.AND(
		__.EXCLUDING("ref_"),
		__.EXCLUDING_BY_STARTS_WITH("pf_rd_")
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				__.MUTATE_ENTRIES(url, excluding);
			}
		}
	});
}
