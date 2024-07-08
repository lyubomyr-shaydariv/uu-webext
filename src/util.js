//--------------------------------------------------------------------------------------------------
// general object functions
//--------------------------------------------------------------------------------------------------

const areStrictlyEqual = (o1, o2) => {
	if ( o1 === undefined || o2 === undefined ) {
		return false;
	}
	if ( o1 === null && o2 === null ) {
		return true;
	}
	if ( Array.isArray(o1) && Array.isArray(o2) ) {
		if ( o1.length !== o2.length ) {
			return false;
		}
		for ( let i = 0; i < o1.length; i++ ) {
			if ( !areStrictlyEqual(o1[i], o2[i]) ) {
				return false;
			}
		}
		return true;
	}
	const v1 = o1 !== null ? o1.valueOf() : null;
	const v2 = o2 !== null ? o2.valueOf() : null;
	return v1 === v2;
};

//--------------------------------------------------------------------------------------------------
// DOM functions
//--------------------------------------------------------------------------------------------------

const expandDomTemplate = () => {
	const expand = (hostElement, templateElement, modifyDom, fillDom, items) => { // eslint-disable-line max-params
		for ( const item of items ) {
			const templateElementClone = templateElement.content.cloneNode(true);
			const fs = fillDom(item);
			for ( const cssSelector in fs ) {
				if ( !Object.hasOwn(fs, cssSelector) ) {
					continue;
				}
				const templateElements = templateElementClone.querySelectorAll(cssSelector);
				const f = fs[cssSelector];
				f(...templateElements);
			}
			modifyDom(hostElement, templateElementClone);
		}
	};
	const withData = (hostElement, templateElement, modifyDom, fillDom, items) => ({ // eslint-disable-line max-params
		expand: () => expand(hostElement, templateElement, modifyDom, fillDom, items)
	});
	const filling = (hostElement, templateElement, modifyDom, fillDom) => ({ // eslint-disable-line max-params
		withData: (...items) => withData(hostElement, templateElement, modifyDom, fillDom, items)
	});
	const modifying = (hostElement, templateElement, modifyDom) => ({
		filling: (fillDom) => filling(hostElement, templateElement, modifyDom, fillDom)
	});
	const using = (hostElement, templateElement) => ({
		modifying: (modifyDom) => modifying(hostElement, templateElement, modifyDom)
	});
	const at = (hostElement) => ({
		using: (templateElement) => using(hostElement, templateElement)
	});
	return {
		at
	};
};

export {
	areStrictlyEqual,
	expandDomTemplate
};
