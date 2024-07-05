// TODO consider creating StringLiteral and RegExpLiteral
class AbstractLiteral {

	constructor() {
		if ( this.constructor === AbstractLiteral ) {
			throw new Error(`abstract class cannot be instantiated: ${this.constructor.name}`);
		}
	}

	key() {
		throw new Error('cannot invoke an abstract method');
	}

	matches() {
		throw new Error('cannot invoke an abstract method');
	}

	toString() {
		throw new Error('cannot invoke an abstract method');
	}

}

class AllLiteral
	extends AbstractLiteral {

	#literals;

	#strings;

	#prefixes;

	#regExps;

	constructor(...literals) {
		super();
		if ( !literals.every((e) => typeof e === 'string' || e instanceof String || e instanceof RegExp || e instanceof PrefixLiteral) ) {
			throw new Error(`illegal literals: ${literals}`);
		}
		const groups = groupLiterals(...literals);
		this.#literals = [...literals];
		this.#strings = groups.get(String);
		this.#prefixes = groups.get(PrefixLiteral);
		this.#regExps = groups.get(RegExp);
	}

	// returns an iterator in order not to modify the private array
	get literals() {
		return this.#literals[Symbol.iterator]();
	}

	key() {
		return Array.from(this.#literals).join('\x00');
	}

	matches(...values) {
		values = new Set(values);
		if ( this.#strings !== null ) {
			if ( !this.#strings.isSubsetOf(values) ) {
				return false;
			}
		}
		if ( this.#prefixes !== null ) {
			for ( const prefix of this.#prefixes ) {
				if ( !prefix.matches(...values) ) {
					return false;
				}
			}
		}
		if ( this.#regExps !== null ) {
nextRegExp:
			for ( const regExp of this.#regExps ) {
				for ( const value of values ) {
					if ( regExp.test(value) ) {
						continue nextRegExp;
					}
				}
				return false;
			}
		}
		return true;
	}

	toString() {
		return this.#literals.join();
	}

}

class PrefixLiteral
	extends AbstractLiteral {

	#prefix;

	constructor(prefix) {
		super();
		this.#prefix = prefix.toString();
	}

	key() {
		return this.#prefix;
	}

	matches(...values) {
		for ( const value of values ) {
			if ( value.startsWith(this.#prefix) ) {
				return true;
			}
		}
		return false;
	}

	toString() {
		return this.prefix;
	}

	get prefix() {
		return this.#prefix;
	}

}

const ALL = (...literals) => new AllLiteral(...literals);
const PREFIX = (prefix) => new PrefixLiteral(prefix);

const groupLiterals = (...literals) => {
	const uniqueStrings = new Map();
	const uniqueRegExps = new Map();
	const uniquePrefixes = new Map();
	const uniqueAlls = new Map();
	for ( const literal of literals ) {
		if ( typeof literal === 'string' || literal instanceof String ) {
			const key = literal.valueOf();
			uniqueStrings.set(key, {key,
literal});
		} else if ( literal instanceof RegExp ) {
			const key = literal.source;
			uniqueRegExps.set(key, {key,
literal});
		} else if ( literal instanceof PrefixLiteral ) {
			const key = literal.key();
			uniquePrefixes.set(key, {key,
literal});
		} else if ( literal instanceof AllLiteral ) {
			const key = literal.key();
			uniqueAlls.set(key, {key,
literal});
		} else {
			throw new Error(`illegal literal: ${literal}`);
		}
	}
	const map = new Map();
	map.set(String, uniqueStrings.size !== 0 ? new Set(Array.from(uniqueStrings.values()).map((e) => e.literal)) : null);
	map.set(RegExp, uniqueRegExps.size !== 0 ? new Set(Array.from(uniqueRegExps.values()).map((e) => e.literal)) : null);
	map.set(AllLiteral, uniqueAlls.size !== 0 ? new Set(Array.from(uniqueAlls.values()).map((e) => e.literal)) : null);
	map.set(PrefixLiteral, uniquePrefixes.size !== 0 ? new Set(Array.from(uniquePrefixes.values()).map((e) => e.literal)) : null);
	return map;
};

export {
	AllLiteral,
	ALL,
	PrefixLiteral,
	PREFIX,
	groupLiterals
};
