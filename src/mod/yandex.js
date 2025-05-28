import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('yadclid', 'yadordid', 'yclid', 'ymclid', 'ysclid', '_openstat'),
	RULE()
		.AT().HOSTNAME(/^(?:[^.]+\.)?yandex\.[^.]+$/)
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('clid', 'did', 'from', 'lr', 'mlid', 'msid', 'persistent_id', 'redircnt', 'source-serpid', 'stid', 'suggest_reqid', 'utm-term')
];
