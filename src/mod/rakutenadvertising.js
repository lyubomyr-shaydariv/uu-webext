import {ALL} from '/literals.js';
import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME('click.linksynergy.com').PATHNAME('/deeplink')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('murl').TO_URL()
		.DO().REDIRECT(),
	RULE()
		.AT().QUERY_ENTRY_KEYS(ALL('amtlist', 'cur', 'mid', 'ord', 'qlist', 'skulist'))
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('amtlist', 'cur', 'mid', 'ord', 'qlist', 'skulist', 'namelist')
];
