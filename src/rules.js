import { Prefix } from './literals.js';
import { areStrictlyEqual } from '/util.js';

const literalize = (...es) => {
	const literals = new Array();
	for ( const e of es ) {
		if ( typeof(e) === 'string' || e instanceof String ) {
			literals.push(JSON.stringify(e));
		} else if ( e instanceof RegExp ) {
			literals.push(e);
		} else if ( e instanceof Prefix ) {
			literals.push(`^${JSON.stringify(e.toString())}`);
		} else if ( typeof(e) === 'number' || e instanceof Number ) {
			literals.push(e);
		} else {
			throw new Error(`cannot literalize ${e}`);
		}
	}
	return literals.join(' ');
};

const createMatches = (...keys) => {
	let strings = null;
	let prefixes = null;
	let regExps = null;
	for ( const key of keys ) {
		if ( typeof(key) === 'string' || key instanceof String ) {
			if ( strings === null ) {
				strings = new Set();
			}
			strings.add(key);
		} else if ( key instanceof Prefix ) {
			if ( prefixes === null ) {
				prefixes = [];
			}
			prefixes.push(key);
		} else if ( key instanceof RegExp ) {
			if ( regExps === null ) {
				regExps = [];
			}
			regExps.push(key);
		} else {
			throw new Error(`cannot create matcher for ${key}`);
		}
	}
	return (key) => {
		if ( strings !== null && strings.has(key) ) {
			return true;
		}
		if ( prefixes !== null ) {
			for ( const prefix of prefixes ) {
				if ( prefix.matches(key) ) {
					return true;
				}
			}
		}
		if ( regExps !== null ) {
			for ( const regExp of regExps ) {
				if  ( regExp.test(key) ) {
					return true;
				}
			}
		}
		return false;
	};
};

const createUrlMatchesByTrie = (getSegmentsFromElement, getSegmentsFromUrl, ...elements) => {
	const trie = {};
	for ( const element of elements ) {
		if ( typeof(element) === 'string' || element instanceof String ) {
			const segments = getSegmentsFromElement(element);
			let node = trie;
			for ( let i = segments.length - 1; i >= 0; i-- ) {
				const segment = segments[i];
				if ( segment in node ) {
					node = node[segment];
				} else {
					node = node[segment] = {};
				}
			}
		} else {
			throw new Error(`cannot create domain matcher for ${element}`);
		}
	}
	return (url) => {
		const segments = getSegmentsFromUrl(url);
		let node = trie;
		for ( let i = segments.length - 1; i >= 0 && node !== undefined; i-- ) {
			const segment = segments[i];
			if ( !(segment in node) && Object.keys(node).length > 0 ) {
				return false;
			}
			node = node[segment];
		}
		return true;
	};
};

//--------------------------------------------------------------------------------------------------
// DO - actions
//--------------------------------------------------------------------------------------------------

// TODO simplify the Object.defineProperties stuff and make it cover all rule clauses
const __DO__ASSIGN = (ctx, ...values) => {
	ctx.source += ` ASSIGN ${literalize(...values)}`;
	return Object.defineProperties(
		(url) => {
			if ( !ctx.at(url) ) {
				return false;
			}
			const currentValue = ctx.getValue(url);
			if ( areStrictlyEqual(values, Array.isArray(currentValue) ? currentValue : [currentValue]) ) {
				return false;
			}
			ctx.setValue(url, ...values);
			return true;
		},
		{
			name: {
				value: ctx.name
			},
			source: {
				value: ctx.source
			}
		}
	);
};

// TODO simplify the Object.defineProperties stuff and make it cover all rule clauses
const __DO__REDIRECT = (ctx) => {
	ctx.source += ' REDIRECT';
	return Object.defineProperties(
		(url) => {
			if ( !ctx.at(url) ) {
				return false;
			}
			url = ctx.apply(url);
			if ( url === undefined ) {
				return false;
			}
			return url;
		},
		{
			name: {
				value: ctx.name
			},
			source: {
				value: ctx.source
			}
		}
	);
};

