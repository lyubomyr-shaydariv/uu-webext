import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('oly_anon_id', 'oly_enc_id')
];
