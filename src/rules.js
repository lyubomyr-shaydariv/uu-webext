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
	if ( hash && filter && hash !== "#" && hash.indexOf("=") !== -1 ) {
		hash = hash.replace(hashPairsRegExp, (match, _, key, value) => filter(key, [value]) ? match : "");
		if ( hash.startsWith("&") ) {
			hash = `#${hash.substring(1)}`;
		}
	}
	return hash;
};

const AT = {
	DOMAIN: (...hostnames) => {
		return OP.OR(
			AT.HOSTNAME(...hostnames),
			AT.HOSTNAME_UNDER_DOMAIN(...hostnames)
		);
	},
	HOSTNAME: (...hostnames) => {
		switch ( hostnames.length ) {
		case 0:
			return (url) => true;
		case 1:
			const hostname = hostnames[0];
			return (url) => url.hostname === hostname;
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
	},
	HOSTNAME_BY_REGEXP: (...regExps) => {
		switch ( regExps.length ) {
		case 0:
			return (url) => true;
		case 1:
			const regExp = regExps[0];
			return (url) => regExp.test(url.hostname);
		default:
			regExps = regExps.slice();
			return (url) => {
				for ( const regExp of regExps ) {
					if ( regExp.test(url.hostname) ) {
						return true;
					}
				}
				return false;
			};
		}
	},
	HOSTNAME_UNDER_DOMAIN: (...hostnames) => {
		switch ( hostnames.length ) {
		case 0:
			return (url) => true;
		case 1:
			const hostname = "." + hostnames[0];
			return (url) => url.hostname.endsWith(hostname);
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
	},
	PATHNAME: (...pathnames) => {
		switch ( pathnames.length ) {
		case 0:
			return (url) => true;
		case 1:
			const pathname = pathnames[0];
			return (url) => url.pathname === pathname;
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
	},
	PATHNAME_BY_REGEXP: (...regExps) => {
		switch ( regExps.length ) {
		case 0:
			return (url) => true;
		case 1:
			const regExp = regExps[0];
			return (url) => regExp.test(url.pathname);
		default:
			regExps = regExps.slice();
			return (url) => {
				for ( const regExp of regExps ) {
					if ( regExp.test(url.pathname) ) {
						return true;
					}
				}
				return false;
			};
		}
	},
	PATHNAME_BY_STARTS_WITH: (...pathnames) => {
		switch ( pathnames.length ) {
		case 0:
			return (url) => true;
		case 1:
			const pathname = pathnames[0];
			return (url) => url.pathname.startsWith(pathname);
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
	},
	SEARCH_PARAMS_HAS_KEY: (...keys) => {
		switch ( keys.length ) {
		case 0:
			return (url) => true;
		case 1:
			const key = keys[0]
			return (url) => url.searchParams.has(key);
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
	}
};

const BLOCK = {
	CONFIRM: (url) => {
		return new URL(`${chrome.runtime.getURL("/warn.html")}?url=${encodeURIComponent(url)}`);
	}
};

const JUST = {
	EXCLUDING: (...names) => {
		switch ( names.length ) {
		case 0:
			return (name, values) => true;
		case 1:
			const n = names[0];
			return (name, values) => name !== n;
		default:
			names = new Set(names);
			return (name, values) => !names.has(name);
		}
	},
	EXCLUDING_BY_STARTS_WITH: (...names) => {
		switch ( names.length ) {
		case 0:
			return (name, values) => true;
		case 1:
			const n = names[0];
			return (name, values) => !name.startsWith(n);
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
	}
};

const MAP = {
	DECODE_BASE64: () => {
		return (encoded) => atob(encoded);
	},
	ELEMENT_AT: (i) => {
		return (array) => array[i];
	},
	EXTRACT_PATHNAME: () => {
		return (url) => url.pathname;
	},
	EXTRACT_SEARCH_PARAMS: () => {
		return (url) => url.searchParams;
	},
	PARSE_JSON: () => {
		return (json) => JSON.parse(json);
	},
	PARSE_REGEXP: (regExp) => {
		return (str) => regExp.exec(str);
	},
	PROPERTY_AT: (name) => {
		return (object) => {
			if ( object instanceof URLSearchParams ) {
				return object.get(name);
			}
			return object[name];
		}
	},
	REPLACE: (pattern, replacement) => {
		return (str) => str.replace(pattern, replacement);
	},
	SUBSTRING: (indexStart, indexEnd) => {
		return (str) => str.substring(indexStart, indexEnd);
	},
	TO_URL: () => {
		return (url) => new URL(url);
	}
};

const MUTATE = {
	ENTRIES: (url, filter) => {
		cleanSearchParams(url.searchParams, filter);
		url.hash = parseAndCleanHashPairs(url.hash, filter);
	}
};

const OP = {
	AND: (...predicates) => {
		switch ( predicates.length ) {
		case 0:
			return (name, values) => true;
		case 1:
			const predicate = predicates[0];
			return (name, values) => predicate(name, values);
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
	},
	OR: (...predicates) => {
		switch ( predicates.length ) {
		case 0:
			return (name, values) => true;
		case 1:
			const predicate = predicates[0];
			return (name, values) => predicate(name, values);
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
	},
	PIPE: (options = {}, ...fs) => {
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
	}
};

const RULE = {
	MUTATE_ENTRIES: (filter) => {
		return {
			redirect: (url) => {
				MUTATE.ENTRIES(url, filter);
			}
		};
	},
	MUTATE_ENTRIES_AT: (filter, predicate) => {
		return {
			redirect: (url) => {
				if ( predicate(url) ) {
					MUTATE.ENTRIES(url, filter);
				}
			}
		};
	},
	REDIRECT_AT: (f, predicate) => {
		return {
			redirect: (url) => {
				if ( predicate(url) ) {
					return f(url);
				}
			}
		};
	}
};

export {
	AT,
	BLOCK,
	JUST,
	MAP,
	MUTATE,
	OP,
	RULE
};
