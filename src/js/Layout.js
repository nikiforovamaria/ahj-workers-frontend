export default class Layout {
  constructor() {
    this.body = document.body;
    this.container = document.createElement('div');
    this.container.className = 'container';
    this.timestamp = '21:30 02.01.2020';
    this.icon = 'https://www.flaticon.com/svg/vstatic/svg/4465/4465197.svg?token=exp=1618576709~hmac=45f10748628b85cbc09b6a3698a19941';
    this.description = 'laborum libero quos omnis iste laboriosam quo inventore aut magni';
  }

  loadingRender() {
    this.newsEl = document.createElement('div');
    this.newsEl.className = 'news';
    this.newsTitleEl = document.createElement('div');
    this.newsTitleEl.className = 'news__title';
    this.newsTitleEl.textContent = 'Новости мира кино';
    this.newsUpdaterEl = document.createElement('div');
    this.newsUpdaterEl.className = 'news__updater';
    this.newsUpdaterEl.textContent = 'Обновить';
    this.newsArticlesEl = document.createElement('div');
    this.newsArticlesEl.className = 'news__articles';
    this.newsEl.append(this.newsTitleEl, this.newsUpdaterEl, this.newsArticlesEl);
    this.container.append(this.newsEl);
    this.body.append(this.container);
    for (let i = 0; i < 2; i += 1) {
      this.loadingArticle(this.timestamp, this.icon, this.description);
    }
  }

  loadingArticle(timestamp, image, description) {
    this.articleEl = document.createElement('div');
    this.articleEl.className = 'article';
    this.timestampEl = document.createElement('div');
    this.timestampEl.className = 'article__timestamp loading';
    this.timestampEl.textContent = timestamp;
    this.descriptionEl = document.createElement('div');
    this.descriptionEl.className = 'article__description loading';
    this.descriptionEl.textContent = description;
    this.imageEl = document.createElement('img');
    this.imageEl.className = 'article__image loading';
    this.imageEl.style.width = `${75}px`;
    this.imageEl.style.height = `${75}px`;
    this.articleEl.append(this.timestampEl, this.imageEl, this.descriptionEl);
    this.newsArticlesEl.append(this.articleEl);
  }

  renderArticle(timestamp, image, description) {
    this.articleEl = document.createElement('div');
    this.articleEl.className = 'article';
    this.timestampEl = document.createElement('div');
    this.timestampEl.className = 'article__timestamp';
    this.timestampEl.textContent = timestamp;
    this.descriptionEl = document.createElement('div');
    this.descriptionEl.className = 'article__description';
    this.descriptionEl.textContent = description;
    this.imageEl = document.createElement('img');
    this.imageEl.src = image;
    this.imageEl.className = 'article__image';
    this.imageEl.style.width = `${75}px`;
    this.imageEl.style.height = `${75}px`;
    this.articleEl.append(this.timestampEl, this.imageEl, this.descriptionEl);
    this.newsArticlesEl.append(this.articleEl);
  }

  renderError() {
    this.errorEl = document.createElement('div');
    this.errorEl.className = 'error';
    this.errorEl.style.width = `${document.querySelector('.news').offsetWidth}px`;
    this.errorEl.style.height = `${document.querySelector('.news').offsetHeight}px`;
    this.errorTextEl = document.createElement('div');
    this.errorTextEl.className = 'error__text';
    this.p1 = document.createElement('p');
    this.p1.textContent = 'Не удалось загрузить данные';
    this.p2 = document.createElement('p');
    this.p2.textContent = 'Проверьте подключение';
    this.p3 = document.createElement('p');
    this.p3.textContent = 'и обновите страницу';
    this.errorTextEl.append(this.p1, this.p2, this.p3);
    this.errorEl.append(this.errorTextEl);
    this.body.append(this.errorEl);
  }
}
