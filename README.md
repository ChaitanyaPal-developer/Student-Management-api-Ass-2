# Student Management REST API

Node.js + Express backend for Unit-2 Assignment 2. Uses an in-memory array (no database) as storage.

## Project Structure
```
student-management-api/
├── app.js
├── package.json
├── routes/
│   └── studentRoutes.js
├── middleware/
│   └── logger.js
└── data/
    └── students.js
```

## Setup
1. Open the folder in VS Code.
2. Install dependencies:
   ```
   npm install
   ```
3. Run the server:
   ```
   npm start
   ```
4. Server runs at: `http://localhost:3000`

## API Endpoints (test in Postman)

| Method | URL                    | Body (JSON)                              | Description        |
|--------|------------------------|-------------------------------------------|---------------------|
| GET    | /students              | -                                          | Get all students    |
| GET    | /students/:id          | -                                          | Get one student     |
| POST   | /students              | `{ "name": "Sneha", "course": "MCA" }`     | Add a new student   |
| PUT    | /students/:id          | `{ "name": "Sneha", "course": "BSc" }`     | Update a student    |
| DELETE | /students/:id          | -                                          | Delete a student    |

## Status Codes Used
- `200` – Success (GET, PUT, DELETE)
- `201` – Created (POST)
- `400` – Bad Request (missing/invalid fields)
- `404` – Not Found (student/route doesn't exist)
- `500` – Internal Server Error (unexpected errors)

## Notes
- The custom logger middleware (`middleware/logger.js`) prints the HTTP method, URL, and timestamp for every request in the terminal.
- Data resets every time you restart the server, since it's stored only in memory (`data/students.js`).
