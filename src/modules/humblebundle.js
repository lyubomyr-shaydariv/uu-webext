import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const excluding = __.EXCLUDING("hmb_campaign", "hmb_medium", "hmb_source");
	registry.addRule({
		redirect: (url) => {
			__.MUTATE_ENTRIES(url, excluding);
		}
	});
}
