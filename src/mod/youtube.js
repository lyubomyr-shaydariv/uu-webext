import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('youtube.com')
		.FROM().QUERY_ENTRIES()
<<<<<<< HEAD
		.DO().RETAIN('list', 'search_query', 't', 'v'),
=======
		.DO().RETAIN('index', 'list', 't', 'v'),
>>>>>>> No query parameters except `index`, `list`, `t`, and `v` are now retained at YouTube
	RULE()
		.AT().DOMAIN('youtu.be')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('si'),
	RULE()
		.AT().DOMAIN('youtu.be')
		.FROM().PATHNAME()
		.APPLY().GET_PROPERTY(0).REPLACE_STRING(/(.*)/, 'https://www.youtube.com/watch?v=$1').TO_URL()
		.DO().REDIRECT(),
	RULE()
		.AT().DOMAIN('youtube.com').PATHNAME('/redirect')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('q').TO_URL()
		.DO().REDIRECT(),
	RULE()
		.AT().DOMAIN('youtube.com').PATHNAME('/attribution_link')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('u').REPLACE_STRING(/(.*)/, 'https://www.youtube.com$1').TO_URL()
		.DO().REDIRECT()
];
