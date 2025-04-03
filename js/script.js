'use strict';
{
	const titleClickHandler = function (event) {
		console.log('Link was clicked!');
		console.log(event);

		event.preventDefault();
		const clickedElement = this;

		const activeLinks = document.querySelectorAll('.titles a.active');
		for (let activeLink of activeLinks) {
			activeLink.classList.remove('active');
		}

		clickedElement.classList.add('active');
		console.log('clickedElement:', clickedElement);

		const activeArticles = document.querySelectorAll('article.active');
		for (let activeArticle of activeArticles) {
			activeArticle.classList.remove('active');
		}

		const articleSelector = clickedElement.getAttribute('href');
		console.log('articleSelector:', articleSelector);

		const targetArticle = document.querySelector(articleSelector);
		console.log('targetArticle:', targetArticle);

		targetArticle.classList.add('active');
	};

	const links = document.querySelectorAll('.titles a');

	for (let link of links) {
		link.addEventListener('click', titleClickHandler);
	}

	const optArticleSelector = '.post',
		optTitleSelector = '.post-title',
		optTitleListSelector = '.titles';

	function generateTitleLinks() {
		/* remove contents of titleList */
		const titleList = document.querySelector(optTitleListSelector);
		titleList.innerHTML = '';
		/* for each article */
		const articles = document.querySelectorAll(optArticleSelector);
		for (let article of articles) {
			/* get the article id */
			const articleId = article.getAttribute('id');
			/* find the title element */
			const titleElement = article.querySelector(optTitleSelector);
			/* get the title from the title element */

			/* create HTML of the link */

			/* insert link into titleList */
		}
	}

	generateTitleLinks();
}
