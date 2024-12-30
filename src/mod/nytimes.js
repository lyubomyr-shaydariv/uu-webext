import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('nytimes.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('smid', 'ugrp')
];
