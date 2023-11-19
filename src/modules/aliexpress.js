import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AT_HOSTNAME_BY_REGEXP(/^(?:[^.]+\.)?aliexpress\.[^.]+$/);
	const filter = __.EXCLUDE("af", "aff_request_id", "algo_expid", "algo_pvid", "btsid", "cv", "dp", "expid", "gps-id", "initiative_id", "mall_affr", "scm_id", "sk", "spm", "terminal_id", "ws_ab_test");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				__.FILTER_ENTRIES(url, filter);
			}
		}
	});
}
{
	const filter = __.EXCLUDE("aff_platform", "aff_trace_key");
	registry.addRule({
		redirect: (url) => {
			__.FILTER_ENTRIES(url, filter);
		}
	});
}
