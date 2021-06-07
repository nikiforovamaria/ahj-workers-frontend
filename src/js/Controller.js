/* eslint-disable class-methods-use-this */
export default class Controller {
  constructor(layout, api) {
    this.layout = layout;
    this.api = api;
  }

  init() {
    this.registerWorker();
    this.layout.loadingRender();
    this.articlesEl = document.querySelector('.news__articles');
    this.newsEl = document.querySelector('.news');
    this.addUpdateListener();
  }

  addUpdateListener() {
    this.updater = document.querySelector('.news__updater');
    this.updater.addEventListener('click', () => {
      this.renderArticle();
    });
  }

  async renderArticle() {
    this.data = await this.getArticles();
    if (!this.data) {
      console.log('Controller Fail');
      this.newsEl.style.opacity = 0.1;
      this.layout.renderError();
      return;
    }
    this.articles = this.data.articles;
    while (this.articlesEl.firstChild) {
      this.articlesEl.firstChild.remove();
    }
    this.articles.forEach((article) => {
      this.layout.renderArticle(article.received, article.image, article.description);
    });
    console.log('Success');
  }

  async getArticles() {
    return this.api.getArticles();
  }

  registerWorker() {
    if (navigator.serviceWorker) {
      window.addEventListener('load', async () => {
        try {
          await navigator.serviceWorker.register(
            './service.worker.js', { scope: './' },
          );
        } catch (e) {
          console.log(e);
        }
      });
    }
  }
}
