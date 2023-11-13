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

	global.getRedirectToWarningPage = function(url) {
		return new URL(`chrome-extension://${chrome.runtime.id}/warn.html?url=${encodeURIComponent(url)}`);
	};

	global.extractQueryPairAsUrl = function(query, key) {
		const value = query.get(key);
		if ( value ) {
			return new URL(value);
		}
	};

	global.cleanSearchParams = function(searchParams, filter) {
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

	global.cleanAllSearchParams = function(searchParams, allKeys) {
		if ( !searchParams || !allKeys ) {
			return;
		}
		for ( const key of allKeys ) {
			if ( !searchParams.has(key) ) {
				return;
			}
		}
		for ( const key of allKeys ) {
			searchParams.delete(key);
		}
	};

	const hashPairsRx = /([#&]([^=&]+)(?:=([^#&]*))?)/g;

	global.parseAndCleanHashPairs = function(hash, filter) {
		if ( hash && filter && hash !== "#" && hash.indexOf("=") !== -1 ) {
			hash = hash.replace(hashPairsRx, (match, _, key, value) => filter(key, [value]) ? match : "");
			if ( hash.startsWith("&") ) {
				hash = `#${hash.substring(1)}`;
			}
		}
		return hash;
	};

	global.parseAndCleanAllHashPairs = function(hash, allKeys) {
main:
		if ( hash && allKeys && hash !== "#" && hash.indexOf("=") !== -1 ) {
			const parsedKeys = new Set();
			for ( const [_1, _2, parsedKey] of hash.matchAll(hashPairsRx) ) {
				parsedKeys.add(parsedKey);
			}
			for ( const key of allKeys ) {
				if ( !parsedKeys.has(key) ) {
					break main;
				}
			}
			const filter = function(key) {
				return !allKeys.includes(key);
			};
			hash = hash.replace(hashPairsRx, (match, _, key, value) => filter(key) ? match : "");
			if ( hash.startsWith("&") ) {
				hash = `#${hash.substring(1)}`;
			}
		}
		return hash;
	};

})(this);

(function(global) {

	global.cleanSearchAndHashPairs = function(url, filter) {
		cleanSearchParams(url.searchParams, filter);
		url.hash = parseAndCleanHashPairs(url.hash, filter);
	};

	global.cleanAllSearchAndHashPairs = function(url, allKeys) {
		cleanAllSearchParams(url.searchParams, allKeys);
		url.hash = parseAndCleanAllHashPairs(url.hash, allKeys);
	};

})(this);

(function(global) {

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

})(this);
