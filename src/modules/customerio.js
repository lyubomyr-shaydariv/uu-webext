import * as registry from '/registry.js';
import * as rules from '/rules.js';

{
	const at = rules.AT_HOSTNAME("e.customeriomail.com");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				const pathnameExec = /^\/e\/c\/([^/]+)\/.*/.exec(url.pathname);
				if ( pathnameExec ) {
					const encodedBlob = pathnameExec[1];
					try {
						return new URL(JSON.parse(atob(encodedBlob)).href);
					} catch ( err ) {
						console.error(err);
						return rules.REDIRECT_CONFIRMATION_URL(url);
					}
				}
			}
		}
	});
}
