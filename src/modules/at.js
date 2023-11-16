import * as registry from '/registry.js';
import * as rules from '/rules.js';

{
	const filter = rules.AND(
		rules.EXCLUDE("at_campaign", "at_medium"),
		rules.EXCLUDE_BY_STARTS_WITH("at_custom")
	);
	registry.addRule({
		redirect: (url) => {
			rules.FILTER_ENTRIES(url, filter);
		}
	});
}
