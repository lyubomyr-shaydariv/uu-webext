import * as registry from '/registry.js';
import {createTemplate} from '/util.js';

const templateNode = document.querySelector('#template');
const targetNode = document.querySelector('#target');

const template = createTemplate(templateNode.textContent);

for ( const rule of registry.getRules() ) {
	targetNode.innerHTML += template.renderSanitizedHTML({
		ruleName: rule.name,
		ruleSource: rule.source
	});
}
