// Utility functions
const utils = {
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    formatDate(dateString) {
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return new Date(dateString).toLocaleDateString(undefined, options);
    },

    createSkeletonCard() {
        return `
            <div class="news-card">
                <div class="skeleton skeleton-image"></div>
                <div class="news-content">
                    <div class="skeleton skeleton-text" style="width: 40%"></div>
                    <div class="skeleton skeleton-text skeleton-title"></div>
                    <div class="skeleton skeleton-text"></div>
                    <div class="skeleton skeleton-text"></div>
                    <div class="skeleton skeleton-text" style="width: 30%"></div>
                </div>
            </div>
        `;
    },

    showError() {
        document.getElementById('newsGrid').classList.add('hidden');
        document.getElementById('loadingSkeletons').classList.add('hidden');
        document.getElementById('errorMessage').classList.remove('hidden');
    },

    hideError() {
        document.getElementById('errorMessage').classList.add('hidden');
    },

    showLoading() {
        document.getElementById('newsGrid').classList.add('hidden');
        document.getElementById('loadingSkeletons').classList.remove('hidden');
        this.hideError();
    },

    hideLoading() {
        document.getElementById('loadingSkeletons').classList.add('hidden');
        document.getElementById('newsGrid').classList.remove('hidden');
    }
};