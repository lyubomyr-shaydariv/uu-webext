import {PREFIX} from '/literals.js';
import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('imdb.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE(PREFIX('pf_rd_'), 'ref_')
];
