import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('bilibili.com').EXCEPT('api.bilibili.com', 'space.bilibili.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('buvid', 'callback', 'from', 'from_source', 'is_story_h5', 'mid', 'msource', 'plat_id', 'refer_from', 'seid', 'share_from', 'share_medium', 'share_plat', 'share_session_id', 'share_source', 'share_tag', 'spm_id_from', 'timestamp', 'unique_k', 'up_id', 'vd_source'),
	RULE()
		.AT().DOMAIN('live.bilibili.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('broadcast_type', 'is_room_feed', 'session_id', 'visit_id'),
	RULE()
		.AT().DOMAIN('m.bilibili.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('bbid', 'ts')
];
