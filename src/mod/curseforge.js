import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('curseforge.com').PATHNAME('/linkout')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('remoteUrl').FROM_URI_COMPONENT().TO_URL()
		.DO().REDIRECT()
];
