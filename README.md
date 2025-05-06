# OSVE STUDIOS

A modern, responsive website for OSVE STUDIOS - a professional recording studio. Built with SvelteKit and deployed on Vercel.

## Features

- Modern, responsive design with Tailwind CSS
- Server-side rendering for optimal performance
- Progressive Web App (PWA) capabilities
- Optimized for SEO
- Image optimization with Vercel's built-in Image Optimization
- Interactive UI elements with smooth animations

## Tech Stack

- **Frontend Framework**: SvelteKit
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Icons**: Font Awesome
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v18.x or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/osvestudios.git
   cd osvestudios
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Deploying to Vercel

### Method 1: Direct Deployment from Git

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Create a new project on [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect SvelteKit and configure the build settings
5. Click "Deploy"

### Method 2: Using Vercel CLI

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Log in to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from your project directory:
   ```bash
   vercel
   ```

4. Follow the prompts to configure your deployment.

## Environment Variables

The following environment variables can be set in your Vercel dashboard:

- `PUBLIC_SITE_URL`: The public URL of your site (e.g., https://osvestudios.com)
- `CONTACT_EMAIL`: The email address for contact form submissions

## Project Structure

```
osvestudios/
├── src/
│   ├── components/     # Reusable UI components
│   ├── lib/            # Utility functions and shared code
│   └── routes/         # SvelteKit routes
├── static/             # Static assets (images, etc.)
├── .svelte-kit/        # SvelteKit build output
├── .vercel/            # Vercel configuration
├── svelte.config.js    # SvelteKit configuration
└── vite.config.js      # Vite configuration
```

## Notes for Maintainers

- The site uses Vercel's adapter for SvelteKit to optimize deployment
- SEO metadata is configured in the `<head>` section of each page
- The site includes a sitemap.xml and robots.txt in the static directory

## License

All rights reserved © OSVE STUDIOS
