import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('youtube.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('app', 'embeds_euri', 'embeds_loader_url_for_pings', 'embeds_origin', 'embeds_referring_euri', 'feature', 'kw', 'pp', 'si', 'source_ve_path'),
	RULE()
		.AT().DOMAIN('youtu.be')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('si'),
	RULE()
		.AT().DOMAIN('youtu.be')
		.FROM().PATHNAME()
		.APPLY().GET_PROPERTY(0).REPLACE_STRING(/(.*)/, 'https://www.youtube.com/watch?v=$1').TO_URL().APPEND_ORIGINAL_QUERY_ENTRY_KEYS('t')
		.DO().REDIRECT(),
	RULE()
		.AT().DOMAIN('youtube.com').PATHNAME('/redirect')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('q').TO_URL()
		.DO().REDIRECT(),
	RULE()
		.AT().DOMAIN('youtube.com').PATHNAME('/attribution_link')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('u').REPLACE_STRING(/(.*)/, 'https://www.youtube.com$1').TO_URL()
		.DO().REDIRECT()
];
