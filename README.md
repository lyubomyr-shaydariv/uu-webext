## ![uU](icon-32x32.png)

**uU (untrack URLs)** is a browser extension that sanitizes **tracked URLs** and bypasses **tracked redirects** for the following services (if possible).

### Scopes ###

| Scope | Is supported? | Notes |
| ----- | ------------- | ----- |
| Navigation and HTTP requests in general | Yes | This allows untrackin URLs for every HTTP request the browser sends utilizing the [webRequest API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest). This also why **uU** requires global permissions to modify HTTP requests for all sites. |
| Sharing links | Yes, via the context menu | Currently **uU** does not untrack URLs on the page (in the DOM). The "Copy Untracked Link" from the context menu copies an untracked link similarly "Copy Link Without Site Tracking" that is implemented by Mozilla Firefox itself. |
| On-page links | No | To be discussed. |
| Warned page redirects | Yes | In principle, this is greatly supported by [uMatrix](https://addons.mozilla.org/firefox/addon/umatrix/) and the feature of **uU** is a subject for potential removal. To be discussed. |

### Untracked services

* Action Map (URLs)
* ![adobe](favicons/adobe.com.png) Adobe (URLs)
* ![aliexpress](favicons/aliexpress.com.png) AliExpress (URLs)
* ![amazon](favicons/amazon.com.png) Amazon (URLs)
* ![apple](favicons/apple.com.png) Apple (URLs)
* AT (URLs)
* ![bbc](favicons/bbc.com.png) BBC (URLs)
* ![bilibili](favicons/bilibili.com.png) Bilibili (URLs)
* ![bing](favicons/bing.com.png) Bing (URLs)
* ![caseking](favicons/caseking.de.png) CaseKing.de (URLs)
* ![changeorg](favicons/change.org.png) Change.org (URLs)
* ![customer.io](favicons/customer.io.png) Customer.io (redirects)
* ![drip](favicons/drip.com.png) Drip (URLs)
* ![dpgmediagroup](favicons/dpgmediagroup.com.png) DPM Media Group (URLs)
* ![duckduckgo](favicons/duckduckgo.com.png) DuckDuckGo (redirects)
* ![ebay](favicons/ebay.com.png) eBay (URLs)
* ![etsy](favicons/etsy.com.png) Etsy (URLs)
* ![evernote](favicons/evernote.com.png) Evernote (redirects)
* ![facebook](favicons/facebook.com.png) Facebook (URLs, redirects)
* ![github](favicons/github.com.png) GitHub (URLs)
* ![google](favicons/google.com.png) Google (URLs, redirects including AMP; **NOTE:** [Google Docs HTML-exported pages](https://fosstodon.org/@Joe_0237/111145684757912952) are only supported/intercepted when open in the browser: _Today I found out that google docs infects html exports with spyware, no scripts, but links in your document are replaced with invisible google tracking redirects. I was using their software because a friend wanted me to work with him on a google doc, he is a pretty big fan of their software, but we were both somehow absolutely shocked that they would go that far._)
* ![hubspot](favicons/hubspot.com.png) HubSpot (URLs)
* ![humblebundle](favicons/humblebundle.com.png) Humble Bundle (URLs)
* ![ibm](favicons/ibm.com.png) IBM (URLs)
* ![imdb](favicons/imdb.com.png) IMDb (URLs and redirects)
* ![instagram](favicons/instagram.com.png) Instagram (URLs and redirects)
* `itm_...` (URLs)
* ![linkedin](favicons/www.linkedin.com.png) LinkedIn (URLs, redirects)
* ![mailchimp](favicons/mailchimp.com.png) MailChimp (URLs)
* ![mailerlite](favicons/mailerlite.com.png) MailerLite (URLs)
* ![mandrill](favicons/mandrillapp.com.png) Mandrill (URLs)
* ![matomo](favicons/matomo.org.png) Matomo/Piwik (URLs)
* ![medium](favicons/medium.com.png) Medium (redirects)
* ![microsoft](favicons/www.microsoft.com.png) Microsoft (URLs)
* ![netflix](favicons/netflix.com.png) Netflix (URLs)
* NS (URLs)
* ![nytimes](favicons/nytimes.com.png) New York Times (URLs)
* ![omeda](favicons/omeda.com.png) Omeda (URLs)
* ![oracle](favicons/oracle.com.png) Oracle (redirects)
* ![outlook](favicons/outlook.com.png) Outlook (redirects)
* ![parsely](favicons/parse.ly.png) Parse.ly (TODO URLs)
* ![reddit](favicons/reddit.com.png) Reddit (redirects)
* ![reuters](favicons/reuters.com.png) Reuters (redirects)
* SC (URLs)
* STM (URLs)
* ![snapchat](favicons/snapchat.com.png) Snapchat (URLs)
* ![sourceforge](favicons/sourceforge.net.png) SourceForge (URLs)
* ![spotify](favicons/spotify.com.png) Spotify (URLs)
* ![takeads](favicons/tatrck.com.png) Takeads (redirects)
* ![taobao](favicons/taobao.com.png) Taobao (redirects)
* ![tiktok](favicons/tiktok.com.png) TikTok (URLs)
* ![tumblr](favicons/tumblr.com.png) Tumblr (redirects)
* ![twitch](favicons/twitch.tv.png) Twitch (URLs)
* Urchin Tracking Module (URLs)
* ![vero](favicons/www.getvero.com.png) Vero (URLs)
* ![vk](favicons/vk.com.png) VK (redirects)
* ![wickedreports](favicons/wickedreports.com.png) Wicked Reports (URLs)
* ![twitter](favicons/twitter.com.png) X (ex-Twitter) (redirects)
* ![yahoo](favicons/yahoo.com.png) Yahoo (URLs)
* ![yandex](favicons/yandex.ru.png) Yandex (URLs)
* ![youtube](favicons/youtube.com.png) YouTube (URLs, redirects)
* Zanox (URLs)
* ![zeit](favicons/zeit.de.png) Zeit (URLs)
* ... and some other common stuff for URLs

### Why Firefox only

Currently **uU** and **μuU** are designed for use in Mozilla Firefox only just because it does not restrict `manifest.json` to the very limited v3 that is forced in Google Chrome.
I haven't check the extension browsers other than Mozilla Firefox.

**uU** and **μuU** are currently published at:

* uU - [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/uu/)
* μuU - [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/%CE%BCuu/)

## Thanks

The **uU** and **μuU** untracking rules are built on top of:

* [Tracking Token Stripper](https://github.com/jparise/chrome-utm-stripper) by Jon Parise, actually the idea of **uU** grown from;
* some rules from [PrivacyTests.org](https://github.com/arthuredelstein/privacytests.org/) by Arthur Edelstein (last updated 2022-04-16);
* some rules from [Neat-URL](https://github.com/Smile4ever/Neat-URL/blob/master/data/default-params-by-category.json) ([default-params-by-category.json](https://raw.githubusercontent.com/Smile4ever/Neat-URL/08b87d5cd3f8497d5cfa0d21743beb6bd2605cfa/data/default-params-by-category.json)) by Geoffrey De Belie (last updated 2022-05-01);
* all rules from [clean-links](https://github.com/Sh1d0w/clean-links) by Sh1d0w (last updated 2023-11-10);
* all rules from [untrack](https://github.com/klanchman/untrack) by Kyle Lanchman (last updated 2023-11-10);
* all rules from [Mozilla Firefox](https://hg.mozilla.org/mozilla-central/file/tip/toolkit/components/antitracking/data/StripOnShare.json) by Mozilla Foundation and its contributors (last updated 2023-11-27);
* and some rules available online.

The icon is merely generated with [Launcher icon generator](https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html#foreground.type=clipart&foreground.clipart=arrow_forward&foreground.space.trim=1&foreground.space.pad=0.25&foreColor=rgba(96%2C%20125%2C%20139%2C%200)&backColor=rgb(123%2C%20207%2C%2025)&crop=0&backgroundShape=square&effects=shadow&name=ic_launcher) by Roman Nurik.

## Support

<a href="https://www.buymeacoffee.com/lyubomyr.shaydariv"><img height="36" src="https://img.buymeacoffee.com/button-api/?text=Buy me a little happiness&emoji=☘️&slug=lyubomyr.shaydariv&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=442200&coffee_colour=FFFFFF"/></a>
<a href="https://ko-fi.com/lyubomyrshaydariv"><img height="36" style="border:0px;height:36px;" src="https://storage.ko-fi.com/cdn/kofi3.png?v=3" border="0" alt="Buy me a little happiness at ko-fi.com"/></a>

Thank you!
