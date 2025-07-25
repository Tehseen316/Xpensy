Xpensy Expense Tracker (React + Node.js + Express + MongoDB)

Project Objectives

To solve the problem of ineffective personal finance management by building a secure, scalable, and responsive expense tracking system with CRUD functionality, category-based filtering, visual analytics, and transaction history

Tech Stack

- Frontend: React (Vite) + Tailwind CSS  + React Router
- Backend: Node.js + Express + Mongoose
- Database: MongoDB (Cloud - MongoDB Atlas)
- Deployment: Render (Frontend & Backend), MongoDB Atlas (Database)
- Security: JWT, HttpOnly Cookies

Key Features

- User Authentication: JWT, bcrypt, HttpOnly secure cookies
- Dashboard Analytics: Income vs. Expense visualization
- Transaction Management: Add, edit, delete, filter by date/type/category
- Custom Categories: User-defined categories for personalization




This repository contains a full-stack web application with the following structure:

🗂️ Project Structure
- Frontend: React (inside frontend/)
- Backend: Node.js + Express + MongoDB (inside backend/)

To run this project locally, follow the steps below:

 
📦 Backend Setup (/backend)
- Node.js 
- MongoDB (local or cloud instance like MongoDB Atlas)

Installation


cd backend
npm install

Environment Variables
PORT = 8000
MONGO_URI = your_mongodb_connection_string

Run the Server
npm start
The backend will be running on http://localhost:8000


 Frontend Setup (/frontend)

Installation

cd frontend
npm install

run the server cmd
npm run dev

Environment variable for frontend
VITE_REACT_APP_API_BASE_URL 

Frontend Live Url: https://xpensify-k23p.onrender.com/
Backend Live Url: https://xpensify-server.onrender.com
