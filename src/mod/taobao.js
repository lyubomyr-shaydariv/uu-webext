import { AT, JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES_AT(
		JUST.EXCLUDING('abbucket', 'abtest', 'acm', 'algo_expid', 'algo_pvid', 'ali_refid', 'ali_trackid', 'app', 'bftRwd', 'bftTag', 'cpp', 'impid', 'lygClk', 'mytmenu', 'ns', 'pos', 'price', 'pvid', 'scene', /^scm[_a-z-]*$/, 'share_crt_v', 'shareurl', 'short_name', 'sourceType', 'spm', 'sp_tk', 'suid', 'trackInfo', 'turing_bucket', '_u', 'un', 'utkn', 'utparam', 'ut_sk'),
		AT.DOMAIN('taobao.com')
	)
];
