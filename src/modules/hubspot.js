import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE_MUTATE_ENTRIES(
	__.EXCLUDING("_hsenc", "_hsmi", "__hsfp", "__hssc", "__hstc", "hsCtaTracking")
));
