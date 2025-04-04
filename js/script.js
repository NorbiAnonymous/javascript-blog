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

	const optArticleSelector = '.post',
		optTitleSelector = '.post-title',
		optTitleListSelector = '.titles';

	function generateTitleLinks() {
		const titleList = document.querySelector(optTitleListSelector);
		titleList.innerHTML = '';
		const articles = document.querySelectorAll(optArticleSelector);

		let html = '';

		for (let article of articles) {
			const articleId = article.getAttribute('id');
			const titleElement = article.querySelector(optTitleSelector);
			const articleTitle = titleElement.innerHTML;
			const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
			html = html + linkHTML;
		}
		titleList.innerHTML = html;

		const links = document.querySelectorAll('.titles a');
		for (let link of links) {
			link.addEventListener('click', titleClickHandler);
		}
	}
	generateTitleLinks();
}
