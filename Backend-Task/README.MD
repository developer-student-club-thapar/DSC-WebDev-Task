## Project Name: GDSC TIET Recruitment Site Backend

**Table of Contents**

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
3. [Usage](#usage)
   - [User Registration](#user-registration)
   - [Admin Registration](#admin-registration)
   - [Admin Authentication](#admin-authentication)
   - [User CRUD Operations](#user-crud-operations)
4. [Contributing](#contributing)
   - [Setting Up the Development Environment](#setting-up-the-development-environment)
   - [Contributing Guidelines](#contributing-guidelines)
5. [License](#license)

---

#### 1. Introduction <a name="introduction"></a>

This repository contains the backend code for the GDSC TIET Recruitment Site. The backend is built using Express.js and MongoDB and provides API endpoints for user and admin registration, authentication, and user management.

#### 2. Getting Started <a name="getting-started"></a>

##### Prerequisites <a name="prerequisites"></a>

Before you begin, ensure you have the following installed:

- Node.js
- MongoDB
- Git

##### Installation <a name="installation"></a>

1. Clone the repository:

   ```bash
   git clone https://github.com/developer-student-club-thapar/DSC-WebDev-Task
   cd Recruitment-Site-Backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and set the following environment variables:

   ```
   PORT=<port>
   MONGODB_URI=<your_mongodb_uri>
   JWT_SECRET_KEY=<your_jwt_secret_key>
   ```

4. Start the server on Development Mode:

   ```bash
   npm run dev
   ```

#### 3. Usage <a name="usage"></a>

##### User Registration <a name="user-registration"></a>

To register a user, send a POST request to `/api/user/register` with the following JSON payload:

```json
{
  "name": "Amit Goyal",
  "email": "agoyal3_be21@thapar.edu",
  "branch": "EIC",
  "phoneNo": "9876543210",
}
```

##### Admin Registration <a name="admin-registration"></a>

To register an admin, send a POST request to `/api/admin/register` with the following JSON payload:

```json
{
  "email": "admin@example.com",
  "name": "Admin Name",
  "password": "adminpassword"
}
```

##### Admin Authentication <a name="admin-authentication"></a>

To authenticate an admin, send a POST request to `/api/admin/login` with the following JSON payload:

```json
{
  "email": "admin@example.com",
  "password": "adminpassword"
}
```

##### User CRUD Operations <a name="user-crud-operations"></a>

- **Get a User**: Send a GET request to `/api/user/user` with a valid JWT token in the Authorization header.

- **Get All Users**: Send a GET request to `/api/user/users` with a valid JWT token in the Authorization header.

- **Delete a User**: Send a DELETE request to `/api/user/user` with a valid JWT token in the Authorization header.

#### 4. Contributing <a name="contributing"></a>

##### Setting Up the Development Environment <a name="setting-up-the-development-environment"></a>

1. Fork and clone the repository.

2. Follow the installation steps mentioned in the "Getting Started" section.

3. Create a feature branch for your work:

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. Make your changes, commit them, and push to your fork.

5. Create a pull request to the main repository.

##### Contributing Guidelines <a name="contributing-guidelines"></a>

- Follow the coding style and conventions used in the project.
- Write clear and concise commit messages.
- Provide detailed information in your pull request description.

#### 5. License <a name="license"></a>

This project is licensed under the [MIT License](LICENSE).

---

