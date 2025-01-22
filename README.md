# 🌐 Global News Portal

[![Vercel Status](https://img.shields.io/badge/Status-Live-brightgreen?style=flat&logo=vercel&logoColor=white)](https://krajtilak-news-portal.vercel.app/)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

> 📰 A modern, responsive news aggregator powered by GNews API with a sleek dark theme interface.

## ✨ Features

- 🔍 Real-time news search
- 🗂️ Category-based filtering
- 🌙 Elegant dark theme
- 📱 Fully responsive design
- ⚡ Fast loading with skeleton placeholders
- 🔄 Auto-refresh functionality
- 📜 Infinite scroll support
- ⌚ Real-time updates

## 🏗️ Architecture

```mermaid
graph TD
    A[User Interface] -->|User Interaction| B[Event Handlers]
    B -->|API Request| C[News API Service]
    C -->|Fetch Data| D[GNews API]
    D -->|JSON Response| C
    C -->|Process Data| B
    B -->|Update UI| A
    E[Category Filter] -->|Filter Selection| B
    F[Search Input] -->|Search Query| B
    G[Scroll Events] -->|Load More| B
    
    style A fill:#3b82f6,stroke:#60a5fa,stroke-width:2px,color:#fff
    style B fill:#1f2937,stroke:#374151,stroke-width:2px,color:#fff
    style C fill:#1f2937,stroke:#374151,stroke-width:2px,color:#fff
    style D fill:#3b82f6,stroke:#60a5fa,stroke-width:2px,color:#fff
    style E fill:#1f2937,stroke:#374151,stroke-width:2px,color:#fff
    style F fill:#1f2937,stroke:#374151,stroke-width:2px,color:#fff
    style G fill:#1f2937,stroke:#374151,stroke-width:2px,color:#fff
```

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/yourusername/global-news-portal.git
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file and add your GNews API key:
```env
GNEWS_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

## 🛠️ Tech Stack

- 🌐 **Frontend**: HTML5, CSS3, JavaScript
- 🔌 **API**: GNews API
- 🎨 **Design**: Custom CSS with Dark Theme
- 🔧 **Tools**: Vite, ESLint

## 📦 Project Structure

```
global-news-portal/
├── js/
│   ├── api.js        # API handling
│   ├── app.js        # Main application logic
│   ├── config.js     # Configuration
│   ├── ui.js         # UI components
│   └── utils.js      # Utility functions
├── styles.css        # Global styles
├── index.html        # Entry point
└── README.md         # Documentation
```

## 🔄 Data Flow

```mermaid
sequenceDiagram
    participant U as User
    participant UI as Interface
    participant H as Handler
    participant A as API
    participant G as GNews

    U->>UI: Interacts (Search/Filter)
    UI->>H: Triggers Event
    H->>A: Requests Data
    A->>G: Fetches News
    G-->>A: Returns JSON
    A-->>H: Processes Response
    H-->>UI: Updates View
    UI-->>U: Shows Results
```

## 🎯 Core Features Explained

### News Fetching
- Real-time news updates using GNews API
- Efficient data caching
- Error handling with retry mechanism

### Search & Filtering
- Debounced search implementation
- Category-based filtering
- Dynamic query building

### UI/UX
- Responsive grid layout
- Skeleton loading states
- Smooth animations
- Infinite scroll

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- 💻 Desktop (1200px+)
- 💻 Laptop (1024px)
- 📱 Tablet (768px)
- 📱 Mobile (480px)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- [GNews API](https://gnews.io/) for providing the news data
- [Lucide Icons](https://lucide.dev/) for the beautiful icons
- [Inter Font](https://fonts.google.com/specimen/Inter) for typography

---

<p align="center">Made with ❤️ by K Rajtilak</p>
