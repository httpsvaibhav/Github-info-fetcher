# 🔍 GitHub User Info Fetcher

A simple and clean frontend project that allows users to fetch any public GitHub profile information by entering a username and selecting what data they want to view.

This project uses **HTML, CSS, and JavaScript (Fetch API)** to interact with the GitHub REST API and display selected user details such as login, ID, avatar URL, repos URL, followers count, and more.

---

## 🚀 Features

- Enter any GitHub username to fetch user data  
- Dropdown menu containing **all available GitHub user info fields**  
- Clean dark-themed UI inspired by GitHub  
- Displays values dynamically using Fetch API  
- Special rendering for avatar images  
- Error handling for:
  - Empty username  
  - User not found  
  - Null or missing fields  

---

## 🛠️ Tech Used

- **HTML5** – Structure  
- **CSS3** – Styling (Dark theme)  
- **JavaScript (ES6)** – Fetch API for calling GitHub REST endpoints  
- **GitHub API** – Data source

---

## Data Flow
🔘 Click Button
     ↓
🧐 Validate Username
     ↓
🌐 Build API URL
     ↓
📡 fetch(url)
     ↓
📦 Parse JSON (response.json)
     ↓
🎯 Display Selected Data
     ↓
🚨 Handle Errors (404, null values, etc.)



## 
<img width="1436" height="768" alt="image" src="https://github.com/user-attachments/assets/303b911d-834f-4889-ace4-61cfc5aef774" />


> *(Add your project screenshot here)*  
Example:
