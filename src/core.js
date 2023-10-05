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

	global.createFilterByConstantKeys = function(...keys) {
		if ( keys.length === 0 ) {
			return (k, vs) => true;
		}
		if ( keys.length === 1 ) {
			const onlyKey = keys[0];
			return (k, vs) => k !== onlyKey;
		}
		const keySet = new Set(keys);
		return (k, vs) => !keySet.has(k);
	};

})(this);
