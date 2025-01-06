

# **Project Setup and Overview**

This project consists of a Django backend and a React frontend with Redux RTK for state management. The frontend uses React Router for navigation, and Vite is the build tool. The goal of this project is to manage and display patient records with user authentication and live updates through Redux RTK.

## **Frontend Setup (React + Redux RTK + Typescript)**

### Folder Structure:
The frontend folder structure is organized as follows:

```
client/
├── assets/                  # Contains styles and static assets
│   └── styles/              # Global styles
├── components/              # React components
│   ├── layout/              # Default layout for React Router
│   ├── protected-routes/    # Handles route protection based on authentication
│   └── card-section/        # Displays patient records data
├── features/                # Contains Redux slices
│   ├── auth/                # Authentication slice
│   └── darkmode/            # Global slice for dark/light mode
├── interfaces/              # TypeScript interfaces for global types
├── pages/                   # React pages displayed in routes
├── store/                   # Redux store configuration
├── index.tsx                # Main entry point for React
└── vite.config.ts           # Vite configuration file
```

### Setting up the Frontend:
1. **Navigate to the frontend directory**:
   ```bash
   cd client/
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Create a user**:
   - Visit the `/signup` route to create a new user.

5. **Authentication**:
   - Authentication is handled by React Redux Persist, which ensures that the user’s token is persisted across sessions.

6. **RTK Tag Invalidation**:
   - Redux RTK tag invalidation is implemented for live updates, such as when a patient record is created or deleted.

---

## **Backend Setup (Django)**

### Folder Structure:
```
backend/
├── patients_m/               # Django app containing the main functionality
│   ├── manage.py             # Django management script
│   ├── patients_m/           # Core folder for settings and models
│   │   └── settings.py       # Django settings file
└── requirements.txt          # Dependencies for the Django project
```

### Setting up the Backend:
1. **Navigate to the backend directory**:
   ```bash
   cd backend/
   ```

2. **Set up the virtual environment**:
   - **For Ubuntu**:
     ```bash
     source bin/activate
     ```
   - **For Windows**: Create a new environment using the `Scripts` folder.
     ```bash
     python -m venv venv
     .\venv\Scripts\activate
     ```

3. **Configure the Database**:
   - Go to the `patients_m/patients_m/settings.py` file.
   - Update the database settings to match your local configuration (e.g., `DATABASES` section).

4. **Install dependencies**:
   - Run the following command to install the required packages:
     ```bash
     pip install -r requirements.txt
     ```

5. **Run Migrations**:
   - Apply the migrations to set up the database schema:
     ```bash
     make
     python manage.py migrate
     ```

6. **Start the Django server**:
   - Run the Django development server:
     ```bash
     python manage.py runserver
     ```

---

## **Testing the Full Workflow**

1. **Frontend**:
   - Open your browser and navigate to the frontend (e.g., `http://localhost:3000`).
   - Create a new user at the `/signup` page.
   - Log in with the newly created user.

2. **Create a Patient Record**:
   - After logging in, navigate to the “Create” tab and create a new patient record.

3. **View Patient Records**:
   - Go to the “View Patients” page to see the newly created patient record.

4. **Delete a Patient Record**:
   - You can delete a patient record from the list, and it will be immediately deleted (live update) due to Redux RTK's tag invalidation mechanism.

---

## **Additional Notes**

### Authentication Flow:
- Authentication is managed using Redux RTK with the help of React Redux Persist, which ensures that the authentication state is preserved across page reloads.
  
### Live Updates:
- When patient records are created or deleted, the frontend will automatically re-fetch data and update the UI without requiring a manual refresh, thanks to the tag invalidation feature in Redux RTK.

### Common Issues:
1. **Backend Not Starting**:
   - Ensure that your database settings in `settings.py` are correctly configured.
   - Check if the virtual environment is activated properly.

