# Deployment Instructions for GitHub Pages

## Quick Start

1. **Create a GitHub Repository**
   - Go to GitHub and create a new repository
   - Name it something like `portfolio` or `mahim-khan-portfolio`

2. **Initialize Git and Push Code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Modern portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Build and deployment", select "Source: GitHub Actions"
   - The workflow will automatically deploy your site

4. **Access Your Site**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
   - Wait a few minutes for the first deployment to complete

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the project
npm run build

# The static files are now in the 'out' folder
# You can deploy this folder to any static hosting service
```

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure your domain's DNS settings
3. Enable custom domain in GitHub Pages settings

## Updating the Site

Just push changes to the main branch:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

The GitHub Actions workflow will automatically rebuild and redeploy your site.

## Troubleshooting

- If images don't load, check the `next.config.js` file
- Ensure `output: 'export'` is set in the config
- Make sure `images.unoptimized` is set to `true`
- Check the Actions tab for build errors

## Local Testing

Always test locally before deploying:

```bash
npm run dev
# Open http://localhost:3000
```

Build and test the production version:

```bash
npm run build
npx serve@latest out
```
