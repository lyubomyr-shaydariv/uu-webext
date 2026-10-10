import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('nytimes.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('referringSource', 'impression_id', 'sgrp', 'smid', 'ugrp'),
	RULE()
		.AT().DOMAIN('cooking.nytimes.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('action', 'algo', 'imp_id', 'module', 'pgType', 'region', 'req_id', 'smid', 'surface', 'variant')
];
