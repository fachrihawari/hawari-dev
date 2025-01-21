---
title: "React Intro"
description: "Belajar React dasar"
publishedAt: 2025-01-21
tags: ["react", "javascript", "web"]
---

## Intro

Apa itu React? React adalah library JavaScript yang digunakan untuk membangun antarmuka pengguna (UI) pada aplikasi web. React dikembangkan oleh Facebook dan pertama kali diperkenalkan pada tahun 2013. React memungkinkan pengembang untuk membuat komponen UI yang dapat digunakan kembali dan memisahkan logika aplikasi dari tampilan.

## Create React Project

Doc: https://vite.dev/guide/#scaffolding-your-first-vite-project

Jalankan perintah dibawah:

```
❯ npm create vite@latest
```

lalu ikutin seperti dibawah:

```
Ok to proceed? (y)
✔ Project name: react-intro (isi aja bebas)
✔ Select a framework: › React
✔ Select a variant: › JavaScript
```

struktur project yg dibuat oleh vite:

```
.
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── index.css
│   └── main.jsx
└── vite.config.js
```

cara jalanin:

```
cd react-intro
npm install
npm run dev
```

## Membuat SPA dengan React

SPA adalah singkatan dari Single Page Application, yaitu aplikasi web yang hanya memiliki satu halaman HTML dan memperbarui konten halaman saat pengguna berinteraksi dengan aplikasi. Yang membedakan SPA dengan aplikasi web tradisional adalah bahwa SPA tidak memuat ulang halaman saat pengguna berpindah dari satu halaman ke halaman lainnya. Sebagai gantinya, SPA hanya memuat data yang diperlukan dan memperbarui tampilan halaman sesuai dengan data yang dimuat.

## JSX

JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. Although there are other ways to write components, most React developers prefer the conciseness of JSX, and most codebases use it.

Aturan JSX:

1. JSX harus memiliki satu root element
2. JSX harus menutup tag
3. JSX harus menggunakan camelCase untuk attribute
4. JSX harus menggunakan className untuk class attribute, karena class adalah keyword di JavaScript

Referensi: https://react.dev/learn/writing-markup-with-jsx

tools untuk konvert html ke jsx yang valid: https://transform.tools/html-to-jsx

## Styling

bisa pakai className, tp jangan lupa import file css-nya diatas

contoh:

```javascript
// Menggunakan className attribute
<h1 className="title">Hedy Lamarr's Todos</h1>

// Menggunakan style attribute
<h1 style={{ color: "blue" }}>
  Hedy Lamarr's Todos
</h1>
```

## Displaying Data

kita bisa menggunakan escape hatches `{}` untuk menampilkan data yg kita punya dari variable ke dalam jsx contoh:

```javascript
const user = {
  name: "Akbar",
  imageUrl:
    "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg",
};

function App() {
  return (
    <>
      <h1
        // className="title"
        // ini tidak valid -> style="color: blue;"
        style={{ color: "blue" }}
      >
        {user.name}'s Todos
      </h1>
      <img
        src={user.imageUrl}
        alt="Hedy Lamarr"
        width={80}
        height={80}
        // className="photo"
      />
    </>
  );
}
```

## Conditional rendering

ada 3 card:

1. ternary opearator
2. logical && syntax
3. if else statement

```javascript
function App() {
  const isLoading = false;
  const counter

  // if else statement
  if (isLoading) return <h1>Lg loading nih...</h1>

  return (
    <>

      {/* logical && syntax */}
      {counter > 5 && }

      {/* ternary operator */}
      {isLoading ? (
        <h1>Loading... sedang mengambil todo list</h1>
      ) : (
        <ul>
          <li>todo yg dihardcode</li>
          <li>todo yg dihardcode</li>
        </ul>
      )}
    </>
  );
}
```

## Rendering Lists

Kita bisa menggunakan method `.map()` untuk melakukan looping data yg kita punya dan mengembalikan array baru yg berisi element jsx

```javascript
function App() {
  const todos = [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Learn Firebase" },
    { id: 3, text: "Learn GraphQL" },
  ];

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
```

## Responding to Events

Kita bisa menggunakan event handler untuk menangani event yg terjadi di element jsx

```javascript
function App() {
  return (
    <button
      onClick={() => {
        alert("Hello, World!");
      }}
    >
      Click me
    </button>
  );
}
```

## Managing State

State adalah data yg dimiliki oleh component dan bisa berubah seiring waktu. Kita bisa menggunakan `useState` untuk membuat state di dalam aplikasi react kita.

```javascript
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Count increment by 1 {"->"} {count}
      </button>
    </>
  );
}
```
