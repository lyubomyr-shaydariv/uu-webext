import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE.MUTATE_ENTRIES_AT(
	__.JUST.EXCLUDING("_from", "_trkparms", "_trksid", "amdata", "epid", "hash", "var"),
	__.AT.HOSTNAME_BY_REGEXP(/^(?:[^.]+\.)?ebay\.[^.]+$/)
));
