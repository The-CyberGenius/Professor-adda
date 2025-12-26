# GitHub Setup Guide

## Commands to Run After Creating GitHub Repository

After creating your repository on GitHub, run these commands in your terminal:

```bash
# Navigate to your project folder
cd "/Users/shiva/Desktop/professor adda/professor adda website"

# Add GitHub remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Daily Workflow

### Making Changes and Updating GitHub

```bash
# 1. Check what files changed
git status

# 2. Add all changes
git add .

# 3. Commit with a message
git commit -m "Description of your changes"

# 4. Push to GitHub
git push
```

### Example Commands

```bash
# After updating navbar
git add components/navbar.js
git commit -m "Updated navbar styling"
git push

# After adding new feature
git add .
git commit -m "Added WhatsApp integration"
git push
```

## Useful Git Commands

```bash
# See all changes
git status

# See commit history
git log

# Undo last commit (keep changes)
git reset --soft HEAD~1

# See differences
git diff
```

