import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const excluding = __.EXCLUDING("sc_cid", "mkt_tok", "s_cid");
	registry.addRule({
		redirect: (url) => {
			__.MUTATE_ENTRIES(url, excluding);
		}
	});
}
