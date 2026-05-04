# 🚀 Zync – Real-Time Communication Platform

**Zync** is a modern real-time communication platform that enables users to connect through video conferencing and live interaction.

Inspired by platforms like Google Meet and Zoom, Zync allows users to create or join meetings, collaborate in real-time, and manage sessions seamlessly.

---

## 🌟 Features

* 🔐 Secure Authentication (Clerk)
* 🎥 Real-time Video Calls (Stream Video SDK)
* 🧑‍🤝‍🧑 Create & Join Meetings
* 🎙️ Mic, Camera & Screen Share Controls
* 🧭 Dashboard (Upcoming, Previous, Recordings)
* 🌗 Modern UI (TailwindCSS + ShadCN)
* ☁️ Easy Deployment on Vercel

---

## 🛠️ Tech Stack

* **Frontend:** Next.js (App Router)
* **Real-time Engine:** Stream Video SDK
* **Authentication:** Clerk
* **UI:** TailwindCSS + ShadCN
* **Deployment:** Vercel

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/tanayybbansal/zync.git
cd zync
```

---

### 2. Install Dependencies

```bash
npm install --legacy-peer-deps
```

---

### 3. Setup Environment Variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_secret

NEXT_PUBLIC_STREAM_API_KEY=your_stream_key
STREAM_SECRET_KEY=your_stream_secret

NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

---

### 4. Run the App

```bash
npm run dev
```

Open:
👉 http://localhost:3000

---

## 🚀 Deployment

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy 🎉

---

## 🎓 Project Overview

Zync is built as a **real-time communication system** demonstrating authentication, live video interaction, and scalable cloud integration.

---

## 🔮 Future Improvements

* 💬 Real-time chat feature
* 📩 Meeting invitations
* 🧑‍🤝‍🧑 Participant management
* 🕒 Waiting room system

---

## 👨‍💻 Author

Tanay Bansal

---
