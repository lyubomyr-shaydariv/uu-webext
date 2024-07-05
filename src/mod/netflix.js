import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('netflix.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('clip', 'fromApp', /jb[a-z]*?/, 'netflixsource', 's', 't', 'tctx', 'trackId', 'trg', 'trkid', 'vlang')
];
