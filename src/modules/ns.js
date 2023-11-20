import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const excluding = __.EXCLUDING_BY_STARTS_WITH("ns_");
	registry.addRule({
		redirect: (url) => {
			__.MUTATE_ENTRIES(url, excluding);
		}
	});
}
