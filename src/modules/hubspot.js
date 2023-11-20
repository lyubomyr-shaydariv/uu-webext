import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE.MUTATE_ENTRIES(
	__.JUST.EXCLUDING("_hsenc", "_hsmi", "__hsfp", "__hssc", "__hstc", "hsCtaTracking")
));
