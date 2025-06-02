# SWD392 Frontend

This is the frontend project for **SWD392**, built using [React](https://reactjs.org/) and [Vite](https://vitejs.dev/). It serves as the user interface for interacting with the backend APIs.

## 🚀 Features

- ⚛️ React 18 + Vite
- 📦 Fast bundling and hot module replacement
- 🔐 Authentication (including Google & Facebook login)
- 🔄 RESTful API Integration
- 💅 Modern UI with SCSS and Iconify icons
- 🌐 React Router for client-side routing
- 🔥 React Hot Toast for user-friendly notifications

---

## 📁 Project Structure

swd392_fe/
├── public/
├── src/
│ ├── apis/
│ ├── assets/
│ ├── components/
│ ├── Contexts/
│ ├── pages/
│ ├── utils/
│ ├── App.jsx
│ └── main.jsx
├── .env
├── package.json
└── vite.config.js

yaml
Sao chép
Chỉnh sửa

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/nhathao04/swd392_fe.git
cd swd392_fe
2. Install dependencies
bash
Sao chép
Chỉnh sửa
npm install
3. Create environment file
Create a .env file at the root of the project:

env
Sao chép
Chỉnh sửa
VITE_APP_API_URL=http://localhost:5000
Modify the URL depending on your backend API server.

4. Run the development server
bash
Sao chép
Chỉnh sửa
npm run dev
The app should now be running at: http://localhost:5173

📦 Available Scripts
npm run dev — Start the development server

npm run build — Build the app for production

npm run preview — Preview the production build

npm run lint — Run code linter (if configured)

🔐 Authentication
This project supports:

Username & password login

Google OAuth login

Facebook OAuth login

Ensure your backend supports these routes:

POST /auth/login

GET /auth/google

GET /auth/facebook

🧪 Dependencies
React – Frontend framework

Vite – Build tool

React Router – Routing

React Query – Data fetching

Iconify – Icons

React Hot Toast – Notifications

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss the change.