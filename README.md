# Social Media Analytics Frontend

A React-based frontend web application for visualizing social media data, including:
-  Top users based on the number of posts.
-  Trending posts with the highest number of comments.
-  A live feed of recent posts with real-time updates (via polling).

---

##  Features

- **Multi-page routing** using React Router
-  **Responsive UI** with Bootstrap
-  **Real-time post updates** using polling
-  **Random images** for visual variety
-  **Sorting logic** for top users and trending posts
-  Organized project structure for scalability

---

##  Tech Stack

- React
- React Router DOM
- Bootstrap
- Node.js + npm
- Visual Studio Code

---

## Project Structure

```
social-media-analytics-frontend/
├── public/
├── src/
│   ├── components/       # Reusable UI components (e.g., Navbar)
│   ├── pages/            # Individual route views (TopUsers, TrendingPosts, Feed)
│   ├── services/         # API service layer (optional for backend communication)
│   ├── App.js            # Routing and layout
│   ├── index.js          # Entry point
│   └── App.css           # Global styles
├── package.json
└── README.md
```

---

##  Screenshots

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/social-media-analytics-frontend.git
cd social-media-analytics-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

> App will run at: [http://localhost:3000](http://localhost:3000)

---

## 🔗 Available Routes

| Route               | Description                                |
|--------------------|--------------------------------------------|
| `/`                | Live feed with real-time post updates      |
| `/top-users`       | Displays users with the most posts         |
| `/trending-posts`  | Shows top posts with the most comments     |

---

## Random Images

Posts use placeholder images from [via.placeholder.com](https://via.placeholder.com) or a pre-defined image pool for variety. You can customize this in `randomImages.js`.

---

##  Backend Integration

Replace the mock data in `src/pages/*.js` with actual API calls via:
- `fetch()`
- `axios`
- Or create services in `src/services/api.js`

Example:
```js
const response = await fetch('http://localhost:4000/api/top-users');
const data = await response.json();
```
