import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('youtube.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('app', 'embeds_referring_euri', 'feature', 'kw', 'pp', 'si', 'source_ve_path'),
	RULE()
		.AT().DOMAIN('youtu.be')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('si'),
	RULE()
		.AT().DOMAIN('youtube.com').PATHNAME('/redirect')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('q').TO_URL()
		.DO().REDIRECT()
];
