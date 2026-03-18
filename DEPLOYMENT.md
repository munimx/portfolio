# 🚀 Deployment Guide

## ✅ Current Status

**Portfolio Status**: 🟢 **LIVE**  
**URL**: https://munimx.github.io/portfolio/  
**Last Deploy**: March 18, 2026  
**Build Status**: ✅ Passing  
**Deploy Status**: ✅ Success  

## 📋 GitHub Pages Configuration

### Enabled Features
- ✅ GitHub Pages enabled via GitHub Actions
- ✅ HTTPS enforced
- ✅ Public repository
- ✅ Automatic deployments on push to main
- ✅ Vercel auto-deployments disabled (`vercel.json`)

### Pages Settings
```
Source: GitHub Actions
Branch: main
Build Type: workflow
URL: https://munimx.github.io/portfolio/
```

## 🔄 CI/CD Pipeline

### Workflow: Deploy to GitHub Pages
**File**: `.github/workflows/deploy.yml`  
**Trigger**: Push to main branch or manual dispatch  
**Status**: Active

### Pipeline Steps

#### 1. Build Job
- ✅ Checkout repository
- ✅ Setup Node.js 20
- ✅ Install dependencies (`npm ci`)
- ✅ Build Next.js static export (`npm run build`)
- ✅ Upload build artifacts
- ⏱️ Duration: ~41 seconds

#### 2. Deploy Job
- ✅ Deploy artifacts to GitHub Pages
- ✅ Update live site
- ⏱️ Duration: ~10 seconds

**Total Pipeline Time**: ~51 seconds

## 🎯 How to Deploy Updates

### Automatic Deployment
1. Make changes to your code
2. Commit changes locally:
   ```bash
   git add .
   git commit -m "your message"
   ```
3. Push to main branch:
   ```bash
   git push origin main
   ```
4. GitHub Actions automatically builds and deploys
5. Site is live in ~1 minute

### Manual Deployment
Trigger deployment without code changes:
```bash
gh workflow run deploy.yml
```

Or via GitHub UI:
1. Go to Actions tab
2. Select "Deploy to GitHub Pages"
3. Click "Run workflow"

## 📊 Deployment History

View all deployments:
```bash
gh run list --workflow="deploy.yml"
```

View specific deployment:
```bash
gh run view <run-id>
```

Watch deployment in real-time:
```bash
gh run watch
```

## 🔧 Configuration Files

### next.config.js
- Static export enabled (`output: 'export'`)
- Base path: `/portfolio` (for GitHub project pages)
- Images: Unoptimized (for static hosting)
- Trailing slash: Enabled

### .github/workflows/deploy.yml
- Node.js 20
- Caches npm dependencies
- Uploads to GitHub Pages artifact
- Deploys via `actions/deploy-pages@v4`

### vercel.json
- `git.deploymentEnabled: false`
- `github.enabled: false`
- Prevents parallel Vercel deployments while keeping GitHub Pages as the only active pipeline

### Required Permissions
```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

## 🌐 Accessing Your Site

### Public URLs
- **Main**: https://munimx.github.io/portfolio/
- **Repository**: https://github.com/munimx/portfolio

### Testing Locally
```bash
npm run dev
# Opens http://localhost:3000
```

### Testing Production Build
```bash
npm run build
# Check ./out directory
```

## 🐛 Troubleshooting

### Deployment Failed
1. Check workflow logs:
   ```bash
   gh run view --log-failed
   ```
2. Common issues:
   - GitHub Pages not enabled (check Settings → Pages)
   - Workflow permissions not set
   - Build errors (check build logs)

### Site Not Updating
1. Clear browser cache (Cmd/Ctrl + Shift + R)
2. Check deployment time vs your browser access time
3. Verify workflow completed successfully

### 404 Errors on Navigation
- Ensure `trailingSlash: true` in next.config.js
- Check basePath is correct
- Verify routes in build output

## 📈 Monitoring

### Check Site Health
```bash
curl -I https://munimx.github.io/portfolio/
```

Expected response: `HTTP/2 200`

### View Pages Status
```bash
gh api repos/munimx/portfolio/pages
```

### Build Logs
```bash
gh run view --log
```

## 🔐 Security

- ✅ HTTPS enforced
- ✅ No sensitive data in build
- ✅ Public repository (portfolio sites should be public)
- ✅ Workflow uses GitHub OIDC token

## 🎨 Custom Domain (Optional)

To use a custom domain:

1. Add domain to GitHub Pages settings
2. Configure DNS records:
   ```
   A     @    185.199.108.153
   A     @    185.199.109.153
   A     @    185.199.110.153
   A     @    185.199.111.153
   CNAME www  munimx.github.io
   ```
3. Update `next.config.js`:
   ```js
   basePath: '', // Remove basePath for custom domain
   ```
4. Add `CNAME` file to `public/` directory with your domain

## 📝 Notes

- First deployment may take 2-3 minutes
- Subsequent deployments take ~1 minute
- GitHub Pages has rate limits (10 builds/hour)
- Site updates are nearly instant after deployment
- Old builds are automatically replaced

---

**Status**: All systems operational ✅  
**Last Updated**: March 18, 2026
