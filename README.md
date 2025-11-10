# 🐺 Wolf & Villain — 3D Developer Portfolio

### Built by [Mariselvam A](https://www.linkedin.com/in/mariselvama)

Fast, animated, and designed for impact — this portfolio blends **React**, **GSAP**, and **Three.js** into a smooth Awwwards-style web experience. Every scroll and animation is handcrafted to reflect the craft behind every project.

> ⚡ Crafted with precision — powered by Vite, TailwindCSS, React Three Fiber, and GSAP motion design.

<br/>
<div>
  <img src="https://private-user-images.githubusercontent.com/226238675/512017118-9543916f-4a18-425a-b940-c3562c128438.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjI3NjAwNTUsIm5iZiI6MTc2Mjc1OTc1NSwicGF0aCI6Ii8yMjYyMzg2NzUvNTEyMDE3MTE4LTk1NDM5MTZmLTRhMTgtNDI1YS1iOTQwLWMzNTYyYzEyODQzOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTExMFQwNzI5MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03MmY2NmI1NTRlYTgxZjQ4NzcyMWRiZDA2NDkwMGYxNDJjZTQ5OGY2ZWQyODYyNTA4NTc1MTlkYTBjM2IwMTZjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.OrvEq4LUK2kByy1Oqc5kln3z6Nx8-qw6jqY4uejrOdg" alt="Hero Preview" style="border-radius: 8px;"/>
  <div style="display: flex; justify-content: space-between; margin: 20px 0;">
    <img src="https://private-user-images.githubusercontent.com/226238675/512017752-ef9068f1-e7d8-4974-83d5-083243367d53.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjI3NjAxMjMsIm5iZiI6MTc2Mjc1OTgyMywicGF0aCI6Ii8yMjYyMzg2NzUvNTEyMDE3NzUyLWVmOTA2OGYxLWU3ZDgtNDk3NC04M2Q1LTA4MzI0MzM2N2Q1My5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTExMFQwNzMwMjNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zMjU0MGM5MjA3YzQyZTExZDhmNDhmZWEzYzJmMDQ4Zjk1MWEwNWZjNTMwZWNhY2IxNzdjZWRmY2YzZDA0NmRlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.NOI9E8jcbExWohC2sTfoZy70iifPNK9ZPX8WoxG55cA" alt="Work Preview" style="width: 32%; border-radius: 8px;"/>
    <img src="https://github.com/user-attachments/assets/f22b9749-85ed-434f-a5f6-df1f8e221103" alt="Contact Summary" style="width: 32%; border-radius: 8px;"/>
    <img src="https://private-user-images.githubusercontent.com/226238675/512017941-c17091b9-1fbe-40ee-89c5-c8e2fba7afc0.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjI3NjAxNDgsIm5iZiI6MTc2Mjc1OTg0OCwicGF0aCI6Ii8yMjYyMzg2NzUvNTEyMDE3OTQxLWMxNzA5MWI5LTFmYmUtNDBlZS04OWM1LWM4ZTJmYmE3YWZjMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTExMFQwNzMwNDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00YzJhMDkwZmIwMzg0NGRjOGFiODA2NjQzNmZiOTU1MTRkMjdjYzVhZGQxMWQ3N2U1ZGZhNGFiMWIwZWE0ODc3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.a-veoICHsqfOfSRmf8b4lRryZxr4lw5QMtgMx4WWGaE" alt="Contact" style="width: 32%; border-radius: 8px;"/>
  </div>
</div>

---

## 🚀 Tech Stack

| Technology          | Purpose                                          |
| ------------------- | ------------------------------------------------ |
| **React (Vite)**    | Lightning-fast frontend and production bundling  |
| **Tailwind CSS**    | Utility-first responsive design system           |
| **GSAP**            | Timeline and scroll-based motion animations      |
| **Three.js + Drei** | Immersive 3D visuals and interactive hero scenes |
| **React Scroll**    | Smooth section navigation and scroll linking     |

---

## ✨ Features

- 🎬 Fully animated Awwwards-style 3D landing experience
- 🧭 Responsive, animated Navbar with GSAP transitions
- 🪄 Scroll-triggered motion and content reveal effects
- 🖼️ Dynamic projects section with hover previews
- ✍️ Custom About section and interactive contact CTA
- ⚡ Optimized performance and mobile responsiveness

---

## 🧩 Project Philosophy

> “Obsessed with building fast, intuitive apps — from pixel-perfect React UIs to bulletproof serverless backends. Every line of code is a promise: quality users can feel.”

This portfolio represents the creative studio **Wolf & Villain** — where design meets motion and precision meets art.

---

## 📦 Setup & Installation

```bash
git clone https://github.com/mariselvam-a/mariselvam-portfolio.git
cd mariselvam-portfolio
npm install
npm run dev
```

> Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ⚙️ Build & Deploy (for Netlify)

```bash
npm run build
```

Then deploy the generated `dist/` folder via **Netlify** or **Vercel**.

> Build command: `npm run build`  
> Publish directory: `dist`

---

## 🔗 Assets

All design assets and icons are stored locally in `/public/assets` or `/public/logo`.

---

## 🧠 Customization

You can modify key sections inside:

| File                     | Description                                   |
| ------------------------ | --------------------------------------------- |
| `src/constants/index.js` | Text, links, and social media info            |
| `src/components/`        | Core UI sections (Hero, About, Work, Contact) |
| `tailwind.config.js`     | Theme colors, fonts, and layout settings      |

---

## 🌐 Connect

- 💼 [LinkedIn](https://www.linkedin.com/in/mariselvama)
- 🐙 [GitHub](https://github.com/mariselvam-a)
- ✉️ avmariselvambiz@gmail.com

---

## 🐺 About “Wolf & Villain”

> Building experiences that bite — and charm.  
> A one-man creative dev studio by **Mariselvam A**, focused on fast, immersive, and emotionally-crafted web applications.

---

## 📣 Like the Project?

If this portfolio inspired you or helped with your own build:

- ⭐ Star the repo on GitHub
- 💬 Connect with me on LinkedIn
- 🚀 Let’s collaborate!

---

© 2025 **Wolf & Villain** — Designed & Developed by Mariselvam A
