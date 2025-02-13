# 🚀 Personal Portfolio & Blog Website

A **Next.js-based** Personal Portfolio & Blog Website application that allows users to **create, edit, delete, and manage blogs and projects** efficiently. This project follows modern development practices, including **API integration, authentication, dynamic routing, and server-side rendering (SSR).**

---

### 🌐 Live Demo

🔗 Live Link: Visit NS Book Shop ([#Portfolio](https://personal-portfolio-blog-client-pink.vercel.app))
🔗 Server Link: Visit NS Book Shop ([#Server](https://personal-portfolio-server-indol.vercel.app))

---

## 📌 Features

- ✅ **User Authentication** (Session Management with NextAuth.js)
- ✅ **Create, Edit, Delete Blogs & Projects**
- ✅ **Dynamic Routing for Single Blog & Project Pages**
- ✅ **Framer Motion Animations**
- ✅ **Image Upload with ImgBB**
- ✅ **Optimized for Vercel Deployment**
- ✅ **Fully Responsive UI (Mobile, Tablet, Desktop)**
- ✅ **SEO-friendly Metadata Generation**

---

## 🛠️ Tech Stack

### **Frontend**

- **Next.js 13+ (App Router)**
- **React.js**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion (Animations)**
- **Lucide React (Icons)**

### **Backend**

- **Node.js & Express.js**
- **MongoDB (Mongoose ORM)**
- **NextAuth.js (Authentication)**
- **RESTful API**

### **Deployment**

- **Vercel (Frontend)**
- **MongoDB Atlas (Database)**
- **Render / Railway (Backend API)**

---

## 🔧 Installation & Setup

### 1️⃣ **Clone the Repository**

```sh
## front end
git clone https://github.com/nayan5572/my-personal-portfolio-client
cd Personal-Portfolio-Blog-Website
```

```sh
## backend
git clone https://github.com/nayan5572/personal-portfolio-server
cd personal-portfolio-server
```

### 2️⃣ **Install Dependencies**

```sh
npm install
```

### 3️⃣ **Set Up Environment Variables**

Create a `.env` file in the root directory and add the following:

```
# API Configuration
PORT = your port
DATABASE_URL = database url
JWT_ACCESS_SECRET = Access secret key
JWT_REFRESH_SECRET = Refresh secret key

# Vercel Production API
NEXT_PUBLIC_VERCEL_API=https://personal-portfolio-server-indol.vercel.app
```

### 4️⃣ **Run the Development Server**

```sh
npm run dev
```

The frontend should now be running on **`http://localhost:3000`**.

### 5️⃣ **Run the Backend Server**

Navigate to the backend directory (if separate) and start the server:

```sh
npm run server
```

The API should now be available at **`http://localhost:5000/api`**.

---

## 📖 Usage Guide

### 📝 **Managing Blogs**

- **Create a new blog** using the `/blogs/create` page.
- **Edit/Delete blogs** from the dashboard.
- **View a single blog** by navigating to `/blogs/[id]`.

### 📂 **Managing Projects**

- **Create a new project** using `/projects/create`.
- **Edit/Delete projects** from the dashboard.
- **View a single project** at `/projects/[id]`.

---

### 📞 Contact

For inquiries or support, reach out to:

📧 Email: halder25572@gmail.com

📍 Address: Mohakhali, Dhaka, Bangladesh

Made with ❤️ by Nayan Halder

# personal-portfolio-server

# personal-portfolio-server
