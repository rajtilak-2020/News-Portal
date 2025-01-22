// UI handling
const ui = {
    renderArticle(article) {
        return `
            <article class="news-card">
                <img src="${article.image || 'https://source.unsplash.com/random/800x600/?news'}" 
                     alt="${article.title}"
                     loading="lazy">
                <div class="news-content">
                    <div class="news-source">${article.source.name}</div>
                    <h2 class="news-title">${article.title}</h2>
                    <p class="news-description">${article.description}</p>
                    <div class="news-date">${utils.formatDate(article.publishedAt)}</div>
                </div>
            </article>
        `;
    },

    renderArticles(articles) {
        const newsGrid = document.getElementById('newsGrid');
        newsGrid.innerHTML = articles.map(article => this.renderArticle(article)).join('');
    },

    renderLoadingSkeletons() {
        const skeletonsContainer = document.getElementById('loadingSkeletons');
        skeletonsContainer.innerHTML = Array(CONFIG.ARTICLES_PER_PAGE)
            .fill(utils.createSkeletonCard())
            .join('');
    },

    setupScrollToTop() {
        const scrollToTopBtn = document.getElementById('scrollToTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    },

    setupCategoryButtons() {
        const categories = document.querySelector('.categories');
        
        categories.addEventListener('click', (e) => {
            if (e.target.classList.contains('category-btn')) {
                document.querySelector('.category-btn.active').classList.remove('active');
                e.target.classList.add('active');
            }
        });
    },

    init() {
        this.renderLoadingSkeletons();
        this.setupScrollToTop();
        this.setupCategoryButtons();
    }
};