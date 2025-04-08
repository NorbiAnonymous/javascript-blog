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
      const articleTags = article.getAttribute("data-tags");
      console.log(articleTags);
      /* 6.split tags into array */
      const articleTagsArray = articleTags.split(" ");
      console.log(articleTagsArray);
      /* 7.START LOOP: for each tag */
      for (let tag of articleTagsArray) {
        console.log(tag);
        /* 8.generate HTML of the link */
        const tagHTML = `<li><a href="#tag-${tag}">${tag}</a></li>`;
        console.log(tagHTML);
        /* 9.add generated code to html variable */
        html = html + tagHTML;
        console.log(html);
        /* 10.END LOOP: for each tag */
      }
      /* 11.insert HTML of all the links into the tags wrapper */
      tagsWrapper.innerHTML = html;
      console.log(tagsWrapper);
      /* 12.END LOOP: for every article: */
    }
  }

  generateTags();

  function tagClickHandler(event) {
    console.log(event);
    /* 1.prevent default action for this event */
    event.preventDefault();
    /* 2.make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    console.log(clickedElement);
    /* 3.make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute("href");
    console.log(href);
    /* 4.make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace("#tag-", "");
    console.log(tag);
    /* 5.find all tag links with class active */
    const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
    console.log(activeTags);
    /* 6.START LOOP: for each active tag link */
    for (let activeTag of activeTags) {
      console.log(activeTag);
      /* 7.remove class active */
      activeTag.classList.remove("active");
      /* 8.END LOOP: for each active tag link */
    }
    /* 9.find all tag links with "href" attribute equal to the "href" constant */
    const tagLinks = document.querySelectorAll(`a[href="${href}"]`);
    console.log(tagLinks);
    /* 10.START LOOP: for each found tag link */
    for (let tagLink of tagLinks) {
      console.log(tagLink);
      /* 11.add class active */
      /* 12.END LOOP: for each found tag link */
    }
    /* 13.execute function "generateTitleLinks" with article selector as argument */
  }

  function addClickListenersToTags() {
    /* find all links to tags */
    const tagLinks = document.querySelectorAll('a[href^="#tag-"]');
    /* START LOOP: for each link */
    for (let tagLink of tagLinks) {
      /* add tagClickHandler as event listener for that link */
      tagLink.addEventListener("click", tagClickHandler);
      /* END LOOP: for each link */
    }
  }

  addClickListenersToTags();
}
