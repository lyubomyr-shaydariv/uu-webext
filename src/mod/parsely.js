import { JUST, RULE } from '/rules.js';

// eslint-disable-next-line no-constant-condition
if ( false ) {
	// isn't it too wide?
	RULE.MUTATE_ENTRIES(
		JUST.EXCLUDING('Campaign')
	);
}

export default [
];
