# ExpenseTracker

## Overview
ExpenseTracker is a full-stack application designed to help users manage their expenses efficiently. The backend is built with Spring Boot and uses a MySQL database, while the frontend is developed with Angular (version 16). The application enables users to track their income and expenses, categorize them, and generate summary reports.

## Features
- Add, edit, and delete expenses and income entries
- Categorize transactions
- View summary reports and charts
- User authentication

---

## Installation

### Prerequisites
Ensure you have the following installed on your system:
- **Java 17+**
- **Maven**
- **Node.js**
- **Angular CLI**
- **MySQL**

### Steps to Run the Application

1. **Clone the Repository**
   ```bash
   git clone https://github.com/farabi23/ExpenseTracker.git
   cd ExpenseTracker
   ```

2. **Backend Setup**
   - Navigate to the `backend` folder:
     ```bash
     cd backend
     ```
   - Configure your **MySQL database** settings in `src/main/resources/application.properties`:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
     spring.datasource.username=your_username
     spring.datasource.password=your_password
     ```
   - Run the backend:
     ```bash
     mvn spring-boot:run
     ```

3. **Frontend Setup**
   - Navigate to the `frontend` folder:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Run the frontend:
     ```bash
     ng serve
     ```

4. **Access the Application**
   - Open your browser and go to: `http://localhost:4200`

---

## Project Structure
```
ExpenseTracker/
├── backend/
│   ├── src/
│   ├── pom.xml
│   └── other backend files
├── frontend/
│   ├── src/
│   ├── angular.json
│   └── other frontend files
└── README.md
```

---

## Contribution
Feel free to fork this repository and submit pull requests for new features, bug fixes, or improvements.

## License
This project is licensed under the [MIT License](LICENSE).
