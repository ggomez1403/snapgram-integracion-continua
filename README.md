<!---->

<div align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>
    <h1>SNAPGRAM</h1>
    <h3>Developed with the software and tools below.</h3>
</div>

<p align="center">
  <a href="https://skillicons.dev">
    <img src=https://skillicons.dev/icons?i=html,css,ts,react,tailwind,vite,docker,jenkins,sentry,githubactions,vercel,appwrite />
  </a>
</p>

---

## 📍 Overview

Continuous integration is a software development practice that involves
regularly merging and testing a project's code as it is developed. This helps
detect errors and problems early, allowing for faster and more reliable delivery
of software.

The “Snapgram” app itself is a web platform that allows users to share photos
and videos with their network of friends. The app aims to provide a safe and
familiar environment to share precious moments and express yourself creatively.

In short, it is a project focused on the continuous integration of the Snapgram
web platform. It offers features like security, profile customization,
multimedia interaction, and real-time notifications, all backed by a
well-structured MVC architecture.

---

## 📦 Features

1. Continuous Integration: The repository is designed to enable efficient
   continuous integration through the use of appropriate tools and techniques.
   This ensures that any changes to the code will be automatically tested and
   integrated seamlessly with the main project.

2. MVC Architecture: The application uses the Model-View-Controller (MVC)
   architecture pattern for a clear separation of responsibilities and to
   facilitate maintenance and scalability of the project.

3. Security: Snapgram places a strong emphasis on the security of user
   information. Encryption and authentication measures will be implemented to
   protect the privacy of personal data and interactions on the platform.

4. Intuitive User Interface: Snapgram's user interface is easy to use and has
   been designed with user experience in mind. It provides smooth navigation and
   clear functionality to ensure that users can share content effectively.

5. Profile Customization: Users have the ability to customize their profiles,
   including profile photo, bio, and privacy settings. This allows them to show
   off their unique personality and control who can see their content.

6. Share media: Snapgram allows users to upload and share photos and videos
   quickly and easily. They can also apply filters and edit their content before
   publishing, giving them creative options to express themselves.

---

## 📂 Repository Structure

```sh
└── snapgram-integracion-continua/
    ├── .eslintrc.cjs
    ├── components.json
    ├── Dockerfile
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public/
    ├── src/
    │   ├── _auth/
    │   │   ├── AuthLayout.tsx
    │   │   └── forms/
    │   ├── _root/
    │   │   ├── pages/
    │   │   └── RootLayout.tsx
    │   ├── App.tsx
    │   ├── components/
    │   │   ├── forms/
    │   │   ├── shared/
    │   │   └── ui/
    │   ├── constants/
    │   │   └── index.ts
    │   ├── context/
    │   │   └── AuthContext.tsx
    │   ├── globals.css
    │   ├── hooks/
    │   │   └── useDebounce.ts
    │   ├── lib/
    │   │   ├── appwrite/
    │   │   ├── react-query/
    │   │   ├── utils.ts
    │   │   └── validation/
    │   ├── main.tsx
    │   ├── types/
    │   │   └── index.ts
    │   └── vite-env.d.ts
    ├── tailwind.config.js
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts

```

---

### 🔧 Installation

1. Clone the snapgram-integracion-continua repository:

```sh
git clone https://github.com/ggomez1403/snapgram-integracion-continua
```

2. Change to the project directory:

```sh
cd snapgram-integracion-continua
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running snapgram-integracion-continua

```sh
npm run dev
```
