import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('twclid'),
	RULE()
		.AT().DOMAIN('twitter.com', 'x.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE_ALL(),
	RULE()
		.AT().DOMAIN('twitter.com', 'x.com').QUERY_ENTRY_KEYS('ref_url')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('ref_url').FROM_URI_COMPONENT().TO_URL()
		.DO().REDIRECT(),
	RULE()
		.AT().DOMAIN('twitter.com', 'x.com').PATHNAME('/i/redirect')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT(),
	RULE()
		.AT().QUERY_ENTRY_KEYS('type')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('type').EXECUTE_REGEXP(/twitterurl=(https?.*?\/\d+)/gm).GET_PROPERTY(1).REPLACE_STRING('3A', ':').TO_URL()
		.DO().REDIRECT()
];
