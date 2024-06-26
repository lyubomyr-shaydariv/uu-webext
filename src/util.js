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
// general string functions
//--------------------------------------------------------------------------------------------------

const unsafeHtmlCharactersRegExp = /([&<>"'])/g;

const unsafeHtmlCharToSafeHtmlChar = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	'\'': '&apos;'
};

const sanitizeHtml = (html) => html.replace(unsafeHtmlCharactersRegExp, (match, unsafeChar) => unsafeHtmlCharToSafeHtmlChar[unsafeChar]);

//--------------------------------------------------------------------------------------------------
// collections
//--------------------------------------------------------------------------------------------------

const makeMultimap = (getKey, ...objects) => {
	const map = new Map();
	for ( const object of objects ) {
		const key = getKey(object);
		let array = map.get(key);
		if ( array === undefined ) {
			array = [];
			map.set(key, array);
		}
		array.push(object);
	}
	return map;
};

const makeSet = (getKey, ...objects) => {
	switch ( objects.length ) {
		case 0: {
			return new Set();
		}
		case 1: {
			return new Set([objects[0]]);
		}
		default: {
			const map = new Map();
			for ( const object of objects ) {
				const key = getKey(object);
				if ( map.has(key) ) {
					continue;
				}
				map.set(key, object);
			}
			return new Set(map.values());
		}
	}
};

//--------------------------------------------------------------------------------------------------
// preconditions
//--------------------------------------------------------------------------------------------------

const requireObjects = (testCondition, getMessage, ...objects) => {
	for ( const object of objects ) {
		if ( !testCondition(object) ) {
			throw new Error(getMessage(object));
		}
	}
};

const requireStrings = (...strings) => {
	requireObjects((e) => typeof(e) === 'string' || e instanceof String, (e) => `expected a string but was \`${e}\` of type \`${e?.constructor.name}\``, ...strings);
};

const requireType = (type, ...regExps) => {
	requireObjects((e) => e instanceof type, (e) => `expected an object of type \`${type.name}\` but was \`${e}\` of type \`${e?.constructor.name}\``, ...regExps);
};

//--------------------------------------------------------------------------------------------------
// stupid simple template engine
//--------------------------------------------------------------------------------------------------

const templatePropertyRegExp = /(?<propertyToken>\${(?<propertyName>[0-9a-zA-Z]+)})/g;

const createTemplate = (templateText) => {
	const render = (properties, finalize) => templateText.replace(templatePropertyRegExp, (match, propertyToken, propertyName) => {
		const propertyValue = properties[propertyName];
		if ( propertyValue === undefined || propertyValue === null ) {
			return propertyValue;
		}
		return finalize(propertyValue);
	});
	const renderSanitizedHTML = (properties) => render(properties, sanitizeHtml);
	return {
		renderSanitizedHTML
	};
};

export {
	areStrictlyEqual,
	createTemplate,
	makeMultimap,
	makeSet,
	requireObjects,
	requireStrings,
	requireType
};
