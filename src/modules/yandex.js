import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE.MUTATE_ENTRIES_AT(
	__.JUST.EXCLUDING("lr", "redircnt"),
	__.AT.HOSTNAME_BY_REGEXP(/^(?:[^.]+\.)?yandex\.[^.]+$/)
));

registry.addRule(__.RULE.MUTATE_ENTRIES(
	__.JUST.EXCLUDING("yclid", "_openstat")
));
