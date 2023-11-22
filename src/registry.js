const EXTENSION_URL_PREFIX = chrome.runtime.getURL("");

const rules = [];

Promise.all(browser.runtime
	.getManifest()
	.background
	.scripts
	.map((script) => script.startsWith(EXTENSION_URL_PREFIX) ? script.substring(EXTENSION_URL_PREFIX.length) : script)
	.filter((script) => script.startsWith("mod/"))
	.map((module) => import(`./${module}`)
		.then((loadedModule) => {
			const {default: moduleRules} = loadedModule;
			if ( !moduleRules || moduleRules.constructor !== Array ) {
				console.warn("Module failed to load", module);
				return [];
			}
			rules.push(...moduleRules)
			console.info("Module loaded", module, moduleRules.length);
			for ( const moduleRule of moduleRules ) {
				console.log("Rule", moduleRule.toExpression());
			}
			return moduleRules;
		})
	)
)
	.then((allRules) => {
		allRules = allRules.flat();
		console.info("Rules loaded", allRules.length);
	});

const getRules = function* () {
	for ( const rule of rules ) {
		yield rule;
	}
};

export {
	getRules
};
