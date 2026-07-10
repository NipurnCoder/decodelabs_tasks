# 📚 Student Management REST API

A simple RESTful API built using **Node.js** and **Express.js** that performs CRUD (Create, Read, Update, Delete) operations on student data. This project demonstrates backend development fundamentals, routing, controllers, request handling, and basic data validation.

---

## 🚀 Features

- Get all students
- Get a student by ID
- Add a new student
- Update student details
- Delete a student
- Basic input validation
- JSON-based API responses

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- JavaScript

---

## 📁 Project Structure

```
Backend-API-Project/
│
├── controllers/
│   └── studentController.js
│
├── routes/
│   └── students.js
│
├── data/
│   └── students.js
│
├── server.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/Backend-API-Project.git
```

### Move to Project Directory

```bash
cd Backend-API-Project
```

### Install Dependencies

```bash
npm install
```

### Start the Server

```bash
node server.js
```

Server will start at:

```
http://localhost:3000
```

---

## 📌 API Endpoints

### 1. Get All Students

**GET**

```
/students
```

Example:

```
http://localhost:3000/students
```

---

### 2. Get Student by ID

**GET**

```
/students/:id
```

Example:

```
http://localhost:3000/students/1
```

---

### 3. Add New Student

**POST**

```
/students
```

Request Body

```json
{
    "name": "Priya",
    "age": 22,
    "course": "ECE"
}
```

---

### 4. Update Student

**PUT**

```
/students/:id
```

Example Body

```json
{
    "course": "AI & ML"
}
```

---

### 5. Delete Student

**DELETE**

```
/students/:id
```

Example

```
http://localhost:3000/students/2
```

---

## 📷 Testing

The API can be tested using:

- Postman
- Thunder Client (VS Code)
- Browser (GET requests only)

---

## 📖 Learning Outcomes

This project demonstrates:

- REST API Development
- Express Routing
- MVC Folder Structure
- CRUD Operations
- Request & Response Handling
- JSON Data Handling
- Basic Data Validation
- HTTP Status Codes

---

## 📌 Future Improvements

- MongoDB Database Integration
- User Authentication (JWT)
- Environment Variables (.env)
- Error Handling Middleware
- Input Validation using Express Validator
- Swagger API Documentation

---

## 👨‍💻 Author

**NIPURN**

B.Tech CSE Student

GitHub: https://github.com/NipurnCoder

---

## 📄 License

This project is created for learning purposes and internship training.