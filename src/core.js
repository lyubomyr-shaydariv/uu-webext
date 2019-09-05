(function(global) {

	const modules = [];

	function* getModules() {
		for ( const module of modules ) {
			yield module;
		}
	}

	function parseHashFromUrl(url) {
		return url.hash.split(/[\#\&]/g)
			.filter(kv => kv.length > 0)
			.map(kv => kv.split(/=/));
	}

	function parseSearchFromUrl(url) {
		return Array.from(url.searchParams.entries());
	}

	function registerModule(createModule) {
		modules.push(createModule());
	}

	function toHashForUrl() {
		return (a, e) => {
			if ( typeof(e[1]) === "undefined" ) {
				return `${a}${a.length === 0 ? "#" : "&"}${encodeURIComponent(e[0])}`;
			}
			return `${a}${a.length === 0 ? "#" : "&"}${encodeURIComponent(e[0])}=${encodeURIComponent(e[1])}`;
		};
	}

	function toSearchForUrl() {
		return (a, e) => {
			if ( typeof(e[1]) === "undefined" || e[1] === "" ) {
				return `${a}${a.length === 0 ? "?" : "&"}${encodeURIComponent(e[0])}`;
			}
			return `${a}${a.length === 0 ? "?" : "&"}${encodeURIComponent(e[0])}=${encodeURIComponent(e[1])}`;
		};
	}

	global.getModules = getModules;
	global.parseHashFromUrl = parseHashFromUrl;
	global.parseSearchFromUrl = parseSearchFromUrl;
	global.registerModule = registerModule;
	global.toHashForUrl = toHashForUrl;
	global.toSearchForUrl = toSearchForUrl;

})(this);