// TODO simplify the Object.defineProperties stuff and make it cover all rule clauses
const __DO__REMOVE = (ctx, ...keys) => {
	ctx.source += ` REMOVE ${literalize(...keys)}`;
	const matches = createMatches(...keys);
	return Object.defineProperties(
		(url) => {
			if ( !ctx.at(url) ) {
				return false;
			}
			const keysCtx = ctx.createKeysContext(url);
			let keysToRemove = null;
			for ( const entryKey of keysCtx.getEntryKeys() ) {
				if ( matches(entryKey) ) {
					if ( keysToRemove === null ) {
						keysToRemove = [];
					}
					keysToRemove.push(entryKey);
				}
			}
			if ( keysToRemove === null ) {
				return false;
			}
			keysCtx.removeKeys(...keysToRemove);
			return true;
		},
		{
			name: {
				value: ctx.name
			},
			source: {
				value: ctx.source
			}
		}
	);
};

// TODO simplify the Object.defineProperties stuff and make it cover all rule clauses
const __DO__REMOVE_ALL = (ctx) => {
	ctx.source += ' REMOVE ALL';
	return Object.defineProperties(
		(url) => {
			if ( !ctx.at(url) ) {
				return false;
			}
			const keysCtx = ctx.createKeysContext(url);
			const keysToRemove = new Set(keysCtx.getEntryKeys());
			if ( keysToRemove.size === 0 ) {
				return false;
			}
			keysCtx.removeKeys(...keysToRemove);
			return true;
		},
		{
			name: {
				value: ctx.name
			},
			source: {
				value: ctx.source
			}
		}
	);
};

// TODO simplify the Object.defineProperties stuff and make it cover all rule clauses
const __DO__RETAIN = (ctx, ...keys) => {
	ctx.source += ` RETAIN ${literalize(...keys)}`;
	const matches = createMatches(...keys);
	return Object.defineProperties(
		(url) => {
			if ( !ctx.at(url) ) {
				return false;
			}
			const keysCtx = ctx.createKeysContext(url);
			let keysToRemove = null;
			for ( const entryKey of keysCtx.getEntryKeys() ) {
				if ( !matches(entryKey) ) {
					if ( keysToRemove === null ) {
						keysToRemove = [];
					}
					keysToRemove.push(entryKey);
				}
			}
			if ( keysToRemove === null ) {
				return false;
			}
			keysCtx.removeKeys(...keysToRemove);
			return true;
		},
		{
			name: {
				value: ctx.name
			},
			source: {
				value: ctx.source
			}
		}
	);
};

const DO = (ctx) => {
	ctx.source += ' DO';
	return {
		ASSIGN: (...values) => __DO__ASSIGN(ctx, ...values),
		REDIRECT: () => __DO__REDIRECT(ctx),
		REMOVE: (...keys) => __DO__REMOVE(ctx, ...keys),
		REMOVE_ALL: () => __DO__REMOVE_ALL(ctx),
		RETAIN: (...keys) => __DO__RETAIN(ctx, ...keys),
	};
};

//--------------------------------------------------------------------------------------------------
// APPLY - functions
//--------------------------------------------------------------------------------------------------

const __F__EXECUTE_REGEXP = (ctx, regExp) => {
	ctx.source += ` EXECUTE REGEXP ${literalize(regExp)}`;
	ctx.__apply_functions.push((arg) => regExp.exec(arg));
	return APPLY(ctx);
};

const __F__FROM_BASE64 = (ctx) => {
	ctx.source += ' FROM BASE64';
	ctx.__apply_functions.push((arg) => atob(arg));
	return APPLY(ctx);
};

const __F__FROM_JSON = (ctx) => {
	ctx.source += ' FROM JSON';
	ctx.__apply_functions.push((arg) => JSON.parse(arg));
	return APPLY(ctx);
};

const __F__FROM_URI_COMPONENT = (ctx) => {
	ctx.source += ' FROM URI COMPONENT';
	ctx.__apply_functions.push((arg) => decodeURIComponent(arg));
	return APPLY(ctx);
};

