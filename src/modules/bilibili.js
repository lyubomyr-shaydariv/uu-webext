import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AT_DOMAIN("bilibili.com");
	const excluding = __.EXCLUDING("callback", "spm_id_from");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				__.FILTER_ENTRIES(url, excluding);
			}
		}
	});
}
