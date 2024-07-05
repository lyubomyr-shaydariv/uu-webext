import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('curseforge.com').PATHNAME('/linkout')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('remoteUrl').FROM_URI_COMPONENT().TO_URL()
		.DO().REDIRECT()
];
