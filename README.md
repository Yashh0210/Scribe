# Scribe

Scribe is a full-stack blog application with admin publishing capabilities, real-time comments, and integrated image management. It is built using modern web technologies to deliver a clean, responsive, and scalable blogging experience.

---

## Features

- Admin dashboard to create, edit, and delete blog posts  
- Real-time comment system for user engagement  
- Secure JWT-based authentication and authorization  
- Integrated image upload and optimization  
- Responsive and mobile-friendly UI  
- Optimized frontend using Vite  
- RESTful backend API built with Express  
- Deployment-ready configuration  

---

## Tech Stack

**Frontend:** React, JSX, Vite, Tailwind CSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**Authentication:** JWT  
**Image Service:** ImageKit  
**AI Integration:** Google Gemini API  
**Deployment:** Vercel  

---

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB connection string
- Gemini API key
- ImageKit API credentials

---

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Setup Backend

```bash
cd server
npm install
```

### 3. Setup Frontend

```bash
cd client
npm install
```

---

## Environment Variables

Create `.env` files in both `server/` and `client/` directories.

### server/.env

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
JWT_SECRET=your_jwt_secret
```

### client/.env

```
VITE_API_URL=http://localhost:5000
```

---

## Running the Project

### Start Backend

```bash
cd server
npm start
```

### Start Frontend (in another terminal)

```bash
cd client
npm run dev
```

The application will run at:

```
http://localhost:5173
```

---

## Project Structure

```
scribe/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
│
├── server/
│   ├── configs/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## API Endpoints

### Blog Routes

- GET /api/blogs  
- GET /api/blogs/:id  
- POST /api/blogs/:id/comments  

### Admin Routes

- POST /api/admin/blogs  
- PUT /api/admin/blogs/:id  
- DELETE /api/admin/blogs/:id  

---

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub  
2. Connect your repository to Vercel  
3. Configure environment variables  
4. Deploy  

---

## Future Improvements

- Comment moderation system  
- Blog search and filtering  
- Email notifications  
- User profile pages  
- Social media sharing  
- Dark mode toggle  
- Blog analytics dashboard  
- Performance optimization  

---

## License

This project is licensed under the MIT License.

---

Built by Yash