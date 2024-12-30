import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('guce_referrer', 'guce_referrer_sig', 'soc_src', 'soc_trk'),
	RULE()
		.AT().HOSTNAME(/^(?:[^.]+\.)?yahoo\.[^.]+$/)
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('guccounter'),
	RULE()
		.AT().DOMAIN('yahoo.com').PATHNAME('/search')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().RETAIN('p')
];
