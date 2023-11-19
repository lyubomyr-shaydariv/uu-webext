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

const hashPairsRx = /([#&]([^=&]+)(?:=([^#&]*))?)/g;

const parseAndCleanHashPairs = (hash, filter) => {
	if ( hash && filter && hash !== "#" && hash.indexOf("=") !== -1 ) {
		hash = hash.replace(hashPairsRx, (match, _, key, value) => filter(key, [value]) ? match : "");
		if ( hash.startsWith("&") ) {
			hash = `#${hash.substring(1)}`;
		}
	}
	return hash;
};

const AND = (...predicates) => {
	switch ( predicates.length ) {
	case 0:
		return (name, values) => true;
	case 1:
		predicates = predicates.slice(0, 1);
		return (name, values) => predicates[0](name, values);
	default:
		predicates = predicates.slice();
		return (name, values) => {
			for ( const predicate of predicates ) {
				if ( !predicate(name, values) ) {
					return false;
				}
			}
			return true;
		};
	}
};

const AT_DOMAIN = (...hostnames) => {
	return OR(
		AT_HOSTNAME(...hostnames),
		AT_HOSTNAME_UNDER_DOMAIN(...hostnames)
	);
};

const AT_HOSTNAME = (...hostnames) => {
	switch ( hostnames.length ) {
	case 0:
		return (url) => true;
	case 1:
		hostnames = hostnames.slice(0, 1);
		return (url) => url.hostname === hostnames[0];
	default:
		hostnames = hostnames.slice();
		return (url) => {
			for ( const hostname of hostnames ) {
				if ( url.hostname === hostname ) {
					return true;
				}
			}
			return false;
		};
	}
};

const AT_HOSTNAME_BY_REGEXP = (...regexps) => {
	switch ( regexps.length ) {
	case 0:
		return (url) => true;
	case 1:
		regexps = regexps.slice(0, 1);
		return (url) => regexps[0].test(url.hostname);
	default:
		regexps = regexps.slice();
		return (url) => {
			for ( const regexp of regexps ) {
				if ( regexp.test(url.hostname) ) {
					return true;
				}
			}
			return false;
		};
	}
};

const AT_HOSTNAME_UNDER_DOMAIN = (...hostnames) => {
	switch ( hostnames.length ) {
	case 0:
		return (url) => true;
	case 1:
		hostnames = hostnames.map(hostname => "." + hostname);
		return (url) => url.hostname.endsWith(hostnames[0]);
	default:
		hostnames = hostnames.map(hostname => "." + hostname);
		return (url) => {
			for ( const hostname of hostnames ) {
				if ( url.hostname.endsWith(hostname) ) {
					return true;
				}
			}
			return false;
		};
	}
};

const AT_PATHNAME = (...pathnames) => {
	switch ( pathnames.length ) {
	case 0:
		return (url) => true;
	case 1:
		pathnames = pathnames.slice(0, 1);
		return (url) => url.pathname === pathnames[0];
	default:
		pathnames = pathnames.slice();
		return (url) => {
			for ( const pathname of pathnames ) {
				if ( url.pathname === pathname ) {
					return true;
				}
			}
			return false;
		};
	}
};

const AT_PATHNAME_BY_REGEXP = (...regexps) => {
	switch ( regexps.length ) {
	case 0:
		return (url) => true;
	case 1:
		regexps = regexps.slice(0, 1);
		return (url) => regexps[0].test(url.pathname);
	default:
		regexps = regexps.slice();
		return (url) => {
			for ( const regexp of regexps ) {
				if ( regexp.test(url.pathname) ) {
					return true;
				}
			}
			return false;
		};
	}
};

const AT_PATHNAME_BY_STARTS_WITH = (...pathnames) => {
	switch ( pathnames.length ) {
	case 0:
		return (url) => true;
	case 1:
		pathnames = pathnames.slice(0, 1);
		return (url) => url.pathname.startsWith(pathnames[0]);
	default:
		pathnames = pathnames.slice();
		return (url) => {
			for ( const pathname of pathnames ) {
				if ( url.pathname.startsWith(pathname) ) {
					return true;
				}
			}
			return false;
		};
	}
};

const AT_SEARCH_PARAMS_HAS_KEY = (...keys) => {
	switch ( keys.length ) {
	case 0:
		return (url) => true;
	case 1:
		keys = keys.slice(0, 1);
		return (url) => url.searchParams.has(keys[0]);
	default:
		keys = keys.slice();
		return (url) => {
			for ( const key of keys ) {
				if ( url.searchParams.has(key) ) {
					return true;
				}
			}
			return false;
		};
	}
};

const EXCLUDE = (...names) => {
	switch ( names.length ) {
	case 0:
		return (name, values) => true;
	case 1:
		names = names.slice(0, 1);
		return (name, values) => name !== names[0];
	default:
		names = new Set(names);
		return (name, values) => !names.has(name);
	}
};

// TODO extract the _BY_STARTS_WITH as an operator?
const EXCLUDE_BY_STARTS_WITH = (...names) => {
	switch ( names.length ) {
	case 0:
		return (name, values) => true;
	case 1:
		names = names.slice(0, 1);
		return (name, values) => !name.startsWith(names[0]);
	default:
		names = names.slice();
		return (name, values) => {
			for ( const n of names ) {
				if ( name.startsWith(n) ) {
					return false;
				}
			}
			return true;
		};
	}
};

const FILTER_ENTRIES = (url, filter) => {
	cleanSearchParams(url.searchParams, filter);
	url.hash = parseAndCleanHashPairs(url.hash, filter);
};

const MAP_DECODE_BASE64 = () => {
	return (encoded) => atob(encoded);
};

const MAP_ELEMENT_AT = (i) => {
	return (array) => array[i];
};

const MAP_EXTRACT_PATHNAME = () => {
	return (url) => url.pathname;
};

const MAP_EXTRACT_SEARCH_PARAMS = () => {
	return (url) => url.searchParams;
};

const MAP_PARSE_JSON = () => {
	return (json) => JSON.parse(json);
};

const MAP_PARSE_REGEXP = (regExp) => {
	return (str) => regExp.exec(str);
};

const MAP_PROPERTY_AT = (name) => {
	return (object) => {
		if ( object instanceof URLSearchParams ) {
			return object.get(name);
		}
		return object[name];
	}
};

const MAP_REPLACE = (pattern, replacement) => {
	return (str) => str.replace(pattern, replacement);
};

const MAP_SUBSTRING = (indexStart, indexEnd) => {
	return (str) => str.substring(indexStart, indexEnd);
};

const MAP_TO_URL = () => {
	return (url) => new URL(url);
};

const OR = (...predicates) => {
	switch ( predicates.length ) {
	case 0:
		return (name, values) => true;
	case 1:
		predicates = predicates.slice(0, 1);
		return (name, values) => predicates[0](name, values);
	default:
		predicates = predicates.slice();
		return (name, values) => {
			for ( const predicate of predicates ) {
				if ( predicate(name, values) ) {
					return true;
				}
			}
			return false;
		};
	}
};

const PIPE = (options = {}, ...fs) => {
	return (v) => {
		try {
			let result = v;
			for ( const f of fs ) {
				result = f(result);
			}
			return result;
		} catch ( err ) {
			console.error(err);
			if ( !options.onError ) {
				return REDIRECT_CONFIRMATION_URL(v);
			}
			return options.onError(v);
		}
	};
};

const REDIRECT_CONFIRMATION_URL = (url) => {
	return new URL(`${chrome.runtime.getURL("/warn.html")}?url=${encodeURIComponent(url)}`);
};

const REDIRECT_FROM_SEARCH_PARAMS = (url, key) => {
	const value = url.searchParams.get(key);
	if ( value ) {
		return new URL(value);
	}
};

export {
	AND,
	AT_DOMAIN,
	AT_HOSTNAME,
	AT_HOSTNAME_BY_REGEXP,
	AT_HOSTNAME_UNDER_DOMAIN,
	AT_PATHNAME,
	AT_PATHNAME_BY_REGEXP,
	AT_PATHNAME_BY_STARTS_WITH,
	AT_SEARCH_PARAMS_HAS_KEY,
	EXCLUDE,
	EXCLUDE_BY_STARTS_WITH,
	FILTER_ENTRIES,
	MAP_DECODE_BASE64,
	MAP_ELEMENT_AT,
	MAP_EXTRACT_PATHNAME,
	MAP_EXTRACT_SEARCH_PARAMS,
	MAP_PARSE_JSON,
	MAP_PARSE_REGEXP,
	MAP_PROPERTY_AT,
	MAP_REPLACE,
	MAP_SUBSTRING,
	MAP_TO_URL,
	OR,
	PIPE,
	REDIRECT_CONFIRMATION_URL,
	REDIRECT_FROM_SEARCH_PARAMS
};
