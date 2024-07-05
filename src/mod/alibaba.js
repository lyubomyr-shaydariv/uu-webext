import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('spm', 'spmA', 'spmB', 'spmC', 'spmD', 'spmE'),
	RULE()
		.AT().HOSTNAME('arms-retcode.aliyuncs.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('_v', 'api', 'begin', 'behavior', 'c2', 'c3', 'code', 'ct', 'dl', 'enableLinkTrace', 'enableSPA', 'environment', 'flag', 'msg', 'page', 'pid', 'post_res', 'pv_id', 'release', 'sample', 'sampling', 'sr', 'success', 'tag', 'traceId', 'uid', 'vp')
];
