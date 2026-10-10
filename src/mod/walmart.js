import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('walmart.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('adUid', 'adsRedirect', /ath[a-z]*//*, 'athAsset', 'athancid', 'athbdg', 'athcgid', 'athcpid', 'athguid', 'athieid', 'athmtid', 'athpgid', 'athstid', 'athtvid', 'athwpid', 'athznid'*/, 'bt', 'campaign_id', 'eventST', 'from', 'mloc', 'pgId', 'plmt', 'pltfm', 'pos', 'povid', 'pt', 'rdf', 'spQs', 'tax', 'u1', 'wmlspartner')
];
