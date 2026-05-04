
# Zync – Real Time Chat and Modern Video Conferencing Web App

zync is a modern and user-friendly **video conferencing platform** similar to Google Meet or Zoom.  
It allows users to start or join meetings, share screens, manage participants, and access meeting history — all powered by **Stream Video SDK** and **Clerk Authentication**.

This project is built using the **Next.js App Router**, **TailwindCSS**, **ShadCN UI**, and **Stream Video React SDK**.

---

## ⭐ Features

| Feature | Description |
|--------|-------------|
| 🔐 Authentication | Secure login/signup using **Clerk** |
| 🎥 Real-time Video Calls | Powered by **Stream Video SDK** |
| 🧑‍🤝‍🧑 Create & Join Meetings | Users can host or join via unique meeting ID |
| 🎙️ Toggle Mic, Camera & Screen Share | Full modern meeting controls |
| 🧭 Dashboard | See **Upcoming**, **Previous**, and **Personal Room** |
| 🔁 Recording Support | Access & view past sessions |
| 🌗 Modern UI | Beautiful UI with Tailwind + ShadCN |
| ☁️ Deployed Easily | Optimized for **Vercel** |

---

## 🛠️ Tech Stack

| Category | Technology Used |
|---------|-----------------|
| Frontend Framework | **Next.js (App Router)** |
| Video Calls | **Stream Video SDK** |
| Authentication | **Clerk** |
| UI Framework | **TailwindCSS + ShadCN** |
| Animation & Interactions | **React Hooks + ShadCN Components** |
| Deployment | **Vercel** |

---

## 📂 Folder Structure

```

src/
├─ app/                     # App Router pages
│   ├─ (auth)/              # Sign-in / Sign-up pages (Clerk)
│   ├─ (root)/              # Authenticated dashboard routes
│   │   ├─ (home)/          # Home + Upcoming + Previous + Recordings
│   │   └─ meeting/[id]     # Actual meeting UI
│   └─ layout.tsx           # Root layout wrapper
│
├─ components/              # Shared UI components
├─ providers/
│   └─ StreamClientProvider.tsx  # Stream client wrapper
│
├─ actions/
│   └─ stream.actions.ts    # Secure token provider for Stream calls
│
├─ lib/                     # Config & helpers
└─ middleware.ts            # Auth protection across routes

````

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/connecto.git
cd connecto
````

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

---

## 🔑 Environment Variables Setup

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key

NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Where to get keys:

| Service      | Get Keys From              | Link                                                       |
| ------------ | -------------------------- | ---------------------------------------------------------- |
| Clerk        | Dashboard → API Keys       | [https://dashboard.clerk.com](https://dashboard.clerk.com) |
| Stream Video | Dashboard → Video API Keys | [https://getstream.io/video](https://getstream.io/video)   |

---

## ▶️ Run the Development Server

```bash
npm run dev
```

App will be available at:

```
http://localhost:3000
```

---

## 🧪 Core Video Logic (How Meetings Work)

1. User logs in using Clerk
2. `StreamClientProvider` initializes a video client with their identity
3. On starting/joining a meeting, a **room** is created with:

   ```ts
   const call = client.call("default", roomId);
   await call.join();
   ```
4. UI components like:

   ```tsx
   <Call>
     <SpeakerLayout />
     <CallControls />
   </Call>
   ```

   handle camera, mic, screen share, etc.

**No WebRTC setup required** — Stream handles it internally.

---

## 🌍 Deploying on Vercel

```bash
npm run build
```

Then deploy:

* Push code to GitHub
* Go to [https://vercel.com](https://vercel.com) → New Project → Import repo
* Add environment variables under **Project → Settings → Environment Variables**

Click **Deploy** 🎉

---

## 🧱 Future Improvements (Optional)

* ✅ Chat inside meeting
* ✅ Waiting room / Lobby
* ✅ More meeting layouts
* ✅ Participants list management
* ✅ Send Meeting Invites via Email

---

## 📝 License

This project is **Open Source** and free to use.

---

## ❤️ Contributing

Pull Requests are welcome!
Feel free to improve UI, add features, or optimize logic.

---

## ⭐ Show Support

If you like this project:

```
⭐ Star the repo
```

It motivates further development 😊
