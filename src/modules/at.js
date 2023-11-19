import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const excluding = __.AND(
		__.EXCLUDING("at_campaign", "at_medium"),
		__.EXCLUDING_BY_STARTS_WITH("at_custom")
	);
	registry.addRule({
		redirect: (url) => {
			__.FILTER_ENTRIES(url, excluding);
		}
	});
}
