import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('taobao.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('abbucket', 'abtest', 'acm', 'algo_expid', 'algo_pvid', 'ali_refid', 'ali_trackid', 'app', 'bftRwd', 'bftTag', 'cpp', 'impid', 'lygClk', 'mytmenu', 'ns', 'pos', 'price', 'pvid', 'scene', /^scm[_a-z-]*$/, 'share_crt_v', 'shareurl', 'short_name', 'sourceType', 'sp_tk', 'spm', 'suid', 'trackInfo', 'turing_bucket', '_u', 'un', 'utkn', 'utparam', 'ut_sk')
];
