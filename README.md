# 🚀 CI/CD Setup Guide (React + Docker + GitHub Actions + Render)

This guide explains how to set up a full CI/CD pipeline using Docker, GitHub Actions, Docker Hub, and Render.

---

# 🧱 1. Create React Project

- Create a React app (e.g., using Vite)
- Install dependencies
- Make sure the app runs locally

---

# 🐳 2. Prepare Docker

- Add a Dockerfile in your project root
- Configure it to run your React app
- Make sure the app runs on a specific port (e.g., 5173)

---

# 🧪 3. Test Docker Locally

- Build your Docker image
- Run the container
- Open your browser and confirm the app is working

---

# 🌐 4. Push Project to GitHub

- Initialize git repository
- Commit your code
- Push to GitHub (main branch)

---

# 📦 5. Create Docker Hub Repository

- Go to Docker Hub
- Create a new repository
- Note your repository name (e.g., username/app-name)

---

# 🔐 6. Add GitHub Secrets

Go to:

GitHub Repository → Settings → Secrets → Actions

Add the following:

- DOCKER_USERNAME → your Docker Hub username  
- DOCKER_PASSWORD → your Docker Hub password  
- DOCKER_IMAGE → your Docker Hub image name  
- RENDER_DEPLOY_HOOK → your Render deploy hook URL  

---

# ⚙️ 7. Setup GitHub Actions

- Create a workflow file inside `.github/workflows/`
- Configure it to:
  - Build Docker image
  - Push image to Docker Hub
  - Trigger Render deploy

---

# 🌐 8. Setup Render

- Go to Render Dashboard
- Create a new Web Service
- Select Docker as environment
- Choose deploy via Docker Image
- Enter your Docker Hub image URL

---

# 🔥 9. Enable Auto Deployment

- Go to your Render service settings
- Generate a Deploy Hook
- Add that hook URL to GitHub Secrets

---

# 🚀 10. Deploy

- Push any change to GitHub
- GitHub Actions will:
  - Build Docker image
  - Push to Docker Hub
  - Trigger Render deploy

---

# 🎉 Result

Your app will be automatically deployed every time you push code.

---

# 📌 CI/CD Flow

GitHub → GitHub Actions → Docker Hub → Render → Live App

---

# 🏁 Done!

You now have a fully automated CI/CD pipeline 🚀