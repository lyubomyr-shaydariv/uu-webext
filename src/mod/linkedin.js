import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('linkedin.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('eBP', 'lgCta', 'lgTemp', /li[a-z]{2}/, 'midSig', 'midToken', 'recommendedFlavor', 'refId', 'trackingId', 'trk', 'trkEmail'),
	RULE()
		.AT().DOMAIN('linkedin.com').PATHNAME('/learning')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('u'),
	RULE()
		.AT().DOMAIN('linkedin.com').PATHNAME('/safety/go')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];
