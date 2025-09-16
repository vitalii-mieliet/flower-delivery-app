# 🌸 Flower Delivery App

A web application where users can browse flower shops, add bouquets or single flowers to the shopping cart, and place delivery orders.
This project implements the **base level** of the Flower Delivery App test task, demonstrating skills in **React**, **TypeScript**, **Node.js**, **Express**, and **MongoDB**.

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Live Demo](#-live-demo)
- [API](#-api)
- [Getting Started](#-getting-started)

  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)

- [Project Structure](#-project-structure)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 📋 About the Project

The **Flower Delivery App** allows users to:

- Browse flower shops and select bouquets or single flowers.
- Add items to a shopping cart.
- Fill in delivery details (email, phone, address) and submit an order.
- View order details including ID, items, price, and delivery info.

This project implements the **base level** of the test task. It is hosted online and connected to a live backend.

**Accomplished Level:** Base (sufficient to pass the test assignment stage)

**GitHub Repository:** [https://github.com/vitalii-mieliet/flower-delivery-app](https://github.com/vitalii-mieliet/flower-delivery-app)

---

## 🛠 Tech Stack

**Frontend**

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-007FFF?logo=mui&logoColor=white) ![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white) ![Formik](https://img.shields.io/badge/Formik-FFCC00?logo=formik&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=reactrouter&logoColor=white) ![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?logo=redux&logoColor=white) ![React Toastify](https://img.shields.io/badge/React_Toastify-FF6F61?logo=react&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)

**Backend**

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white) ![Mongoose](https://img.shields.io/badge/Mongoose-880000?logo=mongoose&logoColor=white) ![Joi](https://img.shields.io/badge/Joi-008080?logo=Joi&logoColor=white) ![pino](https://img.shields.io/badge/pino-FF0000?logo=pino&logoColor=white) ![cors](https://img.shields.io/badge/cors-1E90FF?logo=cors&logoColor=white) ![dotenv](https://img.shields.io/badge/dotenv-000000?logo=dotenv&logoColor=white)

**DevOps & Tools**

![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white) ![Render](https://img.shields.io/badge/Render-00979D?logo=render&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=black) ![Concurrently](https://img.shields.io/badge/Concurrently-FF5733?logo=concurrently&logoColor=white)

---

## ✨ Features

- 🏬 Filter bouquets by shop on the catalog page
- 🛒 Add items to cart from the catalog
- 🗑 Remove items from the cart on the Cart page
- 🔢 Change item quantity on the Cart page
- 📦 Order submission stored in MongoDB
- 🕒 Delivery details (name, email, phone, address)
- 🛍 Dynamic cart item count displayed on the shopping cart icon
- 🌍 Deployed with public live URL

---

## 🖼 Screenshots

_(Screenshots will be added later)_

---

## 🌍 Live Demo

🔗 [Flower Delivery App Live](https://flower-delivery-app-azure.vercel.app/)

## 🔗 API

Backend API is available at: [https://flowerapp-kagj.onrender.com](https://flowerapp-kagj.onrender.com)

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn
- MongoDB Atlas account (or local MongoDB instance)

### Installation

Clone the repository:

```bash
git clone https://github.com/vitalii-mieliet/flower-delivery-app.git
cd flower-delivery-app
```

Install frontend dependencies:

```bash
npm install --prefix client
```

Install backend dependencies:

```bash
npm install --prefix server
```

### Running Locally

Start both client and server (monorepo):

```bash
npm run dev
```

Or start individually:

```bash
npm run dev:server
npm run dev:client
```

---

## 📁 Project Structure

```bash
flower-delivery-app/
├─ client/         # Frontend (React + TS + Vite)
│  ├─ src/
│  │  ├─ assets/
│  │  ├─ components/
│  │  ├─ constants/
│  │  ├─ pages/
│  │  ├─ redux/
│  │  ├─ service/
│  │  ├─ styles/
│  │  ├─ types/
│  │  ├─ utils/
│  │  └─ validation/

├─ server/         # Backend (Node.js + Express + MongoDB)
│  ├─ src/
│  │  ├─ constants/
│  │  ├─ controllers/
│  │  ├─ db/
│  │  ├─ middlewares/
│  │  ├─ routes/
│  │  ├─ services/
│  │  ├─ utils/
│  │  └─ validation/
└─ README.md
```

---

## 🛣 Roadmap

- [x] Base functionality (shops, cart, orders)
- [ ] Sorting & favorites
- [ ] Cart persistence (localStorage)
- [ ] Pagination for shops
- [ ] Google Maps integration for delivery
- [ ] Orders history page
- [ ] Coupons & discounts

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the issues page.

---

## 📜 License

Distributed under the MIT License. See LICENSE for more information.

---

## 📬 Contact

Author: Will (Fullstack Developer in progress)
📧 Email: [your-email@example.com](mailto:your-email@example.com)
🔗 Portfolio: your-portfolio-link.com
💼 LinkedIn: your-linkedin
