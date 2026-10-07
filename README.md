# Firebase Training - Practice Project

A simple web development exercise created to practice direct communication with the Firebase Realtime Database REST API using Vanilla JavaScript and HTTP request methods.

---

## 📁 Project Structure

firebase-training/
├── index.html # Main HTML entry point
├── remoteTesstorage.js # Firebase CRUD operations and fetch functions
└── README.md # Project documentation

---

## 📌 Project Overview

This project serves as a practical exercise for interacting with cloud databases via standard HTTP requests. The primary objective was to master basic CRUD (Create, Read, Update, Delete) operations using asynchronous JavaScript (`async/await`) and the native `fetch()` API.

---

## 🚀 Key Features & Learning Objectives

- **Firebase Realtime Database Integration:** Connecting directly to a Firebase REST endpoint (`https://...firebasedatabase.app/`).
- **Asynchronous Operations:** Managing asynchronous network requests cleanly using `async/await`.
- **4 Standard HTTP Methods Tested:**
  - `loadData()` (**GET**): Retrieves data from the specified database path.
  - `postData()` (**POST**): Adds new entries with Firebase's automatically generated unique keys (`-P3L...`).
  - `putData()` (**PUT**): Replaces or writes data at a specific path or key without generating random IDs.
  - `deleteData()` (**DELETE**): Removes data existing at a specified path.

---

## 🛠️ Built With

- **HTML5**
- **JavaScript (ES6+)**
- **Firebase Realtime Database (REST API)**

---

_Note: Developed as a practice step for mastering REST APIs and Firebase Database operations in Vanilla JavaScript._
