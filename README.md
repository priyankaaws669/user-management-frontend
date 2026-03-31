# User Management Frontend

This is the frontend of a User Management CRUD application built using React. It allows users to create, view, update, and delete user data through a simple UI.

---

## 🚀Features

* Add new users (name, age, email)
* View all users in a table
* Edit existing user details
* Delete users
* Search users by name

---

## 🛠️Tech Stack

* React (Vite)
* JavaScript (ES6)
* Fetch API
* CSS

---

## 📂 Project Structure

```
src/
 ├── App.jsx
 ├── components/
 ├── styles/
 └── main.jsx
```

---

## ⚙️ How It Works

* User interacts with form (add/edit)
* Frontend sends API requests to backend
* Backend processes request and returns response
* UI updates based on response

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|-------|--------|------------|
| GET | /users | Get all users |
| POST | /users/post | Create user |
| PATCH | /users/patch/:id | Update user |
| DELETE | /users/delete/:id | Delete user |

---

## ☁️ Deployment Details

### Frontend (S3):
- Built using Vite (`npm run build`)
- Uploaded to S3 bucket
- Static hosting enabled

---

## 🧪 Run Locally

```bash
npm install
npm run dev
```
---

## 🔗 Backend Repository
https://github.com/priyankaaws669/user-management-backend

---

## 📸 Screenshots

### Main UI
![Main UI](./main-ui.jpeg)

### Users Added
![Users](./data-added.jpeg)

### Edit Mode
![Edit](./edit-mode.jpeg)
