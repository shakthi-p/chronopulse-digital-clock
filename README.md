# ⏰ Chronopulse – Digital Clock

Chronopulse is a **modern digital clock web application** built using **React, TypeScript, and Vite**.
It displays the **current time in real-time**, along with the **date**, and includes a **light/dark theme toggle** for a better user experience.

This project focuses on **frontend fundamentals**, real-time updates using JavaScript’s `Date` object, and clean UI design.

---

##  Features

*  Real-time digital clock (updates every second)
*  Displays current date
*  Light / Dark mode toggle
*  Fast and lightweight (Vite-powered)
*  Clean and responsive UI
*  Modular component-based structure

---

##  Tech Stack

* **React**
* **TypeScript**
* **Vite**
* **CSS**
* **JavaScript Date API**

## 📁 Project Structure

```
chronopulse-digital-clock/
│
├── components/
│   ├── ClockDigits.tsx
│   ├── DateDisplay.tsx
│   └── ThemeToggle.tsx
│
├── hooks/
│   └── useCurrentTime.ts
│
├── index.html
├── index.tsx
├── App.tsx
├── package.json
├── vite.config.ts
└── tsconfig.json
```

### ▶️ Run Locally

1. **Clone the repository**

```bash
git clone https://github.com/shakthi-p/chronopulse-digital-clock.git
```

2. **Navigate to the project folder**

```bash
cd chronopulse-digital-clock
```

3. **Install dependencies**

```bash
npm install
```

4. **Start the development server**

```bash
npm run dev
```

5. Open your browser and visit:

```
http://localhost:5173
```

---

## 🧠 How It Works 

* JavaScript’s `Date()` object fetches the current time
* A custom React hook updates the time every second
* Components render the time and date dynamically
* Theme toggle switches styles between light and dark mode

---

## 📌 Use Case

* Beginner-friendly frontend project
* College mini-project
* Practice with React + TypeScript
* GitHub portfolio project

---
