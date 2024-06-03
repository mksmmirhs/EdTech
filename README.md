# Project Setup:

- Node.js ,React,express, vite
- EdTech Folder contains all the frontend
- SimpleServer Folder contains all the server files
- src folder inside EdTech contains all the UI component
- change the link inside utils then getAxios for backend communication

# Dependencies

- material UI ,x-date-pickers,axios, dayjs, jwt-decode, react-router-dom, sweetalert2, vite, cors, dotenv, jsonwebtoken

# Usage:

- Ensure Node.js and npm are installed on your system
- run build script in EdTech to build deployment as dist folder containing frontend
- Run the SimpleServer with start script

# Development Server

1. Install nodejs
2. go inside EdTech and run ` npm install` to install dev dependencies.
3. run `npm run dev ` to start development frontend at localhost.
4. Go inside the SimpleServer and `npm run install` for install dependencies
5. run `npm run dev` to start backend server

# Additional information:

- Vercel or netlify do not allow node app to access the filesystem to write so modifying json file not possible.

- User login info :

```
Student role :
      "username": "student1",
      "password": "password123",

Mentor role:
     "username": "mentor2",
      "password": "password123",

Admin role :
      "username": "admin1",
      "password": "password123",

```
