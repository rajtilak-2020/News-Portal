// API handling
const api = {
    async fetchNews(category = 'general', query = '') {
        try {
            const baseUrl = `${CONFIG.API_BASE_URL}/top-headlines`;
            const params = new URLSearchParams({
                apikey: CONFIG.API_KEY,
                lang: 'en',
                max: CONFIG.ARTICLES_PER_PAGE,
                category: category
            });

            if (query) {
                params.set('q', query);
            }

            const response = await fetch(`${baseUrl}?${params}`);
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.errors?.[0] || 'Failed to fetch news');
            }

            const data = await response.json();
            
            if (!data.articles) {
                throw new Error('No articles found in the response');
            }

            return data.articles;
        } catch (error) {
            console.error('Error fetching news:', error.message);
            throw error;
        }
    }
};