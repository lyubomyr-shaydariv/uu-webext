import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('twclid'),
	RULE()
		.AT().DOMAIN('twitter.com', 'x.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('cn', 'cxt', /^ref_.*/, 's', 'src', 't'),
	RULE()
		.AT().DOMAIN('twitter.com', 'x.com').QUERY_ENTRIES('ref_url')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('ref_url').FROM_URI_COMPONENT().TO_URL()
		.DO().REDIRECT(),
	RULE()
		.AT().DOMAIN('twitter.com', 'x.com').PATHNAME('/i/redirect')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT(),
	RULE()
		.AT().QUERY_ENTRIES('type')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('type').EXECUTE_REGEXP(/twitterurl=(https?.*?\/\d+)/gm).GET_PROPERTY(1).REPLACE_STRING('3A', ':').TO_URL()
		.DO().REDIRECT()
];
