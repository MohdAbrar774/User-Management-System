# User Management System (Internship Assignment)

A modular full-stack application built using **React, Vite, TypeScript** on the frontend, and **Express, Mongoose, MongoDB Atlas** on the backend.

---

## 🎥 Video Walkthrough
* 🍿 **Watch the Project Demo:**  https://drive.google.com/file/d/1SM7BQP_Skuvskybngj8aBli62uu-uqNX/view?usp=drive_link

---

## 📂 Project Architecture

```text
User Management System/
├── backend/                # Express API & Mongoose configurations
│   ├── src/                
│   │   ├── config/         # Mongoose database connection setup
│   │   ├── controllers/    # Request handling & business logic
│   │   ├── models/         # Database Schemas (User.ts / User.js)
│   │   └── routes/         # Express API Endpoints         
│   ├── server.js           # App Entry Point
│   └── .env.example        # Backend environment template
│
└── frontend/               # Vite + React Client App
    ├── src/
    │   ├── components/     # Decoupled Presentation views (UserForm, UserList)
    │   ├── services/       # Centralised API configurations (Axios clients)
    │   ├── types/          # Strict TypeScript interface blueprints
    │   ├── App.css         # Parent Layout StyleSheet
    │   ├── App.tsx         # Parent Layout Coordinator
    │   └── main.tsx
    └── vite.config.ts      # Proxy redirect configuration
```

---


## 🛠️ Prerequisites

Ensure you have the following installed on your local machine:

* **Node.js** (v18.0.0 or higher)
* **npm** (v9.0.0 or higher)

> No local MongoDB installation is required. The project includes a pre-whitelisted MongoDB Atlas sandbox database for evaluation purposes.

---

## 🚀 Quick Start Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd user-management-system
```

### 2. Start the Backend

```bash
cd backend
npm install
cp .env.example .env
npm start
```

Server runs on:

```text
http://localhost:3000
```

### 3. Start the Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Application runs on:

```text
http://localhost:5173
```

---

## ⚙️ Environment Variables

A ready-to-use MongoDB Atlas sandbox database is provided through the `.env.example` file.

```env
MONGO_URI=<sandbox-mongodb-atlas-uri>
PORT=3000
```

Simply copy `.env.example` to `.env` before starting the backend:

```bash
cp .env.example .env
```

No additional MongoDB setup is required.

---
