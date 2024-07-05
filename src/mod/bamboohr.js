import {PREFIX} from '/literals.js';
import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('bamboohr.com').PATHNAME(PREFIX('/careers/'))
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('source')
];
