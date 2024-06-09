/*global browser*/

const manifest = browser.runtime.getManifest();

document.getElementById('name').innerText = manifest.name;
document.getElementById('version').innerText = manifest.version;
