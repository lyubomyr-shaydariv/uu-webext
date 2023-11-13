(function(global) {

	const rules = [];

	global.getRules = function* () {
		for ( const rule of rules ) {
			yield rule;
		}
	};

	global.addRule = function(rule) {
		rules.push(rule);
	};

})(this);

(function(global) {

	function cleanSearchParams(searchParams, filter) {
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

	function parseAndCleanHashPairs(hash, filter) {
		if ( hash && filter && hash !== "#" && hash.indexOf("=") !== -1 ) {
			hash = hash.replace(hashPairsRx, (match, _, key, value) => filter(key, [value]) ? match : "");
			if ( hash.startsWith("&") ) {
				hash = `#${hash.substring(1)}`;
			}
		}
		return hash;
	};

	global.AND = function(...predicates) {
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

	global.AT_DOMAIN = function(...hostnames) {
		return OR(
			AT_HOSTNAME(...hostnames),
			AT_HOSTNAME_UNDER_DOMAIN(...hostnames)
		);
	};

	global.AT_HOSTNAME = function(...hostnames) {
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

	global.AT_HOSTNAME_BY_REGEXP = function(...regexps) {
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

	global.AT_HOSTNAME_UNDER_DOMAIN = function(...hostnames) {
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

	global.EXCLUDE = function(...names) {
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
	global.EXCLUDE_BY_STARTS_WITH = function(...names) {
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

	global.FILTER_ENTRIES = function(url, filter) {
		cleanSearchParams(url.searchParams, filter);
		url.hash = parseAndCleanHashPairs(url.hash, filter);
	};

	global.OR = function(...predicates) {
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

	global.REDIRECT_CONFIRMATION_URL = function(url) {
		return new URL(`chrome-extension://${chrome.runtime.id}/warn.html?url=${encodeURIComponent(url)}`);
	};

	global.REDIRECT_FROM_SEARCH_PARAMS = function(url, key) {
		const value = url.searchParams.get(key);
		if ( value ) {
			return new URL(value);
		}
	};

})(this);
