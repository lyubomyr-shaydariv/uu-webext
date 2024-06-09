const createMatches = (...keys) => {
	let strings = null;
	let regExps = null;
	for ( const key of keys ) {
		if ( typeof(key) === 'string' || key instanceof String ) {
			if ( strings === null ) {
				strings = new Set();
			}
			strings.add(key);
		} else if ( key instanceof RegExp ) {
			if ( regExps === null ) {
				regExps = [];
			}
			regExps.push(key);
		// TODO else if glob-matcher
		// TODO else if url-matcher
		} else {
			throw new Error(`cannot create matcher for ${key}`);
		}
	}
	return (key) => {
		if ( strings !== null && strings.has(key) ) {
			return true;
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
		for ( let i = segments.length - 1; i > 0; i-- ) {
			const segment = segments[i];
			if ( !(segment in node) ) {
				return i <= 0;
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
	ctx.source += ` REMOVE ${keys.join(' ')}`;
	const matches = createMatches(...keys);
	return Object.defineProperties(
		(url) => {
			if ( !ctx.at(url) ) {
				return false;
			}
			let isModified = false;
			const keysCtx = ctx.createKeysContext(url);
			for ( const key of keysCtx.getEntryKeys() ) {
				if ( matches(key) ) {
					keysCtx.removeKey(key);
					isModified = true;
				}
			}
			return isModified;
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
		REDIRECT: () => __DO__REDIRECT(ctx),
		REMOVE: (...keys) => __DO__REMOVE(ctx, ...keys)
	};
};

//--------------------------------------------------------------------------------------------------
// APPLY - functions
//--------------------------------------------------------------------------------------------------

const __F__EXECUTE_REGEXP = (ctx, regExp) => {
	ctx.source += ` EXECUTE REGEXP ${regExp}`;
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

const __F__GET_PROPERTY = (ctx, key) => {
	ctx.source += ` GET PROPERTY ${key}`;
	ctx.__apply_functions.push((arg) => {
		if ( arg === null ) {
			return null;
		}
		if ( typeof(arg.get) === 'function' ) {
			return arg.get(key);
		}
		return arg[key];
	});
	return APPLY(ctx);
};

const __F__REPLACE_STRING = (ctx, pattern, replacement) => {
	ctx.source += ` REPLACE STRING ${pattern} ${replacement}`;
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
		ctx.source += ` SUBSTRING ${from}`;
		ctx.__apply_functions.push((arg) => {
			if ( arg === null) {
				return null;
			}
			return arg.substring(from);
		});
	} else {
		ctx.source += ` SUBSTRING ${from} ${to}`;
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
		GET_PROPERTY: (key) => __F__GET_PROPERTY(ctx, key),
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
	ctx.getValue = (url) => {
		const pathname = new String(url.pathname); // now it's an object, so the `get` function cab be mixed in
		pathname.get = (index) => pathname.substring(1).split(PATH_DELIMITER_REGEXP)[index];
		return pathname;
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
				removeKey: (key) => searchParams.delete(key)
			};
		};
	} else {
		ctx.source += ` QUERY ENTRIES BY ${pairDelimiter} AND ${entryDelimiter}`;
		ctx.createKeysContext = (url) => {
			throw new Error(`TODO: parse ${url.search} pair-delimited with '${pairDelimiter}' and entry-delimited with '${entryDelimiter}'`);
		};
	}
	ctx.getValue = (url) => url.searchParams;
	return {
		DO: () => DO(ctx),
		APPLY: () => APPLY(ctx)
	};
};

const FROM = (ctx) => {
	ctx.source += ' FROM';
	return {
		PATHNAME: () => __FROM__PATHNAME(ctx),
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
	ctx.source += ` DOMAIN ${domains.join(' ')}`;
	const p = createUrlMatchesByTrie((element) => element.split('.'), (url) => url.hostname.split('.'), ...domains);
	ctx.__at_predicates.push((url) => p(url));
	return {
		AT: () => AT(ctx),
		PATHNAME: (...pathnames) => __AT__PATHNAME(ctx, ...pathnames),
		QUERY_ENTRIES_HAVING: (...keys) => __AT__QUERY_ENTRIES_HAVING(ctx, ...keys),
		FROM: () => FROM(ctx)
	};
};

const __AT__HOSTNAME = (ctx, ...hostnames) => {
	ctx.source += ` HOSTNAME ${hostnames.join(' ')}`;
	const p = createMatches(...hostnames);
	ctx.__at_predicates.push((url) => p(url.hostname));
	return {
		AT: () => AT(ctx),
		PATHNAME: (...pathnames) => __AT__PATHNAME(ctx, ...pathnames),
		QUERY_ENTRIES_HAVING: (...keys) => __AT__QUERY_ENTRIES_HAVING(ctx, ...keys),
		FROM: () => FROM(ctx)
	};
};

const __AT__QUERY_ENTRIES_HAVING = (ctx, ...keys) => {
	ctx.source += ` QUERY ENTRIES HAVING ${keys.join(' ')}`;
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
	ctx.source += ` PATHNAME ${pathnames.join(' ')}`;
	const p = createMatches(...pathnames);
	ctx.__at_predicates.push((url) => p(url.pathname));
	return {
		AT: () => AT(ctx),
		QUERY_ENTRIES_HAVING: (...keys) => __AT__QUERY_ENTRIES_HAVING(ctx, ...keys),
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
			for ( const predicates of ctx.__at_predicate_list ) {
				let isMatch = true;
				for ( const predicate of predicates  ) {
					if ( !predicate(url) ) {
						isMatch = false;
						break;
					}
				}
				if ( isMatch === true ) {
					return true;
				}
			}
			return false;
		};
	}
	return {
		ANYWHERE: () => __AT__ANYWHERE(ctx),
		DOMAIN: (...domains) => __AT__DOMAIN(ctx, ...domains),
		HOSTNAME: (...hostnames) => __AT__HOSTNAME(ctx, ...hostnames),
		PATHNAME: (...pathnames) => __AT__PATHNAME(ctx, ...pathnames),
		QUERY_ENTRIES_HAVING: (...keys) => __AT__QUERY_ENTRIES_HAVING(ctx, ...keys)
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
