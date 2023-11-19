import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AT_DOMAIN("etsy.com");
	const excluding = __.EXCLUDING("click_key", "click_sum", "organic_search_click", "ref");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				__.FILTER_ENTRIES(url, excluding);
			}
		}
	});
}
