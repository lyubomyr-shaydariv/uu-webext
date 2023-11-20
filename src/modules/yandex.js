import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE_MUTATE_ENTRIES_AT(
	__.EXCLUDING("lr", "redircnt"),
	__.AT_HOSTNAME_BY_REGEXP(/^(?:[^.]+\.)?yandex\.[^.]+$/)
));

registry.addRule(__.RULE_MUTATE_ENTRIES(
	__.EXCLUDING("yclid", "_openstat")
));
