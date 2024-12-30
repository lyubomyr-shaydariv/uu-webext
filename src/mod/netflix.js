import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('netflix.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('clip', 'fromApp', /jb[a-z]*?/, 'netflixsource', 's', 't', 'tctx', 'trackId', 'trg', 'trkid', 'vlang')
];
