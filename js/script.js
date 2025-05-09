"use strict";
{
  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;
    const activeLinks = document.querySelectorAll(".titles a.active");
    for (let activeLink of activeLinks) {
      activeLink.classList.remove("active");
    }

    clickedElement.classList.add("active");

    const activeArticles = document.querySelectorAll("article.active");
    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove("active");
    }

    const articleSelector = clickedElement.getAttribute("href");
    const targetArticle = document.querySelector(articleSelector);

    targetArticle.classList.add("active");
  };

  const optArticleSelector = ".post";
  const optTitleSelector = ".post-title";
  const optTitleListSelector = ".titles";
  const optArticleTagsSelector = ".post-tags .list";
  const optArticleAuthorSelector = ".post-author";

  function generateTitleLinks(customSelector = "") {
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = "";
    const articles = document.querySelectorAll(
      customSelector || optArticleSelector
    );

    let html = "";

    for (let article of articles) {
      const articleId = article.getAttribute("id");
      const titleElement = article.querySelector(optTitleSelector);
      const articleTitle = titleElement.innerHTML;
      const linkHTML =
        '<li><a href="#' +
        articleId +
        '"><span>' +
        articleTitle +
        "</span></a></li>";
      html = html + linkHTML;
    }
    titleList.innerHTML = html;

    const links = document.querySelectorAll(".titles a");
    for (let link of links) {
      link.addEventListener("click", titleClickHandler);
    }
  }

  generateTitleLinks();

  function generateTags() {
    const articles = document.querySelectorAll(optArticleSelector);

    for (let article of articles) {
      const tagsWrapper = article.querySelector(optArticleTagsSelector);
      let html = "";
      const articleTags = article.getAttribute("data-tags");
      const articleTagsArray = articleTags.split(" ");

      for (let tag of articleTagsArray) {
        const tagHTML = `<li><a href="#tag-${tag}">${tag}</a></li>`;
        html = html + tagHTML;
      }
      tagsWrapper.innerHTML = html;
    }
  }

  generateTags();

  function tagClickHandler(event) {
    event.preventDefault();
    const clickedElement = this;
    const href = clickedElement.getAttribute("href");
    const tag = href.replace("#tag-", "");
    const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');

    for (let activeTag of activeTags) {
      activeTag.classList.remove("active");
    }

    const tagLinks = document.querySelectorAll(`a[href="${href}"]`);

    for (let tagLink of tagLinks) {
      tagLink.classList.add("active");
    }

    generateTitleLinks(`[data-tags~="${tag}"]`);
  }

  function addClickListenersToTags() {
    const tagLinks = document.querySelectorAll('a[href^="#tag-"]');

    for (let tagLink of tagLinks) {
      tagLink.addEventListener("click", tagClickHandler);
    }
  }

  addClickListenersToTags();

  function generateAuthors() {
    const articles = document.querySelectorAll(optArticleSelector);

    for (let article of articles) {
      const authorWrapper = article.querySelector(optArticleAuthorSelector);
      const author = article.getAttribute("data-author");
      const authorHTML = `<a href="#author-${author}">${author}</a>`;
      authorWrapper.innerHTML = authorHTML;
    }
  }

  function addClickListenersToAuthors() {
    const authorLinks = document.querySelectorAll('a[href^="#author-"]');

    for (let link of authorLinks) {
      link.addEventListener("click", authorClickHandler);
    }
  }

  function authorClickHandler(event) {
    event.preventDefault();

    const clickedElement = this;
    const href = clickedElement.getAttribute("href");
    const author = href.replace("#author-", "");
    const activeAuthors = document.querySelectorAll(
      'a.active[href^="#author-"]'
    );
    for (let authorLink of activeAuthors) {
      authorLink.classList.remove("active");
    }

    const matchingAuthorLinks = document.querySelectorAll(`a[href="${href}"]`);
    for (let link of matchingAuthorLinks) {
      link.classList.add("active");
    }

    generateTitleLinks(`[data-author="${author}"]`);
  }
  generateAuthors();
  addClickListenersToAuthors();
  addClickListenersToTags();
}
