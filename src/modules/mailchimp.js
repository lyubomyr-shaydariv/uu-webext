import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const excluding = __.EXCLUDING("mc_cid", "mc_eid");
	registry.addRule({
		redirect: (url) => {
			__.FILTER_ENTRIES(url, excluding);
		}
	});
}
