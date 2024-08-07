import {PREFIX} from '/literals.js';
import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('cj.dotomi.com').PATHNAME(PREFIX('/links-t/'))
		.FROM().PATHNAME()
		.APPLY().EXECUTE_REGEXP(/^\/links-t\/\d+\/\w+\/\w+\/\w+\/\w+\/(.*)/).GET_PROPERTY(1).TO_URL()
		.DO().REDIRECT()
];