const __F__GET_PROPERTY = (ctx, ...keys) => {
	ctx.source += ` GET PROPERTY ${literalize(...keys)}`;
	switch ( keys.length ) {
		case 0:
			// do nothing
			break;
		case 1: {
			const key = keys[0];
			ctx.__apply_functions.push((arg) => {
				if ( arg === null ) {
					return null;
				}
				if ( arg === undefined ) {
					return undefined;
				}
				if ( typeof(arg.get) === 'function' ) {
					return arg.get(key);
				}
				return arg[key];
			});
			break;
		}
		default: {
			ctx.__apply_functions.push((arg) => {
				if ( arg === null ) {
					return null;
				}
				if ( arg === undefined ) {
					return undefined;
				}
				for ( const key of keys ) {
					let value;
					if ( typeof(arg.get) === 'function' ) {
						value = arg.get(key);
					} else {
						value = arg[key];
					}
					if ( value === null || value === undefined ) {
						continue;
					}
					return value;
				}
				return undefined;
			});
			break;
		}
	}
	return APPLY(ctx);
};

const __F__REPLACE_STRING = (ctx, pattern, replacement) => {
	ctx.source += ` REPLACE STRING ${literalize(pattern)} ${literalize(replacement)}`;
	ctx.__apply_functions.push((arg) => {
		if ( arg === null ) {
			return null;
		}
		return arg.replace(pattern, replacement);
	});
	return APPLY(ctx);
};

const __F__SUBSTRING = (ctx, from, to) => {
	if ( to === undefined ) {
		ctx.source += ` SUBSTRING ${literalize(from)}`;
		ctx.__apply_functions.push((arg) => {
			if ( arg === null) {
				return null;
			}
			return arg.substring(from);
		});
	} else {
		ctx.source += ` SUBSTRING ${literalize(from)} ${literalize(to)}`;
		ctx.__apply_functions.push((arg) => {
			if ( arg === null) {
				return null;
			}
			return arg.substring(from, to);
		});
	}
	return APPLY(ctx);
};

const __F__TO_URL = (ctx) => {
	ctx.source += ' TO URL';
	ctx.__apply_functions.push((arg) => {
		if ( arg === null ) {
			return null;
		}
		return new URL(arg);
	});
	return APPLY(ctx);
};

const APPLY = (ctx) => {
	if ( ctx.__apply_isInitialized !== true ) {
		ctx.source += ' APPLY';
		ctx.__apply_functions = [];
		ctx.__apply_isInitialized = true;
	}
	ctx.apply = (url) => {
		let arg = ctx.getValue(url);
		try {
			for ( const f of ctx.__apply_functions ) {
				arg = f(arg);
			}
		} catch ( err ) {
			console.error('error evaluating the APPLY pipeline', err);
		}
		return arg;
	};
	return {
		EXECUTE_REGEXP: (regExp) => __F__EXECUTE_REGEXP(ctx, regExp),
		FROM_BASE64: () => __F__FROM_BASE64(ctx),
		FROM_JSON: () => __F__FROM_JSON(ctx),
		FROM_URI_COMPONENT: () => __F__FROM_URI_COMPONENT(ctx),
		GET_PROPERTY: (...keys) => __F__GET_PROPERTY(ctx, ...keys),
		REPLACE_STRING: (pattern, replacement) => __F__REPLACE_STRING(ctx, pattern, replacement),
		SUBSTRING: (from, to) => __F__SUBSTRING(ctx, from, to),
		TO_URL: () => __F__TO_URL(ctx),
		DO: () => DO(ctx)
	};
};

//--------------------------------------------------------------------------------------------------
// FROM - component selectors
//--------------------------------------------------------------------------------------------------

const PATH_DELIMITER_REGEXP = /\//;

const __FROM__PATHNAME = (ctx) => {
	ctx.source += ' PATHNAME';
	ctx.getValue = (url) => {
		const pathname = new String(url.pathname); // now it's an object, so the `get` function cab be mixed in
		pathname.get = (index) => pathname.substring(1).split(PATH_DELIMITER_REGEXP)[index];
		return pathname;
	};
	ctx.setValue = (url, value) => {
		url.pathname = value;
	};
	return {
		DO: () => DO(ctx),
		APPLY: () => APPLY(ctx)
	};
};

const __FROM__QUERY = (ctx) => {
	ctx.source += ' QUERY';
	ctx.getValue = (url) => {
		const query = new String(url.search); // now it's an object, so the `get` function cab be mixed in
		query.get = (/*index*/) => query;
		return query;
	};
	ctx.setValue = (url, value) => {
		url.search = value;
	};
	return {
		DO: () => DO(ctx),
		APPLY: () => APPLY(ctx)
	};
};

const DEFAULT_PAIR_DELIMITER = '&';
const DEFAULT_ENTRY_DELIMITER = '=';

