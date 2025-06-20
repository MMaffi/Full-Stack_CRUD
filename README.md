# 📌 Full-Stack CRUD App

## 🚀 Overview
Full-Stack application built with Node.js (Express) backend and React frontend,  
using Sequelize to manage a MySQL database.  
Supports CRUD operations (Create, Read, Update, Delete) with migrations.

## 🛠 Technologies
- Backend: Node.js, Express, Sequelize, MySQL  
- Frontend: React  
- Environment variables: dotenv  
- Database CLI: Sequelize CLI  

## ✅ Features
- Full CRUD on the database  
- Migrations support with SequelizeMeta tracking  
- Configuration via .env for multiple environments  

## 🔧 Local Setup

### Prerequisites
- Node.js  
- MySQL  
- Git

### 1. Clone the repo
```bash
git clone https://github.com/MMaffi/Full-Stack_CRUD.git
```

### 2. Install backend dependencies
```bash
cd backend
npm install
```

### 3. Create .env file with your DB credentials
```bash
DB_HOST=localhost
DB_USER=seu_usuario_aqui
DB_PASS=sua_senha_aqui
DB_NAME=nome_do_banco
DB_DIALECT=seu_dialect || 'mysql'
```

### 4. Run migrations

```bash
npx sequelize db:migrate
```

### 5. Start the backend server
```bash
npm start
```

### 6. In another terminal, install frontend dependencies
```bash
cd ../frontend
npm install
```

### 7. Start the frontend
```bash
npm start
```

Open http://localhost:3000 in your browser.

## ⚙️ Useful Commands

```npx sequelize db:migrate``` → run migrations

```npx sequelize db:migrate:undo:all``` → undo all migrations

```npm start``` → start backend or frontend server

## 🧭 API Endpoints (example for /api/users)
```GET /``` → list users

```POST /``` → create user

```GET /:id``` → get user by ID

```PUT /:id``` → update user

```DELETE /:id``` → delete user

## 📦 Deployment
Set environment variables in production

Run migrations on the production server

Start backend and frontend (e.g. Heroku, Vercel)

## 🤝 Contributing
1. Fork the repo

2. Create a feature branch

3. Commit with clear messages

4. Open a Pull Request
