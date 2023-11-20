import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE.MUTATE_ENTRIES_AT(
	__.JUST.EXCLUDING("context", "si"),
	__.AT.HOSTNAME("open.spotify.com")
));
