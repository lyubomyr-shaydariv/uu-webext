## How to survive browser restart for local use

### Prerequisites

* The `$.browser_specific_settings.gecko.id` key in `manifest.json` has a string value.

```shell
jq -r '.browser_specific_settings.gecko.id' manifest.json
```

* The active Firefox instance is either [Firefox Developer Edition](https://www.mozilla.org/firefox/developer/) or [Firefox Nightly](https://www.mozilla.org/firefox/all/#product-desktop-nightly).
* The XPI signature check is disabled by setting `xpinstall.signatures.required` to `false` in `about:config`.

### Installing from a local directory

* Pack the extension by running the `./pack` script and generating an extension bundle file.
* Open `about:addons`, activate "Extensions", click the gear and the "Install Add-on from File..." menu item, and then install the previously generated extensions bundle file.
