import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const filter = __.EXCLUDE("__s");
	registry.addRule({
		redirect: (url) => {
			__.FILTER_ENTRIES(url, filter);
		}
	});
}
