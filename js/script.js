"use strict";
{
  const titleClickHandler = function (event) {
    console.log("Link was clicked!");
    console.log(event);

    event.preventDefault();
    const clickedElement = this;

    const activeLinks = document.querySelectorAll(".titles a.active");
    for (let activeLink of activeLinks) {
      activeLink.classList.remove("active");
    }

    clickedElement.classList.add("active");
    console.log("clickedElement:", clickedElement);

    const activeArticles = document.querySelectorAll("article.active");
    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove("active");
    }

    const articleSelector = clickedElement.getAttribute("href");
    console.log("articleSelector:", articleSelector);

    const targetArticle = document.querySelector(articleSelector);
    console.log("targetArticle:", targetArticle);

    targetArticle.classList.add("active");
  };

  const optArticleSelector = ".post";
  const optTitleSelector = ".post-title";
  const optTitleListSelector = ".titles";
  const optArticleTagsSelector = ".post-tags .list";

  function generateTitleLinks() {
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = "";
    const articles = document.querySelectorAll(optArticleSelector);

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
    console.log("optArticleTagsSelector:", optArticleTagsSelector);
    /* 1.find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles);
    /* 2.START LOOP: for every article: */
    for (let article of articles) {
      console.log(article);
      /* 3.find tags wrapper */
      const tagsWrapper = article.querySelector(optArticleTagsSelector);
      console.log(tagsWrapper);
      /* 4.make html variable with empty string */
      let html = "";
      console.log(html);
      /* 5.get tags from data-tags attribute */
      /* 6.split tags into array */
      /* 7.START LOOP: for each tag */
      /* 8.generate HTML of the link */
      /* 9.add generated code to html variable */
      /* 10.END LOOP: for each tag */
      /* 11.insert HTML of all the links into the tags wrapper */
      /* 12.END LOOP: for every article: */
    }
  }

  generateTags();
}