const __FROM__QUERY_ENTRIES = (ctx, pairDelimiter,  entryDelimiter) => {
	pairDelimiter = pairDelimiter || DEFAULT_PAIR_DELIMITER;
	entryDelimiter = entryDelimiter || DEFAULT_ENTRY_DELIMITER;
	if ( pairDelimiter === DEFAULT_PAIR_DELIMITER && entryDelimiter === DEFAULT_ENTRY_DELIMITER ) {
		ctx.source += ' QUERY ENTRIES';
		ctx.createKeysContext = (url) => {
			const searchParams = url.searchParams;
			return {
				getEntryKeys: () => searchParams.keys(),
				removeKeys: (...keys) => {
					for ( const key of keys ) {
						searchParams.delete(key);
					}
				}
			};
		};
	} else {
		ctx.source += ` QUERY ENTRIES BY ${literalize(pairDelimiter)} AND ${literalize(entryDelimiter)}`;
		ctx.createKeysContext = (url) => {
			throw new Error(`cannot parse ${url.search} pair-delimited with '${pairDelimiter}' and entry-delimited with '${entryDelimiter}'`); // TODO
		};
	}
	ctx.getValue = (url) => url.searchParams;
	ctx.setValue = (url, ...entries) => {
		url.searchParams = new URLSearchParams(/*...*/entries);
	};
	return {
		DO: () => DO(ctx),
		APPLY: () => APPLY(ctx)
	};
};

const FROM = (ctx) => {
	ctx.source += ' FROM';
	return {
		PATHNAME: () => __FROM__PATHNAME(ctx),
		QUERY: () => __FROM__QUERY(ctx),
		QUERY_ENTRIES: () => __FROM__QUERY_ENTRIES(ctx)
	};
};

//--------------------------------------------------------------------------------------------------
// AT ~ URL matchers
//--------------------------------------------------------------------------------------------------

const __AT__ANYWHERE = (ctx) => {
	ctx.source += ' ANYWHERE';
	ctx.at = () => true;
	return {
		FROM: () => FROM(ctx)
	};
};

const __AT__DOMAIN = (ctx, ...domains) => {
	ctx.source += ` DOMAIN ${literalize(...domains)}`;
	const p = createUrlMatchesByTrie((element) => element.split('.'), (url) => url.hostname.split('.'), ...domains);
	ctx.__at_predicates.push((url) => p(url));
	return {
		AT: () => AT(ctx),
		EXCEPT: (...domains) => __AT_DOMAIN__EXCEPT(ctx, ...domains),
		PATHNAME: (...pathnames) => __AT__PATHNAME(ctx, ...pathnames),
		QUERY_ENTRIES_HAVING_ALL_OF: (...keys) => __AT__QUERY_ENTRIES_HAVING_ALL_OF(ctx, ...keys),
		QUERY_ENTRIES_HAVING_ANY_OF: (...keys) => __AT__QUERY_ENTRIES_HAVING_ANY_OF(ctx, ...keys),
		FROM: () => FROM(ctx)
	};
};

const __AT_DOMAIN__EXCEPT = (ctx, ...domains) => {
	ctx.source += ` EXCEPT ${literalize(...domains)}`;
	const p = createUrlMatchesByTrie((element) => element.split('.'), (url) => url.hostname.split('.'), ...domains);
	ctx.__at_predicates.push((url) => !p(url));
	return {
		AT: () => AT(ctx),
		PATHNAME: (...pathnames) => __AT__PATHNAME(ctx, ...pathnames),
		QUERY_ENTRIES_HAVING_ALL_OF: (...keys) => __AT__QUERY_ENTRIES_HAVING_ALL_OF(ctx, ...keys),
		QUERY_ENTRIES_HAVING_ANY_OF: (...keys) => __AT__QUERY_ENTRIES_HAVING_ANY_OF(ctx, ...keys),
		FROM: () => FROM(ctx)
	};
};

