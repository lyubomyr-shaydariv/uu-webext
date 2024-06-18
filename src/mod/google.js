import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('_ga', 'adgroupid', 'dclid', 'gad_source', /^ga_.*/, 'gbraid', 'gclid', 'gclsrc', '_gl', 'gs_l', 'srsltid', 'usqp', 'wbraid'),
	RULE()
		.AT().DOMAIN('google.com').PATHNAME('/search')
		.FROM().QUERY_ENTRIES()
		.DO().RETAIN('q', 'tbm', 'udm'),
	RULE()
		.AT().DOMAIN('support.google.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('rd', 'ref_topic', 'sjid', 'visit_id'),
	RULE()
		.AT().HOSTNAME(/^(?:[^.]+\.)*google(?:\.[^.]+)+$/)
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('ei', 'gs_gbg', 'gs_lcp', 'gs_mss', 'gs_rn', 'gws_rd', 'sei', 'ved'),
	RULE()
		.AT().DOMAIN('google.com').PATHNAME('/url/')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('q', 'url').TO_URL()
		.DO().REDIRECT(),
	RULE()
		.AT().DOMAIN('google.com').PATHNAME('/sorry/index')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('continue').TO_URL()
		.DO().REDIRECT(),
	RULE()
		.AT().DOMAIN('google.com').PATHNAME(/^\/amp\/s\//)
		.FROM().PATHNAME()
		.APPLY().SUBSTRING(7).TO_URL()
		.DO().REDIRECT(),
	RULE()
		.AT().DOMAIN('googleadservices.com').PATHNAME('/pagead/aclk')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('adurl').TO_URL()
		.DO().REDIRECT(),
	RULE()
		.AT().DOMAIN('clickserve.dartsearch.net').PATHNAME('/link/click')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('ds_dest_url').TO_URL()
		.DO().REDIRECT()
];
