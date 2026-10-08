import {PREFIX} from '/literals.js';
import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('imdb.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE(PREFIX('pf_rd_'), 'ref', 'ref_', 'ref\\_', 'ref_hp_hp_e_2', 'rf')
];
