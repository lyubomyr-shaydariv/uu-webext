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

	global.REDIRECT_FROM_SEARCH_PARAMS = function(url, key) {
		const value = url.searchParams.get(key);
		if ( value ) {
			return new URL(value);
		}
	};

})(this);
