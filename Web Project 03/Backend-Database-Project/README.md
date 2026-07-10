# Backend Database Project

A simple Node.js, Express.js, and MongoDB REST API for managing student records. This project demonstrates CRUD (Create, Read, Update, Delete) operations using MongoDB with Mongoose.

## Features

* Create a new student
* Get all students
* Get a student by ID
* Update student details
* Delete a student
* MongoDB database integration
* RESTful API structure

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Nodemon

## Project Structure

```
Backend-Database-Project/
│── models/
│   └── Student.js
│── routes/
│   └── studentRoutes.js
│── config/
│   └── db.js
│── server.js
│── package.json
│── .gitignore
└── README.md
```

## Installation

1. Clone the repository.

```bash
git clone <repository-url>
```

2. Navigate to the project folder.

```bash
cd Backend-Database-Project
```

3. Install dependencies.

```bash
npm install
```

4. Create a `.env` file (if your project uses one) and add your MongoDB connection string.

5. Start the server.

```bash
npm run dev
```

The server will run at:

```
http://localhost:3000
```

## API Endpoints

| Method | Endpoint        | Description          |
| ------ | --------------- | -------------------- |
| GET    | `/students`     | Get all students     |
| GET    | `/students/:id` | Get a student by ID  |
| POST   | `/students`     | Create a new student |
| PUT    | `/students/:id` | Update a student     |
| DELETE | `/students/:id` | Delete a student     |

## Example Student JSON

```json
{
  "name": "John Doe",
  "age": 21,
  "course": "Computer Science"
}
```

## Testing

You can test the API using:

* Postman
* Thunder Client (VS Code)

## Author

**NIPURN**

---

This project was developed as part of a backend development internship to demonstrate REST API development and MongoDB integration using Node.js and Express.js.
