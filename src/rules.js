/*global browser*/

const cleanSearchParams = (searchParams, filter) => {
	if ( !searchParams || !filter ) {
		return;
	}
	const keysToDelete = new Set();
	for ( const key of searchParams.keys() ) {
		const values = searchParams.getAll(key);
		if ( !filter(key, values) ) {
			keysToDelete.add(key);
		}
	}
	for ( const keyToDelete of keysToDelete ) {
		searchParams.delete(keyToDelete);
	}
};

const hashPairsRegExp = /([#&]([^=&]+)(?:=([^#&]*))?)/g;

const parseAndCleanHashPairs = (hash, filter) => {
	if ( hash && filter && hash !== '#' && hash.indexOf('=') !== -1 ) {
		hash = hash.replace(hashPairsRegExp, (match, _, key, value) => filter(key, [value]) ? match : '');
		if ( hash.startsWith('&') ) {
			hash = `#${hash.substring(1)}`;
		}
	}
	return hash;
};

const confirmRedirection = (url) => {
	return new URL(`${browser.runtime.getURL('/warn.html')}?url=${encodeURIComponent(url)}`);
};

const xs = (o, delimiter = ',', empty = '@') => {
	if ( o === void(0) ) {
		return empty;
	}
	if ( o.constructor === String ) {
		return o.replace(delimiter, encodeURIComponent(delimiter));
	}
	if ( o.constructor === Array ) {
		if ( !o.length ) {
			return empty;
		}
		return o.map(e => xs(e, delimiter))
			.join(delimiter);
	}
	if ( o.constructor === Function && o.toExpression ) {
		return o.toExpression();
	}
	if ( o.constructor === Number ) {
		return o.toString();
	}
	if ( o.constructor === Object ) {
		return Object.entries(o)
			.map(([k, v]) => `${k}:${xs(v)}`)
			.join(delimiter);
	}
	if ( o instanceof RegExp ) {
		return xs(o.toString());
	}
	if ( o instanceof Set ) {
		if ( !o.size ) {
			return empty;
		}
		return Array.from(o)
			.map(e => xs(e, delimiter))
			.join(delimiter);
	}
	throw new Error(`Unsupported expression type: ${o} of ${o.constructor}`);
};

const AT = {
	DOMAIN: (...hostnames) => {
		const f = OP.OR(
			AT.HOSTNAME(...hostnames),
			AT.HOSTNAME_UNDER_DOMAIN(...hostnames)
		);
		f.toExpression = () => `DOMAIN ${xs(hostnames)}`;
		return f;
	},
	HOSTNAME: (...hostnames) => {
		switch ( hostnames.length ) {
			case 0: {
				// eslint-disable-next-line no-unused-vars
				const f = (url) => true;
				f.toExpression = () => `HOSTNAME ${xs()}`;
				return f;
			}
			case 1: {
				const hostname = hostnames[0];
				const f = (url) => url.hostname === hostname;
				f.toExpression = () => `HOSTNAME ${xs(hostname)}`;
				return f;
			}
			default: {
				hostnames = hostnames.slice();
				const f = (url) => {
					for ( const hostname of hostnames ) {
						if ( url.hostname === hostname ) {
							return true;
						}
					}
					return false;
				};
				f.toExpression = () => `HOSTNAME ${xs(hostnames)}`;
				return f;
			}
		}
	},
	HOSTNAME_BY_REGEXP: (...regExps) => {
		switch ( regExps.length ) {
			case 0: {
				// eslint-disable-next-line no-unused-vars
				const f = (url) => true;
				f.toExpression = () => `HOSTNAME BY REGEXP ${xs()}`;
				return f;
			}
			case 1: {
				const regExp = regExps[0];
				const f = (url) => regExp.test(url.hostname);
				f.toExpression = () => `HOSTNAME BY REGEXP ${xs(regExp)}`;
				return f;
			}
			default: {
				regExps = regExps.slice();
				const f = (url) => {
					for ( const regExp of regExps ) {
						if ( regExp.test(url.hostname) ) {
							return true;
						}
					}
					return false;
				};
				f.toExpression = () => `HOSTNAME BY REGEXP ${xs(regExps)}`;
				return f;
			}
		}
	},
	HOSTNAME_UNDER_DOMAIN: (...hostnames) => {
		switch ( hostnames.length ) {
			case 0: {
				// eslint-disable-next-line no-unused-vars
				const f = (url) => true;
				f.toExpression = () => `HOSTNAME UNDER DOMAIN ${xs()}`;
				return f;
			}
			case 1: {
				const hostname = `.${hostnames[0]}`;
				const f = (url) => url.hostname.endsWith(hostname);
				f.toExpression = () => `HOSTNAME UNDER DOMAIN ${xs(hostname)}`;
				return f;
			}
			default: {
				hostnames = hostnames.map(hostname => `.${hostname}`);
				const f = (url) => {
					for ( const hostname of hostnames ) {
						if ( url.hostname.endsWith(hostname) ) {
							return true;
						}
					}
					return false;
				};
				f.toExpression = () => `HOSTNAME UNDER DOMAIN ${xs(hostnames)}`;
				return f;
			}
		}
	},
	PATHNAME: (...pathnames) => {
		switch ( pathnames.length ) {
			case 0: {
				// eslint-disable-next-line no-unused-vars
				const f = (url) => true;
				f.toExpression = () => `PATHNAME ${xs()}`;
				return f;
			}
			case 1: {
				const pathname = pathnames[0];
				const f = (url) => url.pathname === pathname;
				f.toExpression = () => `PATHNAME ${xs(pathname)}`;
				return f;
			}
			default: {
				pathnames = pathnames.slice();
				const f = (url) => {
					for ( const pathname of pathnames ) {
						if ( url.pathname === pathname ) {
							return true;
						}
					}
					return false;
				};
				f.toExpression = () => `PATHNAME ${xs(pathnames)}`;
				return f;
			}
		}
	},
	PATHNAME_BY_REGEXP: (...regExps) => {
		switch ( regExps.length ) {
			case 0: {
				// eslint-disable-next-line no-unused-vars
				const f = (url) => true;
				f.toExpression = () => `PATHNAME BY REGEXP ${xs()}`;
				return f;
			}
			case 1: {
				const regExp = regExps[0];
				const f = (url) => regExp.test(url.pathname);
				f.toExpression = () => `PATHNAME BY REGEXP ${xs(regExp)}`;
				return f;
			}
			default: {
				regExps = regExps.slice();
				const f = (url) => {
					for ( const regExp of regExps ) {
						if ( regExp.test(url.pathname) ) {
							return true;
						}
					}
					return false;
				};
				f.toExpression = () => `PATHNAME BY REGEXP ${xs(regExps)}`;
				return f;
			}
		}
	},
	PATHNAME_BY_STARTS_WITH: (...pathnames) => {
		switch ( pathnames.length ) {
			case 0: {
				// eslint-disable-next-line no-unused-vars
				const f = (url) => true;
				f.toExpression = () => `PATHNAME BY STARTS WITH ${xs()}`;
				return f;
			}
			case 1: {
				const pathname = pathnames[0];
				const f = (url) => url.pathname.startsWith(pathname);
				f.toExpression = () => `PATHNAME BY STARTS WITH ${xs(pathname)}`;
				return f;
			}
			default: {
				pathnames = pathnames.slice();
				const f = (url) => {
					for ( const pathname of pathnames ) {
						if ( url.pathname.startsWith(pathname) ) {
							return true;
						}
					}
					return false;
				};
				f.toExpression = () => `PATHNAME BY STARTS WITH ${xs(pathnames)}`;
				return f;
			}
		}
	},
	SEARCH_PARAMS_HAS_KEY: (...keys) => {
		switch ( keys.length ) {
			case 0: {
				// eslint-disable-next-line no-unused-vars
				const f = (url) => true;
				f.toExpression = () => `SEARCH PARAMS HAS KEY ${xs()}`;
				return f;
			}
			case 1: {
				const key = keys[0];
				const f = (url) => url.searchParams.has(key);
				f.toExpression = () => `SEARCH PARAMS HAS KEY ${xs(key)}`;
				return f;
			}
			default: {
				keys = keys.slice();
				const f = (url) => {
					for ( const key of keys ) {
						if ( url.searchParams.has(key) ) {
							return true;
						}
					}
					return false;
				};
				f.toExpression = () => `SEARCH PARAMS HAS KEY ${xs(keys)}`;
				return f;
			}
		}
	}
};

const JUST = {
	EXCLUDING: (...names) => {
		switch ( names.length ) {
			case 0: {
				// eslint-disable-next-line no-unused-vars
				const f = (name, values) => true;
				f.toExpression = () => `EXCLUDING ${xs()}`;
				return f;
			}
			case 1: {
				const n = names[0];
				// eslint-disable-next-line no-unused-vars
				const f = (name, values) => name !== n;
				f.toExpression = () => `EXCLUDING ${xs(n)}`;
				return f;
			}
			default: {
				names = new Set(names);
				// eslint-disable-next-line no-unused-vars
				const f = (name, values) => !names.has(name);
				f.toExpression = () => `EXCLUDING ${xs(names)}`;
				return f;
			}
		}
	},
	EXCLUDING_BY_STARTS_WITH: (...names) => {
		switch ( names.length ) {
			case 0: {
				// eslint-disable-next-line no-unused-vars
				const f = (name, values) => true;
				f.toExpression = () => `EXCLUDING BY STARTS WITH ${xs()}`;
				return f;
			}
			case 1: {
				const n = names[0];
				// eslint-disable-next-line no-unused-vars
				const f = (name, values) => !name.startsWith(n);
				f.toExpression = () => `EXCLUDING BY STARTS WITH ${xs(n)}`;
				return f;
			}
			default: {
				names = names.slice();
				// eslint-disable-next-line no-unused-vars
				const f = (name, values) => {
					for ( const n of names ) {
						if ( name.startsWith(n) ) {
							return false;
						}
					}
					return true;
				};
				f.toExpression = () => `EXCLUDING BY STARTS WITH ${xs(names)}`;
				return f;
			}
		}
	}
};

const MAP = {
	DECODE_BASE64: () => {
		const f = (encoded) => atob(encoded);
		f.toExpression = () => 'DECODE_BASE64';
		return f;
	},
	ELEMENT_AT: (i) => {
		const f = (array) => array[i];
		f.toExpression = () => `ELEMENT_AT ${i}`;
		return f;
	},
	EXTRACT_PATHNAME: () => {
		const f = (url) => url.pathname;
		f.toExpression = () => 'EXTRACT_PATHNAME';
		return f;
	},
	EXTRACT_SEARCH_PARAMS: () => {
		const f = (url) => url.searchParams;
		f.toExpression = () => 'EXTRACT_SEARCH_PARAMS';
		return f;
	},
	PARSE_JSON: () => {
		const f = (json) => JSON.parse(json);
		f.toExpression = () => 'PARSE_JSON';
		return f;
	},
	PARSE_REGEXP: (regExp) => {
		const f = (str) => regExp.exec(str);
		f.toExpression = () => `PARSE_REGEXP ${xs(regExp)}`;
		return f;
	},
	PROPERTY_AT: (name) => {
		const f = (object) => {
			if ( object instanceof URLSearchParams ) {
				return object.get(name);
			}
			return object[name];
		};
		f.toExpression = () => `PROPERTY_AT ${xs(name)}`;
		return f;
	},
	REPLACE: (pattern, replacement) => {
		const f = (str) => str.replace(pattern, replacement);
		f.toExpression = () => `REPLACE ${xs(pattern)} ${xs(replacement)}`;
		return f;
	},
	SUBSTRING: (indexStart, indexEnd) => {
		const f = (str) => str.substring(indexStart, indexEnd);
		if ( indexEnd !== void(0) ) {
			f.toExpression = () => `SUBSTRING ${xs(indexStart)} ${xs(indexEnd)}`;
		} else {
			f.toExpression = () => `SUBSTRING ${xs(indexStart)}`;
		}
		return f;
	},
	TO_URL: () => {
		const f = (url) => new URL(url);
		f.toExpression = () => 'TO_URL';
		return f;
	}
};

const MUTATE = {
	ENTRIES: (filter) => {
		const f = (url) => {
			cleanSearchParams(url.searchParams, filter);
			url.hash = parseAndCleanHashPairs(url.hash, filter);
		};
		f.toExpression = () => `MUTATE ENTRIES ${filter.toExpression()}`;
		return f;
	}
};

const OP = {
	AND: (...predicates) => {
		switch ( predicates.length ) {
			case 0: {
				// eslint-disable-next-line no-unused-vars
				const f = (name, values) => true;
				f.toExpression = () => `${xs()}`;
				return f;
			}
			case 1: {
				const predicate = predicates[0];
				const f = (name, values) => predicate(name, values);
				f.toExpression = () => `${xs(predicate, ' AND ')}`;
				return f;
			}
			default: {
				predicates = predicates.slice();
				const f = (name, values) => {
					for ( const predicate of predicates ) {
						if ( !predicate(name, values) ) {
							return false;
						}
					}
					return true;
				};
				f.toExpression = () => `${xs(predicates, ' AND ')}`;
				return f;
			}
		}
	},
	OR: (...predicates) => {
		switch ( predicates.length ) {
			case 0: {
				// eslint-disable-next-line no-unused-vars
				const f = (name, values) => true;
				f.toExpression = () => `${xs()}`;
				return f;
			}
			case 1: {
				const predicate = predicates[0];
				const f = (name, values) => predicate(name, values);
				f.toExpression = () => `${xs(predicate, ' OR ')}`;
				return f;
			}
			default: {
				predicates = predicates.slice();
				const f = (name, values) => {
					for ( const predicate of predicates ) {
						if ( predicate(name, values) ) {
							return true;
						}
					}
					return false;
				};
				f.toExpression = () => `${xs(predicates, ' OR ')}`;
				return f;
			}
		}
	},
	PIPE: (...fs) => {
		const f = (v) => {
			try {
				let result = v;
				for ( const f of fs ) {
					result = f(result);
				}
				return result;
			} catch ( err ) {
				console.error('Error in pipeline', err);
				return confirmRedirection(v);
			}
		};
		f.toExpression = () => `${xs(fs, '|')}`;
		return f;
	}
};

const RULE = {
	MUTATE_ENTRIES: (filter) => {
		const mutator = MUTATE.ENTRIES(filter);
		const f = (url) => {
			mutator(url);
		};
		f.toExpression = () => `MUTATE ENTRIES ${filter.toExpression()}`;
		return f;
	},
	MUTATE_ENTRIES_AT: (filter, predicate) => {
		const mutator = MUTATE.ENTRIES(filter);
		const f = (url) => {
			if ( predicate(url) ) {
				mutator(url);
			}
		};
		f.toExpression = () => `MUTATE ENTRIES ${filter.toExpression()} AT ${predicate.toExpression()}`;
		return f;
	},
	REDIRECT_AT: (redirect, predicate) => {
		const f = (url) => {
			if ( predicate(url) ) {
				return redirect(url);
			}
		};
		f.toExpression = () => `REDIRECT ${redirect.toExpression()} AT ${predicate.toExpression()}`;
		return f;
	}
};

export {
	AT,
	JUST,
	MAP,
	MUTATE,
	OP,
	RULE
};
