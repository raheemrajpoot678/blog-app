# Blog Project

This is a full-stack blog application built using React (TypeScript) for the frontend and Node.js with (TypeScript), MongoDB, and Mongoose for the backend. The application allows users to view blog posts, while only admin users have permissions to create, update, and delete blog entries.

## Features

- **View Blogs**: All users can view the blog posts.
- **Admin Control**: Only the admin can create, delete, or update blog posts.
- **User Authentication**: Only authorized admin users can manage content.

## Technologies Used

- **Frontend**: React (with TypeScript)
- **Backend**: Node.js (with TypeScript), MongoDB, Mongoose

## Setup Instructions

### 1. Backend Setup

1. Open the `backend` directory.
2. Install dependencies by running:

   ```bash
   npm install
   ```

3. Start the server in development mode with:

   ```bash
   npm run dev
   ```

   Alternatively, you can use `nodemon`:

   ```bash
   nodemon
   ```

   **Note:** An `.env` file is provided, so you do not need to manually add environment variables.

### 2. Frontend Setup

1. Open the `frontend` directory.
2. Install frontend dependencies by running:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm run dev
   ```

### Admin Login Details

- **Username**: `admin`
- **Password**: `test1234`

**Only the admin** can create, update, and delete blog posts. Regular users can view posts but cannot make modifications.

## Additional Notes

- This project uses MongoDB as the database, and Mongoose as the ORM for data modeling.
- The `.env` file should contain necessary environment variables for database connection and other configurations.
- Ensure MongoDB is running locally or is configured correctly in the `.env` file if you're using a remote database.
