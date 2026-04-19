# ArgosMob Tech & AI — Portfolio

Creative, vibrant portfolio website for ArgosMob Tech & AI showcasing 9 client projects.

## Quick Start
```bash
cd frontend
yarn install
yarn start
```
Runs at http://localhost:3000

## Deploy to Vercel
1. Push this folder to GitHub
2. https://vercel.com/new → Import the repo
3. Settings:
   - Framework Preset: Create React App
   - Root Directory: `frontend`
   - Build Command: `yarn build`
   - Output Directory: `build`
   - Install Command: `yarn install`
4. Click Deploy. `vercel.json` handles SPA routing.

## Edit Content
All portfolio content lives in: `frontend/src/mock/mock.js`
Edit → git push → Vercel auto-redeploys.

## Assets
- Logo: `frontend/public/argosmob-logo.png` (replace to change logo)

## Projects included
School MS, Fornix, Equestrian App, Lokall (Local Business Directory), Stenna, BeingPetz, RAKSHA, MediConnect, HomeGuru
