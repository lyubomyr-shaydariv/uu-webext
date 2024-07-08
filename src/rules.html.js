import * as registry from '/registry.js';
import {expandDomTemplate} from '/util.js';

expandDomTemplate()
	.at(document.getElementById('rules'))
	.using(document.getElementById('ruleTemplate'))
	.modifying((hostElement, templateElement) => {
		hostElement.appendChild(templateElement);
	})
	.filling((item) => ({
		'.ruleName': (e) => {
			e.innerText = item.name;
		},
		'.ruleSource': (e) => {
			e.innerText = item.source;
		}
	}))
	.withData(...registry.getRules())
	.expand();
