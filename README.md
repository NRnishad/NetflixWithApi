
# Netflix Clone

This is a Netflix clone built using **React** and **Vite**, designed to replicate the look and feel of the popular streaming platform. The app fetches movie and TV show data using the **TMDB API** and displays various categories of films with interactive features.

## Features
- **Dynamic Movie Lists**: Fetches and displays movies and TV shows from the TMDB API, organized by genres.
- **Interactive UI**: Hover effects and clickable posters for an engaging user experience.
- **Video Playback**: Plays trailers via YouTube integration when you click on a movie poster.
- **Responsive Design**: Optimized to work seamlessly on different devices and screen sizes.

## Technologies Used
- **React**: For building the user interface.
- **Vite**: For a fast development environment and optimized production builds.
- **Axios**: To handle API requests.
- **TMDB API**: To fetch movie and TV show data.
- **YouTube API**: To play movie trailers.

## How to Use
1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   ```
2. Navigate to the project folder:
   ```bash
   cd netflix-clone
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Add your **TMDB API key** directly in the code where the `API_KEY` is defined (usually in `constants.js` or similar).
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open the app in your browser at the URL provided by Vite (e.g., `http://localhost:5173`).

## Build for Production
To create an optimized production build, run:
```bash
npm run build
```

This project was created as a learning exercise to explore React development, API integration, and YouTube embedding while mimicking the Netflix UI.
