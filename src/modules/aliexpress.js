import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AT_HOSTNAME_BY_REGEXP(/^(?:[^.]+\.)?aliexpress\.[^.]+$/);
	const excluding = __.EXCLUDING("af", "aff_request_id", "algo_expid", "algo_pvid", "btsid", "cv", "dp", "expid", "gps-id", "initiative_id", "mall_affr", "scm_id", "sk", "spm", "terminal_id", "ws_ab_test");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				__.MUTATE_ENTRIES(url, excluding);
			}
		}
	});
}
{
	const excluding = __.EXCLUDING("aff_platform", "aff_trace_key");
	registry.addRule({
		redirect: (url) => {
			__.MUTATE_ENTRIES(url, excluding);
		}
	});
}
