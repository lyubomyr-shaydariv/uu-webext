/* global browser */

const EXTENSION_URL_PREFIX = browser.runtime.getURL('');

const rules = await Promise.all(browser.runtime
	.getManifest()
	.background
	.scripts
	.map((script) => (script.startsWith(EXTENSION_URL_PREFIX) ? script.substring(EXTENSION_URL_PREFIX.length) : script)) // eslint-disable-line no-extra-parens
	.filter((script) => script.startsWith('mod/'))
	.map((module) => import(`./${module}`)
		.then((loadedModule) => {
			const {default: moduleRules} = loadedModule;
			if ( !moduleRules || moduleRules.constructor !== Array ) {
				console.warn(`Module ${module} failed to register`);
				return [];
			}
			if ( moduleRules.length === 0 ) {
				console.warn(`Skipping module ${module} declaring no rules`);
				return [];
			}
			console.info(`Registering module ${module} declaring ${moduleRules.length} rule(s)`);
			for ( const moduleRule of moduleRules ) {
				console.debug(`Rule: ${moduleRule.name}\n${moduleRule.source}`);
			}
			return moduleRules;
		})
		.catch((err) => {
			console.error('error loading module', err);
		})
	)
)
	.then((allRules) => {
		allRules = allRules.flat();
		console.log(`Rules loaded: ${allRules.length}`);
		return allRules;
	});

const getRules = function *() {
	for ( const rule of rules ) {
		yield rule;
	}
};

export {
	getRules
};