const __AT__HOSTNAME = (ctx, ...hostnames) => {
	ctx.source += ` HOSTNAME ${literalize(...hostnames)}`;
	const p = createMatches(...hostnames);
	ctx.__at_predicates.push((url) => p(url.hostname));
	return {
		AT: () => AT(ctx),
		PATHNAME: (...pathnames) => __AT__PATHNAME(ctx, ...pathnames),
		QUERY_ENTRIES_HAVING_ALL_OF: (...keys) => __AT__QUERY_ENTRIES_HAVING_ALL_OF(ctx, ...keys),
		QUERY_ENTRIES_HAVING_ANY_OF: (...keys) => __AT__QUERY_ENTRIES_HAVING_ANY_OF(ctx, ...keys),
		FROM: () => FROM(ctx)
	};
};

// TODO support regexp and prefix keys
const __AT__QUERY_ENTRIES_HAVING_ALL_OF = (ctx, ...keys) => {
	ctx.source += ` QUERY ENTRIES HAVING ALL OF ${literalize(...keys)}`;
	const keySet = new Set(keys); // TODO specialize 0 and 1 keys
	ctx.__at_predicates.push((url) => {
		const queryEntryKeys = new Set(url.searchParams.keys());
		if ( queryEntryKeys.size === 0 ) {
			return false;
		}
		return keySet.isSubsetOf(queryEntryKeys);
	});
	return {
		AT: () => AT(ctx),
		FROM: () => FROM(ctx)
	};
};

// TODO support regexp and prefix keys
const __AT__QUERY_ENTRIES_HAVING_ANY_OF = (ctx, ...keys) => {
	ctx.source += ` QUERY ENTRIES HAVING ANY OF ${literalize(...keys)}`;
	const keySet = new Set(keys); // TODO specialize 0 and 1 keys
	ctx.__at_predicates.push((url) => {
		for ( const queryEntryKey of url.searchParams.keys() ) {
			if ( keySet.has(queryEntryKey) ) {
				return true;
			}
		}
		return false;
	});
	return {
		AT: () => AT(ctx),
		FROM: () => FROM(ctx)
	};
};

const __AT__PATHNAME = (ctx, ...pathnames) => {
	ctx.source += ` PATHNAME ${literalize(...pathnames)}`;
	const p = createMatches(...pathnames);
	ctx.__at_predicates.push((url) => p(url.pathname));
	return {
		AT: () => AT(ctx),
		QUERY_ENTRIES_HAVING_ALL_OF: (...keys) => __AT__QUERY_ENTRIES_HAVING_ALL_OF(ctx, ...keys),
		QUERY_ENTRIES_HAVING_ANY_OF: (...keys) => __AT__QUERY_ENTRIES_HAVING_ANY_OF(ctx, ...keys),
		FROM: () => FROM(ctx)
	};
};

// TODO consider associating tries in the global domain/hostname tries
const AT = (ctx) => {
	ctx.source += 'AT';
	if ( ctx.__at_predicate_list === undefined ) {
		ctx.__at_predicate_list = [];
	}
	ctx.__at_predicates = [];
	ctx.__at_predicate_list.push(ctx.__at_predicates);
	if ( ctx.at === undefined ) {
		ctx.at = function(url) {
			if ( ctx.__at_predicate_list.length === 0 ) {
				return true;
			}
outer:
			for ( const predicates of ctx.__at_predicate_list ) {
				for ( const predicate of predicates ) {
					if ( !predicate(url) ) {
						continue outer;
					}
				}
				return true;
			}
			return false;
		};
	}
	return {
		ANYWHERE: () => __AT__ANYWHERE(ctx),
		DOMAIN: (...domains) => __AT__DOMAIN(ctx, ...domains),
		HOSTNAME: (...hostnames) => __AT__HOSTNAME(ctx, ...hostnames),
		PATHNAME: (...pathnames) => __AT__PATHNAME(ctx, ...pathnames),
		QUERY_ENTRIES_HAVING_ALL_OF: (...keys) => __AT__QUERY_ENTRIES_HAVING_ALL_OF(ctx, ...keys),
		QUERY_ENTRIES_HAVING_ANY_OF: (...keys) => __AT__QUERY_ENTRIES_HAVING_ANY_OF(ctx, ...keys)
	};
};

//--------------------------------------------------------------------------------------------------
// RULE - root
//--------------------------------------------------------------------------------------------------

// TODO device natural ID from the rule, or use surrogate UUID, whatsoever?
const RULE = (name) => {
	name = name || new Error().stack.split('\n')[1];
	const ctx = {
		name,
		source: ''
	};
	return {
		AT: () => AT(ctx)
	};
};

export {
	RULE
};
