# 🧑‍💼 Employee-Owner Dashboard

A full-React role-based task management system built with **React**, **JWT**, and **LocalStorage**. It supports **two types of users** – **Owner** and **Employee** – with separate dashboards and features. Owners can assign categorized tasks with timelines, and employees can track their task statuses.

## 🚀 Features

### 🔐 Authentication
- JWT-based secure authentication
- Passwords hashed using Bcrypt
- Role-based access control (Owner / Employee)
- Authentication state managed via AuthContext and LocalStorage

- owner Login --
- const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}];

employee Login--
id == 1,2,3,4,5
name - karan,priya, ravi, sneha ,arjun
password--1223
email- employeei@example.com

for exanple-
"id": 5,
        "firstName": "Karan",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "UI redesign",
                "taskDescription": "Redesign the user interface for better UX",
                "taskDate": "2024-10-14",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Deploy new build",
                "taskDescription": "Deploy the latest build to production",
                "taskDate": "2024-10-09",
                "category": "DevOps"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Client feedback",
                "taskDescription": "Gather feedback from clients after product launch",
                "taskDate": "2024-10-12",
                "category": "Support"
            }
        ]
    }
];

### 👤 Owner Dashboard
- View list of employees
- Assign tasks with:
  - Title, Description
  - Category
  - Deadline / Timeline
- Monitor task progress

### 🛠️ Employee Dashboard
- View assigned tasks
- Track task statuses:
  - ✅ Completed
  - 🔄 In Progress
  - 🕗 Pending
- Update task status

### 📦 Tech Stack
- **Frontend**: React, React Router, Context API
- **Authentication**: JWT, Bcrypt
- **Storage**: LocalStorage for session and user data
- **Styling**: CSS / Tailwind (Optional)
