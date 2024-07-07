/* global browser */
import {createTemplate} from '/util.js';
import {redirect} from '/main.js';

const cleanAllBookmarksNode = document.querySelector('#clean-all-bookmarks');
const cleanAllBookmarksItemTemplateNode = document.querySelector('#clean-all-bookmarks-item-template');
const cleanAllBookmarksResultsNode = document.querySelector('#clean-all-bookmarks-results');

const cleanAllBookmarksItemTemplate = createTemplate(cleanAllBookmarksItemTemplateNode.textContent);

cleanAllBookmarksNode.addEventListener('click', () => {
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
						cleanAllBookmarksResultsNode.appendChild(cleanAllBookmarksItemTemplate.renderSanitizedHTMLNode({
							redirectUrl: redirectUrl.href,
							title: bookmark.title,
							url: bookmark.url
						}));
					})
					.catch((err) => {
						console.log('ERROR', err);
					});
			}
		});
});
