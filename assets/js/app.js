// Main application logic
class NewsApp {
    constructor() {
        // State
        this.currentCategory = 'general';
        this.currentSearch = '';

        // DOM Elements
        this.searchInput = document.getElementById('searchInput');
        this.categories = document.querySelector('.categories');
        this.retryBtn = document.getElementById('retryBtn');
        this.scrollToTopBtn = document.getElementById('scrollToTop');

        // Initialize
        this.init();
    }

    init() {
        // Initialize UI
        ui.init();

        // Setup event listeners
        this.setupEventListeners();

        // Fetch initial news
        this.fetchNewsAndRender();

        // Setup scroll to top functionality
        this.setupScrollToTop();
    }

    setupEventListeners() {
        // Search handling with debounce
        const handleSearch = utils.debounce(() => {
            this.currentSearch = this.searchInput.value.trim();
            this.fetchNewsAndRender();
        }, CONFIG.DEBOUNCE_DELAY);

        this.searchInput.addEventListener('input', handleSearch);

        // Category handling
        this.categories.addEventListener('click', (e) => {
            if (e.target.closest('.category-btn')) {
                const categoryBtn = e.target.closest('.category-btn');
                this.currentCategory = categoryBtn.dataset.category;
                
                // Update active state
                document.querySelector('.category-btn.active')?.classList.remove('active');
                categoryBtn.classList.add('active');
                
                this.fetchNewsAndRender();
            }
        });

        // Retry button
        this.retryBtn.addEventListener('click', () => this.fetchNewsAndRender());
    }

    setupScrollToTop() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                this.scrollToTopBtn.classList.add('visible');
            } else {
                this.scrollToTopBtn.classList.remove('visible');
            }
        });

        this.scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    async fetchNewsAndRender() {
        try {
            utils.showLoading();
            const articles = await api.fetchNews(this.currentCategory, this.currentSearch);
            ui.renderArticles(articles);
        } catch (error) {
            utils.showError();
        } finally {
            utils.hideLoading();
        }
    }
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    new NewsApp();
});