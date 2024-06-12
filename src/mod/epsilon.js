import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('cj.dotomi.com').PATHNAME(/^\/links-t\//)
		.FROM().PATHNAME()
		.APPLY().EXECUTE_REGEXP(/^\/links-t\/\d+\/\w+\/\w+\/\w+\/\w+_[0-9a-f]{24}\/(.*)/).GET_PROPERTY(1).TO_URL()
		.DO().REDIRECT()
];
