import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('tradedoubler.com').PATHNAME('/click')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('_td_deeplink', 'url').TO_URL()
		.DO().REDIRECT()
];
