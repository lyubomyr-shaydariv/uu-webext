// at this point, assume the regExps array length is greater than or equal to 2
// TODO: replace this with something like `[...new Set(regExps, ...)]` once Set supports a compare fn
const __toUniqueRegExps = (regExps) => {
	const isSeen = new Map();
	for ( const regExp of regExps ) {
		isSeen.set(regExp.toString(), regExp);
	}
	return Array.from(isSeen.values());
};

// at this point, assume the regExps array length is greater than or equal to 2
const __groupRegExpsByFlags = (regExps) => {
	const groups = new Map();
	for ( const regExp of regExps ) {
		if ( !groups.has(regExp.flags) ) {
			groups.set(regExp.flags, [regExp]);
		} else {
			groups.get(regExp.flags).push(regExp);
		}
	}
	return groups;
};

const __orderCombinedRegExpsByFlags = (regExpsByFlags) => {
	const combinedRegExps = [];
	for ( const [flags, regExps] of regExpsByFlags.entries() ) {
		const combinedRegExp = new RegExp(regExps.map((regExp) => regExp.source).join('|'), flags);
		combinedRegExps.push([flags, combinedRegExp]);
	}
	// let's just assume the fewer flags the regexp is declared with, the cheaper it is
	combinedRegExps.sort((l, r) => l[0].length - r[0].length);
	return combinedRegExps.map((e) => e[1]);
};

const testAnyRegExpPredicate = (...regExps) => {
	if ( regExps.length === 0 ) {
		// no regexps, nothing to test against, therefore return false
		// or am i wrong and this should return true?
		return () => false;
	}
	if ( regExps.length === 1 ) {
		const [onlyRegExp] = regExps;
		return (s) => onlyRegExp.test(s);
	}
	const uniqueRegExps = __toUniqueRegExps(regExps);
	if ( uniqueRegExps.length === 1 ) {
		const [onlyRegExp] = uniqueRegExps;
		return (s) => onlyRegExp.test(s);
	}
	const combinedRegExps = __orderCombinedRegExpsByFlags(__groupRegExpsByFlags(uniqueRegExps));
	return (s) => {
		// assume the first regExp is cheapest, do linear search
		for ( const regExp of combinedRegExps ) {
			if ( regExp.test(s) ) {
				return true;
			}
		}
		return false;
	};
};

const p = testAnyRegExpPredicate(/[0-9]{10}/, /[0-9]{10}/i);
console.time('matchRegExps');
console.log(p('x939331933131bar'));
console.timeEnd('matchRegExps');
