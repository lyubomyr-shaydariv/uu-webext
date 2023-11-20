import * as registry from '/registry.js';
import * as __ from '/rules.js';

// isn't it too wide?
if ( false ) {
	registry.addRule(__.RULE.MUTATE_ENTRIES(
		__.JUST.EXCLUDING("Campaign")
	));
}
