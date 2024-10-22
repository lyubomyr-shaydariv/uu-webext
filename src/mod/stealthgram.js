import {RULE} from '/rules.js';

// @marilynmanson story (2024-10-22)
// https://stealthgram.com/download-image/?url=https%3A%2F%2Fscontent-fra5-2.cdninstagram.com%2Fv%2Ft51.29350-15%2F464302593_900698825327711_2346880952634742456_n.jpg%3Fse%3D7%26stp%3Ddst-jpg_e35%26efg%3DeyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMjA2eDIxNDQuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0%26_nc_ht%3Dscontent-fra5-2.cdninstagram.com%26_nc_cat%3D1%26_nc_ohc%3DZQ7kVlbVcY0Q7kNvgGbQLUs%26_nc_gid%3Df86753d958444a189b2c0f45477dbc95%26edm%3DANmP7GQBAAAA%26ccb%3D7-5%26ig_cache_key%3DMzQ4NDU2NjA1OTE3ODg4Mzc5OA%253D%253D.3-ccb7-5%26oh%3D00_AYDLQOaRRLmVcX75nb586QplLDvfP1HyFoXmRXod2g_Igg%26oe%3D671DAA8B%26_nc_sid%3D982cc7

// @marilynmanson reel
// https://stealthgram.com/download-video/?url=https%3A%2F%2Fscontent-vie1-1.cdninstagram.com%2Fo1%2Fv%2Ft16%2Ff1%2Fm82%2F234B045E86B50C27038C7740E9C89FB2_video_dashinit.mp4%3Fefg%3DeyJ4cHZfYXNzZXRfaWQiOjExMzU0MDM2MDA4NDM2MjksInZlbmNvZGVfdGFnIjoieHB2X3Byb2dyZXNzaXZlLklOU1RBR1JBTS5DTElQUy5DMy4xMjgwLmRhc2hfYmFzZWxpbmVfMV92MSJ9%26_nc_ht%3Dscontent-vie1-1.cdninstagram.com%26_nc_cat%3D103%26vs%3Df82aabed997ed992%26_nc_vs%3DHBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC8yMzRCMDQ1RTg2QjUwQzI3MDM4Qzc3NDBFOUM4OUZCMl92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dEWWJBeG8zNGNNdjhma0VBTmRXdGl4NDJQaEZicV9FQUFBRhUCAsgBACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJtrN8ISYqYQEFQIoAkMzLBdAUYKfvnbItBgSZGFzaF9iYXNlbGluZV8xX3YxEQB1_gcA%26ccb%3D9-4%26oh%3D00_AYCGbe00KBWoKdO6ZCB21b6U8Dw4ADw-oN3ixQBZxeBJ4Q%26oe%3D6719B5FB%26_nc_sid%3D1d576d
export default [
	RULE()
		.AT().DOMAIN('stealthgram.com').PATHNAME('/download-image/', '/download-video/')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];
