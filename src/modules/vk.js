import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AND(
		__.AT_DOMAIN("vk.com"),
		__.AT_PATHNAME("/away.php")
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				return __.REDIRECT_FROM_SEARCH_PARAMS(url, "to");
			}
		}
	});
}
