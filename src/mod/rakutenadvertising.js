import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME('click.linksynergy.com').PATHNAME('/deeplink')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('murl').TO_URL()
		.DO().REDIRECT(),
	RULE()
		.AT().QUERY_ENTRIES_HAVING_ALL_OF('amtlist', 'cur', 'mid', 'ord', 'qlist', 'skulist')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('amtlist', 'cur', 'mid', 'ord', 'qlist', 'skulist', 'namelist')
];
