import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AT_HOSTNAME_BY_REGEXP(/^(?:[^.]+\.)?yandex\.[^.]+$/);
	const excluding = __.EXCLUDING("lr", "redircnt");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				__.MUTATE_ENTRIES(url, excluding);
			}
		}
	});
}
{
	const excluding = __.EXCLUDING("yclid", "_openstat");
	registry.addRule({
		redirect: (url) => {
			__.MUTATE_ENTRIES(url, excluding);
		}
	});
}
