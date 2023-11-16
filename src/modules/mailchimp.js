import * as registry from '/registry.js';
import * as rules from '/rules.js';

{
	const filter = rules.EXCLUDE("mc_cid", "mc_eid");
	registry.addRule({
		redirect: (url) => {
			rules.FILTER_ENTRIES(url, filter);
		}
	});
}
