import { PREFIX } from '/dsl/literals.js';
import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE(PREFIX('utm_'))
];
