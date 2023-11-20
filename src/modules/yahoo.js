import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AT_HOSTNAME_BY_REGEXP(/^(?:[^.]+\.)?yahoo\.[^.]+$/);
	const excluding = __.EXCLUDING("guccounter");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				__.MUTATE_ENTRIES(url, excluding);
			}
		}
	});
}
{
	const excluding = __.EXCLUDING("soc_src", "soc_trk");
	registry.addRule({
		redirect: (url) => {
			__.MUTATE_ENTRIES(url, excluding);
		}
	});
}
