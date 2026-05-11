# Deploy to Vercel

## Quick Deploy Steps:

1. **Download the archive**: `games4all-website.tar.gz`

2. **Extract the files**:
   ```bash
   tar -xzf games4all-website.tar.gz
   ```

3. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

4. **Deploy to Vercel**:
   ```bash
   cd [extracted-folder]
   vercel
   ```

5. Follow the prompts to link or create a new Vercel project.

## Alternative: Deploy via Vercel Dashboard

1. Go to https://vercel.com
2. Click "Add New Project"
3. Upload the extracted folder or connect your GitHub repository
4. Vercel will auto-detect the Vite framework
5. Click "Deploy"

## Environment

- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Node Version: 18.x or higher

Your site will be live at: `https://your-project-name.vercel.app`
