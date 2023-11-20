import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE.MUTATE_ENTRIES_AT(
	__.JUST.EXCLUDING("af", "aff_request_id", "algo_expid", "algo_pvid", "btsid", "cv", "dp", "expid", "gps-id", "initiative_id", "mall_affr", "scm_id", "sk", "spm", "terminal_id", "ws_ab_test"),
	__.AT.HOSTNAME_BY_REGEXP(/^(?:[^.]+\.)?aliexpress\.[^.]+$/)
));

registry.addRule(__.RULE.MUTATE_ENTRIES(
	__.JUST.EXCLUDING("aff_platform", "aff_trace_key")
));
