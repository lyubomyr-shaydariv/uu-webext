/* global browser */
import {expandDomTemplate} from '/util.js';
import {redirect} from '/main.js';

browser.bookmarks.search({})
	.then((bookmarks) => {
		const template = expandDomTemplate()
			.at(document.getElementById('clean-all-bookmarks-results'))
			.using(document.getElementById('bookmarkToModifyTemplate'))
			.modifying((hostElement, templateElement) => {
				hostElement.appendChild(templateElement);
			})
			.filling((item) => ({
				'.bookmarkRedirectUrl': (e) => {
					e.innerText = item.redirectUrl;
				},
				'.bookmarkTitle': (e) => {
					e.innerText = item.title;
				},
				'.bookmarkUrl': (e) => {
					e.innerText = item.url;
				}
			}));
		for ( const bookmark of bookmarks ) {
			if ( bookmark.type !== 'bookmark' ) {
				continue;
			}
			const redirectUrl = redirect(new URL(bookmark.url));
			if ( !redirectUrl ) {
				continue;
			}
			template
				.withData({
					redirectUrl: redirectUrl.href,
					title: bookmark.title,
					url: bookmark.url
				})
				.expand();
		}
	});

document.getElementById('clean-all-bookmarks')
	.addEventListener('click', () => {
		document.getElementById('clean-all-bookmarks-results')
			.replaceChildren([]);
		const template = expandDomTemplate()
			.at(document.getElementById('clean-all-bookmarks-results'))
			.using(document.getElementById('modifedBookmarkTemplate'))
			.modifying((hostElement, templateElement) => {
				hostElement.appendChild(templateElement);
			})
			.filling((item) => ({
				'.bookmarkRedirectUrl': (e) => {
					e.innerText = item.redirectUrl;
				},
				'.bookmarkTitle': (e) => {
					e.innerText = item.title;
				},
				'.bookmarkUrl': (e) => {
					e.innerText = item.url;
				}
			}));
		browser.bookmarks.search({})
			.then((bookmarks) => {
				for ( const bookmark of bookmarks ) {
					if ( bookmark.type !== 'bookmark' ) {
						continue;
					}
					const redirectUrl = redirect(new URL(bookmark.url));
					if ( !redirectUrl ) {
						continue;
					}
					browser.bookmarks.update(bookmark.id, {url: redirectUrl.href})
						.then(() => {
							template
								.withData({
									redirectUrl: redirectUrl.href,
									title: bookmark.title,
									url: bookmark.url
								})
								.expand();
						})
						.catch((err) => {
							console.log('ERROR', err);
						});
				}
		});
	});
