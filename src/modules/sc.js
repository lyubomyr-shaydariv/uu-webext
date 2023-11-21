import * as __ from '/rules.js';

export default [
	__.RULE.MUTATE_ENTRIES(
		__.JUST.EXCLUDING("sc_campaign", "sc_channel", "sc_content", "sc_country", "sc_geo", "sc_medium", "sc_outcome")
	)
];
