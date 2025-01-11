
# Expense Tracker Application

This repository contains both the frontend and backend for the Expense Tracker application. Below is a detailed overview of the technologies, setup instructions, and usage for the project.

---

## Technologies Used

### Backend:
- **Framework**: Spring Boot
- **Database**: MySQL
- **Build Tool**: Maven
- **Language**: Java

### Frontend:
- **Framework**: Angular (Version 16)
- **Language**: TypeScript
- **Styling**: CSS/SCSS
- **Package Manager**: npm

---

## Features

- Add, edit, and delete expenses.
- Categorize expenses for better management.
- Real-time data sync between the frontend and backend.
- User-friendly and responsive interface.

---

## Prerequisites

### General:
- Java 17 or higher
- Node.js (Version 18 or higher recommended)
- npm (comes with Node.js)
- MySQL (Version 8.0 or higher recommended)

---

## Installation & Setup

### Backend:

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Configure the database in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/expense_tracker
   spring.datasource.username=<your-username>
   spring.datasource.password=<your-password>
   spring.jpa.hibernate.ddl-auto=update
   ```

3. Build the project using Maven:
   ```bash
   mvn clean install
   ```

4. Run the application:
   ```bash
   mvn spring-boot:run
   ```

The backend will be available at `http://localhost:8080`.

---

### Frontend:

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Angular development server:
   ```bash
   ng serve
   ```

The frontend will be available at `http://localhost:4200`.

---

## Usage

1. Start the backend server.
2. Start the frontend server.
3. Access the application at `http://localhost:4200`.

---

## Project Structure

### Backend:
- `src/main/java` - Contains the main application and business logic.
- `src/main/resources` - Contains configuration files and static resources (e.g., `application.properties`).

### Frontend:
- `src/app` - Contains Angular components, services, and modules.
- `src/assets` - Contains static assets like images and styles.

---

## API Endpoints (Backend)

| Method | Endpoint               | Description              |
|--------|------------------------|--------------------------|
| GET    | `/api/expenses`        | Retrieve all expenses    |
| POST   | `/api/expenses`        | Add a new expense        |
| PUT    | `/api/expenses/{id}`   | Update an expense by ID  |
| DELETE | `/api/expenses/{id}`   | Delete an expense by ID  |

---

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

