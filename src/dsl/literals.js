import { makeMultimap, makeSet, requireType, requireStrings } from '/util.js';
import { AbstractToken } from '/dsl/abstract.js';

class AbstractLiteral
	extends AbstractToken {

	constructor() {
		super();
		if ( this.constructor === AbstractLiteral ) {
			throw new Error(`abstract class cannot be instantiated: ${this.constructor.name}`);
		}
	}

}

class AbstractAtomLiteral
	extends AbstractLiteral {

	constructor() {
		super();
		if ( this.constructor === AbstractAtomLiteral ) {
			throw new Error(`abstract class cannot be instantiated: ${this.constructor.name}`);
		}
	}

}

class AbstractPrimitiveLiteral
	extends AbstractAtomLiteral {

	constructor() {
		super();
		if ( this.constructor === AbstractPrimitiveLiteral ) {
			throw new Error(`abstract class cannot be instantiated: ${this.constructor.name}`);
		}
	}

}

class StringLiteral
	extends AbstractPrimitiveLiteral {

	#uniqueStrings;

	constructor(...rawStrings) {
		requireStrings(...rawStrings);
		super();
		this.#uniqueStrings = new Set(rawStrings);
	}

	combine(...stringLiterals) {
		requireType(StringLiteral, ...stringLiterals);
		this.#uniqueStrings = new Set([...this.#uniqueStrings, ...stringLiterals.flatMap((e) => [...e.#uniqueStrings])]);
		return this;
	}

	matches(...values) {
		switch ( this.#uniqueStrings.size ) {
			case 0: {
				return false;
			}
			case 1: {
				const onlyString = this.#uniqueStrings.values().next().value;
				for ( const value of values ) {
					if ( value === onlyString ) {
						return true;
					}
				}
				return false;
			}
			default: {
				// TODO make valueSet and intersect it with stringSet?
				for ( const value of values ) {
					if ( this.#uniqueStrings.has(value) ) {
						return true;
					}
				}
				return false;
			}
		}
	}

	*filter(...values) {
		switch ( this.#uniqueStrings.size ) {
			case 0: {
				return;
			}
			case 1: {
				const onlyString = this.#uniqueStrings.values().next().value;
				for ( const value of values ) {
					if ( value === onlyString ) {
						yield value;
					}
				}
				break;
			}
			default: {
				for ( const value of values ) {
					if ( this.#uniqueStrings.has(value) ) {
						yield value;
					}
				}
				break;
			}
		}
	}

	toKey() {
		return [...this.#uniqueStrings].join('\n');
	}

	toString() {
		return [...this.#uniqueStrings].join();
	}

	toExpression(separator) {
		return [...this.#uniqueStrings].map((e) => JSON.stringify(e)).join(separator);
	}

}

class PrefixLiteral
	extends AbstractPrimitiveLiteral {

	#uniquePrefixes;

	constructor(...rawPrefixes) {
		requireStrings(...rawPrefixes);
		super();
		this.#uniquePrefixes = new Set(rawPrefixes);
	}

	combine(...prefixLiterals) {
		requireType(PrefixLiteral, ...prefixLiterals);
		this.#uniquePrefixes = new Set([...this.#uniquePrefixes, ...prefixLiterals.flatMap((e) => [...e.#uniquePrefixes])]);
		return this;
	}

	matches(...values) {
		switch ( this.#uniquePrefixes.size ) {
			case 0: {
				return false;
			}
			case 1: {
				const onlyPrefix = this.#uniquePrefixes.values().next().value;
				for ( const value of values ) {
					if ( value.startsWith(onlyPrefix) ) {
						return true;
					}
				}
				return false;
			}
			default: {
				for ( const prefix of this.#uniquePrefixes ) {
					for ( const value of values ) {
						if ( value.startsWith(prefix) ) {
							return true;
						}
					}
				}
				return false;
			}
		}
	}

	*filter(...values) {
		switch ( this.#uniquePrefixes.size ) {
			case 0: {
				return;
			}
			case 1: {
				const onlyPrefix = this.#uniquePrefixes.values().next().value;
				for ( const value of values ) {
					if ( value.startsWith(onlyPrefix) ) {
						yield value;
					}
				}
				break;
			}
			default: {
				for ( const value of values ) {
					for ( const prefix of this.#uniquePrefixes ) {
						if ( value.startsWith(prefix) ) {
							yield value;
							break;
						}
					}
				}
				break;
			}
		}
	}

	toKey() {
		return [...this.#uniquePrefixes].join('\n');
	}

	toString() {
		return [...this.#uniquePrefixes].join();
	}

	toExpression(separator) {
		return [...this.#uniquePrefixes].map((e) => `^${JSON.stringify(e)}`).join(separator);
	}

}

class RegExpLiteral
	extends AbstractPrimitiveLiteral {

	#uniqueRegExps; // TODO consider moving to super-regeexp

	constructor(...rawRegExps) {
		requireType(RegExp, ...rawRegExps);
		super();
		this.#uniqueRegExps = makeSet((e) => e.toString(), ...rawRegExps);
	}

	combine(...regExpLiterals) {
		requireType(RegExpLiteral, ...regExpLiterals);
		this.#uniqueRegExps = makeSet((e) => e.toString(), ...regExpLiterals.flatMap((e) => [...e.#uniqueRegExps]));
		return this;
	}

	matches(...values) {
		switch ( this.#uniqueRegExps.size ) {
			case 0: {
				return false;
			}
			case 1: {
				const onlyRegExp = this.#uniqueRegExps.values().next().value;
				for ( const value of values ) {
					if ( onlyRegExp.test(value) ) {
						return true;
					}
				}
				return false;
			}
			default: {
				for ( const regExp of this.#uniqueRegExps ) {
					for ( const value of values ) {
						if ( regExp.test(value) ) {
							return true;
						}
					}
				}
				return false;
			}
		}
	}

	*filter(...values) {
		switch ( this.#uniqueRegExps.size ) {
			case 0: {
				return [];
			}
			case 1: {
				const onlyRegExp = this.#uniqueRegExps.values().next().value;
				for ( const value of values ) {
					if ( onlyRegExp.test(value) ) {
						yield value;
					}
				}
				break;
			}
			default: {
				for ( const value of values ) {
					for ( const regExp of this.#uniqueRegExps ) {
						if ( regExp.test(value) ) {
							yield value;
							break;
						}
					}
				}
				break;
			}
		}
	}

	toKey() {
		return [...this.#uniqueRegExps].map((e) => e.toString()).join('\n');
	}

	toString() {
		return [...this.#uniqueRegExps].map((e) => e.toString()).join();
	}

	toExpression(separator) {
		return [...this.#uniqueRegExps].map((e) => e.toString()).join(separator);
	}

}

class SubsetLiteral
	extends AbstractAtomLiteral{

	#primitiveLiterals; // this is an array assuming combineLiterals will make a "set" itself

	constructor(...primitiveLiterals) {
		super();
		requireType(AbstractPrimitiveLiteral, ...primitiveLiterals);
		this.#primitiveLiterals = combineLiterals(...primitiveLiterals);
	}

	combine(...subsetLiterals) {
		requireType(SubsetLiteral, ...subsetLiterals);
		const primitiveLiterals = combineLiterals(...(subsetLiterals.flatMap((e) => e.#primitiveLiterals)));
		requireType(AbstractPrimitiveLiteral, ...primitiveLiterals);
		this.#primitiveLiterals = primitiveLiterals;
	}

	matches(...values) {
		switch ( this.#primitiveLiterals.length ) {
			case 0: {
				return true;
			}
			case 1: {
				const primitiveLiteral = this.#primitiveLiterals[0];
				return (...values) => {
					for ( const value of values ) {
						if ( !primitiveLiteral.matches(value) ) {
							return false;
						}
					}
					return true;
				};
			}
			default: {
				for ( const value of values ) {
					for ( const primitiveLiteral of this.#primitiveLiterals ) {
						if ( !primitiveLiteral.matches(value) ) {
							return false;
						}
					}
				}
				return true;
			}
		}
	}

	// eslint-disable-next-line no-unused-vars, require-yield
	*filter(...values) {
		throw new Error('not yet implemented');
	}

	toKey() {
		return this.#primitiveLiterals.map((e) => e.toExpression()).join('\n');
	}

	toString() {
		return this.#primitiveLiterals.map((e) => e.toExpression()).join();
	}

	toExpression() {
		return this.#primitiveLiterals.map((e) => e.toExpression('&')).join('&');
	}

	getPrimitiveLiterals() {
		return this.#primitiveLiterals.values();
	}

}

const ALL = (...rawLiterals) => new SubsetLiteral(...parseRawLiterals(...rawLiterals));
const PREFIX = (...rawPrefixes) => new PrefixLiteral(...rawPrefixes);
const REG_EXP = (...rawRegExps) => new RegExpLiteral(...rawRegExps);
const STRING = (...rawStrings) => new StringLiteral(...rawStrings);

const ____coerceAndOptimizeLiterals = (...literals) => {
	const rawStrings = [];
	const stringLiterals = [];
	const prefixLiterals = [];
	const rawRegExps = [];
	const regExpLiterals = [];
	const subsetLiterals = [];
	for ( const literal of literals ) {
		if ( typeof(literal) === 'string' || literal instanceof String ) {
			rawStrings.push(literal);
		} else if ( literal instanceof StringLiteral ) {
			stringLiterals.push(literal);
		} else if ( literal instanceof PrefixLiteral ) {
			prefixLiterals.push(literal);
		} else if ( literal instanceof RegExp ) {
			rawRegExps.push(literal);
		} else if ( literal instanceof RegExpLiteral ) {
			regExpLiterals.push(literal);
		} else if ( literal instanceof SubsetLiteral ) {
			subsetLiterals.push(literal);
		} else {
			throw new Error(`illegal literal: ${literal} of type ${literal?.constructor}`);
		}
	}
	const map = new Map();
	if ( rawStrings.length !== 0 || stringLiterals.length !== 0 ) {
		map.set(StringLiteral, STRING(...rawStrings).combine(...stringLiterals));
	}
	if ( prefixLiterals.length !== 0 ) {
		map.set(PrefixLiteral, PREFIX().combine(...prefixLiterals));
	}
	if ( rawRegExps.length !== 0 || regExpLiterals.length !== 0 ) {
		map.set(RegExpLiteral, REG_EXP(...rawRegExps).combine(...regExpLiterals));
	}
	if ( subsetLiterals.length !== 0 ) {
		map.set(SubsetLiteral, new SubsetLiteral().combine(...subsetLiterals));
	}
	return map;
};

const parseRawLiterals = (...rawLiterals) => {
	return rawLiterals
		.map((e) => {
			if ( typeof(e) === 'string' || e instanceof String ) {
				return STRING(e);
			}
			if ( e instanceof RegExp ) {
				return REG_EXP(e);
			}
			if ( e instanceof PrefixLiteral || e instanceof SubsetLiteral ) {
				return e;
			}
			throw new Error(`cannot parse raw literal: ${e} of type ${e?.constructor.name}`);
		});
};

const combineLiterals = (...literals) => {
	requireType(AbstractLiteral, ...literals);
	const index = makeMultimap((e) => e.constructor, ...literals);
	const combinedStringLiteral = index.has(StringLiteral) ? new StringLiteral().combine(...index.get(StringLiteral)) : undefined;
	const combinedPrefixLiteral = index.has(PrefixLiteral) ? new PrefixLiteral().combine(...index.get(PrefixLiteral)) : undefined;
	const combinedRegExpLiteral = index.has(RegExpLiteral) ? new RegExpLiteral().combine(...index.get(RegExpLiteral)) : undefined;
	const combinedSubsetLiteral = index.has(SubsetLiteral) ? new SubsetLiteral().combine(...index.get(SubsetLiteral)) : undefined;
	return [
		combinedStringLiteral,
		combinedPrefixLiteral,
		combinedRegExpLiteral,
		combinedSubsetLiteral
	]
		.filter((e) => e !== undefined);
};

const compilePredicate = (...literals) => {
	const combinedLiterals = combineLiterals(...literals);
	switch ( combinedLiterals.length ) {
		case 0: {
			// eslint-disable-next-line no-unused-vars
			return (...values) => false;
		}
		case 1: {
			const onlyLiteral = combinedLiterals[0];
			return (...values) => onlyLiteral.matches(...values);
		}
		default: {
			return (...values) => {
				for ( const literal of combinedLiterals ) {
					if ( literal.matches(...values) ) {
						return true;
					}
				}
				return false;
			};
		}
	}
};

const compileFilter = (...literals) => {
	const combinedLiterals = combineLiterals(...literals);
	switch ( combinedLiterals.length ) {
		case 0: {
			// eslint-disable-next-line no-unused-vars
			return (...values) => [].values();
		}
		case 1: {
			const onlyLiteral = combinedLiterals[0];
			// eslint-disable-next-line no-inner-declarations
			function *filter(...values) {
				for ( const value of values ) {
					for ( const filteredValue of onlyLiteral.filter(value) ) {
						yield filteredValue;
					}
				}
			}
			return (...values) => filter(...values);
		}
		default: {
			// TODO optimize with AbstractLiteral.filter
			// eslint-disable-next-line no-inner-declarations
			function *filter(...values) {
				for ( const literal of combinedLiterals ) {
					for ( const value of values ) {
						if ( literal.matches(value) ) {
							yield value;
						}
					}
				}
			}
			return (...values) => filter(...values);
		}
	}
};

export {
	AbstractLiteral,
	AbstractPrimitiveLiteral,
	ALL,
	SubsetLiteral,
	compileFilter,
	compilePredicate,
	____coerceAndOptimizeLiterals as coerceAndOptimizeLiterals,
	parseRawLiterals,
	PREFIX,
	PrefixLiteral,
	REG_EXP,
	RegExpLiteral,
	STRING,
	StringLiteral
};
