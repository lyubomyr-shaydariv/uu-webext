import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AT_DOMAIN("sourceforge.net");
	const excluding = __.EXCLUDING("position", "source");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				__.MUTATE_ENTRIES(url, excluding);
			}
		}
	});
}
