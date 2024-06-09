import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('bilibili.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('callback', 'spm_id_from'),
	RULE()
		.AT().DOMAIN('live.bilibili.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('broadcast_type', 'is_room_feed', 'session_id', 'visit_id'),
	RULE()
		.AT().DOMAIN('m.bilibili.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('bbid', 'ts')
];
