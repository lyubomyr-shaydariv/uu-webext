import {PREFIX} from '/literals.js';
import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('li_fat_id'),
	RULE()
		.AT().DOMAIN('linkedin.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('eBP', 'eid', 'lgCta', 'lgTemp', /li[a-z]{2}/, 'midSig', 'midToken', 'otpToken', 'recommendedFlavor', 'refId', 'trackingId', 'trk', 'trkEmail'),
	RULE()
		.AT().DOMAIN('linkedin.com').PATHNAME('/learning')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('u'),
	RULE()
		.AT().DOMAIN('linkedin.com').PATHNAME(PREFIX('/help/'))
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('mcid', 'src', 'trk'),
	RULE()
		.AT().DOMAIN('linkedin.com').PATHNAME(PREFIX('/in/'))
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('original_referer', 'trackingCode', 'trackingId'),
	RULE()
		.AT().DOMAIN('linkedin.com').PATHNAME('/redir/redirect', '/safety/go')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];
