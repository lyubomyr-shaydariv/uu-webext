import {RULE} from '/rules.js';

export default [
	// static parameters
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('ir_adid', 'ir_campaignid', 'irclickid', 'ir_partnerid', 'irgwc', 'param1', 'param2', 'param3', 'param4', 'partnercustid', 'prodsku', 'trafcat', 'trafsrc', 'SharedId', 'subId1', 'subId2', 'subId3'/* , 'u' */)
];
