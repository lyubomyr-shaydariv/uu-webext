import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const filter = __.AND(
		__.EXCLUDE("at_campaign", "at_medium"),
		__.EXCLUDE_BY_STARTS_WITH("at_custom")
	);
	registry.addRule({
		redirect: (url) => {
			__.FILTER_ENTRIES(url, filter);
		}
	});
}
